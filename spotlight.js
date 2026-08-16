'use strict';

(() => {
  const query = window.matchMedia?.('(hover: hover) and (pointer: fine)');
  if (!query?.matches) return;

  const trail = document.querySelector('.pointer-trail');
  if (!trail) return;
  const dots = Array.from({ length: 20 }, () => {
    const dot = document.createElement('i');
    dot.className = 'pointer-trail-dot';
    trail.appendChild(dot);
    return dot;
  });
  const positions = dots.map(() => ({ x: window.innerWidth * .5, y: window.innerHeight * .3 }));
  const gridSize = 28;
  let frame = 0;
  let x = window.innerWidth * .5;
  let y = window.innerHeight * .3;
  let active = false;
  let stepsRemaining = 0;

  const paint = () => {
    frame = 0;
    for (let index = positions.length - 1; index >= 0; index -= 1) {
      const position = positions[index];
      const target = index === 0 ? { x, y } : positions[index - 1];
      position.x = target.x;
      position.y = target.y;
      dots[index].style.transform = `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${1 - index * .045})`;
      dots[index].style.opacity = active ? Math.max(.08, 1 - index * .105) : 0;
    }
    stepsRemaining -= 1;
    if (active && stepsRemaining > 0) frame = window.requestAnimationFrame(paint);
  };

  const clear = () => {
    active = false;
    stepsRemaining = 0;
    dots.forEach((dot) => { dot.style.opacity = 0; });
  };

  document.addEventListener('pointermove', (event) => {
    const nextX = Math.round(event.clientX / gridSize) * gridSize;
    const nextY = Math.round(event.clientY / gridSize) * gridSize;
    if (nextX === x && nextY === y && stepsRemaining <= 0) return;
    x = nextX;
    y = nextY;
    active = true;
    stepsRemaining = positions.length;
    if (!frame) frame = window.requestAnimationFrame(paint);
  }, { passive: true });
  window.addEventListener('blur', clear);
  document.addEventListener('pointerout', (event) => {
    if (!event.relatedTarget) clear();
  }, { passive: true });
})();
