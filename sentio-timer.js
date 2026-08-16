(function () {
  const orbit = document.querySelector('#timerOrbit');
  const modal = document.querySelector('#timerModal');
  const confirm = document.querySelector('#confirmTimer');
  const openButton = document.querySelector('#openTimerSettings');
  const wheels = [...document.querySelectorAll('.time-wheel')];
  if (!orbit || !modal || !confirm || wheels.length !== 3) return;

  const rowHeight = 42;
  const limits = { hours: 23, minutes: 59, seconds: 59 };
  const labels = { hours: 'giờ', minutes: 'phút', seconds: 'giây' };
  const selected = { hours: 0, minutes: 45, seconds: 0 };
  let audioContext = null;

  function unlockAudio() {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return;
    audioContext ||= new AudioCtor();
    if (audioContext.state === 'suspended') audioContext.resume();
  }

  function beep() {
    unlockAudio();
    if (!audioContext) return;
    const now = audioContext.currentTime;
    [0, .24, .48].forEach((offset) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = 660;
      gain.gain.setValueAtTime(.0001, now + offset);
      gain.gain.exponentialRampToValueAtTime(.16, now + offset + .02);
      gain.gain.exponentialRampToValueAtTime(.0001, now + offset + .18);
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start(now + offset);
      oscillator.stop(now + offset + .2);
    });
  }

  function updateConfirm() {
    const total = selected.hours * 3600 + selected.minutes * 60 + selected.seconds;
    confirm.textContent = total ? `Đặt ${selected.hours} giờ ${selected.minutes} phút ${selected.seconds} giây` : 'Chọn thời lượng';
    confirm.disabled = total < 1;
  }

  function markSelected(unit, index) {
    selected[unit] = index;
    const wheel = wheels.find((item) => item.dataset.unit === unit);
    wheel?.querySelectorAll('.wheel-item').forEach((item, itemIndex) => item.classList.toggle('selected', itemIndex === index));
    updateConfirm();
  }

  function syncWheel(wheel, immediate = false) {
    const unit = wheel.dataset.unit;
    const viewport = wheel.querySelector('.wheel-viewport');
    const index = Math.max(0, Math.min(limits[unit], Math.round(viewport.scrollTop / rowHeight)));
    markSelected(unit, index);
    if (immediate) viewport.scrollTo({ top: index * rowHeight, behavior: 'auto' });
  }

  function stepWheel(wheel, delta) {
    const unit = wheel.dataset.unit;
    const viewport = wheel.querySelector('.wheel-viewport');
    const next = Math.max(0, Math.min(limits[unit], selected[unit] + delta));
    markSelected(unit, next);
    // Arrow presses must be deterministic; smooth scrolling can emit an
    // intermediate scroll event that restores the previous value.
    viewport.scrollTo({ top: next * rowHeight, behavior: 'auto' });
  }

  wheels.forEach((wheel) => {
    const unit = wheel.dataset.unit;
    const viewport = wheel.querySelector('.wheel-viewport');
    const list = wheel.querySelector('.wheel-list');
    for (let value = 0; value <= limits[unit]; value += 1) {
      const item = document.createElement('div');
      item.className = 'wheel-item';
      item.dataset.value = String(value);
      item.innerHTML = `${value}<span>${labels[unit]}</span>`;
      list.appendChild(item);
    }
    let scrollFrame = 0;
    let dragFrame = 0;
    let dragStartY = 0;
    let dragStartScroll = 0;
    let dragged = false;
    viewport.addEventListener('scroll', () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => syncWheel(wheel));
    }, { passive: true });
    viewport.addEventListener('pointerdown', (event) => {
      if (event.target.closest('.wheel-arrow')) return;
      dragStartY = event.clientY;
      dragStartScroll = viewport.scrollTop;
      dragged = false;
      wheel.classList.add('dragging');
      viewport.setPointerCapture?.(event.pointerId);
    });
    viewport.addEventListener('pointermove', (event) => {
      if (!wheel.classList.contains('dragging')) return;
      const distance = event.clientY - dragStartY;
      if (Math.abs(distance) > 3) dragged = true;
      cancelAnimationFrame(dragFrame);
      dragFrame = requestAnimationFrame(() => { viewport.scrollTop = dragStartScroll - distance; });
    });
    const stopDrag = (event) => {
      wheel.classList.remove('dragging');
      viewport.releasePointerCapture?.(event.pointerId);
      if (dragged) {
        const index = Math.round(viewport.scrollTop / rowHeight);
        viewport.scrollTo({ top: index * rowHeight, behavior: 'smooth' });
      }
    };
    viewport.addEventListener('pointerup', stopDrag);
    viewport.addEventListener('pointercancel', stopDrag);
    viewport.addEventListener('click', (event) => {
      if (dragged) { dragged = false; return; }
      const item = event.target.closest('.wheel-item');
      if (item) viewport.scrollTo({ top: Number(item.dataset.value) * rowHeight, behavior: 'smooth' });
    });
    wheel.querySelectorAll('.wheel-arrow').forEach((arrow) => {
      const delta = arrow.classList.contains('wheel-down') ? 1 : -1;
      arrow.addEventListener('pointerdown', (event) => {
        event.stopPropagation();
        arrow.focus({ preventScroll: true });
      });
      arrow.addEventListener('pointerup', (event) => {
        event.stopPropagation();
        stepWheel(wheel, delta);
        arrow.dataset.pointerHandled = 'true';
        setTimeout(() => { delete arrow.dataset.pointerHandled; }, 500);
      });
      arrow.addEventListener('click', (event) => {
        event.stopPropagation();
        if (arrow.dataset.pointerHandled) return;
        stepWheel(wheel, delta);
      });
    });
  });

  function readCurrentTime() {
    if (typeof state === 'undefined') return;
    const remaining = Math.max(0, Number(state.remaining) || 0);
    selected.hours = Math.floor(remaining / 3600);
    selected.minutes = Math.floor((remaining % 3600) / 60);
    selected.seconds = remaining % 60;
  }

  function openModal() {
    if (typeof state !== 'undefined' && state.running) {
      const toast = document.querySelector('#appToast');
      if (toast) { toast.textContent = 'Hãy tạm dừng phiên trước khi đổi thời lượng.'; toast.hidden = false; setTimeout(() => { toast.hidden = true; }, 2200); }
      return;
    }
    readCurrentTime();
    modal.hidden = false;
    wheels.forEach((wheel) => wheel.querySelector('.wheel-viewport').scrollTo({ top: selected[wheel.dataset.unit] * rowHeight, behavior: 'auto' }));
    wheels.forEach((wheel) => syncWheel(wheel));
    wheels[1].focus({ preventScroll: true });
  }

  function closeModal() { modal.hidden = true; }

  orbit.addEventListener('click', openModal);
  openButton?.addEventListener('click', openModal);
  orbit.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openModal(); }
  });
  document.querySelector('#playTimer')?.addEventListener('click', unlockAudio);
  confirm.addEventListener('click', () => {
    const totalSeconds = selected.hours * 3600 + selected.minutes * 60 + selected.seconds;
    if (!totalSeconds || typeof resetTimerForProfile !== 'function') return;
    unlockAudio();
    resetTimerForProfile(totalSeconds / 60);
    closeModal();
  });
  modal.querySelectorAll('[data-close-timer]').forEach((element) => element.addEventListener('click', closeModal));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });
  window.addEventListener('sentio:timer-complete', beep);
  updateConfirm();
}());
