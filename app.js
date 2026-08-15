'use strict';

const BASELINE_DAYS = 7;

const translations = {
  vi: {
    tagline: "Study when you're ready.", filmMode: "Film mode", hello: "Chào buổi tối", heroSubcopy: "Sentio đã kiểm tra trạng thái của bạn. Chỉ cần chọn bước tiếp theo.", demoProfile: "Hồ sơ demo",
    justUpdated: "Vừa cập nhật", sentioSuggests: "Sentio gợi ý", whyThis: "Vì sao?", liveInputs: "Dữ liệu đang dùng", threeSignals: "Ba tín hiệu, một quyết định", synced: "Đã đồng bộ",
    browser: "Trình duyệt", wearable: "Thiết bị đeo", deskSensor: "Cảm biến bàn học", good: "Tốt", watch: "Cần để ý", attention: "Cần xử lý", howItWorks: "Sentio đưa ra quyết định thế nào?", todayInsight: "Một điều đáng chú ý",
    focusSession: "Phiên tập trung", oneThing: "Chỉ một việc thôi.", live: "Trực tiếp", currentTask: "Việc đang làm", reading: "Đọc và ôn nhẹ", coding: "Lập trình", economics: "Kinh tế học", languageStudy: "Ngoại ngữ", readyWhenYouAre: "Bắt đầu khi bạn sẵn sàng",
    gentleAccountability: "Accountability nhẹ nhàng", sentioKeepsWatch: "Sentio giữ nhịp cùng bạn", focusLevel: "Mức tập trung", tabSwitches: "Chuyển tab", light: "Ánh sáng", presence: "Có mặt", detected: "Có", bodyState: "Thể trạng", stable: "Ổn định",
    oneWeekLater: "Một tuần sau", progressTitle: "Không học lâu hơn. Học đúng hơn.", progressSubtitle: "Sentio chỉ đo thay đổi trong quá trình học, không hứa hẹn điểm số.", days: "ngày", readinessRhythm: "Nhịp sẵn sàng", beforeAfter: "Trước và sau", before: "Trước", after: "Sau", threePeople: "Ba người, ba thay đổi khác nhau", accountabilityOutcome: "Accountability dựa trên trạng thái thật",
    sceneFour: "Cảnh 4", whySentioExists: "Đó là lý do Sentio được tạo ra.", systemSubtitle: "Ba nguồn dữ liệu khách quan được hợp nhất thành một quyết định dễ hiểu.", browserExtension: "Browser Extension", browserFlow: "Hành vi số và chuyển tab", smartwatch: "Smartwatch", watchFlow: "Giấc ngủ, nhịp tim, HRV", sensorFlow: "Có mặt, ánh sáng, môi trường", readinessEngine: "Readiness Engine", personalBaseline: "Học baseline cá nhân", readinessScore: "Readiness Score", personalSuggestion: "Gợi ý cá nhân", rightNextStep: "Bước tiếp theo phù hợp", continuousCheck: "Theo dõi và điều chỉnh",
    sceneFive: "Cảnh 5", sameSystemDifferentAnswer: "Cùng một hệ thống. Ba câu trả lời khác nhau.", peopleSubtitle: "Mỗi người nhận một bước tiếp theo dựa trên trạng thái thật của họ.", sceneSix: "Cảnh 6", oneWeekNoMagic: "Một tuần sau — không có phép màu, chỉ có thói quen tốt hơn.", weekSubtitle: "Ít trì hoãn hơn, bớt cảm giác tội lỗi và hiểu bản thân hơn.", noGradeClaim: "Sentio không tuyên bố làm tăng điểm số; sản phẩm giúp cải thiện quá trình tự học.",
    system: "Hệ thống", threeProfiles: "3 nhân vật", oneWeek: "1 tuần", ending: "Kết", nextScene: "Cảnh tiếp theo", today: "Hôm nay", focus: "Tập trung", progress: "Tiến trình",
    demoProfiles: "Hồ sơ mô phỏng", choosePerson: "Chọn nhân vật", profileHelp: "Ba hồ sơ này khớp với Linh, Nam và Mai trong kịch bản video.", transparentScore: "Điểm số minh bạch", whyThisScore: "Vì sao có điểm này?", personalBaselineLabel: "Baseline cá nhân", baselineHelp: "Sentio so sánh hôm nay với nhịp thường ngày của chính bạn, không dùng một chuẩn chung cho tất cả.", privacyCopy: "Dữ liệu sinh trắc học thô không được hiển thị công khai và chỉ dùng để tạo chỉ số dẫn xuất.",
    simpleLogic: "Logic đơn giản, cá nhân hóa", collect: "Thu thập", collectDesc: "Browser, wearable và ESP32", compareBaseline: "So với baseline", compareDesc: "Nhịp riêng của từng người", suggest: "Gợi ý", suggestDesc: "Một bước tiếp theo rõ ràng", adjustDesc: "Theo dõi và điều chỉnh", prototypeModel: "Prototype Readiness Model.", notMedical: "Đây không phải công cụ chẩn đoán y khoa.",
    settings: "Cài đặt", language: "Ngôn ngữ", languageHelp: "Đổi toàn bộ giao diện", softMotion: "Animation nhẹ", softMotionHelp: "Sinh động nhưng không gây rối", demoDataTitle: "Dữ liệu prototype", demoDataCopy: "Browser và ESP32 có thể nối dữ liệu thật; wearable đang dùng bộ dữ liệu mô phỏng trong bản quay.", resetApp: "Đặt lại bản demo", sessionComplete: "Phiên học hoàn thành", niceWork: "Tốt lắm — dừng đúng lúc cũng là tiến bộ.", focusedTime: "Tập trung thật", focusScore: "Điểm tập trung", backToday: "Về trang hôm nay",
    roleLinh: "Người học online", roleNam: "Sinh viên CNTT", roleMai: "Sinh viên Kinh tế", profileLinhHelp: "Nhịp sinh học ổn định", profileNamHelp: "Chuyển tab liên tục", profileMaiHelp: "Thiếu ngủ và phòng tối",
    ready: "Sẵn sàng học sâu", moderate: "Chỉ nên học nhẹ", low: "Chưa sẵn sàng",
    linhRecTitle: "Continue Learning — Trạng thái tập trung tối ưu.", linhRecText: "Hệ thống ghi nhận nhịp sinh học ổn định và môi trường học phù hợp. Bạn có thể tiếp tục với bài cần tập trung cao trong 45 phút.", linhAction: "Bắt đầu phiên tập trung", linhInsight: "Bạn thường giữ tập trung lâu hơn vào buổi tối khi đã tắt thông báo điện thoại.",
    namRecTitle: "Take a Break — Dừng lại 10 phút để reset não bộ.", namRecText: "Browser Extension ghi nhận chuyển tab liên tục, trong khi HRV cho thấy trạng thái bất ổn. Nghỉ 10 phút sẽ tốt hơn việc tiếp tục ép bản thân.", namAction: "Bắt đầu quãng nghỉ", namInsight: "Các phiên có quãng nghỉ đúng lúc thường ít chuyển tab hơn vào nửa sau.",
    maiRecTitle: "Improve Study Environment — Điều chỉnh ánh sáng và nghỉ ngơi sớm.", maiRecText: "Cảm biến IoT ghi nhận bàn học quá tối, còn smartwatch cho thấy bạn thiếu ngủ sâu đêm qua. Hãy tăng ánh sáng, chuyển sang ôn nhẹ và không ép học thêm.", maiAction: "Tôi đã chỉnh ánh sáng", maiInsight: "Bạn thường tỉnh táo hơn vào buổi sáng; hãy giữ bài khó cho khung 8:00–10:00.",
    roomFixedTitle: "Góc học đã tốt hơn — nhưng hôm nay vẫn nên học nhẹ.", roomFixedText: "Ánh sáng đã đạt mức dễ chịu. Giấc ngủ vẫn thấp hơn baseline, vì vậy Sentio chưa khuyên học môn nặng.", roomFixedAction: "Bắt đầu đọc 25 phút",
    browserMetric: "{focus}% tập trung · {tabs} lần chuyển tab", wearableMetric: "Ngủ {sleep} · {body}", deskMetric: "{lux} lux · {presence}", presentAtDesk: "có mặt tại bàn", bodyStable: "nhịp tim ổn định", bodyBelow: "HRV dưới baseline", bodyTired: "thiếu ngủ sâu",
    factorSleep: "Giấc ngủ", factorHeart: "Nhịp tim / HRV", factorBrowser: "Hành vi trình duyệt", factorRoom: "Môi trường học", factorLinhSleep: "Cao hơn mức ngủ thường ngày.", factorLinhHeart: "Ổn định so với baseline.", factorLinhBrowser: "Ít gián đoạn trong phiên gần nhất.", factorLinhRoom: "Ánh sáng và nhiệt độ phù hợp.", factorNamSleep: "Gần mức thường ngày.", factorNamHeart: "HRV thấp hơn baseline cá nhân.", factorNamBrowser: "Chuyển tab dày trong phiên gần nhất.", factorNamRoom: "Tiếng ồn hơi cao.", factorMaiSleep: "Chỉ ngủ 4 giờ 52 phút.", factorMaiHeart: "Nhịp tim nghỉ cao hơn thường ngày.", factorMaiBrowser: "Ít chuyển tab vì đang đọc tài liệu.", factorMaiRoom: "Ánh sáng chỉ đạt 96 lux.",
    allGoodTitle: "Mọi thứ đang ổn.", allGoodText: "Sentio sẽ không làm phiền khi bạn đang tập trung tốt.", resetTitle: "Nghỉ một nhịp nhé?", resetText: "Bạn vừa chuyển tab khá nhiều. Hãy nhìn xa, uống nước và quay lại sau 10 phút.", roomNudgeTitle: "Góc học đang quá tối.", roomNudgeText: "Tăng ánh sáng trước khi tiếp tục để giảm mỏi mắt.", okay: "Đã hiểu", startReset: "Bắt đầu nghỉ", fixed: "Đã chỉnh",
    progressLinhTitle: "Nhịp học của Linh", progressNamTitle: "Nhịp học của Nam", progressMaiTitle: "Nhịp học của Mai", interruptionsHeadline: "Ít bị ngắt quãng hơn", tabsHeadline: "Ít chuyển tab vô thức hơn", lightHeadline: "Nhiều phiên có môi trường phù hợp hơn", interruptionUnit: "lần gián đoạn / phiên", tabsUnit: "lần chuyển tab / phiên", lightUnit: "phiên đủ sáng", linhProgressNote: "Linh không cần ép mình ngồi lâu hơn; cô ấy chỉ bắt đầu vào lúc phù hợp và ít bị kéo khỏi bài học.", namProgressNote: "Nam học cách dừng đúng lúc thay vì tiếp tục trong trạng thái xao nhãng, nhờ vậy nửa sau của phiên học ổn định hơn.", maiProgressNote: "Mai chuyển bài khó sang buổi sáng và chỉnh ánh sáng trước khi học, thay vì cố thức khuya trong môi trường không phù hợp.",
    outcomeLinh: "Ngắt quãng giảm", outcomeNam: "Chuyển tab giảm", outcomeMai: "Phiên đủ sáng tăng", outcomeLinhDesc: "9 → 3 lần mỗi phiên", outcomeNamDesc: "31 → 12 lần mỗi phiên", outcomeMaiDesc: "40% → 86% số phiên", signalLinh: "Nhịp sinh học ổn định", signalNam: "Extension: 18 lần chuyển tab + HRV bất ổn", signalMai: "IoT: bàn tối 96 lux + smartwatch: ngủ 4h52", decisionLinh: "Continue Learning — Trạng thái tập trung tối ưu", decisionNam: "Take a Break — Dừng lại 10 phút để reset não bộ", decisionMai: "Improve Study Environment — Điều chỉnh ánh sáng và nghỉ ngơi sớm", recommendation: "Khuyến nghị",
    filmLinhChange: "Ít bị điện thoại và thông báo kéo khỏi bài học.", filmNamChange: "Biết nghỉ đúng lúc thay vì ngồi lì và chuyển tab.", filmMaiChange: "Đổi bài khó sang buổi sáng và sửa ánh sáng bàn học.",
    timerRunning: "Sentio đang giữ nhịp cùng bạn", timerPaused: "Đã tạm dừng — quay lại khi sẵn sàng", resetTimerLabel: "Quãng nghỉ đang diễn ra", roomImproved: "Ánh sáng đã được cải thiện", sourceGood: "Tốt", sourceWatch: "Theo dõi", sourceAttention: "Cần xử lý"
  },
  en: {
    tagline: "Study when you're ready.", filmMode: "Film mode", hello: "Good evening", heroSubcopy: "Sentio has checked your state. Just choose the next step.", demoProfile: "Demo profile",
    justUpdated: "Just updated", sentioSuggests: "Sentio suggests", whyThis: "Why?", liveInputs: "Live inputs", threeSignals: "Three signals, one decision", synced: "Synced",
    browser: "Browser", wearable: "Wearable", deskSensor: "Desk sensor", good: "Good", watch: "Watch", attention: "Needs action", howItWorks: "How does Sentio decide?", todayInsight: "One useful insight",
    focusSession: "Focus session", oneThing: "Just one thing.", live: "Live", currentTask: "Current task", reading: "Reading and light review", coding: "Coding", economics: "Economics", languageStudy: "Language study", readyWhenYouAre: "Start when you are ready",
    gentleAccountability: "Gentle accountability", sentioKeepsWatch: "Sentio keeps the rhythm with you", focusLevel: "Focus level", tabSwitches: "Tab switches", light: "Light", presence: "Presence", detected: "Detected", bodyState: "Body state", stable: "Stable",
    oneWeekLater: "One week later", progressTitle: "Not longer. Better timed.", progressSubtitle: "Sentio measures changes in the learning process, not promised grades.", days: "days", readinessRhythm: "Readiness rhythm", beforeAfter: "Before and after", before: "Before", after: "After", threePeople: "Three people, three different changes", accountabilityOutcome: "Accountability based on real state",
    sceneFour: "Scene 4", whySentioExists: "That is why Sentio was created.", systemSubtitle: "Three objective data sources become one clear decision.", browserExtension: "Browser Extension", browserFlow: "Digital behaviour and tab switches", smartwatch: "Smartwatch", watchFlow: "Sleep, heart rate and HRV", sensorFlow: "Presence, light and environment", readinessEngine: "Readiness Engine", personalBaseline: "Learns a personal baseline", readinessScore: "Readiness Score", personalSuggestion: "Personal suggestion", rightNextStep: "The right next step", continuousCheck: "Monitor and adapt",
    sceneFive: "Scene 5", sameSystemDifferentAnswer: "One system. Three different answers.", peopleSubtitle: "Each person gets a next step based on their actual state.", sceneSix: "Scene 6", oneWeekNoMagic: "One week later — no magic, just better habits.", weekSubtitle: "Less procrastination, less guilt and more self-awareness.", noGradeClaim: "Sentio does not claim to raise grades; it helps improve the self-learning process.",
    system: "System", threeProfiles: "3 people", oneWeek: "1 week", ending: "End", nextScene: "Next scene", today: "Today", focus: "Focus", progress: "Progress",
    demoProfiles: "Simulated profiles", choosePerson: "Choose a person", profileHelp: "These three profiles match Linh, Nam and Mai in the video script.", transparentScore: "Transparent score", whyThisScore: "Why this score?", personalBaselineLabel: "Personal baseline", baselineHelp: "Sentio compares today with your own usual rhythm instead of one universal standard.", privacyCopy: "Raw biometric data is never shown publicly and is only used to create derived indicators.",
    simpleLogic: "Simple logic, personal result", collect: "Collect", collectDesc: "Browser, wearable and ESP32", compareBaseline: "Compare to baseline", compareDesc: "Each person's own rhythm", suggest: "Suggest", suggestDesc: "One clear next step", adjustDesc: "Monitor and adapt", prototypeModel: "Prototype Readiness Model.", notMedical: "This is not a medical diagnostic tool.",
    settings: "Settings", language: "Language", languageHelp: "Change the whole interface", softMotion: "Soft motion", softMotionHelp: "Lively without visual overload", demoDataTitle: "Prototype data", demoDataCopy: "Browser and ESP32 can use live data; the wearable uses a simulated dataset in the filmed prototype.", resetApp: "Reset demo", sessionComplete: "Session complete", niceWork: "Nice work — stopping at the right time is progress too.", focusedTime: "True focus", focusScore: "Focus score", backToday: "Back to today",
    roleLinh: "Online learner", roleNam: "Computer science student", roleMai: "Economics student", profileLinhHelp: "Stable body rhythm", profileNamHelp: "Frequent tab switching", profileMaiHelp: "Low sleep and dark room",
    ready: "Ready for deep work", moderate: "Light work only", low: "Not ready yet",
    linhRecTitle: "Keep learning — this is a good window.", linhRecText: "Your body and study space look stable. Use the next 45 minutes for the task that needs your sharpest focus.", linhAction: "Start focus session", linhInsight: "You usually stay focused longer in the evening after phone notifications are silenced.",
    namRecTitle: "Take a 10-minute reset before returning.", namRecText: "Tab switching is high and HRV is below your baseline. A short reset is better than forcing yourself to sit longer.", namAction: "Start reset", namInsight: "Sessions with a timely break usually have fewer tab switches in the second half.",
    maiRecTitle: "Fix the study space first. Avoid heavy work.", maiRecText: "Low light and short sleep are both reducing readiness. Improve the light and switch to a lighter review task.", maiAction: "I fixed the lighting", maiInsight: "You are usually sharper in the morning. Save hard work for the 8:00–10:00 window.",
    roomFixedTitle: "The room is better — but keep today's work light.", roomFixedText: "The lighting is now comfortable. Sleep is still below baseline, so Sentio still avoids recommending heavy work.", roomFixedAction: "Start 25-minute reading",
    browserMetric: "{focus}% focused · {tabs} tab switches", wearableMetric: "{sleep} sleep · {body}", deskMetric: "{lux} lux · {presence}", presentAtDesk: "present at desk", bodyStable: "heart rate stable", bodyBelow: "HRV below baseline", bodyTired: "deep sleep was low",
    factorSleep: "Sleep", factorHeart: "Heart rate / HRV", factorBrowser: "Browser behaviour", factorRoom: "Study environment", factorLinhSleep: "Above your usual sleep duration.", factorLinhHeart: "Stable against your baseline.", factorLinhBrowser: "Few interruptions in the last session.", factorLinhRoom: "Light and temperature are suitable.", factorNamSleep: "Close to your usual level.", factorNamHeart: "HRV is below your personal baseline.", factorNamBrowser: "Dense tab switching in the last session.", factorNamRoom: "Noise is slightly high.", factorMaiSleep: "Only 4 hours 52 minutes of sleep.", factorMaiHeart: "Resting heart rate is above usual.", factorMaiBrowser: "Few switches while reading material.", factorMaiRoom: "Light is only 96 lux.",
    allGoodTitle: "Everything looks steady.", allGoodText: "Sentio will stay quiet while you are focusing well.", resetTitle: "Take a small reset?", resetText: "Tab switching has risen. Look away, drink water and return in 10 minutes.", roomNudgeTitle: "Your study space is too dark.", roomNudgeText: "Increase the light before continuing to reduce eye strain.", okay: "Got it", startReset: "Start break", fixed: "Fixed",
    progressLinhTitle: "Linh's learning rhythm", progressNamTitle: "Nam's learning rhythm", progressMaiTitle: "Mai's learning rhythm", interruptionsHeadline: "Fewer interruptions", tabsHeadline: "Less unconscious tab switching", lightHeadline: "More sessions in a suitable environment", interruptionUnit: "interruptions / session", tabsUnit: "tab switches / session", lightUnit: "well-lit sessions", linhProgressNote: "Linh did not force herself to sit longer; she started at a better time and was pulled away less often.", namProgressNote: "Nam learned to pause at the right time instead of continuing while distracted, making the second half of sessions steadier.", maiProgressNote: "Mai moved hard work to the morning and fixed the lighting before studying instead of forcing late-night sessions.",
    outcomeLinh: "Interruptions down", outcomeNam: "Tab switches down", outcomeMai: "Well-lit sessions up", outcomeLinhDesc: "9 → 3 per session", outcomeNamDesc: "31 → 12 per session", outcomeMaiDesc: "40% → 86% of sessions", signalLinh: "Stable body rhythm and environment", signalNam: "18 tab switches + HRV below baseline", signalMai: "4h52 sleep + 96 lux", decisionLinh: "Continue learning", decisionNam: "Take a 10-minute break", decisionMai: "Improve study environment", recommendation: "Recommendation",
    filmLinhChange: "Less often pulled away by phone alerts and interruptions.", filmNamChange: "Pauses at the right time instead of sitting and switching tabs.", filmMaiChange: "Moves hard work to morning and fixes desk lighting first.",
    timerRunning: "Sentio is keeping the rhythm with you", timerPaused: "Paused — return when ready", resetTimerLabel: "Reset in progress", roomImproved: "Lighting improved", sourceGood: "Good", sourceWatch: "Watch", sourceAttention: "Needs action"
  },
  es: {
    tagline: "Estudia cuando estés listo.", filmMode: "Modo vídeo", hello: "Buenas tardes", heroSubcopy: "Sentio ha revisado tu estado. Solo elige el siguiente paso.", demoProfile: "Perfil demo", justUpdated: "Actualizado", sentioSuggests: "Sentio sugiere", whyThis: "¿Por qué?", liveInputs: "Datos en uso", threeSignals: "Tres señales, una decisión", synced: "Sincronizado", browser: "Navegador", wearable: "Dispositivo wearable", deskSensor: "Sensor de escritorio", good: "Bien", watch: "Atención", attention: "Requiere acción", howItWorks: "¿Cómo decide Sentio?", todayInsight: "Una idea útil", focusSession: "Sesión de enfoque", oneThing: "Solo una cosa.", live: "En vivo", currentTask: "Tarea actual", reading: "Lectura y repaso ligero", coding: "Programación", economics: "Economía", languageStudy: "Idiomas", readyWhenYouAre: "Empieza cuando estés listo", gentleAccountability: "Acompañamiento suave", sentioKeepsWatch: "Sentio mantiene el ritmo contigo", focusLevel: "Nivel de enfoque", tabSwitches: "Cambios de pestaña", light: "Luz", presence: "Presencia", detected: "Detectada", bodyState: "Estado corporal", stable: "Estable", oneWeekLater: "Una semana después", progressTitle: "No más tiempo. Mejor momento.", progressSubtitle: "Sentio mide cambios en el proceso de estudio, no promete notas.", days: "días", readinessRhythm: "Ritmo de preparación", beforeAfter: "Antes y después", before: "Antes", after: "Después", threePeople: "Tres personas, tres cambios", accountabilityOutcome: "Responsabilidad basada en el estado real", sceneFour: "Escena 4", whySentioExists: "Por eso nació Sentio.", systemSubtitle: "Tres fuentes objetivas se convierten en una decisión clara.", browserExtension: "Extensión del navegador", browserFlow: "Comportamiento digital y pestañas", smartwatch: "Reloj inteligente", watchFlow: "Sueño, pulso y HRV", sensorFlow: "Presencia, luz y entorno", readinessEngine: "Motor de preparación", personalBaseline: "Aprende una base personal", readinessScore: "Puntuación de preparación", personalSuggestion: "Sugerencia personal", rightNextStep: "El siguiente paso adecuado", continuousCheck: "Supervisa y adapta", sceneFive: "Escena 5", sameSystemDifferentAnswer: "Un sistema. Tres respuestas distintas.", peopleSubtitle: "Cada persona recibe un paso según su estado real.", sceneSix: "Escena 6", oneWeekNoMagic: "Una semana después: sin magia, con mejores hábitos.", weekSubtitle: "Menos procrastinación, menos culpa y más autoconocimiento.", noGradeClaim: "Sentio no afirma subir las notas; ayuda a mejorar el proceso de autoestudio.", system: "Sistema", threeProfiles: "3 personas", oneWeek: "1 semana", ending: "Final", nextScene: "Siguiente escena", today: "Hoy", focus: "Enfoque", progress: "Progreso", demoProfiles: "Perfiles simulados", choosePerson: "Elige una persona", profileHelp: "Estos perfiles corresponden a Linh, Nam y Mai del guion.", transparentScore: "Puntuación transparente", whyThisScore: "¿Por qué esta puntuación?", personalBaselineLabel: "Base personal", baselineHelp: "Sentio compara hoy con tu propio ritmo habitual, no con una norma universal.", privacyCopy: "Los datos biométricos brutos no se muestran públicamente y solo crean indicadores derivados.", simpleLogic: "Lógica simple, resultado personal", collect: "Recoger", collectDesc: "Navegador, wearable y ESP32", compareBaseline: "Comparar con base", compareDesc: "El ritmo propio de cada persona", suggest: "Sugerir", suggestDesc: "Un siguiente paso claro", adjustDesc: "Supervisar y adaptar", prototypeModel: "Modelo de preparación prototipo.", notMedical: "No es una herramienta de diagnóstico médico.", settings: "Ajustes", language: "Idioma", languageHelp: "Cambia toda la interfaz", softMotion: "Animación suave", softMotionHelp: "Viva sin sobrecarga visual", demoDataTitle: "Datos del prototipo", demoDataCopy: "El navegador y ESP32 pueden usar datos reales; el wearable usa datos simulados en el vídeo.", resetApp: "Reiniciar demo", sessionComplete: "Sesión completada", niceWork: "Buen trabajo: parar a tiempo también es progreso.", focusedTime: "Enfoque real", focusScore: "Puntuación de enfoque", backToday: "Volver a hoy",
    roleLinh: "Estudiante online", roleNam: "Estudiante de informática", roleMai: "Estudiante de economía", profileLinhHelp: "Ritmo corporal estable", profileNamHelp: "Muchos cambios de pestaña", profileMaiHelp: "Poco sueño y sala oscura", ready: "Listo para trabajo profundo", moderate: "Solo trabajo ligero", low: "Aún no está listo", linhRecTitle: "Sigue estudiando: es un buen momento.", linhRecText: "Tu cuerpo y espacio están estables. Usa 45 minutos para la tarea más exigente.", linhAction: "Iniciar enfoque", linhInsight: "Sueles concentrarte más por la noche cuando silencias el teléfono.", namRecTitle: "Descansa 10 minutos antes de volver.", namRecText: "Hay muchos cambios de pestaña y el HRV está bajo. Un descanso corto es mejor que forzar más tiempo.", namAction: "Iniciar descanso", namInsight: "Las sesiones con una pausa oportuna tienen menos cambios de pestaña después.", maiRecTitle: "Mejora primero el espacio y evita trabajo pesado.", maiRecText: "La poca luz y el sueño corto reducen la preparación. Mejora la luz y repasa algo ligero.", maiAction: "Ya mejoré la luz", maiInsight: "Sueles estar más despejada por la mañana. Reserva lo difícil para 8:00–10:00.", roomFixedTitle: "La sala está mejor, pero hoy conviene trabajo ligero.", roomFixedText: "La luz ya es cómoda. El sueño sigue bajo, así que Sentio no recomienda trabajo pesado.", roomFixedAction: "Leer 25 minutos",
    browserMetric: "{focus}% de enfoque · {tabs} cambios", wearableMetric: "{sleep} de sueño · {body}", deskMetric: "{lux} lux · {presence}", presentAtDesk: "presente en el escritorio", bodyStable: "pulso estable", bodyBelow: "HRV bajo la base", bodyTired: "poco sueño profundo", factorSleep: "Sueño", factorHeart: "Pulso / HRV", factorBrowser: "Comportamiento del navegador", factorRoom: "Entorno de estudio", factorLinhSleep: "Por encima de tu duración habitual.", factorLinhHeart: "Estable frente a tu base.", factorLinhBrowser: "Pocas interrupciones en la última sesión.", factorLinhRoom: "Luz y temperatura adecuadas.", factorNamSleep: "Cerca de tu nivel habitual.", factorNamHeart: "HRV bajo tu base personal.", factorNamBrowser: "Muchos cambios en la última sesión.", factorNamRoom: "Ruido algo alto.", factorMaiSleep: "Solo 4 horas y 52 minutos.", factorMaiHeart: "Pulso en reposo más alto de lo normal.", factorMaiBrowser: "Pocos cambios mientras leía.", factorMaiRoom: "Solo 96 lux.", allGoodTitle: "Todo está estable.", allGoodText: "Sentio guardará silencio mientras te concentras bien.", resetTitle: "¿Una pausa breve?", resetText: "Subieron los cambios de pestaña. Mira lejos, bebe agua y vuelve en 10 minutos.", roomNudgeTitle: "El espacio está demasiado oscuro.", roomNudgeText: "Aumenta la luz antes de continuar.", okay: "Entendido", startReset: "Iniciar pausa", fixed: "Corregido",
    progressLinhTitle: "Ritmo de Linh", progressNamTitle: "Ritmo de Nam", progressMaiTitle: "Ritmo de Mai", interruptionsHeadline: "Menos interrupciones", tabsHeadline: "Menos cambios inconscientes", lightHeadline: "Más sesiones con entorno adecuado", interruptionUnit: "interrupciones / sesión", tabsUnit: "cambios / sesión", lightUnit: "sesiones bien iluminadas", linhProgressNote: "Linh no se obligó a sentarse más; empezó en un mejor momento y fue interrumpida menos.", namProgressNote: "Nam aprendió a parar a tiempo y la segunda mitad de sus sesiones fue más estable.", maiProgressNote: "Mai movió lo difícil a la mañana y ajustó la luz antes de estudiar.", outcomeLinh: "Menos interrupciones", outcomeNam: "Menos cambios", outcomeMai: "Más sesiones con buena luz", outcomeLinhDesc: "9 → 3 por sesión", outcomeNamDesc: "31 → 12 por sesión", outcomeMaiDesc: "40% → 86% de sesiones", signalLinh: "Ritmo y entorno estables", signalNam: "18 cambios + HRV bajo", signalMai: "4h52 de sueño + 96 lux", decisionLinh: "Continuar estudiando", decisionNam: "Descansar 10 minutos", decisionMai: "Mejorar el entorno", recommendation: "Recomendación", filmLinhChange: "Menos interrupciones del teléfono.", filmNamChange: "Descansa a tiempo en vez de cambiar pestañas.", filmMaiChange: "Pasa lo difícil a la mañana y mejora la luz.", timerRunning: "Sentio mantiene el ritmo contigo", timerPaused: "En pausa: vuelve cuando estés listo", resetTimerLabel: "Descanso en curso", roomImproved: "Luz mejorada", sourceGood: "Bien", sourceWatch: "Atención", sourceAttention: "Requiere acción"
  },
  fr: {
    tagline: "Étudiez quand vous êtes prêt.", filmMode: "Mode vidéo", hello: "Bonsoir", heroSubcopy: "Sentio a vérifié votre état. Choisissez simplement la prochaine étape.", demoProfile: "Profil démo", justUpdated: "Mis à jour", sentioSuggests: "Sentio suggère", whyThis: "Pourquoi ?", liveInputs: "Données utilisées", threeSignals: "Trois signaux, une décision", synced: "Synchronisé", browser: "Navigateur", wearable: "Objet connecté", deskSensor: "Capteur de bureau", good: "Bon", watch: "À surveiller", attention: "Action requise", howItWorks: "Comment Sentio décide-t-il ?", todayInsight: "Une idée utile", focusSession: "Session de concentration", oneThing: "Une seule chose.", live: "En direct", currentTask: "Tâche actuelle", reading: "Lecture et révision légère", coding: "Programmation", economics: "Économie", languageStudy: "Langues", readyWhenYouAre: "Commencez quand vous êtes prêt", gentleAccountability: "Accompagnement doux", sentioKeepsWatch: "Sentio garde le rythme avec vous", focusLevel: "Niveau de concentration", tabSwitches: "Changements d’onglet", light: "Lumière", presence: "Présence", detected: "Détectée", bodyState: "État physique", stable: "Stable", oneWeekLater: "Une semaine plus tard", progressTitle: "Pas plus longtemps. Au bon moment.", progressSubtitle: "Sentio mesure le processus d’apprentissage, pas des notes promises.", days: "jours", readinessRhythm: "Rythme de préparation", beforeAfter: "Avant et après", before: "Avant", after: "Après", threePeople: "Trois personnes, trois changements", accountabilityOutcome: "Responsabilisation fondée sur l’état réel", sceneFour: "Scène 4", whySentioExists: "C’est pourquoi Sentio a été créé.", systemSubtitle: "Trois sources objectives deviennent une décision claire.", browserExtension: "Extension navigateur", browserFlow: "Comportement numérique et onglets", smartwatch: "Montre connectée", watchFlow: "Sommeil, rythme cardiaque et HRV", sensorFlow: "Présence, lumière et environnement", readinessEngine: "Moteur de préparation", personalBaseline: "Apprend une base personnelle", readinessScore: "Score de préparation", personalSuggestion: "Suggestion personnelle", rightNextStep: "La bonne prochaine étape", continuousCheck: "Suivre et adapter", sceneFive: "Scène 5", sameSystemDifferentAnswer: "Un système. Trois réponses différentes.", peopleSubtitle: "Chacun reçoit une étape selon son état réel.", sceneSix: "Scène 6", oneWeekNoMagic: "Une semaine plus tard — pas de magie, de meilleures habitudes.", weekSubtitle: "Moins de procrastination, moins de culpabilité, plus de conscience de soi.", noGradeClaim: "Sentio ne prétend pas augmenter les notes ; il améliore le processus d’auto-apprentissage.", system: "Système", threeProfiles: "3 personnes", oneWeek: "1 semaine", ending: "Fin", nextScene: "Scène suivante", today: "Aujourd’hui", focus: "Focus", progress: "Progrès", demoProfiles: "Profils simulés", choosePerson: "Choisir une personne", profileHelp: "Ces profils correspondent à Linh, Nam et Mai dans le scénario.", transparentScore: "Score transparent", whyThisScore: "Pourquoi ce score ?", personalBaselineLabel: "Base personnelle", baselineHelp: "Sentio compare aujourd’hui à votre propre rythme, pas à une norme universelle.", privacyCopy: "Les données biométriques brutes ne sont jamais publiques et servent uniquement à des indicateurs dérivés.", simpleLogic: "Logique simple, résultat personnel", collect: "Collecter", collectDesc: "Navigateur, wearable et ESP32", compareBaseline: "Comparer à la base", compareDesc: "Le rythme propre à chacun", suggest: "Suggérer", suggestDesc: "Une prochaine étape claire", adjustDesc: "Suivre et adapter", prototypeModel: "Modèle de préparation prototype.", notMedical: "Ce n’est pas un outil de diagnostic médical.", settings: "Réglages", language: "Langue", languageHelp: "Modifier toute l’interface", softMotion: "Animations douces", softMotionHelp: "Vivantes sans surcharge", demoDataTitle: "Données prototype", demoDataCopy: "Le navigateur et l’ESP32 peuvent utiliser des données réelles ; le wearable est simulé dans la vidéo.", resetApp: "Réinitialiser la démo", sessionComplete: "Session terminée", niceWork: "Bravo — s’arrêter au bon moment est aussi un progrès.", focusedTime: "Focus réel", focusScore: "Score de focus", backToday: "Retour à aujourd’hui",
    roleLinh: "Apprenante en ligne", roleNam: "Étudiant en informatique", roleMai: "Étudiante en économie", profileLinhHelp: "Rythme physique stable", profileNamHelp: "Nombreux changements d’onglet", profileMaiHelp: "Peu de sommeil et pièce sombre", ready: "Prêt pour un travail profond", moderate: "Travail léger seulement", low: "Pas encore prêt", linhRecTitle: "Continuez — c’est un bon moment.", linhRecText: "Votre état et votre espace sont stables. Utilisez 45 minutes pour la tâche la plus exigeante.", linhAction: "Démarrer le focus", linhInsight: "Vous restez souvent concentrée plus longtemps le soir après avoir coupé les notifications.", namRecTitle: "Faites une pause de 10 minutes.", namRecText: "Les changements d’onglet sont nombreux et le HRV est sous votre base. Une courte pause vaut mieux que forcer.", namAction: "Démarrer la pause", namInsight: "Une pause au bon moment réduit souvent les changements d’onglet ensuite.", maiRecTitle: "Améliorez d’abord l’espace et évitez le travail lourd.", maiRecText: "La faible lumière et le manque de sommeil réduisent la préparation. Améliorez la lumière et révisez légèrement.", maiAction: "J’ai corrigé la lumière", maiInsight: "Vous êtes généralement plus alerte le matin. Gardez le travail difficile pour 8 h–10 h.", roomFixedTitle: "La pièce est meilleure, mais gardez un travail léger aujourd’hui.", roomFixedText: "La lumière est confortable. Le sommeil reste sous la base, donc Sentio évite le travail lourd.", roomFixedAction: "Lire 25 minutes",
    browserMetric: "{focus}% concentré · {tabs} changements", wearableMetric: "{sleep} de sommeil · {body}", deskMetric: "{lux} lux · {presence}", presentAtDesk: "présent au bureau", bodyStable: "rythme cardiaque stable", bodyBelow: "HRV sous la base", bodyTired: "sommeil profond faible", factorSleep: "Sommeil", factorHeart: "Rythme / HRV", factorBrowser: "Comportement navigateur", factorRoom: "Environnement", factorLinhSleep: "Au-dessus de votre durée habituelle.", factorLinhHeart: "Stable par rapport à votre base.", factorLinhBrowser: "Peu d’interruptions récemment.", factorLinhRoom: "Lumière et température adaptées.", factorNamSleep: "Près de votre niveau habituel.", factorNamHeart: "HRV sous votre base personnelle.", factorNamBrowser: "Beaucoup de changements récemment.", factorNamRoom: "Bruit légèrement élevé.", factorMaiSleep: "Seulement 4 h 52 de sommeil.", factorMaiHeart: "Rythme au repos plus élevé.", factorMaiBrowser: "Peu de changements pendant la lecture.", factorMaiRoom: "Seulement 96 lux.", allGoodTitle: "Tout est stable.", allGoodText: "Sentio restera discret pendant votre bonne concentration.", resetTitle: "Une petite pause ?", resetText: "Les changements d’onglet augmentent. Regardez au loin, buvez et revenez dans 10 minutes.", roomNudgeTitle: "Votre espace est trop sombre.", roomNudgeText: "Augmentez la lumière avant de continuer.", okay: "Compris", startReset: "Démarrer la pause", fixed: "Corrigé",
    progressLinhTitle: "Rythme de Linh", progressNamTitle: "Rythme de Nam", progressMaiTitle: "Rythme de Mai", interruptionsHeadline: "Moins d’interruptions", tabsHeadline: "Moins de changements inconscients", lightHeadline: "Plus de sessions dans un bon environnement", interruptionUnit: "interruptions / session", tabsUnit: "changements / session", lightUnit: "sessions bien éclairées", linhProgressNote: "Linh ne s’est pas forcée à rester plus longtemps ; elle a commencé au bon moment et a été moins interrompue.", namProgressNote: "Nam a appris à s’arrêter au bon moment, rendant la seconde moitié des sessions plus stable.", maiProgressNote: "Mai a déplacé le travail difficile au matin et corrigé la lumière avant d’étudier.", outcomeLinh: "Interruptions en baisse", outcomeNam: "Onglets en baisse", outcomeMai: "Bonne lumière en hausse", outcomeLinhDesc: "9 → 3 par session", outcomeNamDesc: "31 → 12 par session", outcomeMaiDesc: "40 % → 86 % des sessions", signalLinh: "Rythme et environnement stables", signalNam: "18 changements + HRV faible", signalMai: "4 h 52 de sommeil + 96 lux", decisionLinh: "Continuer à apprendre", decisionNam: "Faire une pause de 10 minutes", decisionMai: "Améliorer l’environnement", recommendation: "Recommandation", filmLinhChange: "Moins distraite par les notifications.", filmNamChange: "Fait une pause au lieu de changer d’onglet.", filmMaiChange: "Travail difficile le matin et meilleure lumière.", timerRunning: "Sentio garde le rythme avec vous", timerPaused: "En pause — revenez quand vous êtes prêt", resetTimerLabel: "Pause en cours", roomImproved: "Lumière améliorée", sourceGood: "Bon", sourceWatch: "Surveiller", sourceAttention: "Action requise"
  },
  zh: {
    tagline: "准备好时再学习。", filmMode: "拍摄模式", hello: "晚上好", heroSubcopy: "Sentio 已完成状态检查。你只需选择下一步。", demoProfile: "演示档案", justUpdated: "刚刚更新", sentioSuggests: "Sentio 建议", whyThis: "为什么？", liveInputs: "当前数据", threeSignals: "三种信号，一个决定", synced: "已同步", browser: "浏览器", wearable: "可穿戴设备", deskSensor: "桌面传感器", good: "良好", watch: "需留意", attention: "需处理", howItWorks: "Sentio 如何做出决定？", todayInsight: "一条有用的洞察", focusSession: "专注时段", oneThing: "一次只做一件事。", live: "实时", currentTask: "当前任务", reading: "阅读与轻复习", coding: "编程", economics: "经济学", languageStudy: "语言学习", readyWhenYouAre: "准备好时开始", gentleAccountability: "温和的监督", sentioKeepsWatch: "Sentio 与你保持节奏", focusLevel: "专注度", tabSwitches: "切换标签页", light: "光线", presence: "在座", detected: "已检测", bodyState: "身体状态", stable: "稳定", oneWeekLater: "一周后", progressTitle: "不是更久，而是更合适。", progressSubtitle: "Sentio 衡量学习过程的变化，不承诺成绩。", days: "天", readinessRhythm: "准备度节奏", beforeAfter: "前后对比", before: "之前", after: "之后", threePeople: "三个人，三种不同变化", accountabilityOutcome: "基于真实状态的监督", sceneFour: "场景 4", whySentioExists: "这就是 Sentio 诞生的原因。", systemSubtitle: "三种客观数据汇聚成一个清晰决定。", browserExtension: "浏览器扩展", browserFlow: "数字行为与标签切换", smartwatch: "智能手表", watchFlow: "睡眠、心率与 HRV", sensorFlow: "在座、光线与环境", readinessEngine: "准备度引擎", personalBaseline: "学习个人基线", readinessScore: "准备度分数", personalSuggestion: "个性化建议", rightNextStep: "合适的下一步", continuousCheck: "持续跟踪并调整", sceneFive: "场景 5", sameSystemDifferentAnswer: "同一个系统，三种不同答案。", peopleSubtitle: "每个人都根据真实状态获得下一步建议。", sceneSix: "场景 6", oneWeekNoMagic: "一周后——没有魔法，只有更好的习惯。", weekSubtitle: "更少拖延、更少内疚、更多自我觉察。", noGradeClaim: "Sentio 不声称提高成绩；它帮助改善自主学习过程。", system: "系统", threeProfiles: "3 人", oneWeek: "1 周", ending: "结尾", nextScene: "下一场景", today: "今天", focus: "专注", progress: "进展", demoProfiles: "模拟档案", choosePerson: "选择人物", profileHelp: "这三个档案对应视频脚本中的 Linh、Nam 和 Mai。", transparentScore: "透明分数", whyThisScore: "为什么是这个分数？", personalBaselineLabel: "个人基线", baselineHelp: "Sentio 将今天与你自己的日常节奏比较，而不是使用统一标准。", privacyCopy: "原始生物数据不会公开，仅用于生成衍生指标。", simpleLogic: "逻辑简单，结果个性化", collect: "收集", collectDesc: "浏览器、可穿戴设备与 ESP32", compareBaseline: "对比基线", compareDesc: "每个人自己的节奏", suggest: "建议", suggestDesc: "一个清晰的下一步", adjustDesc: "跟踪并调整", prototypeModel: "原型准备度模型。", notMedical: "这不是医疗诊断工具。", settings: "设置", language: "语言", languageHelp: "切换整个界面", softMotion: "柔和动画", softMotionHelp: "生动但不杂乱", demoDataTitle: "原型数据", demoDataCopy: "浏览器和 ESP32 可接入真实数据；拍摄版中的可穿戴数据为模拟数据。", resetApp: "重置演示", sessionComplete: "时段完成", niceWork: "做得好——适时停止也是进步。", focusedTime: "真实专注", focusScore: "专注分数", backToday: "返回今天",
    roleLinh: "在线学习者", roleNam: "计算机专业学生", roleMai: "经济学学生", profileLinhHelp: "身体节奏稳定", profileNamHelp: "频繁切换标签", profileMaiHelp: "睡眠不足且房间昏暗", ready: "适合深度学习", moderate: "只适合轻任务", low: "尚未准备好", linhRecTitle: "继续学习——现在是合适时段。", linhRecText: "身体与学习空间都很稳定。接下来的 45 分钟用于最需要专注的任务。", linhAction: "开始专注", linhInsight: "关闭手机通知后，你通常在晚上能保持更久的专注。", namRecTitle: "先休息 10 分钟再回来。", namRecText: "标签切换频繁且 HRV 低于基线。短暂重置比强迫久坐更好。", namAction: "开始休息", namInsight: "及时休息的学习时段，后半段通常切换标签更少。", maiRecTitle: "先改善学习空间，避免高强度任务。", maiRecText: "光线不足和睡眠偏短同时拉低准备度。增加光线并改做轻复习。", maiAction: "我已调整光线", maiInsight: "你通常早上更清醒。把困难任务留给 8:00–10:00。", roomFixedTitle: "房间更好了，但今天仍应保持轻任务。", roomFixedText: "光线已舒适，但睡眠仍低于基线，因此 Sentio 暂不建议高强度任务。", roomFixedAction: "开始 25 分钟阅读",
    browserMetric: "专注 {focus}% · 切换 {tabs} 次", wearableMetric: "睡眠 {sleep} · {body}", deskMetric: "{lux} lux · {presence}", presentAtDesk: "人在桌前", bodyStable: "心率稳定", bodyBelow: "HRV 低于基线", bodyTired: "深睡不足", factorSleep: "睡眠", factorHeart: "心率 / HRV", factorBrowser: "浏览器行为", factorRoom: "学习环境", factorLinhSleep: "高于你的通常睡眠时长。", factorLinhHeart: "相对个人基线稳定。", factorLinhBrowser: "上次学习时段干扰较少。", factorLinhRoom: "光线与温度适宜。", factorNamSleep: "接近通常水平。", factorNamHeart: "HRV 低于个人基线。", factorNamBrowser: "上次时段标签切换密集。", factorNamRoom: "噪声略高。", factorMaiSleep: "仅睡了 4 小时 52 分钟。", factorMaiHeart: "静息心率高于平时。", factorMaiBrowser: "阅读资料时切换较少。", factorMaiRoom: "光线仅 96 lux。", allGoodTitle: "一切稳定。", allGoodText: "专注良好时，Sentio 不会打扰你。", resetTitle: "休息一下吗？", resetText: "标签切换增加了。看看远处、喝点水，10 分钟后再回来。", roomNudgeTitle: "学习空间太暗。", roomNudgeText: "继续前先增加光线，减少眼睛疲劳。", okay: "知道了", startReset: "开始休息", fixed: "已调整",
    progressLinhTitle: "Linh 的学习节奏", progressNamTitle: "Nam 的学习节奏", progressMaiTitle: "Mai 的学习节奏", interruptionsHeadline: "干扰更少", tabsHeadline: "无意识切换更少", lightHeadline: "更多时段环境合适", interruptionUnit: "次干扰 / 时段", tabsUnit: "次切换 / 时段", lightUnit: "光线合适的时段", linhProgressNote: "Linh 没有强迫自己坐得更久；她在更合适的时候开始，也更少被拉走。", namProgressNote: "Nam 学会在合适时暂停，而不是分心时继续，后半段更稳定。", maiProgressNote: "Mai 把困难任务移到早上，并在学习前调整光线。", outcomeLinh: "干扰下降", outcomeNam: "标签切换下降", outcomeMai: "合适光线时段上升", outcomeLinhDesc: "每次 9 → 3", outcomeNamDesc: "每次 31 → 12", outcomeMaiDesc: "40% → 86%", signalLinh: "身体节奏和环境稳定", signalNam: "18 次切换 + HRV 偏低", signalMai: "睡眠 4h52 + 96 lux", decisionLinh: "继续学习", decisionNam: "休息 10 分钟", decisionMai: "改善学习环境", recommendation: "建议", filmLinhChange: "更少被手机通知拉走。", filmNamChange: "及时休息，而不是不断切换标签。", filmMaiChange: "困难任务改到早上，并先改善光线。", timerRunning: "Sentio 正与你保持节奏", timerPaused: "已暂停——准备好时回来", resetTimerLabel: "休息进行中", roomImproved: "光线已改善", sourceGood: "良好", sourceWatch: "需留意", sourceAttention: "需处理"
  },
  ja: {
    tagline: "準備が整ったときに学ぶ。", filmMode: "撮影モード", hello: "こんばんは", heroSubcopy: "Sentio が状態を確認しました。次の一歩を選ぶだけです。", demoProfile: "デモプロフィール", justUpdated: "更新済み", sentioSuggests: "Sentio の提案", whyThis: "なぜ？", liveInputs: "使用中のデータ", threeSignals: "3つの信号、1つの判断", synced: "同期済み", browser: "ブラウザー", wearable: "ウェアラブル", deskSensor: "デスクセンサー", good: "良好", watch: "要注意", attention: "対応が必要", howItWorks: "Sentio はどう判断する？", todayInsight: "役立つ気づき", focusSession: "集中セッション", oneThing: "今は一つだけ。", live: "ライブ", currentTask: "現在のタスク", reading: "読書・軽い復習", coding: "プログラミング", economics: "経済学", languageStudy: "語学", readyWhenYouAre: "準備ができたら開始", gentleAccountability: "やさしい見守り", sentioKeepsWatch: "Sentio がペースを支えます", focusLevel: "集中度", tabSwitches: "タブ切り替え", light: "照明", presence: "着席", detected: "検出", bodyState: "身体状態", stable: "安定", oneWeekLater: "1週間後", progressTitle: "長くではなく、適切なタイミングで。", progressSubtitle: "Sentio は学習過程の変化を測り、成績を保証しません。", days: "日", readinessRhythm: "準備度のリズム", beforeAfter: "前後比較", before: "以前", after: "現在", threePeople: "3人、3つの異なる変化", accountabilityOutcome: "実際の状態に基づく見守り", sceneFour: "シーン4", whySentioExists: "それが Sentio を作った理由です。", systemSubtitle: "3つの客観データを、分かりやすい一つの判断へ。", browserExtension: "ブラウザー拡張", browserFlow: "デジタル行動とタブ切り替え", smartwatch: "スマートウォッチ", watchFlow: "睡眠・心拍・HRV", sensorFlow: "着席・照明・環境", readinessEngine: "準備度エンジン", personalBaseline: "個人ベースラインを学習", readinessScore: "準備度スコア", personalSuggestion: "個別提案", rightNextStep: "適切な次の一歩", continuousCheck: "見守りと調整", sceneFive: "シーン5", sameSystemDifferentAnswer: "同じシステム。3つの異なる答え。", peopleSubtitle: "一人ひとりの実際の状態に合わせて次の一歩を提案します。", sceneSix: "シーン6", oneWeekNoMagic: "1週間後——魔法ではなく、より良い習慣。", weekSubtitle: "先延ばしと罪悪感を減らし、自己理解を高める。", noGradeClaim: "Sentio は成績向上を断言せず、自学のプロセス改善を支援します。", system: "システム", threeProfiles: "3人", oneWeek: "1週間", ending: "終了", nextScene: "次のシーン", today: "今日", focus: "集中", progress: "進捗", demoProfiles: "シミュレーションプロフィール", choosePerson: "人物を選ぶ", profileHelp: "動画脚本の Linh、Nam、Mai に対応しています。", transparentScore: "透明なスコア", whyThisScore: "このスコアの理由", personalBaselineLabel: "個人ベースライン", baselineHelp: "全員共通の基準ではなく、あなた自身の普段のリズムと比較します。", privacyCopy: "生の生体データは公開されず、派生指標の生成にのみ使われます。", simpleLogic: "シンプルな仕組み、個別の結果", collect: "収集", collectDesc: "ブラウザー、ウェアラブル、ESP32", compareBaseline: "基準と比較", compareDesc: "一人ひとりのリズム", suggest: "提案", suggestDesc: "明確な次の一歩", adjustDesc: "見守りと調整", prototypeModel: "プロトタイプ準備度モデル。", notMedical: "医療診断ツールではありません。", settings: "設定", language: "言語", languageHelp: "画面全体を切り替え", softMotion: "やさしいアニメーション", softMotionHelp: "楽しく、でも見づらくしない", demoDataTitle: "プロトタイプデータ", demoDataCopy: "ブラウザーと ESP32 は実データ接続可能。撮影版のウェアラブルはシミュレーションです。", resetApp: "デモをリセット", sessionComplete: "セッション完了", niceWork: "よくできました。適切に止めることも進歩です。", focusedTime: "実集中時間", focusScore: "集中スコア", backToday: "今日に戻る",
    roleLinh: "オンライン学習者", roleNam: "情報系学生", roleMai: "経済学部生", profileLinhHelp: "身体リズムが安定", profileNamHelp: "タブ切り替えが多い", profileMaiHelp: "睡眠不足と暗い部屋", ready: "深い学習に適した状態", moderate: "軽い作業のみ", low: "まだ準備不足", linhRecTitle: "学習を続けましょう。今は良い時間です。", linhRecText: "身体と学習環境が安定しています。次の45分を最も集中が必要な課題に使いましょう。", linhAction: "集中を開始", linhInsight: "スマホ通知を切ると、夜の集中が長く続く傾向があります。", namRecTitle: "戻る前に10分休みましょう。", namRecText: "タブ切り替えが多く、HRV が基準より低めです。無理に座り続けるより短い休憩が有効です。", namAction: "休憩を開始", namInsight: "適切な休憩を入れたセッションは、後半のタブ切り替えが少なくなります。", maiRecTitle: "まず環境を整え、重い課題は避けましょう。", maiRecText: "暗さと短い睡眠が準備度を下げています。照明を改善し、軽い復習に切り替えましょう。", maiAction: "照明を直した", maiInsight: "朝の方が冴えています。難しい課題は8:00〜10:00に。", roomFixedTitle: "環境は改善しましたが、今日は軽い作業に。", roomFixedText: "照明は快適になりました。睡眠は基準より低いため、重い課題はまだ勧めません。", roomFixedAction: "25分読書を開始",
    browserMetric: "集中 {focus}%・タブ切替 {tabs} 回", wearableMetric: "睡眠 {sleep}・{body}", deskMetric: "{lux} lux・{presence}", presentAtDesk: "着席中", bodyStable: "心拍が安定", bodyBelow: "HRV が基準以下", bodyTired: "深い睡眠が不足", factorSleep: "睡眠", factorHeart: "心拍 / HRV", factorBrowser: "ブラウザー行動", factorRoom: "学習環境", factorLinhSleep: "普段より長く眠れています。", factorLinhHeart: "個人基準に対して安定。", factorLinhBrowser: "前回の中断が少ない。", factorLinhRoom: "照明と温度が適切。", factorNamSleep: "普段に近い水準。", factorNamHeart: "HRV が個人基準より低い。", factorNamBrowser: "前回はタブ切り替えが密集。", factorNamRoom: "騒音がやや高い。", factorMaiSleep: "睡眠は4時間52分のみ。", factorMaiHeart: "安静時心拍が普段より高い。", factorMaiBrowser: "資料読書中の切り替えは少ない。", factorMaiRoom: "照明は96 luxのみ。", allGoodTitle: "安定しています。", allGoodText: "集中できている間、Sentio は邪魔しません。", resetTitle: "少し休みますか？", resetText: "タブ切り替えが増えました。遠くを見て水を飲み、10分後に戻りましょう。", roomNudgeTitle: "学習環境が暗すぎます。", roomNudgeText: "目の負担を減らすため、続ける前に照明を上げてください。", okay: "了解", startReset: "休憩開始", fixed: "改善済み",
    progressLinhTitle: "Linh の学習リズム", progressNamTitle: "Nam の学習リズム", progressMaiTitle: "Mai の学習リズム", interruptionsHeadline: "中断が減少", tabsHeadline: "無意識のタブ切り替えが減少", lightHeadline: "適切な環境のセッションが増加", interruptionUnit: "中断回数 / セッション", tabsUnit: "タブ切替 / セッション", lightUnit: "十分に明るいセッション", linhProgressNote: "Linh は長く座ることを強制せず、より良い時間に始めて中断を減らしました。", namProgressNote: "Nam は分散したまま続けず、適切に休むことで後半が安定しました。", maiProgressNote: "Mai は難しい課題を朝に移し、学習前に照明を整えました。", outcomeLinh: "中断が減少", outcomeNam: "タブ切替が減少", outcomeMai: "適切な照明が増加", outcomeLinhDesc: "9 → 3 回/セッション", outcomeNamDesc: "31 → 12 回/セッション", outcomeMaiDesc: "40% → 86%", signalLinh: "身体リズムと環境が安定", signalNam: "18回切替 + HRV低下", signalMai: "睡眠4h52 + 96 lux", decisionLinh: "学習を続ける", decisionNam: "10分休む", decisionMai: "学習環境を改善", recommendation: "提案", filmLinhChange: "スマホ通知による中断が減りました。", filmNamChange: "タブを切り替え続けず、適切に休めました。", filmMaiChange: "難しい課題を朝に移し、照明を改善しました。", timerRunning: "Sentio がペースを支えています", timerPaused: "一時停止中。準備ができたら戻ってください", resetTimerLabel: "休憩中", roomImproved: "照明を改善", sourceGood: "良好", sourceWatch: "要注意", sourceAttention: "対応必要"
  },
  de: {
    tagline: "Lerne, wenn du bereit bist.", filmMode: "Filmmodus", hello: "Guten Abend", heroSubcopy: "Sentio hat deinen Zustand geprüft. Wähle einfach den nächsten Schritt.", demoProfile: "Demo-Profil", justUpdated: "Gerade aktualisiert", sentioSuggests: "Sentio empfiehlt", whyThis: "Warum?", liveInputs: "Verwendete Daten", threeSignals: "Drei Signale, eine Entscheidung", synced: "Synchronisiert", browser: "Browser", wearable: "Wearable", deskSensor: "Schreibtischsensor", good: "Gut", watch: "Beobachten", attention: "Aktion nötig", howItWorks: "Wie entscheidet Sentio?", todayInsight: "Eine hilfreiche Erkenntnis", focusSession: "Fokussitzung", oneThing: "Nur eine Sache.", live: "Live", currentTask: "Aktuelle Aufgabe", reading: "Lesen und leichte Wiederholung", coding: "Programmieren", economics: "Wirtschaft", languageStudy: "Sprachen", readyWhenYouAre: "Starte, wenn du bereit bist", gentleAccountability: "Sanfte Begleitung", sentioKeepsWatch: "Sentio hält den Rhythmus mit dir", focusLevel: "Fokuslevel", tabSwitches: "Tab-Wechsel", light: "Licht", presence: "Anwesenheit", detected: "Erkannt", bodyState: "Körperzustand", stable: "Stabil", oneWeekLater: "Eine Woche später", progressTitle: "Nicht länger. Besser getimt.", progressSubtitle: "Sentio misst Veränderungen im Lernprozess, keine versprochenen Noten.", days: "Tage", readinessRhythm: "Bereitschaftsrhythmus", beforeAfter: "Vorher und nachher", before: "Vorher", after: "Nachher", threePeople: "Drei Menschen, drei Veränderungen", accountabilityOutcome: "Begleitung auf Basis des echten Zustands", sceneFour: "Szene 4", whySentioExists: "Darum wurde Sentio entwickelt.", systemSubtitle: "Drei objektive Datenquellen werden zu einer klaren Entscheidung.", browserExtension: "Browser-Erweiterung", browserFlow: "Digitales Verhalten und Tab-Wechsel", smartwatch: "Smartwatch", watchFlow: "Schlaf, Herzfrequenz und HRV", sensorFlow: "Anwesenheit, Licht und Umgebung", readinessEngine: "Readiness Engine", personalBaseline: "Lernt eine persönliche Basis", readinessScore: "Readiness Score", personalSuggestion: "Persönliche Empfehlung", rightNextStep: "Der passende nächste Schritt", continuousCheck: "Beobachten und anpassen", sceneFive: "Szene 5", sameSystemDifferentAnswer: "Ein System. Drei verschiedene Antworten.", peopleSubtitle: "Jede Person erhält einen Schritt passend zum tatsächlichen Zustand.", sceneSix: "Szene 6", oneWeekNoMagic: "Eine Woche später – keine Magie, nur bessere Gewohnheiten.", weekSubtitle: "Weniger Aufschub, weniger Schuldgefühl und mehr Selbstwahrnehmung.", noGradeClaim: "Sentio verspricht keine besseren Noten; es verbessert den Prozess des Selbstlernens.", system: "System", threeProfiles: "3 Personen", oneWeek: "1 Woche", ending: "Ende", nextScene: "Nächste Szene", today: "Heute", focus: "Fokus", progress: "Fortschritt", demoProfiles: "Simulierte Profile", choosePerson: "Person auswählen", profileHelp: "Diese Profile entsprechen Linh, Nam und Mai aus dem Videoskript.", transparentScore: "Transparenter Wert", whyThisScore: "Warum dieser Wert?", personalBaselineLabel: "Persönliche Basis", baselineHelp: "Sentio vergleicht heute mit deinem eigenen Rhythmus statt mit einem Standard für alle.", privacyCopy: "Rohe biometrische Daten werden nicht öffentlich gezeigt und nur für abgeleitete Werte genutzt.", simpleLogic: "Einfache Logik, persönliches Ergebnis", collect: "Sammeln", collectDesc: "Browser, Wearable und ESP32", compareBaseline: "Mit Basis vergleichen", compareDesc: "Der eigene Rhythmus", suggest: "Empfehlen", suggestDesc: "Ein klarer nächster Schritt", adjustDesc: "Beobachten und anpassen", prototypeModel: "Prototypisches Readiness-Modell.", notMedical: "Kein medizinisches Diagnosewerkzeug.", settings: "Einstellungen", language: "Sprache", languageHelp: "Die gesamte Oberfläche wechseln", softMotion: "Sanfte Animation", softMotionHelp: "Lebendig ohne visuelle Überlastung", demoDataTitle: "Prototypdaten", demoDataCopy: "Browser und ESP32 können Echtdaten nutzen; das Wearable ist im Filmprototyp simuliert.", resetApp: "Demo zurücksetzen", sessionComplete: "Sitzung beendet", niceWork: "Gut gemacht – rechtzeitig aufzuhören ist ebenfalls Fortschritt.", focusedTime: "Echte Fokuszeit", focusScore: "Fokuswert", backToday: "Zurück zu heute",
    roleLinh: "Online-Lernende", roleNam: "Informatikstudent", roleMai: "Wirtschaftsstudentin", profileLinhHelp: "Stabiler Körperrhythmus", profileNamHelp: "Viele Tab-Wechsel", profileMaiHelp: "Wenig Schlaf und dunkler Raum", ready: "Bereit für Deep Work", moderate: "Nur leichte Arbeit", low: "Noch nicht bereit", linhRecTitle: "Weiterlernen – jetzt ist ein gutes Zeitfenster.", linhRecText: "Körper und Lernplatz sind stabil. Nutze 45 Minuten für die anspruchsvollste Aufgabe.", linhAction: "Fokus starten", linhInsight: "Abends bleibst du meist länger fokussiert, wenn Handybenachrichtigungen aus sind.", namRecTitle: "Vor der Rückkehr 10 Minuten zurücksetzen.", namRecText: "Viele Tab-Wechsel und HRV unter deiner Basis. Eine kurze Pause ist besser als erzwungenes Sitzen.", namAction: "Pause starten", namInsight: "Sitzungen mit rechtzeitiger Pause haben in der zweiten Hälfte weniger Tab-Wechsel.", maiRecTitle: "Zuerst den Lernplatz verbessern, schwere Arbeit vermeiden.", maiRecText: "Wenig Licht und kurzer Schlaf senken die Bereitschaft. Verbessere das Licht und wiederhole leicht.", maiAction: "Licht verbessert", maiInsight: "Morgens bist du meist wacher. Schwierige Aufgaben passen von 8:00–10:00.", roomFixedTitle: "Der Raum ist besser – heute trotzdem leicht lernen.", roomFixedText: "Das Licht ist angenehm. Schlaf bleibt unter der Basis, daher empfiehlt Sentio noch keine schwere Arbeit.", roomFixedAction: "25 Minuten lesen",
    browserMetric: "{focus}% fokussiert · {tabs} Tab-Wechsel", wearableMetric: "{sleep} Schlaf · {body}", deskMetric: "{lux} lux · {presence}", presentAtDesk: "am Schreibtisch", bodyStable: "Herzfrequenz stabil", bodyBelow: "HRV unter Basis", bodyTired: "wenig Tiefschlaf", factorSleep: "Schlaf", factorHeart: "Herzfrequenz / HRV", factorBrowser: "Browserverhalten", factorRoom: "Lernumgebung", factorLinhSleep: "Über deiner üblichen Schlafdauer.", factorLinhHeart: "Stabil gegenüber deiner Basis.", factorLinhBrowser: "Wenige Unterbrechungen zuletzt.", factorLinhRoom: "Licht und Temperatur passen.", factorNamSleep: "Nahe deinem üblichen Niveau.", factorNamHeart: "HRV unter deiner persönlichen Basis.", factorNamBrowser: "Viele Tab-Wechsel zuletzt.", factorNamRoom: "Geräuschpegel leicht erhöht.", factorMaiSleep: "Nur 4 Stunden 52 Minuten Schlaf.", factorMaiHeart: "Ruhepuls höher als üblich.", factorMaiBrowser: "Wenige Wechsel beim Lesen.", factorMaiRoom: "Nur 96 lux Licht.", allGoodTitle: "Alles ist stabil.", allGoodText: "Sentio bleibt ruhig, solange du gut fokussiert bist.", resetTitle: "Kurze Pause?", resetText: "Die Tab-Wechsel steigen. Schau weg, trink Wasser und kehre in 10 Minuten zurück.", roomNudgeTitle: "Dein Lernplatz ist zu dunkel.", roomNudgeText: "Erhöhe das Licht, bevor du weitermachst.", okay: "Verstanden", startReset: "Pause starten", fixed: "Verbessert",
    progressLinhTitle: "Linhs Lernrhythmus", progressNamTitle: "Nams Lernrhythmus", progressMaiTitle: "Mais Lernrhythmus", interruptionsHeadline: "Weniger Unterbrechungen", tabsHeadline: "Weniger unbewusste Tab-Wechsel", lightHeadline: "Mehr Sitzungen in passender Umgebung", interruptionUnit: "Unterbrechungen / Sitzung", tabsUnit: "Tab-Wechsel / Sitzung", lightUnit: "gut beleuchtete Sitzungen", linhProgressNote: "Linh zwang sich nicht länger zu sitzen; sie begann zur besseren Zeit und wurde seltener herausgerissen.", namProgressNote: "Nam lernte rechtzeitig zu pausieren, wodurch die zweite Hälfte stabiler wurde.", maiProgressNote: "Mai verlagerte schwere Aufgaben auf den Morgen und korrigierte vor dem Lernen das Licht.", outcomeLinh: "Unterbrechungen sinken", outcomeNam: "Tab-Wechsel sinken", outcomeMai: "Gutes Licht steigt", outcomeLinhDesc: "9 → 3 pro Sitzung", outcomeNamDesc: "31 → 12 pro Sitzung", outcomeMaiDesc: "40% → 86% der Sitzungen", signalLinh: "Stabiler Körperrhythmus und Umgebung", signalNam: "18 Tab-Wechsel + niedrige HRV", signalMai: "4h52 Schlaf + 96 lux", decisionLinh: "Weiterlernen", decisionNam: "10 Minuten Pause", decisionMai: "Lernumgebung verbessern", recommendation: "Empfehlung", filmLinhChange: "Seltener durch Handymeldungen abgelenkt.", filmNamChange: "Pausiert rechtzeitig statt Tabs zu wechseln.", filmMaiChange: "Schwere Arbeit morgens und besseres Licht.", timerRunning: "Sentio hält den Rhythmus mit dir", timerPaused: "Pausiert – komm zurück, wenn du bereit bist", resetTimerLabel: "Pause läuft", roomImproved: "Licht verbessert", sourceGood: "Gut", sourceWatch: "Beobachten", sourceAttention: "Aktion nötig"
  }
};


const extraTranslations = {
  vi: {
    brandByTeam: 'by Rich Asians',
    createdBy: 'Thực hiện bởi',
    builtByLabel: 'Thực hiện bởi',
    builtByTeam: 'Rich Asians',
    contactHelp: 'Liên hệ demo và góp ý',
    contactFacebook: 'Liên hệ Facebook',
    contactShort: 'Liên hệ',
    healthSheetLabel: 'Mô phỏng kết nối wearable',
    healthSheetTitle: 'App sức khỏe & đồng hồ',
    healthSheetIntro: 'Sentio có thể nhận dữ liệu từ đồng hồ thông minh thông qua app sức khỏe trên điện thoại.',
    healthBridgeLabel: 'Cầu nối dữ liệu',
    healthBridgeTitle: 'Smartwatch → App sức khỏe → Sentio',
    healthBridgeIntro: 'Phần này mô phỏng cách dữ liệu từ đồng hồ được đồng bộ sang điện thoại rồi đẩy vào Sentio.',
    syncedJustNow: 'Vừa đồng bộ xong',
    watchDevice: 'Đồng hồ thông minh',
    watchConnected: 'Đã kết nối',
    phoneHealthApp: 'App sức khỏe trên điện thoại',
    healthAppLinked: 'Đã liên kết',
    readyToUse: 'Sẵn sàng sử dụng',
    sleepMetricLabel: 'Giấc ngủ',
    restingHrLabel: 'Nhịp tim nghỉ',
    hrvLabel: 'HRV',
    stressLabel: 'Tín hiệu stress',
    fromWatchData: 'Từ dữ liệu wearable',
    demoIntegrationTitle: 'Lưu ý về demo kết nối',
    demoIntegrationCopy: 'Trong prototype, Browser và ESP32 có thể nhận dữ liệu thật. Phần wearable đang dùng dữ liệu mô phỏng qua cầu nối app sức khỏe để thể hiện trải nghiệm đồng bộ với đồng hồ.',
    healthLinkedShort: 'Đã liên kết app sức khỏe',
    stressLow: 'Thấp',
    stressMedium: 'Trung bình',
    stressHigh: 'Cao',
    withinBaseline: 'Trong baseline',
    belowBaselineShort: 'Dưới baseline',
    elevated: 'Cao hơn thường ngày'
  },
  en: {
    brandByTeam: 'by Rich Asians',
    builtByLabel: 'Built by',
    builtByTeam: 'Rich Asians',
    contactHelp: 'For demo inquiries and feedback',
    contactFacebook: 'Contact on Facebook',
    contactShort: 'Contact',
    healthSheetLabel: 'Wearable sync demo',
    healthSheetTitle: 'Health app & smartwatch',
    healthSheetIntro: 'Sentio can receive data from a smartwatch through a phone health app.',
    healthBridgeLabel: 'Data bridge',
    healthBridgeTitle: 'Smartwatch → Health app → Sentio',
    healthBridgeIntro: 'This section simulates how watch data is synced to the phone and then passed into Sentio.',
    syncedJustNow: 'Synced just now',
    watchDevice: 'Smartwatch',
    watchConnected: 'Connected',
    phoneHealthApp: 'Phone health app',
    healthAppLinked: 'Linked',
    readyToUse: 'Ready to use',
    sleepMetricLabel: 'Sleep',
    restingHrLabel: 'Resting HR',
    hrvLabel: 'HRV',
    stressLabel: 'Stress signal',
    fromWatchData: 'From wearable data',
    demoIntegrationTitle: 'Demo integration note',
    demoIntegrationCopy: 'In this prototype, Browser and ESP32 can use live data. Wearable data is simulated through a health-app bridge to show how a real smartwatch integration would work.',
    healthLinkedShort: 'Health app linked',
    stressLow: 'Low',
    stressMedium: 'Medium',
    stressHigh: 'High',
    withinBaseline: 'Within baseline',
    belowBaselineShort: 'Below baseline',
    elevated: 'Above usual'
  }
};
Object.entries(extraTranslations).forEach(([lang, values]) => Object.assign(translations[lang] || (translations[lang] = {}), values));

const greetingTranslations = {
  vi: { greetingMorning: 'Chào buổi sáng', greetingAfternoon: 'Chào buổi chiều', greetingEvening: 'Chào buổi tối', greetingLateNight: 'Chào bạn' },
  en: { greetingMorning: 'Good morning', greetingAfternoon: 'Good afternoon', greetingEvening: 'Good evening', greetingLateNight: 'Hello' },
  es: { greetingMorning: 'Buenos días', greetingAfternoon: 'Buenas tardes', greetingEvening: 'Buenas noches', greetingLateNight: 'Hola' },
  fr: { greetingMorning: 'Bonjour', greetingAfternoon: 'Bon après-midi', greetingEvening: 'Bonsoir', greetingLateNight: 'Bonjour' },
  zh: { greetingMorning: '早上好', greetingAfternoon: '下午好', greetingEvening: '晚上好', greetingLateNight: '你好' },
  ja: { greetingMorning: 'おはようございます', greetingAfternoon: 'こんにちは', greetingEvening: 'こんばんは', greetingLateNight: 'こんにちは' },
  de: { greetingMorning: 'Guten Morgen', greetingAfternoon: 'Guten Tag', greetingEvening: 'Guten Abend', greetingLateNight: 'Hallo' }
};
Object.entries(greetingTranslations).forEach(([lang, values]) => Object.assign(translations[lang] || (translations[lang] = {}), values));

const companionTranslations = {
  vi: { companionIntro:'Sentio đã tổng hợp nhịp cơ thể, hành vi số và môi trường để chọn một bước tiếp theo.', todaysDecision:'Quyết định hôm nay', decisionConfidence:'Độ tin cậy của quyết định', behindDecision:'Đứng sau quyết định', threeSignalsHuman:'Digital · Body · Environment', digitalActivity:'Hoạt động số', bodyStatus:'Trạng thái cơ thể', studyEnvironment:'Môi trường học', todayStory:'Câu chuyện hôm nay', whatSentioNoticed:'Sentio đã nhận thấy gì?', learningYou:'Sentio đang học nhịp của bạn', timelineWake:'Thức dậy', timelineSync:'Đồng bộ cơ thể', timelineSense:'Nhận diện môi trường', timelineDecision:'Tạo quyết định', baselineEstablished:'Đã thiết lập', baselineBuilding:'Đang xây dựng', accuracyImproving:'Độ chính xác đang cải thiện', scoreVsYesterday:'{value} so với hôm qua' },
  en: { companionIntro:'Sentio combined your body rhythm, digital behavior, and environment to choose one next step.', todaysDecision:"Today's decision", decisionConfidence:'Decision confidence', behindDecision:'Behind the decision', threeSignalsHuman:'Digital · Body · Environment', digitalActivity:'Digital activity', bodyStatus:'Body status', studyEnvironment:'Study environment', todayStory:"Today's story", whatSentioNoticed:'What did Sentio notice?', learningYou:'Sentio is learning your rhythm', timelineWake:'Wake up', timelineSync:'Body synced', timelineSense:'Environment detected', timelineDecision:'Decision generated', baselineEstablished:'Established', baselineBuilding:'Building', accuracyImproving:'Accuracy improving', scoreVsYesterday:'{value} vs yesterday' },
  es: { companionIntro:'Sentio combinó tu ritmo corporal, actividad digital y entorno para elegir el siguiente paso.', todaysDecision:'Decisión de hoy', decisionConfidence:'Confianza de la decisión', behindDecision:'Detrás de la decisión', threeSignalsHuman:'Digital · Cuerpo · Entorno', digitalActivity:'Actividad digital', bodyStatus:'Estado corporal', studyEnvironment:'Entorno de estudio', todayStory:'Historia de hoy', whatSentioNoticed:'¿Qué notó Sentio?', learningYou:'Sentio aprende tu ritmo', timelineWake:'Despertar', timelineSync:'Cuerpo sincronizado', timelineSense:'Entorno detectado', timelineDecision:'Decisión creada', baselineEstablished:'Establecida', baselineBuilding:'Construyendo', accuracyImproving:'Mejora la precisión', scoreVsYesterday:'{value} vs. ayer' },
  fr: { companionIntro:'Sentio a combiné votre rythme corporel, votre activité numérique et votre environnement pour choisir la prochaine étape.', todaysDecision:"Décision du jour", decisionConfidence:'Confiance de la décision', behindDecision:'Derrière la décision', threeSignalsHuman:'Numérique · Corps · Environnement', digitalActivity:'Activité numérique', bodyStatus:'État du corps', studyEnvironment:"Environnement d'étude", todayStory:"L'histoire du jour", whatSentioNoticed:'Qu’a remarqué Sentio ?', learningYou:'Sentio apprend votre rythme', timelineWake:'Réveil', timelineSync:'Corps synchronisé', timelineSense:'Environnement détecté', timelineDecision:'Décision créée', baselineEstablished:'Établie', baselineBuilding:'Construction', accuracyImproving:'Précision en hausse', scoreVsYesterday:'{value} vs hier' },
  zh: { companionIntro:'Sentio 综合身体节律、数字行为和学习环境，为你选择下一步。', todaysDecision:'今日决定', decisionConfidence:'决定可信度', behindDecision:'决定依据', threeSignalsHuman:'数字 · 身体 · 环境', digitalActivity:'数字活动', bodyStatus:'身体状态', studyEnvironment:'学习环境', todayStory:'今日故事', whatSentioNoticed:'Sentio 发现了什么？', learningYou:'Sentio 正在学习你的节律', timelineWake:'起床', timelineSync:'身体同步', timelineSense:'环境识别', timelineDecision:'生成决定', baselineEstablished:'已建立', baselineBuilding:'建立中', accuracyImproving:'准确度提升中', scoreVsYesterday:'较昨天 {value}' },
  ja: { companionIntro:'Sentioが身体リズム、デジタル行動、環境を統合し、次の一歩を選びました。', todaysDecision:'今日の判断', decisionConfidence:'判断の信頼度', behindDecision:'判断の根拠', threeSignalsHuman:'デジタル · 身体 · 環境', digitalActivity:'デジタル活動', bodyStatus:'身体の状態', studyEnvironment:'学習環境', todayStory:'今日のストーリー', whatSentioNoticed:'Sentioが気づいたこと', learningYou:'Sentioがあなたのリズムを学習中', timelineWake:'起床', timelineSync:'身体データ同期', timelineSense:'環境検出', timelineDecision:'判断生成', baselineEstablished:'設定済み', baselineBuilding:'構築中', accuracyImproving:'精度向上中', scoreVsYesterday:'昨日比 {value}' },
  de: { companionIntro:'Sentio kombiniert Körperrhythmus, digitales Verhalten und Umgebung zu einem nächsten Schritt.', todaysDecision:'Heutige Entscheidung', decisionConfidence:'Entscheidungssicherheit', behindDecision:'Hinter der Entscheidung', threeSignalsHuman:'Digital · Körper · Umgebung', digitalActivity:'Digitale Aktivität', bodyStatus:'Körperstatus', studyEnvironment:'Lernumgebung', todayStory:'Heutige Story', whatSentioNoticed:'Was hat Sentio bemerkt?', learningYou:'Sentio lernt deinen Rhythmus', timelineWake:'Aufstehen', timelineSync:'Körper synchronisiert', timelineSense:'Umgebung erkannt', timelineDecision:'Entscheidung erstellt', baselineEstablished:'Etabliert', baselineBuilding:'Im Aufbau', accuracyImproving:'Genauigkeit steigt', scoreVsYesterday:'{value} vs. gestern' }
};
Object.entries(companionTranslations).forEach(([lang, values]) => Object.assign(translations[lang] || (translations[lang] = {}), values));

const productTranslations = {
  vi: { quickCheckin:'Check-in nhanh', checkinHelp:'Một chạm giúp Sentio hiểu trạng thái chủ quan của bạn tốt hơn.', moodGreat:'Rất ổn', moodOkay:'Bình thường', moodTired:'Hơi mệt', skipForNow:'Để sau', selfReportFactorLabel:'Tự đánh giá hôm nay', selfReportDetail:'Bạn tự báo cáo: {mood}', currentMission:'Nhiệm vụ hiện tại', stayWithOneThing:'Ở lại với một việc.', thisWeek:'Tuần này', progressTitleNew:'Bạn đang học đúng nhịp hơn.', progressSubtitleNew:'Những thay đổi nhỏ trong quá trình học, không phải lời hứa về điểm số.', biggestChange:'Thay đổi nổi bật nhất', averageReadiness:'Readiness trung bình', consistentDays:'Ngày giữ đúng nhịp', outOfSeven:'trên 7 ngày', recentRhythm:'Nhịp gần đây', stableMore:'Ổn định hơn', analyzingSignals:'Đang đọc tín hiệu hôm nay…', readyResult:'Sẵn sàng.', todayQuestion:'Bạn cảm thấy thế nào hôm nay?' },
  en: { quickCheckin:'Quick check-in', checkinHelp:'One tap helps Sentio understand how you feel today.', moodGreat:'Great', moodOkay:'Okay', moodTired:'Tired', skipForNow:'Not now', selfReportFactorLabel:'Today\'s self-report', selfReportDetail:'You reported: {mood}', currentMission:'Current mission', stayWithOneThing:'Stay with one thing.', thisWeek:'This week', progressTitleNew:'You are learning at a better rhythm.', progressSubtitleNew:'Small improvements in the learning process, not promises about grades.', biggestChange:'Biggest change', averageReadiness:'Average readiness', consistentDays:'Well-timed days', outOfSeven:'out of 7 days', recentRhythm:'Recent rhythm', stableMore:'More stable', analyzingSignals:'Reading today’s signals…', readyResult:'Ready.', todayQuestion:'How do you feel today?' },
  es: { quickCheckin:'Registro rápido', checkinHelp:'Un toque ayuda a Sentio a entender cómo te sientes hoy.', moodGreat:'Muy bien', moodOkay:'Normal', moodTired:'Cansado', skipForNow:'Ahora no', currentMission:'Misión actual', stayWithOneThing:'Quédate con una sola tarea.', thisWeek:'Esta semana', progressTitleNew:'Estás aprendiendo con un ritmo mejor.', progressSubtitleNew:'Pequeñas mejoras en el proceso, no promesas sobre notas.', biggestChange:'Mayor cambio', averageReadiness:'Preparación media', consistentDays:'Días con buen ritmo', outOfSeven:'de 7 días', recentRhythm:'Ritmo reciente', stableMore:'Más estable', analyzingSignals:'Leyendo las señales de hoy…', readyResult:'Listo.', todayQuestion:'¿Cómo te sientes hoy?' },
  fr: { quickCheckin:'Check-in rapide', checkinHelp:'Un geste aide Sentio à comprendre votre état du jour.', moodGreat:'Très bien', moodOkay:'Normal', moodTired:'Fatigué', skipForNow:'Plus tard', currentMission:'Mission actuelle', stayWithOneThing:'Restez sur une seule tâche.', thisWeek:'Cette semaine', progressTitleNew:'Votre rythme d’apprentissage s’améliore.', progressSubtitleNew:'De petits progrès dans le processus, sans promesse sur les notes.', biggestChange:'Changement principal', averageReadiness:'Readiness moyenne', consistentDays:'Jours bien rythmés', outOfSeven:'sur 7 jours', recentRhythm:'Rythme récent', stableMore:'Plus stable', analyzingSignals:'Lecture des signaux du jour…', readyResult:'Prêt.', todayQuestion:'Comment vous sentez-vous aujourd’hui ?' },
  zh: { quickCheckin:'快速签到', checkinHelp:'轻触一下，帮助 Sentio 更好地理解你今天的主观状态。', moodGreat:'很好', moodOkay:'一般', moodTired:'有点累', skipForNow:'稍后再说', currentMission:'当前任务', stayWithOneThing:'只专注一件事。', thisWeek:'本周', progressTitleNew:'你的学习节律正在改善。', progressSubtitleNew:'关注学习过程中的小变化，不承诺分数提升。', biggestChange:'最大变化', averageReadiness:'平均准备度', consistentDays:'节律良好的天数', outOfSeven:'共 7 天', recentRhythm:'近期节律', stableMore:'更加稳定', analyzingSignals:'正在读取今天的信号…', readyResult:'已就绪。', todayQuestion:'你今天感觉怎么样？' },
  ja: { quickCheckin:'クイックチェックイン', checkinHelp:'ワンタップで、今日の主観的な状態を Sentio に伝えられます。', moodGreat:'とても良い', moodOkay:'普通', moodTired:'少し疲れた', skipForNow:'後で', currentMission:'現在のミッション', stayWithOneThing:'一つのことに集中しましょう。', thisWeek:'今週', progressTitleNew:'より良いリズムで学べています。', progressSubtitleNew:'点数の保証ではなく、学習過程の小さな変化です。', biggestChange:'最も大きな変化', averageReadiness:'平均 Readiness', consistentDays:'良いリズムの日', outOfSeven:'7日中', recentRhythm:'最近のリズム', stableMore:'より安定', analyzingSignals:'今日のシグナルを確認中…', readyResult:'準備完了。', todayQuestion:'今日はどんな気分ですか？' },
  de: { quickCheckin:'Kurzer Check-in', checkinHelp:'Ein Tipp hilft Sentio, dein heutiges Gefühl besser zu verstehen.', moodGreat:'Sehr gut', moodOkay:'Okay', moodTired:'Müde', skipForNow:'Später', currentMission:'Aktuelle Mission', stayWithOneThing:'Bleib bei einer Sache.', thisWeek:'Diese Woche', progressTitleNew:'Du lernst in einem besseren Rhythmus.', progressSubtitleNew:'Kleine Verbesserungen im Lernprozess, keine Notenversprechen.', biggestChange:'Größte Veränderung', averageReadiness:'Durchschnittliche Readiness', consistentDays:'Gut getimte Tage', outOfSeven:'von 7 Tagen', recentRhythm:'Letzter Rhythmus', stableMore:'Stabiler', analyzingSignals:'Heutige Signale werden gelesen…', readyResult:'Bereit.', todayQuestion:'Wie fühlst du dich heute?' }
};
Object.assign(productTranslations.vi, {
  dynamicReasoningLabel: 'Giải thích động',
  reasoningNoData: 'Sentio chưa có đủ dữ liệu mới để giải thích quyết định. Hệ thống không tự điền tín hiệu còn thiếu.',
  reasoningNeutral: 'Các tín hiệu đang có đều gần nhịp tham chiếu; chưa có yếu tố nào làm Readiness Score thay đổi đáng kể.',
  reasoningSingleNegative: '{primary} là yếu tố kéo điểm xuống mạnh nhất ({primaryPoints} điểm). Vì vậy Sentio ưu tiên “{action}”.',
  reasoningTwoNegative: '{primary} ({primaryPoints} điểm) và {secondary} ({secondaryPoints} điểm) là hai yếu tố kéo điểm xuống mạnh nhất. Vì vậy Sentio ưu tiên “{action}”.',
  reasoningSinglePositive: '{primary} đang hỗ trợ điểm mạnh nhất (+{primaryPoints} điểm). Các tín hiệu còn lại chưa lệch đáng kể, nên Sentio ưu tiên “{action}”.',
  reasoningMixed: '{negative} đang kéo điểm xuống {negativePoints} điểm, trong khi {positive} bù lại +{positivePoints} điểm. Yếu tố chi phối vẫn là {negative}, nên Sentio ưu tiên “{action}”.',
  reasoningMixedPositive: '{positive} đang hỗ trợ +{positivePoints} điểm, trong khi {negative} làm giảm {negativePoints} điểm. Tác động tích cực vẫn chi phối, nên Sentio ưu tiên “{action}”.',
  readinessTrendLabel: 'Readiness Score 7 ngày',
  readinessTrendTitle: 'Xu hướng từ các phiên đã hoàn thành',
  realSessionData: 'Dữ liệu phiên thật',
  previewSessionData: 'Dữ liệu mô phỏng',
  chartAverage: 'Trung bình',
  chartSessions: 'Phiên hợp lệ',
  chartActiveDays: 'Ngày có dữ liệu',
  chartEmptyState: 'Hoàn thành một phiên có Readiness Score để bắt đầu biểu đồ.',
  exportWeeklyPdf: 'Lưu PDF',
  exportWeeklyPng: 'Tải ảnh PNG',
  reportNoData: 'Chưa có phiên hợp lệ để xuất báo cáo tuần.',
  reportPdfReady: 'Hộp thoại in đã mở — chọn “Lưu dưới dạng PDF”.',
  reportPngReady: 'Đã tạo ảnh báo cáo tuần.',
  weeklyReportTitle: 'Báo cáo nhịp học 7 ngày',
  weeklyReportSubtitle: 'Readiness Score và thay đổi trong quá trình tự học',
  reportSourceReal: 'Tổng hợp từ các phiên Sentio đã hoàn thành.',
  reportSourcePreview: 'Báo cáo dùng dữ liệu mô phỏng để minh họa.',
  reportDisclaimer: 'Sentio hỗ trợ quá trình tự học và không phải công cụ chẩn đoán y khoa.'
});
Object.assign(productTranslations.en, {
  dynamicReasoningLabel: 'Dynamic explanation',
  reasoningNoData: 'Sentio does not have enough fresh data to explain this decision and will not invent missing signals.',
  reasoningNeutral: 'Available signals are close to your reference rhythm; no factor materially changed the Readiness Score.',
  reasoningSingleNegative: '{primary} is the strongest drag on the score ({primaryPoints} points), so Sentio prioritizes “{action}”.',
  reasoningTwoNegative: '{primary} ({primaryPoints} points) and {secondary} ({secondaryPoints} points) are the two strongest drags, so Sentio prioritizes “{action}”.',
  reasoningSinglePositive: '{primary} provides the strongest support (+{primaryPoints} points). Other signals are not materially off rhythm, so Sentio prioritizes “{action}”.',
  reasoningMixed: '{negative} lowers the score by {negativePoints} points while {positive} offsets +{positivePoints}. {negative} still dominates, so Sentio prioritizes “{action}”.',
  reasoningMixedPositive: '{positive} adds +{positivePoints} points while {negative} lowers {negativePoints}. The positive effect still dominates, so Sentio prioritizes “{action}”.',
  readinessTrendLabel: '7-day Readiness Score',
  readinessTrendTitle: 'Trend from completed sessions',
  realSessionData: 'Real session data',
  previewSessionData: 'Simulated data',
  chartAverage: 'Average',
  chartSessions: 'Eligible sessions',
  chartActiveDays: 'Days with data',
  chartEmptyState: 'Complete a session with a Readiness Score to start the chart.',
  exportWeeklyPdf: 'Save PDF',
  exportWeeklyPng: 'Download PNG',
  reportNoData: 'There are no eligible sessions to export yet.',
  reportPdfReady: 'The print dialog is open — choose “Save as PDF”.',
  reportPngReady: 'Weekly report image created.',
  weeklyReportTitle: '7-day learning rhythm report',
  weeklyReportSubtitle: 'Readiness Score and changes in the self-study process',
  reportSourceReal: 'Aggregated from completed Sentio sessions.',
  reportSourcePreview: 'This report uses simulated data for demonstration.',
  reportDisclaimer: 'Sentio supports self-study and is not a medical diagnostic tool.'
});
Object.entries(productTranslations).forEach(([lang, values]) => Object.assign(translations[lang] || (translations[lang] = {}), values));

const v6Translations = {
  vi: {
    personalAccount: 'Tài khoản cá nhân', demoScenario: 'Kịch bản mô phỏng', personalRole: 'Nhịp học của bạn', createdBy: 'Được tạo bởi', notDetected: 'Không phát hiện',
    provisionalScore: 'Ước tính trong giai đoạn học baseline', trainingTitle: 'Sentio đang học nhịp của bạn',
    trainingText: 'Điểm hôm nay là ước tính. Độ tin cậy sẽ tăng khi Sentio có thêm ngày và nguồn dữ liệu.',
    coverageLabel: 'Độ phủ dữ liệu', sourceFresh: 'Vừa cập nhật', sourceMinutesAgo: '{minutes} phút trước', sourceHoursAgo: '{hours} giờ trước',
    sourceMissing: 'Chưa có dữ liệu', connectionConnected: 'Đã kết nối', connectionDemo: 'Nguồn mô phỏng',
    connectionPermission: 'Cần cấp quyền', connectionDisconnected: 'Chưa kết nối', connectionConnecting: 'Đang kết nối…', connectionError: 'Kết nối lỗi', connectionPaired: 'Đã ghép đôi, chưa có dữ liệu',
    liveInPage: 'Theo dõi trong trang', bridgeDemo: 'Cầu nối Health mô phỏng', bluetoothLive: 'Cảm biến Bluetooth', bluetoothPaired: 'Bluetooth chờ cấu hình dữ liệu', demoFeed: 'Luồng dữ liệu mô phỏng', selfReported: 'Người dùng xác nhận',
    impactLabel: 'Tác động {value}', fusionComplete: 'Ba nguồn đang cùng tạo quyết định này.',
    fusionPartial: '{count}/3 nguồn đang khả dụng. Sentio đã giảm độ tin cậy thay vì đoán dữ liệu còn thiếu.',
    missingSignals: 'Thiếu tín hiệu: {sources}. Điểm số chỉ dựa trên dữ liệu đang có.', noMissingSignals: 'Đủ ba nhóm tín hiệu cho quyết định này.',
    decisionBaseline: 'Nhịp tham chiếu', factorComparison: '{current} · thường ngày {baseline}',
    factorUnavailable: 'Nguồn này chưa sẵn sàng.', personalReadyTitle: 'Đây là một khung tập trung tốt.',
    personalReadyText: 'Các tín hiệu đang có phù hợp với nhịp thường ngày của bạn. Hãy dành phiên này cho một việc quan trọng.',
    personalLightTitle: 'Giữ phiên học nhẹ và rõ mục tiêu.', personalLightText: 'Một vài tín hiệu đang lệch khỏi nhịp thường ngày. Chọn một việc vừa sức và kiểm tra lại sau.',
    personalResetTitle: 'Nghỉ một nhịp trước khi tiếp tục.', personalResetText: 'Mức tập trung đang giảm. Một quãng nghỉ ngắn sẽ hữu ích hơn việc cố ngồi lâu.',
    personalInsufficientTitle: 'Cần thêm tín hiệu trước khi gợi ý.', personalInsufficientText: 'Sentio chưa có dữ liệu đủ mới để đánh giá trạng thái hiện tại. Hãy bắt đầu một phiên Digital hoặc kết nối thêm một nguồn.', personalInsufficientAction: 'Thiết lập nguồn dữ liệu', insufficient: 'Đang chờ dữ liệu',
    personalLearningTitle: 'Bắt đầu một phiên để tạo nhịp tham chiếu.', personalLearningText: 'Nguồn đã sẵn sàng nhưng chưa có đủ lịch sử cá nhân để so sánh. Phiên đầu tiên sẽ giúp Sentio học baseline mà không gán điểm vội.', startBaselineAction: 'Bắt đầu phiên tạo baseline', resumeSessionAction: 'Tiếp tục phiên đang dở', sessionNotStarted: 'Hãy bắt đầu phiên trước khi hoàn tất.',
    pageDepartures: 'Lần rời trang', continuityEstimate: 'Ước tính duy trì tập trung', sessionTime: 'Thời gian trong phiên', departuresHeadline: 'Ít rời trang hơn', digitalProxyMetric: '{focus}% duy trì ước tính · {tabs} lần rời trang',
    personalEnvironmentTitle: 'Chỉnh góc học trước khi bắt đầu.', personalEnvironmentText: 'Ánh sáng đang thấp hơn mức phù hợp. Hãy tăng sáng rồi để Sentio đánh giá lại.',
    startFocusAction: 'Bắt đầu phiên tập trung', startLightAction: 'Bắt đầu phiên nhẹ', startResetAction: 'Bắt đầu nghỉ 10 phút', fixEnvironmentAction: 'Tôi đã chỉnh ánh sáng',
    storyPositive: 'đang hỗ trợ quyết định', storyNegative: 'đang làm giảm readiness',
    nudgeQuietReason: 'Chưa có tín hiệu nào cần can thiệp.', nudgeSuggestionTitle: 'Có dấu hiệu xao nhãng nhẹ.',
    nudgeSuggestionText: 'Bạn đang rời nhiệm vụ thường xuyên hơn. Hãy thu gọn về một việc trong vài phút tới.',
    nudgeUrgentTitle: 'Dừng một nhịp để lấy lại tập trung.', nudgeUrgentText: 'Số lần rời trang hoặc ước tính duy trì tập trung đã vượt ngưỡng nhắc nhẹ.',
    finishSessionAction: 'Dừng phiên đúng lúc', resetComplete: 'Quãng nghỉ hoàn tất', resetCompleteTitle: 'Bạn đã dành một nhịp để hồi phục.', recoveryTime: 'Thời gian hồi phục',
    nudgeEnvironmentReason: 'Ánh sáng thấp được duy trì trong lúc bạn có mặt tại bàn.', nudgeDigitalReason: '{tabs} lần rời trang · duy trì ước tính {focus}%.',
    dismiss: 'Để sau', nudgeDismissed: 'Đã ẩn lời nhắc trong thời gian cooldown.',
    eventSessionStarted: 'Bắt đầu phiên', eventTabSwitch: 'Rời trang được ghi nhận', eventNudge: 'Sentio đưa ra lời nhắc', eventDismissed: 'Đã để lời nhắc sang một bên', eventSessionFinished: 'Kết thúc phiên',
    sourceDigitalTitle: 'Hoạt động số', sourceDigitalIntro: 'Theo dõi trong trang chỉ ghi nhận trạng thái hiện/ẩn và số lần rời trang trong phiên đang chạy.',
    sourceBodyTitle: 'Trạng thái cơ thể', sourceBodyIntro: 'Bản web minh họa luồng tổng hợp từ ứng dụng sức khỏe; không đọc HealthKit hoặc Health Connect trực tiếp.',
    sourceEnvironmentTitle: 'Môi trường học', sourceEnvironmentIntro: 'Kết nối cảm biến Bluetooth khi trình duyệt hỗ trợ; nếu không, Sentio ghi rõ khi dùng luồng mô phỏng.',
    sourcePrivacyDigital: 'Chỉ lưu tổng hợp theo phiên, không lưu lịch sử duyệt web hay địa chỉ trang.', sourcePrivacyBody: 'Không lưu luồng sinh trắc học thô trong trình duyệt.', sourcePrivacyEnvironment: 'Chỉ lưu lux tổng hợp, trạng thái hiện diện và thời điểm cập nhật.',
    connectSource: 'Kết nối nguồn', disconnectSource: 'Ngắt kết nối', connectHealth: 'Bật cầu nối demo', disconnectHealth: 'Ngắt cầu nối',
    digitalConnectedToast: 'Theo dõi trong trang đã bật. Sentio không đọc nội dung tab khác.', environmentDemoToast: 'Trình duyệt không hỗ trợ Bluetooth phù hợp; đang dùng luồng mô phỏng có nhãn rõ ràng.',
    environmentConnectedToast: 'Đã kết nối cảm biến Bluetooth.', environmentPairedToast: 'Đã ghép đôi Bluetooth. Cần cấu hình service của ESP32 trước khi nhận dữ liệu trực tiếp.', environmentAwaitingSample: 'Đã ghi nhận bạn chỉnh ánh sáng. Sentio sẽ chờ mẫu cảm biến mới thay vì tự tạo một giá trị lux.', connectionCancelledToast: 'Kết nối chưa được hoàn tất.', healthDemoToast: 'Đã bật cầu nối Health mô phỏng; đây không phải dữ liệu thiết bị trực tiếp.',
    aggregateExported: 'Đã xuất dữ liệu tổng hợp.', connectionsRevoked: 'Đã thu hồi các kết nối dữ liệu.', dataDeleted: 'Dữ liệu cá nhân trên trình duyệt đã được xóa.',
    collectingWeekly: 'Đang thu thập dữ liệu tuần', collectingWeeklyText: 'Hoàn thành ít nhất 3 phiên để Sentio tìm ra thay đổi có ý nghĩa.', previewData: 'Dữ liệu mẫu xem trước',
    weeklyInterruptionsLabel: 'Lần rời trang / phiên', weeklyRhythmLabel: 'Phiên đúng nhịp', weeklyHealthyStopsLabel: 'Dừng đúng lúc',
    insightTabs: 'Bạn trung bình rời trang {value} lần mỗi phiên.', insightRhythm: '{value}% phiên bắt đầu trong trạng thái phù hợp.', insightStops: '{value} lần dừng đúng lúc cũng được tính là tiến bộ.',
    noInsightYet: 'Chưa đủ dữ liệu để kết luận — Sentio sẽ không tạo xu hướng giả.', onboardingStep: 'Bước {current} / 3', onboardingNameRequired: 'Hãy nhập tên bạn muốn Sentio sử dụng.', onboardingConsentRequired: 'Bạn cần đồng ý trước khi hoàn tất thiết lập.',
    setupReady: 'Sẵn sàng thiết lập', setupLater: 'Sẽ cấp quyền sau', setupSelected: 'Đã chọn', onboardingPreviewToast: 'Đang xem dashboard với dữ liệu mẫu có nhãn mô phỏng.', onboardingCompleteToast: 'Thiết lập hoàn tất. Sentio bắt đầu ngày baseline đầu tiên.',
    baselineDayText: 'Ngày {day} / 7', establishedScoreComparison: '{value} so với nhịp tham chiếu',
    stoppedOnTimeInsight: 'Bạn đã dừng khi chất lượng phiên giảm — đây cũng là một lựa chọn đúng nhịp.',
    dataModeLabel: 'Chế độ dữ liệu', lastUpdatedLabel: 'Cập nhật', currentValueLabel: 'Giá trị hiện tại'
  },
  en: {
    personalAccount: 'Personal account', demoScenario: 'Demo scenario', personalRole: 'Your learning rhythm', createdBy: 'Created by', notDetected: 'Not detected',
    provisionalScore: 'Estimate while your baseline is being learned', trainingTitle: 'Sentio is learning your rhythm',
    trainingText: 'Today’s score is provisional. Confidence grows with more eligible days and connected sources.',
    coverageLabel: 'Data coverage', sourceFresh: 'Just updated', sourceMinutesAgo: '{minutes} min ago', sourceHoursAgo: '{hours} hr ago',
    sourceMissing: 'No data yet', connectionConnected: 'Connected', connectionDemo: 'Simulated source',
    connectionPermission: 'Permission needed', connectionDisconnected: 'Not connected', connectionConnecting: 'Connecting…', connectionError: 'Connection error', connectionPaired: 'Paired, awaiting data',
    liveInPage: 'In-page tracking', bridgeDemo: 'Simulated health bridge', bluetoothLive: 'Bluetooth sensor', bluetoothPaired: 'Bluetooth awaiting data setup', demoFeed: 'Simulated feed', selfReported: 'User confirmed',
    impactLabel: 'Impact {value}', fusionComplete: 'All three sources contributed to this decision.',
    fusionPartial: '{count}/3 sources are available. Sentio lowered confidence instead of guessing the missing data.',
    missingSignals: 'Missing signals: {sources}. The score only uses available data.', noMissingSignals: 'All three signal groups contributed to this decision.',
    decisionBaseline: 'Reference rhythm', factorComparison: '{current} · usual {baseline}', factorUnavailable: 'This source is not ready.',
    personalReadyTitle: 'This is a good focus window.', personalReadyText: 'Available signals fit your usual rhythm. Use this session for one important task.',
    personalLightTitle: 'Keep this session light and specific.', personalLightText: 'Some signals are outside your usual rhythm. Choose a manageable task and check again later.',
    personalResetTitle: 'Take a short reset before continuing.', personalResetText: 'Focus is falling. A short pause is more useful than forcing more time.',
    personalInsufficientTitle: 'More signals are needed first.', personalInsufficientText: 'Sentio does not have enough fresh data to assess your current state. Start Digital tracking or connect another source.', personalInsufficientAction: 'Set up a data source', insufficient: 'Waiting for data',
    personalLearningTitle: 'Start a session to establish your reference rhythm.', personalLearningText: 'A source is ready, but there is not enough personal history for comparison yet. The first session will teach Sentio without assigning a premature score.', startBaselineAction: 'Start baseline session', resumeSessionAction: 'Resume current session', sessionNotStarted: 'Start the session before finishing it.',
    pageDepartures: 'Page departures', continuityEstimate: 'Continuity estimate', sessionTime: 'Session time', departuresHeadline: 'Fewer page departures', digitalProxyMetric: '{focus}% estimated continuity · {tabs} page departures',
    personalEnvironmentTitle: 'Fix the study space first.', personalEnvironmentText: 'Light is below a comfortable range. Improve it, then let Sentio reassess.',
    startFocusAction: 'Start focus session', startLightAction: 'Start light session', startResetAction: 'Start a 10-minute reset', fixEnvironmentAction: 'I fixed the lighting',
    storyPositive: 'is supporting this decision', storyNegative: 'is lowering readiness',
    nudgeQuietReason: 'No signal currently needs intervention.', nudgeSuggestionTitle: 'A little distraction is building.', nudgeSuggestionText: 'You are leaving the task more often. Narrow back to one thing for the next few minutes.',
    nudgeUrgentTitle: 'Pause briefly to recover focus.', nudgeUrgentText: 'Page departures or estimated continuity crossed the gentle-intervention threshold.',
    finishSessionAction: 'Stop this session', resetComplete: 'Reset complete', resetCompleteTitle: 'You gave yourself a moment to recover.', recoveryTime: 'Recovery time',
    nudgeEnvironmentReason: 'Low light has persisted while you are present at the desk.', nudgeDigitalReason: '{tabs} page departures · {focus}% estimated continuity.',
    dismiss: 'Not now', nudgeDismissed: 'The reminder is hidden for the cooldown period.',
    eventSessionStarted: 'Session started', eventTabSwitch: 'Leaving the page was recorded', eventNudge: 'Sentio offered a reminder', eventDismissed: 'Reminder set aside', eventSessionFinished: 'Session finished',
    sourceDigitalTitle: 'Digital activity', sourceDigitalIntro: 'In-page tracking only records visible/hidden state and page departures during an active session.',
    sourceBodyTitle: 'Body status', sourceBodyIntro: 'The web prototype illustrates an aggregate health-app bridge; it cannot read HealthKit or Health Connect directly.',
    sourceEnvironmentTitle: 'Study environment', sourceEnvironmentIntro: 'Connect a Bluetooth sensor when supported; otherwise Sentio clearly labels its simulated feed.',
    sourcePrivacyDigital: 'Only session aggregates are stored; browsing history and page addresses are never collected.', sourcePrivacyBody: 'Raw biometric streams are not stored in the browser.', sourcePrivacyEnvironment: 'Only aggregate lux, presence, and update time are stored.',
    connectSource: 'Connect source', disconnectSource: 'Disconnect', connectHealth: 'Enable demo bridge', disconnectHealth: 'Disconnect bridge',
    digitalConnectedToast: 'In-page tracking is on. Sentio cannot read content from other tabs.', environmentDemoToast: 'Compatible Bluetooth is unavailable; a clearly labeled simulated feed is being used.',
    environmentConnectedToast: 'Bluetooth sensor connected.', environmentPairedToast: 'Bluetooth paired. Configure the ESP32 service before direct samples can be used.', environmentAwaitingSample: 'Your lighting adjustment was noted. Sentio will wait for a new sensor sample instead of inventing a lux value.', connectionCancelledToast: 'The connection was not completed.', healthDemoToast: 'The simulated Health bridge is on; this is not direct device data.',
    aggregateExported: 'Aggregate data exported.', connectionsRevoked: 'Data connections revoked.', dataDeleted: 'Personal browser data deleted.',
    collectingWeekly: 'Collecting weekly data', collectingWeeklyText: 'Complete at least 3 sessions before Sentio identifies a meaningful change.', previewData: 'Sample preview data',
    weeklyInterruptionsLabel: 'Page departures / session', weeklyRhythmLabel: 'Well-timed sessions', weeklyHealthyStopsLabel: 'Healthy stops',
    insightTabs: 'You average {value} page departures per session.', insightRhythm: '{value}% of sessions started in a suitable state.', insightStops: '{value} timely stops also count as progress.',
    noInsightYet: 'There is not enough data yet—Sentio will not invent a trend.', onboardingStep: 'Step {current} / 3', onboardingNameRequired: 'Enter the name you want Sentio to use.', onboardingConsentRequired: 'Consent is required to finish setup.',
    setupReady: 'Ready to set up', setupLater: 'Permission later', setupSelected: 'Selected', onboardingPreviewToast: 'Previewing the dashboard with clearly labeled sample data.', onboardingCompleteToast: 'Setup complete. Sentio has started baseline day one.',
    baselineDayText: 'Day {day} / 7', establishedScoreComparison: '{value} from your reference rhythm',
    stoppedOnTimeInsight: 'You stopped when session quality dropped—this is also a well-timed choice.',
    dataModeLabel: 'Data mode', lastUpdatedLabel: 'Updated', currentValueLabel: 'Current value'
  }
};
Object.entries(v6Translations).forEach(([lang, values]) => Object.assign(translations[lang] || (translations[lang] = {}), values));

const scopeTranslations = {
  vi: { languageHelp: 'Đổi phần nội dung đã hỗ trợ', checkinHelp: 'Ghi lại cảm nhận để tự nhìn lại và xuất dữ liệu; check-in chưa làm thay đổi Readiness.' },
  en: { languageHelp: 'Change supported interface text', checkinHelp: 'Log how you feel for reflection and export; check-in does not yet change Readiness.' },
  es: { languageHelp: 'Cambiar el texto compatible', checkinHelp: 'Registra cómo te sientes para reflexión y exportación; aún no cambia Readiness.' },
  fr: { languageHelp: 'Changer le texte pris en charge', checkinHelp: 'Notez votre ressenti pour la réflexion et l’export ; cela ne modifie pas encore Readiness.' },
  zh: { languageHelp: '切换已支持的界面文字', checkinHelp: '记录感受用于自我回顾和导出；目前不会改变 Readiness。' },
  ja: { languageHelp: '対応済みの表示テキストを切り替え', checkinHelp: '振り返りと書き出し用に気分を記録します。現時点では Readiness に影響しません。' },
  de: { languageHelp: 'Unterstützte Oberflächentexte wechseln', checkinHelp: 'Gefühl für Reflexion und Export festhalten; Readiness wird dadurch noch nicht verändert.' }
};
Object.entries(scopeTranslations).forEach(([lang, values]) => Object.assign(translations[lang], values));

const contentRevisionTranslations = {
  vi: {
    companionIntro: 'Sentio kết hợp hành vi số, trạng thái cơ thể và môi trường học để đề xuất: học tiếp, nghỉ ngắn hay điều chỉnh góc học.',
    productDefinition: 'Sentio kết hợp hành vi số, trạng thái cơ thể và môi trường học để đề xuất bước tiếp theo phù hợp.',
    systemSubtitle: 'Ba nhóm tín hiệu được kết hợp thành một quyết định dễ hiểu.',
    demoDisclosure: 'Kịch bản mô phỏng để minh họa cách Sentio ra quyết định; không phải kết quả nghiên cứu người dùng.',
    endValueProp: 'Học đúng lúc. Nghỉ đúng lúc. Hiểu nhịp của chính mình.',
    weekSubtitle: 'Ít trì hoãn hơn, bớt cảm giác tội lỗi và hiểu bản thân rõ hơn.',
    gentleAccountability: 'Theo dõi cam kết nhẹ nhàng',
    accountabilityOutcome: 'Theo dõi cam kết dựa trên trạng thái thực',
    threeSignalsHuman: 'Hành vi số · Cơ thể · Môi trường',
    personalBaseline: 'Học nhịp tham chiếu cá nhân',
    personalBaselineLabel: 'Nhịp tham chiếu cá nhân',
    compareBaseline: 'So với nhịp tham chiếu',
    readinessScore: 'Điểm sẵn sàng',
    prototypeModel: 'Mô hình điểm sẵn sàng thử nghiệm.',
    averageReadiness: 'Điểm sẵn sàng trung bình',
    filmMode: 'Trình diễn Sentio',
    showSignalDetails: 'Xem dữ liệu chi tiết',
    hideSignalDetails: 'Thu gọn dữ liệu',
    exploreRhythm: 'Khám phá nhịp của bạn',
    exploreRhythmHelp: 'Insight trong ngày và tiến trình thiết lập nhịp tham chiếu',
    pausePresentation: 'Tạm dừng trình diễn',
    resumePresentation: 'Tiếp tục trình diễn',
    baselineDayText: 'Ngày {day} / 7'
  },
  en: {
    companionIntro: 'Sentio combines digital behavior, body state, and the study environment to suggest whether to continue, pause, or adjust your space.',
    productDefinition: 'Sentio combines digital behavior, body state, and the study environment to suggest the right next step.',
    systemSubtitle: 'Three signal groups become one clear decision.',
    demoDisclosure: 'A simulated scenario illustrating how Sentio decides; not a user-study result.',
    endValueProp: 'Learn at the right time. Pause at the right time. Understand your own rhythm.',
    weekSubtitle: 'Less procrastination, less guilt, and a clearer understanding of your own rhythm.',
    filmMode: 'Present Sentio',
    showSignalDetails: 'View detailed data',
    hideSignalDetails: 'Hide detailed data',
    exploreRhythm: 'Explore your rhythm',
    exploreRhythmHelp: 'Today’s insight and reference-rhythm progress',
    pausePresentation: 'Pause presentation',
    resumePresentation: 'Resume presentation',
    baselineDayText: 'Day {day} / 7'
  },
  es: {
    productDefinition: 'Sentio combina el comportamiento digital, el estado corporal y el entorno de estudio para sugerir el siguiente paso adecuado.',
    systemSubtitle: 'Tres grupos de señales se convierten en una decisión clara.',
    demoDisclosure: 'Escenario simulado para mostrar cómo decide Sentio; no es el resultado de un estudio con usuarios.',
    endValueProp: 'Aprende en el momento adecuado. Descansa en el momento adecuado. Comprende tu propio ritmo.'
  },
  fr: {
    productDefinition: 'Sentio combine le comportement numérique, l’état du corps et l’environnement d’étude pour suggérer la prochaine étape adaptée.',
    systemSubtitle: 'Trois groupes de signaux deviennent une décision claire.',
    demoDisclosure: 'Scénario simulé illustrant la décision de Sentio ; il ne s’agit pas d’un résultat d’étude utilisateur.',
    endValueProp: 'Apprenez au bon moment. Faites une pause au bon moment. Comprenez votre propre rythme.'
  },
  zh: {
    productDefinition: 'Sentio 结合数字行为、身体状态和学习环境，为你建议合适的下一步。',
    systemSubtitle: '三组信号汇聚成一个清晰的决定。',
    demoDisclosure: '此为展示 Sentio 决策方式的模拟情境，并非用户研究结果。',
    endValueProp: '在合适的时间学习。在合适的时间休息。了解自己的节奏。'
  },
  ja: {
    productDefinition: 'Sentio はデジタル行動、身体状態、学習環境を組み合わせ、次に取るべき行動を提案します。',
    systemSubtitle: '3つのシグナル群を、ひとつの分かりやすい判断にまとめます。',
    demoDisclosure: 'Sentio の判断方法を示すシミュレーションであり、ユーザー調査の結果ではありません。',
    endValueProp: '適切な時に学ぶ。適切な時に休む。自分のリズムを理解する。'
  },
  de: {
    productDefinition: 'Sentio kombiniert digitales Verhalten, Körperzustand und Lernumgebung und empfiehlt den passenden nächsten Schritt.',
    systemSubtitle: 'Drei Signalgruppen werden zu einer klaren Entscheidung.',
    demoDisclosure: 'Simuliertes Szenario zur Erklärung der Sentio-Entscheidung; kein Ergebnis einer Nutzerstudie.',
    endValueProp: 'Zur richtigen Zeit lernen. Zur richtigen Zeit pausieren. Den eigenen Rhythmus verstehen.'
  }
};
Object.entries(contentRevisionTranslations).forEach(([lang, values]) => Object.assign(translations[lang], values));

const caseStudyTranslations = {
  vi: {
    profileLinhHelp: 'Phân tâm bởi thông báo',
    openProfile: 'Xem hồ sơ',
    closeProfile: 'Đóng hồ sơ',
    caseStudyLabel: 'Hồ sơ tình huống',
    initialProblem: 'Vấn đề ban đầu',
    learningGoal: 'Mục tiêu',
    sentioSignals: 'Tín hiệu Sentio ghi nhận',
    aiReasoning: 'AI suy luận',
    todayAction: 'Hành động đề xuất',
    afterSevenDays: 'Sau 7 ngày',
    technologyRole: 'Vì sao cần AI + IoT',
    simulatedCaseStudy: 'Dữ liệu mô phỏng, dùng để minh họa logic sản phẩm.',
    digitalSignal: 'Hành vi số',
    bodySignal: 'Cơ thể',
    environmentSignal: 'Môi trường',
    tabSwitches: '{count} lần chuyển tab',
    lightReading: '{lux} lux tại bàn học',
    sleepAndHrv: 'Ngủ {sleep} · HRV {hrv}',
    profileLinhProblem: 'Thông báo điện thoại liên tục kéo Linh khỏi bài học dù cơ thể vẫn sẵn sàng.',
    profileLinhGoal: 'Hoàn thành một phiên học online cần tập trung cao.',
    profileLinhReasoning: 'Cơ thể và góc học đều ổn định. Sentio xác định nhiễu đến từ thông báo, không phải mệt mỏi, nên không đưa ra một khuyến nghị nghỉ sai.',
    profileLinhTech: 'AI đối chiếu hành vi số với nhịp cơ thể; IoT xác nhận góc học đủ sáng và có người.',
    profileNamProblem: 'Nam đang code nhưng liên tục chuyển giữa VS Code, YouTube, Facebook và các diễn đàn.',
    profileNamGoal: 'Quay lại nhịp code hiệu quả thay vì cố gắng trong trạng thái phân tán.',
    profileNamReasoning: 'Chuyển tab tăng cao đi cùng HRV thấp. Sentio xem đây là dấu hiệu mất nhịp, nên đề xuất nghỉ 10 phút trước khi code tiếp.',
    profileNamTech: 'AI phát hiện tương quan giữa chuyển tab và nhịp cơ thể; không một nguồn dữ liệu đơn lẻ nào đủ để kết luận.',
    profileMaiProblem: 'Mai thiếu ngủ nghiêm trọng và đang học trong góc bàn quá tối.',
    profileMaiGoal: 'Bảo vệ sức khỏe và vẫn duy trì một bước ôn tập vừa sức.',
    profileMaiReasoning: 'Ngủ 4h52, HRV thấp, nhịp tim nghỉ cao và 96 lux cùng chỉ về một kết luận: không phù hợp cho phiên học nặng.',
    profileMaiTech: 'Thiết bị đeo cung cấp nhịp cơ thể; cảm biến IoT phát hiện ánh sáng mờ mà trình duyệt không thể tự biết.',
    previewDemo: 'Xem bản demo trước',
    startSevenDays: 'Bắt đầu 7 ngày thiết lập nhịp',
    onboardingNextSources: 'Chọn nguồn dữ liệu',
    onboardingNextPrivacy: 'Tiếp tục đến quyền riêng tư',
    onboardingReadyHint: 'Đã sẵn sàng. Bạn có thể bắt đầu 7 ngày thiết lập nhịp.',
    onboardingNeedName: 'Nhập tên để tiếp tục.',
    onboardingNeedConsent: 'Chọn ô đồng ý để bắt đầu.',
    onboardingNeedBoth: 'Nhập tên và chọn ô đồng ý để bắt đầu.',
    userGuide: 'Hướng dẫn sử dụng',
    userGuideHelp: 'Các bước chính và giới hạn của prototype',
    guideIntro: 'Sentio chỉ cần một quy trình ngắn: xem trạng thái, đọc gợi ý và chọn bước tiếp theo phù hợp.',
    guideSetupTitle: 'Thiết lập lần đầu',
    guideSetupText: 'Đi qua 3 bước: hiểu nhịp tham chiếu 7 ngày, chọn nguồn dữ liệu, rồi nhập tên và đồng ý quyền sử dụng dữ liệu.',
    guideTodayTitle: 'Xem trạng thái hôm nay',
    guideTodayText: 'Trang Hôm nay cho biết điểm sẵn sàng, lý do chính và đúng một hành động được đề xuất.',
    guideFocusTitle: 'Bắt đầu một phiên',
    guideFocusText: 'Chọn nút hành động hoặc tab Tập trung, sau đó bắt đầu, tạm dừng hay kết thúc bộ đếm khi cần.',
    guideSignalsTitle: 'Kiểm tra nguồn tín hiệu',
    guideSignalsText: 'Chạm Hành vi số, Cơ thể hoặc Môi trường để xem trạng thái kết nối và dữ liệu đang dùng.',
    guideProfilesTitle: 'Xem các tình huống mẫu',
    guideProfilesText: 'Mở mũi tên hồ sơ để chuyển giữa tài khoản của bạn và Linh, Nam, Mai. Ba hồ sơ này là dữ liệu mô phỏng.',
    guideProgressTitle: 'Theo dõi và quản lý dữ liệu',
    guideProgressText: 'Tab Tiến trình tổng hợp thói quen. Cài đặt cho phép quản lý kết nối, xuất hoặc xóa dữ liệu cục bộ.',
    guideBoundaryTitle: 'Giới hạn của prototype',
    guideBoundaryText: 'Sentio hỗ trợ quyết định học tập, không chẩn đoán y khoa. Dữ liệu smartwatch hiện được mô phỏng; ESP32 cần thiết bị tương thích.'
  },
  en: {
    profileLinhHelp: 'Distracted by notifications',
    openProfile: 'View profile',
    closeProfile: 'Close profile',
    caseStudyLabel: 'Scenario profile',
    initialProblem: 'Initial problem',
    learningGoal: 'Goal',
    sentioSignals: 'Signals captured by Sentio',
    aiReasoning: 'AI reasoning',
    todayAction: 'Recommended action',
    afterSevenDays: 'After 7 days',
    technologyRole: 'Why AI + IoT matter',
    simulatedCaseStudy: 'Simulated data used to illustrate the product logic.',
    digitalSignal: 'Digital behavior',
    bodySignal: 'Body',
    environmentSignal: 'Environment',
    tabSwitches: '{count} tab switches',
    lightReading: '{lux} lux at the desk',
    sleepAndHrv: '{sleep} sleep · HRV {hrv}',
    profileLinhProblem: 'Phone notifications repeatedly pull Linh away from the lesson even though her body remains ready.',
    profileLinhGoal: 'Complete a demanding online learning session.',
    profileLinhReasoning: 'Body and study space are stable. Sentio identifies notifications, not fatigue, as the source of friction and avoids recommending an unnecessary break.',
    profileLinhTech: 'AI compares digital behavior with body rhythm; IoT confirms that the study space is bright and occupied.',
    profileNamProblem: 'Nam is coding but repeatedly switches among VS Code, YouTube, Facebook, and forums.',
    profileNamGoal: 'Return to a productive coding rhythm instead of pushing through distraction.',
    profileNamReasoning: 'Frequent tab switching coincides with low HRV. Sentio reads this as a disrupted rhythm and recommends a 10-minute reset before coding again.',
    profileNamTech: 'AI detects the relationship between tab switching and body rhythm; no single data source can support that conclusion alone.',
    profileMaiProblem: 'Mai is severely sleep deprived and studying at a desk that is far too dark.',
    profileMaiGoal: 'Protect her health while keeping one manageable review step.',
    profileMaiReasoning: '4h52 sleep, low HRV, elevated resting heart rate, and 96 lux all point to one conclusion: this is not the time for demanding study.',
    profileMaiTech: 'The wearable captures body rhythm; the IoT sensor detects dim light that the browser cannot observe on its own.',
    previewDemo: 'Preview the demo',
    startSevenDays: 'Start the 7-day setup',
    onboardingNextSources: 'Choose data sources',
    onboardingNextPrivacy: 'Continue to privacy',
    onboardingReadyHint: 'Everything is ready. You can start the 7-day setup.',
    onboardingNeedName: 'Enter your name to continue.',
    onboardingNeedConsent: 'Select the consent checkbox to start.',
    onboardingNeedBoth: 'Enter your name and select the consent checkbox to start.',
    userGuide: 'User guide',
    userGuideHelp: 'Main steps and prototype boundaries',
    guideIntro: 'Sentio follows one short flow: check your state, read the suggestion, and choose the right next step.',
    guideSetupTitle: 'First-time setup',
    guideSetupText: 'Complete 3 steps: understand the 7-day reference rhythm, choose data sources, then enter your name and grant consent.',
    guideTodayTitle: 'Check today’s state',
    guideTodayText: 'Today shows your readiness score, the main reason, and one recommended action.',
    guideFocusTitle: 'Start a session',
    guideFocusText: 'Use the recommended action or Focus tab, then start, pause, or finish the timer when needed.',
    guideSignalsTitle: 'Review signal sources',
    guideSignalsText: 'Open Digital behavior, Body, or Environment to see connection state and the data in use.',
    guideProfilesTitle: 'Explore sample scenarios',
    guideProfilesText: 'Open the profile arrow to switch between your account and Linh, Nam, or Mai. These three profiles use simulated data.',
    guideProgressTitle: 'Track progress and manage data',
    guideProgressText: 'Progress summarizes habits. Settings lets you manage connections and export or delete local data.',
    guideBoundaryTitle: 'Prototype boundaries',
    guideBoundaryText: 'Sentio supports study decisions and is not a medical diagnostic tool. Smartwatch data is simulated; ESP32 requires compatible hardware.'
  }
};
Object.entries(caseStudyTranslations).forEach(([lang, values]) => Object.assign(translations[lang], values));



const profileData = {
  linh: {
    name: 'Linh', initial: 'L', roleKey: 'roleLinh', helpKey: 'profileLinhHelp', problemKey: 'profileLinhProblem', goalKey: 'profileLinhGoal', reasoningKey: 'profileLinhReasoning', techKey: 'profileLinhTech', score: 92, baseline: 88, status: 'ready', accent: '#3157d5', confidence: 94, delta: '+12', baselineDay: 7, average: 84, streak: 6,
    recTitleKey: 'linhRecTitle', recTextKey: 'linhRecText', actionKey: 'linhAction', insightKey: 'linhInsight', task: 'coding',
    focus: 94, tabs: 3, sleep: '7h32', restingHr: '61 bpm', hrv: '54 ms', stressKey: 'stressLow', bodyKey: 'bodyStable', lux: 410, sourceStates: ['good','good','good'],
    factors: [
      ['factorSleep','factorLinhSleep', 2, '🌙'], ['factorHeart','factorLinhHeart', 1, '♡'], ['factorBrowser','factorLinhBrowser', 1, '↗'], ['factorRoom','factorLinhRoom', 0, '☀']
    ],
    chart: [78,81,84,80,88,90,92], trend: '+12%', progressTitleKey: 'progressLinhTitle', headlineKey: 'interruptionsHeadline', before: '9', after: '3', unitKey: 'interruptionUnit', progressNoteKey: 'linhProgressNote',
    outcomeTitleKey: 'outcomeLinh', outcomeDescKey: 'outcomeLinhDesc', signalKey: 'signalLinh', decisionKey: 'decisionLinh', filmChangeKey: 'filmLinhChange'
  },
  nam: {
    name: 'Nam', initial: 'N', roleKey: 'roleNam', helpKey: 'profileNamHelp', problemKey: 'profileNamProblem', goalKey: 'profileNamGoal', reasoningKey: 'profileNamReasoning', techKey: 'profileNamTech', score: 54, baseline: 88, status: 'moderate', accent: '#9b620e', confidence: 86, delta: '-8', baselineDay: 7, average: 63, streak: 4,
    recTitleKey: 'namRecTitle', recTextKey: 'namRecText', actionKey: 'namAction', insightKey: 'namInsight', task: 'coding',
    focus: 58, tabs: 18, sleep: '7h08', restingHr: '79 bpm', hrv: '31 ms', stressKey: 'stressMedium', bodyKey: 'bodyBelow', lux: 360, sourceStates: ['attention','watch','watch'],
    factors: [
      ['factorSleep','factorNamSleep', 1, '🌙'], ['factorHeart','factorNamHeart', -9, '♡'], ['factorBrowser','factorNamBrowser', -22, '↗'], ['factorRoom','factorNamRoom', -4, '☀']
    ],
    chart: [48,52,51,59,63,66,68], trend: '+20%', progressTitleKey: 'progressNamTitle', headlineKey: 'tabsHeadline', before: '31', after: '12', unitKey: 'tabsUnit', progressNoteKey: 'namProgressNote',
    outcomeTitleKey: 'outcomeNam', outcomeDescKey: 'outcomeNamDesc', signalKey: 'signalNam', decisionKey: 'decisionNam', filmChangeKey: 'filmNamChange'
  },
  mai: {
    name: 'Mai', initial: 'M', roleKey: 'roleMai', helpKey: 'profileMaiHelp', problemKey: 'profileMaiProblem', goalKey: 'profileMaiGoal', reasoningKey: 'profileMaiReasoning', techKey: 'profileMaiTech', score: 38, baseline: 88, status: 'low', accent: '#b63e4b', confidence: 91, delta: '-19', baselineDay: 7, average: 58, streak: 3,
    recTitleKey: 'maiRecTitle', recTextKey: 'maiRecText', actionKey: 'maiAction', insightKey: 'maiInsight', task: 'reading',
    focus: 71, tabs: 2, sleep: '4h52', restingHr: '84 bpm', hrv: '28 ms', stressKey: 'stressHigh', bodyKey: 'bodyTired', lux: 96, sourceStates: ['good','attention','attention'],
    factors: [
      ['factorSleep','factorMaiSleep', -24, '🌙'], ['factorHeart','factorMaiHeart', -7, '♡'], ['factorBrowser','factorMaiBrowser', 1, '↗'], ['factorRoom','factorMaiRoom', -20, '☀']
    ],
    chart: [41,44,48,52,59,63,67], trend: '+26%', progressTitleKey: 'progressMaiTitle', headlineKey: 'lightHeadline', before: '40%', after: '86%', unitKey: 'lightUnit', progressNoteKey: 'maiProgressNote',
    outcomeTitleKey: 'outcomeMai', outcomeDescKey: 'outcomeMaiDesc', signalKey: 'signalMai', decisionKey: 'decisionMai', filmChangeKey: 'filmMaiChange'
  }
};

const store = {
  get(key, fallback = null) { try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* file mode may block storage */ } },
  remove(key) { try { localStorage.removeItem(key); } catch { /* no-op */ } }
};

const V6_STORAGE_KEY = 'sentio:v6';
const MAX_SESSIONS = 30;
const MAX_NUDGES = 50;
const SOURCE_KEYS = ['digital', 'body', 'environment'];
const DEMO_PROFILE_KEYS = ['linh', 'nam', 'mai'];
const PERSONAL_BASELINE_METRICS = Object.freeze({
  sleepMinutes: 430,
  hrv: 50,
  restingHr: 64,
  tabs: 4,
  focus: 85,
  lux: 350
});

function isoNow() { return new Date().toISOString(); }

function createSource(connection = 'permission-required', mode = 'none', metrics = {}) {
  return { connection, mode, updatedAt: null, metrics: { ...metrics } };
}

function createDefaultPersonal() {
  return {
    name: '',
    onboardingComplete: false,
    previewMode: false,
    baseline: {
      startedAt: isoNow(),
      day: 1,
      eligibleDays: 0,
      sampleCount: 0,
      metricCounts: {},
      lastSampleDate: null,
      status: 'provisional',
      metrics: { ...PERSONAL_BASELINE_METRICS }
    },
    sources: {
      digital: createSource('permission-required', 'none', {}),
      body: createSource('permission-required', 'none', {}),
      environment: createSource('permission-required', 'none', {})
    },
    privacy: {
      consent: false,
      retentionDays: 30,
      sourceConsent: { digital: false, body: false, environment: false }
    },
    preferences: {
      nudgeSensitivity: 'balanced',
      lastTask: 'reading'
    },
    sessions: [],
    nudges: [],
    activeSession: null
  };
}

function coerceSource(value, fallback) {
  const source = value && typeof value === 'object' ? value : {};
  return {
    connection: typeof source.connection === 'string' ? source.connection : fallback.connection,
    mode: typeof source.mode === 'string' ? source.mode : fallback.mode,
    updatedAt: typeof source.updatedAt === 'string' ? source.updatedAt : null,
    metrics: source.metrics && typeof source.metrics === 'object' ? { ...source.metrics } : { ...fallback.metrics }
  };
}

function normalizePersonal(value) {
  const fallback = createDefaultPersonal();
  const personal = value && typeof value === 'object' ? value : {};
  const baseline = personal.baseline && typeof personal.baseline === 'object' ? personal.baseline : {};
  const privacy = personal.privacy && typeof personal.privacy === 'object' ? personal.privacy : {};
  const preferences = personal.preferences && typeof personal.preferences === 'object' ? personal.preferences : {};
  return {
    ...fallback,
    name: typeof personal.name === 'string' ? personal.name.slice(0, 80) : fallback.name,
    onboardingComplete: Boolean(personal.onboardingComplete),
    previewMode: Boolean(personal.previewMode),
    baseline: {
      ...fallback.baseline,
      ...baseline,
      day: Number.isFinite(Number(baseline.day)) ? Math.min(BASELINE_DAYS, Math.max(1, Number(baseline.day))) : 1,
      eligibleDays: Number.isFinite(Number(baseline.eligibleDays)) ? clamp(Number(baseline.eligibleDays), 0, BASELINE_DAYS) : 0,
      sampleCount: Number.isFinite(Number(baseline.sampleCount)) ? Math.max(0, Number(baseline.sampleCount)) : 0,
      metricCounts: baseline.metricCounts && typeof baseline.metricCounts === 'object' ? { ...baseline.metricCounts } : {},
      lastSampleDate: typeof baseline.lastSampleDate === 'string' ? baseline.lastSampleDate : null,
      metrics: { ...PERSONAL_BASELINE_METRICS, ...(baseline.metrics || {}) }
    },
    sources: {
      digital: coerceSource(personal.sources?.digital, fallback.sources.digital),
      body: coerceSource(personal.sources?.body, fallback.sources.body),
      environment: coerceSource(personal.sources?.environment, fallback.sources.environment)
    },
    privacy: {
      consent: Boolean(privacy.consent),
      retentionDays: [14, 30, 90].includes(Number(privacy.retentionDays)) ? Number(privacy.retentionDays) : 30,
      sourceConsent: Object.fromEntries(SOURCE_KEYS.map((key) => [key,
        privacy.sourceConsent && typeof privacy.sourceConsent === 'object'
          ? Boolean(privacy.sourceConsent[key])
          : Boolean(privacy.consent && personal.sources?.[key]?.connection === 'connected')
      ]))
    },
    preferences: {
      nudgeSensitivity: ['gentle', 'balanced', 'minimal'].includes(preferences.nudgeSensitivity) ? preferences.nudgeSensitivity : 'balanced',
      lastTask: ['reading', 'coding', 'economics', 'language'].includes(preferences.lastTask) ? preferences.lastTask : 'reading'
    },
    sessions: Array.isArray(personal.sessions) ? personal.sessions.slice(-MAX_SESSIONS) : [],
    nudges: Array.isArray(personal.nudges) ? personal.nudges.slice(-MAX_NUDGES) : [],
    activeSession: personal.activeSession && typeof personal.activeSession === 'object' ? { ...personal.activeSession } : null
  };
}

function createPreviewPersonal(name = '') {
  const personal = createDefaultPersonal();
  const now = isoNow();
  personal.name = name || 'Bạn';
  personal.onboardingComplete = true;
  personal.previewMode = true;
  personal.privacy.consent = true;
  personal.baseline.day = 5;
  personal.baseline.eligibleDays = 4;
  personal.baseline.sampleCount = 4;
  personal.baseline.metricCounts = Object.fromEntries(Object.keys(PERSONAL_BASELINE_METRICS).map((key) => [key, 4]));
  personal.baseline.lastSampleDate = localDateKey();
  personal.baseline.status = 'provisional';
  personal.privacy.sourceConsent = { digital: false, body: false, environment: false };
  personal.sources.digital = createSource('connected', 'demo-feed', { focus: 88, tabs: 4 });
  personal.sources.body = createSource('connected', 'bridge-demo', { sleepMinutes: 438, hrv: 52, restingHr: 63 });
  personal.sources.environment = createSource('connected', 'demo-feed', { lux: 386, presence: true });
  SOURCE_KEYS.forEach((key) => { personal.sources[key].updatedAt = now; });
  return personal;
}

function migrateLegacyPersonal() {
  const legacyKey = store.get('sentio-profile');
  if (!profileData[legacyKey]) return createDefaultPersonal();
  const fixture = profileData[legacyKey];
  const personal = createPreviewPersonal(fixture.name);
  personal.baseline.day = Math.min(BASELINE_DAYS, Math.max(1, fixture.baselineDay || 5));
  personal.baseline.eligibleDays = Math.max(0, personal.baseline.day - 1);
  personal.baseline.status = personal.baseline.day >= BASELINE_DAYS ? 'established' : 'provisional';
  personal.sources.digital.metrics = { focus: fixture.focus, tabs: fixture.tabs };
  personal.sources.body.metrics = {
    sleepMinutes: parseSleepMinutes(fixture.sleep),
    hrv: parseFloat(fixture.hrv),
    restingHr: parseFloat(fixture.restingHr)
  };
  personal.sources.environment.metrics = { lux: fixture.lux, presence: true };
  return personal;
}

function loadPersonal() {
  const serialized = store.get(V6_STORAGE_KEY);
  if (!serialized) return createDefaultPersonal();
  try {
    const parsed = JSON.parse(serialized);
    return normalizePersonal(parsed?.personal || parsed);
  } catch {
    return createDefaultPersonal();
  }
}

function persistPersonal() {
  const personal = normalizePersonal(state.personal);
  state.personal = personal;
  store.set(V6_STORAGE_KEY, JSON.stringify({ version: 6, personal }));
}

const state = {
  language: translations[store.get('sentio-language', 'vi')] ? store.get('sentio-language', 'vi') : 'vi',
  profile: 'personal',
  personal: loadPersonal(),
  roomFixed: false,
  view: 'today',
  filmScene: 'system',
  filmPerson: null,
  filmOpener: null,
  filmAutoTimer: null,
  filmAutoPlaying: false,
  onboardingStep: 1,
  onboardingOpen: false,
  onboardingSetup: { digital: true, body: false, environment: false },
  decision: null,
  selectedSource: 'digital',
  activeModal: null,
  lastFocused: null,
  toastTimer: null,
  focusEvents: [],
  activeNudge: null,
  nudgeCooldowns: {},
  lowLightSince: 0,
  bluetoothDevice: null,
  timer: null,
  running: false,
  remaining: 45 * 60,
  initial: 45 * 60,
  timerEndsAt: null,
  sessionStartedAt: null,
  sessionStartTabs: 0,
  sessionKind: 'focus',
  sessionStartDecision: null,
  healthyStopRequested: false,
  liveProfile: null,
  liveTabs: null,
  liveFocus: null
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const t = (key) => translations[state.language]?.[key] ?? translations.en[key] ?? key;
const format = (template, values) => Object.entries(values).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, String(value)), template);

function clamp(value, min, max) { return Math.min(max, Math.max(min, Number(value) || 0)); }
function hasFiniteValue(value) { return value !== null && value !== undefined && value !== '' && Number.isFinite(Number(value)); }

function parseSleepMinutes(value) {
  if (hasFiniteValue(value)) return Number(value);
  const match = String(value || '').match(/(\d+)\s*h(?:\s*(\d+))?/i);
  return match ? Number(match[1]) * 60 + Number(match[2] || 0) : null;
}

function formatSleepMinutes(value) {
  if (!hasFiniteValue(value)) return '—';
  const minutes = Math.max(0, Math.round(Number(value)));
  return `${Math.floor(minutes / 60)}h${String(minutes % 60).padStart(2, '0')}`;
}

function setText(selector, value) {
  const element = typeof selector === 'string' ? $(selector) : selector;
  if (element) element.textContent = value ?? '';
  return element;
}

function setAriaProgress(selector, value, max = 100) {
  const element = $(selector);
  if (!element) return;
  const normalized = clamp(value, 0, max);
  element.style.width = `${(normalized / max) * 100}%`;
  if (element.closest('[aria-hidden="true"]')) {
    ['role', 'aria-valuemin', 'aria-valuemax', 'aria-valuenow', 'aria-label'].forEach((attribute) => element.removeAttribute(attribute));
    return;
  }
  const labelKeys = { '#baselineProgressBar': 'personalBaseline', '#confidenceBar': 'decisionConfidence', '#liveFocusBar': 'continuityEstimate' };
  element.setAttribute('role', 'progressbar');
  element.setAttribute('aria-valuemin', '0');
  element.setAttribute('aria-valuemax', String(max));
  element.setAttribute('aria-valuenow', String(Math.round(normalized)));
  if (labelKeys[selector]) element.setAttribute('aria-label', t(labelKeys[selector]));
}

function setOptionalHidden(selector, hidden) {
  const element = $(selector);
  if (!element) return;
  element.hidden = Boolean(hidden);
  element.setAttribute('aria-hidden', hidden ? 'true' : 'false');
  element.classList.toggle('show', !hidden);
}

function startOfLocalDay(value) {
  const date = value instanceof Date ? new Date(value) : new Date(value || Date.now());
  if (Number.isNaN(date.getTime())) return new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

function localDateKey(value = new Date()) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function refreshBaseline() {
  const baseline = state.personal.baseline;
  if (state.personal.previewMode) {
    baseline.day = clamp(baseline.day || 5, 1, BASELINE_DAYS);
  } else {
    const started = startOfLocalDay(baseline.startedAt);
    const today = startOfLocalDay(new Date());
    baseline.day = clamp(Math.floor((today - started) / 86400000) + 1, 1, BASELINE_DAYS);
  }
  baseline.status = baseline.day >= BASELINE_DAYS && baseline.eligibleDays >= BASELINE_DAYS ? 'established' : 'provisional';
  return baseline;
}

function updatePersonalBaseline(snapshot = currentSnapshot()) {
  if (state.profile !== 'personal' || state.personal.previewMode || snapshot.mode !== 'personal') return false;
  const baseline = state.personal.baseline;
  const sampleDate = localDateKey();
  if (baseline.lastSampleDate === sampleDate) return false;
  let observed = false;
  const blend = (key, value) => {
    if (!hasFiniteValue(value)) return;
    const samples = Math.max(0, Number(baseline.metricCounts[key]) || 0);
    const previous = Number(baseline.metrics[key]);
    baseline.metrics[key] = samples > 0 && Number.isFinite(previous)
      ? Math.round(((previous * samples) + Number(value)) / (samples + 1) * 10) / 10
      : Number(value);
    baseline.metricCounts[key] = samples + 1;
    observed = true;
  };
  const digital = snapshot.sources.digital;
  const body = snapshot.sources.body;
  const environment = snapshot.sources.environment;
  if (sourceHasMetrics('digital', digital)) {
    blend('focus', digital.metrics.focus);
    blend('tabs', Math.max(0, Number(state.liveTabs || digital.metrics.tabs || 0) - Number(state.sessionStartTabs || 0)));
  }
  if (sourceHasMetrics('body', body)) {
    blend('sleepMinutes', body.metrics.sleepMinutes);
    blend('hrv', body.metrics.hrv);
    blend('restingHr', body.metrics.restingHr);
  }
  if (sourceHasMetrics('environment', environment)) blend('lux', environment.metrics.lux);
  if (observed) {
    baseline.sampleCount = Math.max(0, Number(baseline.sampleCount) || 0) + 1;
    baseline.eligibleDays = clamp((Number(baseline.eligibleDays) || 0) + 1, 0, BASELINE_DAYS);
    baseline.lastSampleDate = sampleDate;
  }
  return observed;
}

function sourceIsConnected(source) {
  return Boolean(source && source.connection === 'connected');
}

function sourceHasMetrics(key, source) {
  if (!sourceIsConnected(source)) return false;
  const metrics = source.metrics || {};
  const hasValues = key === 'digital'
    ? hasFiniteValue(metrics.focus) && hasFiniteValue(metrics.tabs)
    : key === 'body'
      ? [metrics.sleepMinutes, metrics.hrv, metrics.restingHr].some(hasFiniteValue)
      : hasFiniteValue(metrics.lux);
  if (!hasValues) return false;
  const age = sourceAgeMs(source);
  const maxAge = key === 'body' ? 72 * 3600000 : key === 'environment' ? 30 * 60000 : 90 * 60000;
  return Number.isFinite(age) && age <= maxAge;
}

function sourceAgeMs(source) {
  if (!source?.updatedAt) return Infinity;
  const timestamp = new Date(source.updatedAt).getTime();
  return Number.isFinite(timestamp) ? Math.max(0, Date.now() - timestamp) : Infinity;
}

function sourceFreshnessScore(key, source) {
  if (!sourceHasMetrics(key, source)) return 0;
  const age = sourceAgeMs(source);
  const freshWindow = key === 'body' ? 24 * 3600000 : key === 'environment' ? 10 * 60000 : 30 * 60000;
  return clamp(1 - age / (freshWindow * 3), 0.25, 1);
}

function freshnessText(source) {
  const age = sourceAgeMs(source);
  if (!Number.isFinite(age)) return t('sourceMissing');
  if (age < 60000) return t('sourceFresh');
  if (age < 3600000) return format(t('sourceMinutesAgo'), { minutes: Math.max(1, Math.round(age / 60000)) });
  return format(t('sourceHoursAgo'), { hours: Math.max(1, Math.round(age / 3600000)) });
}

function sourceDisplayName(key) {
  return t(key === 'digital' ? 'digitalActivity' : key === 'body' ? 'bodyStatus' : key === 'checkin' ? 'selfReportFactorLabel' : 'studyEnvironment');
}

function connectionText(source) {
  if (!source) return t('connectionDisconnected');
  if (source.connection === 'connecting') return t('connectionConnecting');
  if (source.connection === 'error') return t('connectionError');
  if (source.connection === 'paired') return t('connectionPaired');
  if (source.connection === 'permission-required') return t('connectionPermission');
  if (source.connection !== 'connected') return t('connectionDisconnected');
  return ['demo-feed', 'bridge-demo'].includes(source.mode) ? t('connectionDemo') : t('connectionConnected');
}

function modeText(mode) {
  return ({
    'live-in-page': t('liveInPage'),
    'bridge-demo': t('bridgeDemo'),
    bluetooth: t('bluetoothLive'),
    'bluetooth-paired': t('bluetoothPaired'),
    'demo-feed': t('demoFeed'),
    'self-reported': t('selfReported')
  })[mode] || t('connectionDisconnected');
}

function getPersonalSnapshot() {
  refreshBaseline();
  const sources = state.personal.sources;
  const digitalMetrics = { ...(sources.digital.metrics || {}) };
  if (state.profile === 'personal' && state.running && state.liveProfile === 'personal' && Number.isFinite(state.liveFocus)) {
    digitalMetrics.focus = state.liveFocus;
    digitalMetrics.tabs = state.liveTabs;
  }
  return {
    mode: 'personal',
    name: state.personal.name || t('personalAccount'),
    baselineScore: 75,
    metricBaselines: { ...PERSONAL_BASELINE_METRICS, ...(state.personal.baseline.metrics || {}) },
    baselineDay: state.personal.baseline.day,
    baselineEligibleDays: state.personal.baseline.eligibleDays,
    baselineStatus: state.personal.baseline.status,
    baselineMetricCounts: { ...(state.personal.baseline.metricCounts || {}) },
    sources: {
      digital: { ...sources.digital, metrics: digitalMetrics },
      body: { ...sources.body, metrics: { ...(sources.body.metrics || {}) } },
      environment: { ...sources.environment, metrics: { ...(sources.environment.metrics || {}) } }
    }
  };
}

function getDemoSnapshot(key = state.profile) {
  const profile = profileData[key] || profileData.linh;
  return {
    mode: 'demo',
    key,
    profile,
    name: profile.name,
    baselineScore: profile.baseline,
    baselineDay: profile.baselineDay,
    baselineStatus: profile.baselineDay >= BASELINE_DAYS ? 'established' : 'provisional',
    sources: {
      digital: { connection: 'connected', mode: 'demo-feed', updatedAt: isoNow(), metrics: { focus: profile.focus, tabs: profile.tabs } },
      body: { connection: 'connected', mode: 'bridge-demo', updatedAt: isoNow(), metrics: { sleepMinutes: parseSleepMinutes(profile.sleep), hrv: parseFloat(profile.hrv), restingHr: parseFloat(profile.restingHr) } },
      environment: { connection: 'connected', mode: 'demo-feed', updatedAt: isoNow(), metrics: { lux: state.roomFixed && key === 'mai' ? 410 : profile.lux, presence: true } }
    }
  };
}

function factorRecord({ id, source, labelKey, current, baseline, impact, icon, unit = '' }) {
  const currentText = hasFiniteValue(current) ? `${Math.round(Number(current))}${unit}` : '—';
  const baselineText = hasFiniteValue(baseline) ? `${Math.round(Number(baseline))}${unit}` : '—';
  const sourceState = state.profile === 'personal' ? state.personal.sources[source] : null;
  return {
    id,
    source,
    label: t(labelKey),
    detail: format(t('factorComparison'), { current: currentText, baseline: baselineText }),
    current: currentText,
    baseline: baselineText,
    impact: Math.round(impact),
    icon,
    freshness: sourceState ? freshnessText(sourceState) : t('sourceFresh')
  };
}

function computePersonalFactors(snapshot) {
  const baseline = snapshot.metricBaselines;
  const learnedBaseline = (key) => Number(snapshot.baselineMetricCounts?.[key]) > 0 && hasFiniteValue(baseline[key])
    ? Number(baseline[key])
    : null;
  const factors = [];
  const digital = snapshot.sources.digital;
  const body = snapshot.sources.body;
  const environment = snapshot.sources.environment;

  if (sourceHasMetrics('digital', digital)) {
    const tabs = Number(digital.metrics.tabs);
    const focus = Number(digital.metrics.focus);
    const tabsBaseline = learnedBaseline('tabs');
    const focusBaseline = learnedBaseline('focus');
    if (tabsBaseline !== null) {
      const tabsImpact = tabs < tabsBaseline - 1 ? 2 : tabs <= tabsBaseline + 1 ? 0 : clamp(-Math.round((tabs - tabsBaseline) * 1.25), -18, -1);
      factors.push(factorRecord({ id: 'tabs', source: 'digital', labelKey: 'pageDepartures', current: tabs, baseline: tabsBaseline, impact: tabsImpact, icon: '↗' }));
    }
    if (focusBaseline !== null) {
      const focusImpact = clamp(Math.round((focus - focusBaseline) / 4), -8, 3);
      factors.push(factorRecord({ id: 'focus', source: 'digital', labelKey: 'continuityEstimate', current: focus, baseline: focusBaseline, impact: focusImpact, icon: '◎', unit: '%' }));
    }
  }

  if (sourceHasMetrics('body', body)) {
    const sleep = Number(body.metrics.sleepMinutes);
    const hrv = Number(body.metrics.hrv);
    const restingHr = Number(body.metrics.restingHr);
    if (Number.isFinite(sleep)) {
      const sleepBaseline = learnedBaseline('sleepMinutes');
      if (sleepBaseline !== null) {
        const difference = sleep - sleepBaseline;
        const impact = difference < -120 ? -18 : difference < -90 ? -14 : difference < -60 ? -9 : difference < -30 ? -4 : difference > 30 ? 2 : 0;
        factors.push(factorRecord({ id: 'sleep', source: 'body', labelKey: 'factorSleep', current: sleep, baseline: sleepBaseline, impact, icon: '☾', unit: 'm' }));
      }
    }
    if (Number.isFinite(hrv)) {
      const hrvBaseline = learnedBaseline('hrv');
      if (hrvBaseline !== null) {
        const ratio = (hrv - hrvBaseline) / Math.max(1, hrvBaseline);
        const impact = ratio < -0.35 ? -8 : ratio < -0.15 ? -4 : ratio > 0.1 ? 2 : 0;
        factors.push(factorRecord({ id: 'hrv', source: 'body', labelKey: 'hrvLabel', current: hrv, baseline: hrvBaseline, impact, icon: '♡', unit: ' ms' }));
      }
    }
    if (Number.isFinite(restingHr)) {
      const restingHrBaseline = learnedBaseline('restingHr');
      if (restingHrBaseline !== null) {
        const difference = restingHr - restingHrBaseline;
        const impact = difference > 15 ? -7 : difference > 8 ? -4 : difference < -4 ? 2 : 0;
        factors.push(factorRecord({ id: 'restingHr', source: 'body', labelKey: 'restingHrLabel', current: restingHr, baseline: restingHrBaseline, impact, icon: '♥', unit: ' bpm' }));
      }
    }
  }

  if (sourceHasMetrics('environment', environment)) {
    const lux = Number(environment.metrics.lux);
    const luxBaseline = learnedBaseline('lux');
    const relativeLux = luxBaseline === null ? 1 : lux / Math.max(1, luxBaseline);
    const impact = lux < 120 ? -18
      : lux < 200 ? -12
        : lux > 1000 ? -6
          : relativeLux < 0.55 ? -10
            : relativeLux < 0.75 ? -5
              : relativeLux > 2.5 ? -4
                : 0;
    if (luxBaseline !== null || impact !== 0) factors.push(factorRecord({ id: 'lux', source: 'environment', labelKey: 'factorRoom', current: lux, baseline: luxBaseline, impact, icon: '☀', unit: ' lux' }));
  }

  const todaysMood = store.get('sentio-checkin-mood');
  if (todaysMood && todaysMood !== 'skipped' && store.get('sentio-checkin-date') === vietnamDateKey()) {
    const moodImpact = todaysMood === 'great' ? 3 : todaysMood === 'tired' ? -6 : 0;
    const moodLabelKey = todaysMood === 'great' ? 'moodGreat' : todaysMood === 'tired' ? 'moodTired' : 'moodOkay';
    factors.push({
      id: 'mood',
      source: 'checkin',
      label: t('selfReportFactorLabel'),
      detail: format(t('selfReportDetail'), { mood: t(moodLabelKey) }),
      current: '',
      baseline: '',
      impact: moodImpact,
      icon: '☺',
      freshness: t('sourceFresh')
    });
  }

  return factors;
}

function computeDemoFactors(snapshot) {
  const profile = snapshot.profile;
  return profile.factors.map(([labelKey, detailKey, points, icon], index) => {
    const source = index < 2 ? 'body' : index === 2 ? 'digital' : 'environment';
    const fixedEnvironment = state.roomFixed && snapshot.key === 'mai' && source === 'environment';
    return {
      id: `${snapshot.key}-${index}`,
      source,
      label: t(labelKey),
      detail: fixedEnvironment ? t('roomImproved') : t(detailKey),
      impact: fixedEnvironment ? 0 : points,
      icon,
      freshness: t('sourceFresh'),
      current: '',
      baseline: ''
    };
  });
}

function computeDecision(snapshot) {
  const factors = snapshot.mode === 'demo' ? computeDemoFactors(snapshot) : computePersonalFactors(snapshot);
  const availableSources = SOURCE_KEYS.filter((key) => sourceHasMetrics(key, snapshot.sources[key]));
  const missingSources = SOURCE_KEYS.filter((key) => !availableSources.includes(key));
  const coverage = availableSources.length / SOURCE_KEYS.length;
  const freshness = availableSources.length
    ? availableSources.reduce((total, key) => total + sourceFreshnessScore(key, snapshot.sources[key]), 0) / availableSources.length
    : 0;
  const score = clamp(snapshot.baselineScore + factors.reduce((total, factor) => total + factor.impact, 0), 0, 100);
  let status = score >= 75 ? 'ready' : score >= 50 ? 'moderate' : 'low';
  const lowEnvironment = !state.roomFixed && Number(snapshot.sources.environment?.metrics?.lux) < 200 && sourceHasMetrics('environment', snapshot.sources.environment);
  let recommendation = {
    titleKey: status === 'ready' ? 'personalReadyTitle' : status === 'moderate' ? 'personalLightTitle' : 'personalResetTitle',
    textKey: status === 'ready' ? 'personalReadyText' : status === 'moderate' ? 'personalLightText' : 'personalResetText',
    actionKey: status === 'ready' ? 'startFocusAction' : status === 'moderate' ? 'startLightAction' : 'startResetAction',
    kind: status === 'ready' ? 'focus' : status === 'moderate' ? 'light' : 'reset'
  };
  if (lowEnvironment) {
    status = score < 50 ? 'low' : 'moderate';
    recommendation = { titleKey: 'personalEnvironmentTitle', textKey: 'personalEnvironmentText', actionKey: 'fixEnvironmentAction', kind: 'environment' };
  }
  if (snapshot.mode === 'personal' && availableSources.length === 0) {
    status = 'insufficient';
    recommendation = { titleKey: 'personalInsufficientTitle', textKey: 'personalInsufficientText', actionKey: 'personalInsufficientAction', kind: 'connect' };
  } else if (snapshot.mode === 'personal' && factors.length === 0 && !lowEnvironment) {
    status = 'insufficient';
    recommendation = { titleKey: 'personalLearningTitle', textKey: 'personalLearningText', actionKey: 'startBaselineAction', kind: 'focus' };
  }

  let confidence;
  if (snapshot.mode === 'demo') confidence = snapshot.profile.confidence;
  else {
    const metricKeys = {
      digital: ['focus', 'tabs'],
      body: ['sleepMinutes', 'hrv', 'restingHr'],
      environment: ['lux']
    };
    const learnedBySource = availableSources.map((key) => {
      const present = metricKeys[key].filter((metric) => hasFiniteValue(snapshot.sources[key]?.metrics?.[metric]));
      if (!present.length) return 0;
      return present.reduce((total, metric) => total + clamp(snapshot.baselineMetricCounts?.[metric] || 0, 0, BASELINE_DAYS) / BASELINE_DAYS, 0) / present.length;
    });
    const personalization = learnedBySource.length
      ? learnedBySource.reduce((total, value) => total + value, 0) / learnedBySource.length
      : 0;
    confidence = Math.round(32 + personalization * 35 + coverage * 15 * freshness);
    if (snapshot.baselineStatus === 'provisional') confidence = Math.min(confidence, 82);
  }
  if (availableSources.length === 0) confidence = 0;
  else if (availableSources.length === 1) confidence = Math.min(confidence, 60);

  if (snapshot.mode === 'demo') {
    const profile = snapshot.profile;
    const fixed = state.roomFixed && snapshot.key === 'mai';
    recommendation = fixed
      ? { titleKey: 'roomFixedTitle', textKey: 'roomFixedText', actionKey: 'roomFixedAction', kind: 'light' }
      : { titleKey: profile.recTitleKey, textKey: profile.recTextKey, actionKey: profile.actionKey, kind: profile.status === 'ready' ? 'focus' : profile.status === 'low' ? 'environment' : 'reset' };
    status = fixed ? 'moderate' : profile.status;
  }

  const sourceImpact = Object.fromEntries(SOURCE_KEYS.map((key) => [key, factors.filter((factor) => factor.source === key).reduce((sum, factor) => sum + factor.impact, 0)]));
  return {
    score: Math.round(score),
    baselineScore: snapshot.baselineScore,
    status,
    confidence: clamp(confidence, 0, 100),
    coverage,
    freshness,
    factors,
    sourceImpact,
    missingSources,
    recommendation,
    computedAt: isoNow(),
    baselineStatus: snapshot.baselineStatus,
    baselineDay: snapshot.baselineDay,
    mode: snapshot.mode
  };
}

function currentSnapshot() {
  return state.profile === 'personal' ? getPersonalSnapshot() : getDemoSnapshot(state.profile);
}

function getDecision() {
  state.decision = computeDecision(currentSnapshot());
  return state.decision;
}

function getPersonalProfile() {
  const snapshot = getPersonalSnapshot();
  const decision = state.decision || computeDecision(snapshot);
  const digital = snapshot.sources.digital.metrics || {};
  const body = snapshot.sources.body.metrics || {};
  const environment = snapshot.sources.environment.metrics || {};
  const name = state.personal.name || t('personalAccount');
  return {
    name,
    initial: name.trim().charAt(0).toUpperCase() || 'S',
    roleKey: 'personalRole',
    helpKey: 'personalRole',
    accent: '#6f63f6',
    score: decision.score,
    baseline: decision.baselineScore,
    status: decision.status,
    confidence: decision.confidence,
    baselineDay: snapshot.baselineDay,
    focus: hasFiniteValue(digital.focus) ? Number(digital.focus) : 0,
    tabs: hasFiniteValue(digital.tabs) ? Number(digital.tabs) : 0,
    sleep: formatSleepMinutes(body.sleepMinutes),
    restingHr: hasFiniteValue(body.restingHr) ? `${Math.round(body.restingHr)} bpm` : '—',
    hrv: hasFiniteValue(body.hrv) ? `${Math.round(body.hrv)} ms` : '—',
    stressKey: decision.sourceImpact.body < -6 ? 'stressHigh' : decision.sourceImpact.body < 0 ? 'stressMedium' : 'stressLow',
    bodyKey: sourceHasMetrics('body', snapshot.sources.body) ? (decision.sourceImpact.body < -4 ? 'bodyBelow' : 'bodyStable') : 'sourceMissing',
    lux: hasFiniteValue(environment.lux) ? Number(environment.lux) : null,
    sourceStates: SOURCE_KEYS.map((key) => !sourceHasMetrics(key, snapshot.sources[key]) ? 'watch' : decision.sourceImpact[key] < -7 ? 'attention' : decision.sourceImpact[key] < 0 ? 'watch' : 'good'),
    task: state.personal.preferences?.lastTask || 'reading',
    insightKey: decision.status === 'ready' ? 'personalReadyText' : decision.status === 'moderate' ? 'personalLightText' : decision.status === 'insufficient' ? 'noInsightYet' : 'stoppedOnTimeInsight'
  };
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-option]').forEach((el) => { el.textContent = t(el.dataset.i18nOption); });
  if ($('#languageSelect')) $('#languageSelect').value = state.language;
  updateVietnamClock();
  renderProfile();
  renderProfileOptions();
  renderFilmCards();
  renderProgressOutcomes();
  renderHealthSheet();
  updateTimerLabel();
  renderOnboarding();
  renderPrivacyControls();
  const signalsExpanded = $('.source-card')?.classList.contains('expanded');
  setText('#toggleSignals span', t(signalsExpanded ? 'hideSignalDetails' : 'showSignalDetails'));
  updateFilmAutoControl();
  if (state.selectedSource) renderSourceSheet(state.selectedSource);
}

function getVietnamDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(date);
  return Object.fromEntries(parts.filter((part) => part.type !== 'literal').map((part) => [part.type, part.value]));
}

function getGreetingKey(hour) {
  if (hour >= 5 && hour < 12) return 'greetingMorning';
  if (hour >= 12 && hour < 18) return 'greetingAfternoon';
  if (hour >= 18 && hour < 23) return 'greetingEvening';
  return 'greetingLateNight';
}

function updateVietnamClock() {
  const now = new Date();
  const parts = getVietnamDateParts(now);
  const hour = Number(parts.hour);
  const locales = { vi: 'vi-VN', en: 'en-US', es: 'es-ES', fr: 'fr-FR', zh: 'zh-CN', ja: 'ja-JP', de: 'de-DE' };
  const formatter = new Intl.DateTimeFormat(locales[state.language] || 'en-US', {
    timeZone: 'Asia/Ho_Chi_Minh', weekday: 'long', day: 'numeric', month: 'long'
  });
  $('#dateLabel').textContent = formatter.format(now);
  $('#greetingText').textContent = t(getGreetingKey(hour));
}


function getProfile() { return state.profile === 'personal' ? getPersonalProfile() : (profileData[state.profile] || profileData.linh); }

function renderHealthSheet() {
  const snapshot = currentSnapshot();
  const p = getProfile();
  const body = snapshot.sources.body;
  const available = sourceHasMetrics('body', body);
  setText('#healthSleepMetric', available ? p.sleep : '—');
  setText('#healthHrMetric', available ? p.restingHr : '—');
  setText('#healthHrvMetric', available ? p.hrv : '—');
  setText('#healthStressMetric', available ? t(p.stressKey) : '—');
  setText('#healthHrHint', available ? (Number(body.metrics.restingHr) > Number(snapshot.metricBaselines?.restingHr || PERSONAL_BASELINE_METRICS.restingHr) + 8 ? t('elevated') : t('withinBaseline')) : t('sourceMissing'));
  setText('#healthHrvHint', available ? (Number(body.metrics.hrv) < Number(snapshot.metricBaselines?.hrv || PERSONAL_BASELINE_METRICS.hrv) * 0.85 ? t('belowBaselineShort') : t('withinBaseline')) : t('sourceMissing'));
  setText('#healthStressHint', available ? (getDecision().sourceImpact.body < -4 ? t('elevated') : t('withinBaseline')) : t('sourceMissing'));
  setText('#healthSyncTime', available ? freshnessText(body) : connectionText(body));
  setText('#healthConnectionStatus', `${connectionText(body)} · ${modeText(body.mode)}`);
  setText('#watchDeviceStatus', state.profile === 'personal' ? connectionText(body) : t('watchConnected'));
  setText('#phoneAppStatus', state.profile === 'personal' ? modeText(body.mode) : t('healthAppLinked'));
  setText('#sentioHealthStatus', available ? t('readyToUse') : connectionText(body));
  const connect = $('#connectHealthButton');
  const disconnect = $('#disconnectHealthButton');
  if (connect) {
    connect.hidden = state.profile !== 'personal' || available;
    connect.disabled = body.connection === 'connecting';
    connect.textContent = t('connectHealth');
  }
  if (disconnect) {
    disconnect.hidden = state.profile !== 'personal' || !available;
    disconnect.textContent = t('disconnectHealth');
  }
}

function renderTrainingState(decision) {
  const personal = state.profile === 'personal';
  const provisional = personal && decision.baselineStatus === 'provisional';
  const day = personal ? refreshBaseline().day : getProfile().baselineDay;
  const dayText = format(t('baselineDayText'), { day });
  setText('#baselineDay', dayText);
  setText('#accountBaselineDay', dayText);
  setText('#baselineStatus', provisional ? t('baselineBuilding') : t('baselineEstablished'));
  setText('#baselineAccuracy', provisional ? t('trainingText') : t('accuracyImproving'));
  setAriaProgress('#baselineProgressBar', day, BASELINE_DAYS);
  setAriaProgress('#accountBaselineProgress', day, BASELINE_DAYS);
  setAriaProgress('#trainingProgressBar', day, BASELINE_DAYS);
  const banner = $('#trainingBanner');
  if (banner) {
    banner.hidden = !provisional;
    banner.classList.toggle('show', provisional);
    banner.setAttribute('aria-hidden', provisional ? 'false' : 'true');
  }
  setText('#trainingDayLabel', dayText);
  setText('#trainingBannerText', t('trainingText'));
  setText('#trainingCoverage', `${t('coverageLabel')}: ${Math.round(decision.coverage * 100)}%`);
  const card = $('#readinessCard');
  if (card) {
    card.dataset.baselineStatus = decision.baselineStatus;
    card.dataset.mode = decision.mode;
  }
}

function renderAccountSummary() {
  const p = getProfile();
  const personal = state.profile === 'personal';
  setText('#profileModeLabel', personal ? (state.personal.previewMode ? t('previewData') : t('personalAccount')) : t('demoScenario'));
  setText('#accountName', p.name);
  const accountName = $('#onboardingName');
  if (accountName && !accountName.value && state.personal.name) accountName.value = state.personal.name;
}

function resetLiveMetrics(profile = getProfile()) {
  state.liveProfile = state.profile;
  if (state.profile === 'personal') {
    const metrics = state.personal.sources.digital.metrics || {};
    state.liveTabs = hasFiniteValue(metrics.tabs) ? Number(metrics.tabs) : 0;
    state.liveFocus = hasFiniteValue(metrics.focus) ? Number(metrics.focus) : null;
  } else {
    state.liveTabs = Number.isFinite(Number(profile.tabs)) ? Number(profile.tabs) : 0;
    state.liveFocus = Number.isFinite(Number(profile.focus)) ? Number(profile.focus) : 0;
  }
  state.sessionStartTabs = state.liveTabs;
}

function buildDynamicDecisionExplanation(decision) {
  if (!decision || decision.status === 'insufficient' || !decision.factors.length) return t('reasoningNoData');
  const meaningful = [...decision.factors]
    .filter((factor) => Number.isFinite(Number(factor.impact)) && Math.abs(Number(factor.impact)) >= 1)
    .sort((a, b) => Math.abs(Number(b.impact)) - Math.abs(Number(a.impact)));
  if (!meaningful.length) return t('reasoningNeutral');

  const negatives = meaningful.filter((factor) => Number(factor.impact) < 0);
  const positives = meaningful.filter((factor) => Number(factor.impact) > 0);
  const action = t(decision.recommendation.titleKey);
  if (negatives.length && positives.length) {
    const negative = negatives[0];
    const positive = positives[0];
    const negativeDominates = Math.abs(Number(negative.impact)) >= Math.abs(Number(positive.impact));
    return format(t(negativeDominates ? 'reasoningMixed' : 'reasoningMixedPositive'), {
      negative: negative.label,
      negativePoints: Math.abs(Math.round(negative.impact)),
      positive: positive.label,
      positivePoints: Math.round(positive.impact),
      action
    });
  }
  if (negatives.length > 1) {
    return format(t('reasoningTwoNegative'), {
      primary: negatives[0].label,
      primaryPoints: Math.round(negatives[0].impact),
      secondary: negatives[1].label,
      secondaryPoints: Math.round(negatives[1].impact),
      action
    });
  }
  if (negatives.length) {
    return format(t('reasoningSingleNegative'), {
      primary: negatives[0].label,
      primaryPoints: Math.round(negatives[0].impact),
      action
    });
  }
  return format(t('reasoningSinglePositive'), {
    primary: positives[0].label,
    primaryPoints: Math.round(positives[0].impact),
    action
  });
}

function renderProfile() {
  const snapshot = currentSnapshot();
  state.decision = computeDecision(snapshot);
  const decision = state.decision;
  const p = getProfile();
  setText('#profileName', p.name);
  setText('#profilePillName', p.name);
  setText('#profileAvatar', p.initial);
  if ($('#profileAvatar')) $('#profileAvatar').style.background = p.accent;
  const displayScore = decision.status === 'insufficient' ? '—' : decision.score;
  setText('#scoreNumber', displayScore);
  updateRing(decision.status === 'insufficient' ? 0 : decision.score);
  setText('#confidenceValue', `${decision.confidence}%`);
  setAriaProgress('#confidenceBar', decision.confidence);
  const comparison = decision.baselineStatus === 'provisional' && state.profile === 'personal'
    ? t('provisionalScore')
    : state.profile === 'personal'
      ? format(t('establishedScoreComparison'), { value: `${decision.score - decision.baselineScore >= 0 ? '+' : ''}${decision.score - decision.baselineScore}` })
      : format(t('scoreVsYesterday'), { value: profileData[state.profile]?.delta || '0' });
  setText('#scoreDelta', comparison);
  setText('#scoreComparisonCurrent', displayScore);
  setText('#scoreComparisonBaseline', decision.baselineScore);
  setText('#decisionDataCoverage', `${Math.round(decision.coverage * 100)}%`);
  setText('#missingSignalsNote', decision.missingSources.length
    ? format(t('missingSignals'), { sources: decision.missingSources.map(sourceDisplayName).join(' · ') })
    : t('noMissingSignals'));
  renderTrainingState(decision);
  renderStory(decision);

  setText('#statusBadge', t(decision.status));
  const statusBadge = $('#statusBadge');
  if (statusBadge) statusBadge.className = `status-badge ${decision.status === 'ready' ? 'ready' : decision.status === 'low' ? 'low' : ''}`;
  const decisionDial = $('#decisionDial');
  if (decisionDial) decisionDial.setAttribute('aria-valuetext', `${displayScore} / 100 · ${t(decision.status)}`);
  setText('#recommendationTitle', t(decision.recommendation.titleKey));
  setText('#recommendationText', t(decision.recommendation.textKey));
  const hasActivePersonalSession = state.profile === 'personal' && Boolean(state.sessionStartedAt || state.personal.activeSession);
  setText('#primaryActionText', t(hasActivePersonalSession ? 'resumeSessionAction' : decision.recommendation.actionKey));
  setText('#insightText', state.profile === 'personal' ? t(p.insightKey) : t(p.insightKey));
  if ($('#taskSelect') && !state.running) $('#taskSelect').value = p.task;

  const digital = snapshot.sources.digital;
  const body = snapshot.sources.body;
  const environment = snapshot.sources.environment;
  const digitalAvailable = sourceHasMetrics('digital', digital);
  const bodyAvailable = sourceHasMetrics('body', body);
  const environmentAvailable = sourceHasMetrics('environment', environment);
  setText('#browserDetail', digitalAvailable ? format(t(state.profile === 'personal' ? 'digitalProxyMetric' : 'browserMetric'), { focus: Math.round(digital.metrics.focus), tabs: Math.round(digital.metrics.tabs) }) : connectionText(digital));
  setText('#wearableDetail', bodyAvailable ? `${modeText(body.mode)} · ${format(t('wearableMetric'), { sleep: p.sleep, body: t(p.bodyKey) })}` : connectionText(body));
  setText('#deskDetail', environmentAvailable ? format(t('deskMetric'), { lux: Math.round(environment.metrics.lux), presence: environment.metrics.presence === true ? t('presentAtDesk') : '—' }) : connectionText(environment));
  const sourceStates = p.sourceStates || ['watch', 'watch', 'watch'];
  setSourceState($('#browserState'), sourceStates[0]);
  setSourceState($('#wearableState'), sourceStates[1]);
  setSourceState($('#deskState'), sourceStates[2]);
  const impactText = (value) => format(t('impactLabel'), { value: `${value > 0 ? '+' : ''}${value}` });
  setText('#browserImpact', impactText(decision.sourceImpact.digital));
  setText('#wearableImpact', impactText(decision.sourceImpact.body));
  setText('#deskImpact', impactText(decision.sourceImpact.environment));
  const dynamicExplanation = buildDynamicDecisionExplanation(decision);
  setText('#fusionSummaryText', dynamicExplanation);
  setText('#decisionExplanationDetail', dynamicExplanation);
  const fusionSummary = $('#fusionSummary');
  if (fusionSummary) fusionSummary.dataset.tone = decision.factors.some((factor) => factor.impact < 0) ? 'attention' : 'supportive';

  if (state.liveProfile !== state.profile || !Number.isFinite(state.liveTabs) || !Number.isFinite(state.liveFocus)) resetLiveMetrics(p);
  setText('#liveTabsValue', state.liveTabs);
  setText('#liveFocusValue', Number.isFinite(state.liveFocus) ? `${Math.round(state.liveFocus)}%` : '—');
  setAriaProgress('#liveFocusBar', Number.isFinite(state.liveFocus) ? state.liveFocus : 0);
  setText('#liveLightValue', environmentAvailable ? `${Math.round(environment.metrics.lux)} lux` : '—');
  setText('#livePresenceValue', environmentAvailable && environment.metrics.presence === true ? t('detected') : '—');
  setText('#liveBodyValue', bodyAvailable ? t(p.bodyKey) : t('sourceMissing'));
  renderNudge();
  renderFactors(decision);
  renderProgress();
  renderHealthSheet();
  updateFocusSubtitle();
  renderAccountSummary();
  renderSourceSheet(state.selectedSource);
}

function renderStory(decision = getDecision()) {
  const sorted = [...decision.factors].sort((a, b) => Math.abs(b.impact) - Math.abs(a.impact));
  const items = sorted.slice(0, 3);
  const environmentFactor = sorted.find((factor) => factor.source === 'environment' && Math.abs(factor.impact) >= 4);
  if (environmentFactor && !items.includes(environmentFactor)) items.splice(Math.max(0, items.length - 1), 1, environmentFactor);
  const list = $('#storyList');
  if (!list) return;
  if (!items.length) {
    list.innerHTML = `<li class="story-item"><span class="story-item-icon" aria-hidden="true">·</span><span><strong>${escapeHtml(t('collectingWeekly'))}</strong><small>${escapeHtml(t('factorUnavailable'))}</small></span></li>`;
    return;
  }
  list.innerHTML = items.map((item) => `
    <li class="story-item ${item.impact < 0 ? 'negative' : 'positive'}">
      <span class="story-item-icon" aria-hidden="true">${item.icon}</span>
      <span><strong>${escapeHtml(item.label)}</strong><small>${escapeHtml(item.detail)} · ${escapeHtml(item.freshness)}</small></span>
    </li>`).join('');
}

function updateRing(score) {
  const circumference = 2 * Math.PI * 79;
  const ring = $('#ringProgress');
  const normalizedScore = clamp(score, 0, 100);
  if (ring) {
    ring.style.strokeDasharray = String(circumference);
    requestAnimationFrame(() => { ring.style.strokeDashoffset = String(circumference * (1 - normalizedScore / 100)); });
  }
  const dial = $('#decisionDial');
  if (dial) {
    dial.style.setProperty('--score', normalizedScore);
    dial.setAttribute('aria-valuenow', String(Math.round(normalizedScore)));
  }
}

function toggleSignalDetails() {
  const card = $('.source-card');
  const button = $('#toggleSignals');
  if (!card || !button) return;
  const expanded = !card.classList.contains('expanded');
  card.classList.toggle('expanded', expanded);
  button.setAttribute('aria-expanded', String(expanded));
  setText('#toggleSignals span', t(expanded ? 'hideSignalDetails' : 'showSignalDetails'));
}

function toggleCompanionInsights() {
  const section = $('#companionInsights');
  const button = $('#toggleInsights');
  if (!section || !button) return;
  const expanded = section.hidden;
  section.hidden = !expanded;
  button.setAttribute('aria-expanded', String(expanded));
}

function setSourceState(el, stateKey) {
  if (!el) return;
  el.className = `source-state ${stateKey}`;
  el.dataset.state = stateKey;
  const labelKey = stateKey === 'good' ? 'sourceGood' : stateKey === 'watch' ? 'sourceWatch' : 'sourceAttention';
  el.textContent = t(labelKey);
}

function renderFactors(decision = getDecision()) {
  setText('#baselineValue', decision.baselineScore);
  const list = $('#factorList');
  if (!list) return;
  if (!decision.factors.length) {
    list.innerHTML = `<div class="factor-row empty"><span>${escapeHtml(t('factorUnavailable'))}</span></div>`;
    return;
  }
  list.innerHTML = decision.factors.map((factor) => `
    <div class="factor-row" data-source="${factor.source}">
      <span class="factor-icon" aria-hidden="true">${factor.icon}</span>
      <span><strong>${escapeHtml(factor.label)}</strong><small>${escapeHtml(factor.detail)} · ${escapeHtml(sourceDisplayName(factor.source))} · ${escapeHtml(factor.freshness)}</small></span>
      <span class="factor-points ${factor.impact < 0 ? 'negative' : ''}">${factor.impact > 0 ? '+' : ''}${factor.impact}</span>
    </div>`).join('');
}

function renderProfileOptions() {
  const options = $('#profileOptions');
  if (!options) return;
  const personal = getPersonalProfile();
  const personalDecision = state.profile === 'personal' ? state.decision : computeDecision(getPersonalSnapshot());
  const profiles = [['personal', personal], ...Object.entries(profileData)];
  options.innerHTML = profiles.map(([key, p]) => {
    const active = state.profile === key;
    const description = key === 'personal' ? t('personalRole') : `${t('demoScenario')} · ${t(p.roleKey)} · ${t(p.helpKey)}`;
    const score = key === 'personal' ? (personalDecision?.status === 'insufficient' ? '—' : personalDecision?.score ?? personal.score) : p.score;
    return `<button class="profile-option${active ? ' active' : ''}" type="button" data-profile-option="${key}" aria-pressed="${active ? 'true' : 'false'}">
      <span class="avatar" style="background:${p.accent}" aria-hidden="true">${escapeHtml(p.initial)}</span>
      <span><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(description)}</small></span>
      <span class="mini-score">${score ?? '—'}</span>
    </button>`;
  }).join('');
  $$('[data-profile-option]', options).forEach((button) => {
    button.addEventListener('click', () => {
      selectProfile(button.dataset.profileOption);
      closePanels(false);
      $('#profileButton')?.focus();
    });
  });
}

function selectProfile(key) {
  if (key !== 'personal' && !profileData[key]) return;
  state.profile = key;
  state.roomFixed = false;
  resetTimerForProfile();
  resetLiveMetrics(key === 'personal' ? getPersonalProfile() : profileData[key]);
  renderProfile();
  renderProfileOptions();
  pulseCard();
}

function pulseCard() {
  const card = $('#readinessCard');
  if (!card || !card.animate || document.body.classList.contains('no-motion')) return;
  card.animate([{ transform: 'scale(.992)', opacity: .9 }, { transform: 'scale(1)', opacity: 1 }], { duration: 360, easing: 'cubic-bezier(.2,.8,.2,1)' });
}

function addFocusEvent(type, textKey, detail = '') {
  state.focusEvents.push({ id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, type, textKey, detail, at: isoNow() });
  state.focusEvents = state.focusEvents.slice(-20);
  renderFocusTimeline();
}

function renderFocusTimeline() {
  const timeline = $('#focusEventTimeline');
  const empty = $('#focusEventEmpty');
  if (empty) empty.hidden = state.focusEvents.length > 0;
  if (!timeline) return;
  timeline.dataset.state = state.focusEvents.length ? 'active' : 'empty';
  timeline.innerHTML = state.focusEvents.map((event) => {
    const date = new Date(event.at);
    const time = Number.isNaN(date.getTime()) ? '' : date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `<li class="focus-event" data-event-type="${escapeHtml(event.type)}"><time datetime="${escapeHtml(event.at)}">${escapeHtml(time)}</time><span><strong>${escapeHtml(t(event.textKey))}</strong>${event.detail ? `<small>${escapeHtml(event.detail)}</small>` : ''}</span></li>`;
  }).join('');
}

function nudgeThresholds() {
  const sensitivity = state.personal.preferences?.nudgeSensitivity || 'balanced';
  if (sensitivity === 'gentle') return { suggestionTabs: 7, suggestionFocus: 70, urgentTabs: 11, urgentFocus: 55 };
  if (sensitivity === 'minimal') return { suggestionTabs: 10, suggestionFocus: 62, urgentTabs: 14, urgentFocus: 50 };
  return { suggestionTabs: 5, suggestionFocus: 75, urgentTabs: 9, urgentFocus: 60 };
}

function getNudgeCandidate() {
  const snapshot = currentSnapshot();
  const environment = snapshot.sources.environment;
  if (!state.roomFixed && (snapshot.mode === 'demo' || state.running) && sourceHasMetrics('environment', environment) && environment.metrics.presence === true && Number(environment.metrics.lux) < 200) {
    if (!state.lowLightSince) state.lowLightSince = Date.now();
    if (snapshot.mode === 'personal' && Date.now() - state.lowLightSince < 2 * 60000) return null;
    return {
      ruleId: 'environment-low-light',
      level: 'urgent',
      titleKey: 'roomNudgeTitle',
      textKey: 'roomNudgeText',
      actionKey: 'fixed',
      reason: t('nudgeEnvironmentReason'),
      kind: 'environment'
    };
  }
  state.lowLightSince = 0;
  const digital = snapshot.sources.digital;
  const allowDemo = snapshot.mode === 'demo';
  if (!sourceHasMetrics('digital', digital) && !allowDemo) return null;
  if (snapshot.mode === 'personal' && !state.running) return null;
  const rawTabs = hasFiniteValue(state.liveTabs) ? Number(state.liveTabs) : Number(digital.metrics.tabs || 0);
  const tabs = state.running ? Math.max(0, rawTabs - Number(state.sessionStartTabs || 0)) : rawTabs;
  const focus = hasFiniteValue(state.liveFocus) ? Number(state.liveFocus) : Number(digital.metrics.focus || 0);
  const thresholds = nudgeThresholds();
  const reason = format(t('nudgeDigitalReason'), { tabs: Math.round(tabs), focus: Math.round(focus) });
  if (tabs > thresholds.urgentTabs || focus < thresholds.urgentFocus) {
    return { ruleId: 'digital-urgent', level: 'urgent', titleKey: 'nudgeUrgentTitle', textKey: 'nudgeUrgentText', actionKey: 'finishSessionAction', reason, kind: 'reset' };
  }
  if (tabs > thresholds.suggestionTabs || focus < thresholds.suggestionFocus) {
    return { ruleId: 'digital-suggestion', level: 'suggestion', titleKey: 'nudgeSuggestionTitle', textKey: 'nudgeSuggestionText', actionKey: 'okay', reason, kind: 'suggestion' };
  }
  return null;
}

function evaluateNudge(shouldRecord = false) {
  const candidate = getNudgeCandidate();
  if (!candidate) {
    state.activeNudge = null;
    return null;
  }
  const sameRule = state.activeNudge?.ruleId === candidate.ruleId;
  const cooldownActive = Date.now() < Number(state.nudgeCooldowns[candidate.ruleId] || 0);
  const escalating = candidate.level === 'urgent' && state.activeNudge?.level === 'suggestion';
  if (cooldownActive && !sameRule && !escalating) {
    state.activeNudge = null;
    return null;
  }
  if (!sameRule) state.activeNudge = { ...candidate, id: `${candidate.ruleId}-${Date.now()}`, triggeredAt: isoNow(), status: 'active' };
  if (shouldRecord && state.running && !sameRule) {
    addFocusEvent('nudge', 'eventNudge', candidate.reason);
    state.nudgeCooldowns[candidate.ruleId] = Date.now() + 20 * 60000;
    if (state.profile === 'personal') {
      state.personal.nudges.push({ id: state.activeNudge.id, ruleId: candidate.ruleId, level: candidate.level, triggeredAt: state.activeNudge.triggeredAt, status: 'shown' });
      state.personal.nudges = state.personal.nudges.slice(-MAX_NUDGES);
      persistPersonal();
    }
  }
  return state.activeNudge;
}

function renderNudge() {
  const nudge = evaluateNudge(false);
  const card = $('#nudgeCard');
  if (!card) return;
  card.className = 'nudge-card';
  const icon = $('.nudge-emoji', card);
  const dismiss = $('#nudgeDismiss');
  if (nudge) {
    card.classList.add(nudge.level === 'urgent' ? 'urgent' : 'suggestion');
    card.dataset.nudgeState = nudge.level;
    if (icon) icon.dataset.kind = nudge.kind === 'environment' ? 'environment' : nudge.level;
    setText('#nudgeTitle', t(nudge.titleKey));
    setText('#nudgeText', t(nudge.textKey));
    setText('#nudgeAction', t(nudge.actionKey));
    setText('#nudgeReason', nudge.reason);
    if (dismiss) {
      dismiss.hidden = false;
      dismiss.textContent = t('dismiss');
    }
  } else {
    card.classList.add('quiet');
    card.dataset.nudgeState = 'quiet';
    if (icon) icon.dataset.kind = 'quiet';
    setText('#nudgeTitle', state.roomFixed ? t('roomImproved') : t('allGoodTitle'));
    setText('#nudgeText', t('allGoodText'));
    setText('#nudgeAction', t('okay'));
    setText('#nudgeReason', t('nudgeQuietReason'));
    if (dismiss) dismiss.hidden = true;
  }
}

function updateFocusSubtitle() {
  const decision = state.decision || getDecision();
  setText('#focusSubtitle', t(decision.recommendation.textKey));
}

function renderProgress() {
  if (state.profile === 'personal') {
    renderPersonalProgress();
    return;
  }
  const p = getProfile();
  setText('#progressProfileTitle', t(p.progressTitleKey));
  setText('#trendValue', p.trend);
  setText('#changeHeadline', t(p.headlineKey));
  setText('#beforeValue', p.before);
  setText('#afterValue', p.after);
  setText('#beforeLabel', t(p.unitKey));
  setText('#afterLabel', t(p.unitKey));
  setText('#progressNote', t(p.progressNoteKey));
  setText('#weeklyAverage', p.average);
  setText('#consistentDaysValue', p.streak);
  setText('#historyTrend', t('stableMore'));
  setText('#trendDataSource', t('previewSessionData'));
  setText('#trendAverageScore', p.average);
  setText('#trendSessionCount', '7');
  setText('#trendActiveDays', '7 / 7');
  renderHistory(p.chart);
  drawChart(p.chart);
}

function recentSessions(days = 7) {
  const cutoff = startOfLocalDay(new Date());
  cutoff.setDate(cutoff.getDate() - (days - 1));
  return state.personal.sessions.filter((session) => {
    const timestamp = new Date(session.time || session.startedAt || 0).getTime();
    return session.kind !== 'break' && Number.isFinite(timestamp) && timestamp >= cutoff.getTime();
  });
}

function previewWeeklyData() {
  return {
    sample: true,
    values: [68, 72, 70, 76, 79, 81, 83],
    average: 76,
    interruptions: 3.4,
    rhythm: 71,
    healthyStops: 2,
    sessions: 7,
    days: 7,
    consistentDays: 5,
    before: 7,
    after: 3
  };
}

function aggregateWeeklyData(sessions) {
  const valid = sessions.filter((session) => session.readiness !== null && session.readiness !== undefined && session.readiness !== '' && Number.isFinite(Number(session.readiness)));
  const average = valid.length ? Math.round(valid.reduce((sum, session) => sum + Number(session.readiness), 0) / valid.length) : null;
  const interruptions = valid.length ? Math.round((valid.reduce((sum, session) => sum + Number(session.departures ?? session.tabs ?? 0), 0) / valid.length) * 10) / 10 : null;
  const rhythm = valid.length ? Math.round((valid.filter((session) => session.wellTimed === true).length / valid.length) * 100) : 0;
  const healthyStops = valid.filter((session) => session.stoppedOnTime).length;
  const midpoint = Math.max(1, Math.floor(valid.length / 2));
  const first = valid.slice(0, midpoint);
  const second = valid.slice(midpoint);
  const meanTabs = (items) => items.length ? Math.round((items.reduce((sum, session) => sum + Number(session.departures ?? session.tabs ?? 0), 0) / items.length) * 10) / 10 : 0;
  const dailyValues = [];
  const today = startOfLocalDay(new Date());
  for (let offset = 6; offset >= 0; offset -= 1) {
    const day = new Date(today);
    day.setDate(day.getDate() - offset);
    const key = localDateKey(day);
    const daySessions = valid.filter((session) => localDateKey(session.time || session.startedAt) === key);
    dailyValues.push(daySessions.length ? Math.round(daySessions.reduce((sum, session) => sum + Number(session.readiness), 0) / daySessions.length) : null);
  }
  const distinctDays = new Set(valid.map((session) => localDateKey(session.time || session.startedAt)).filter(Boolean)).size;
  const consistentDays = new Set(valid.filter((session) => session.wellTimed === true).map((session) => localDateKey(session.time || session.startedAt)).filter(Boolean)).size;
  return {
    sample: false,
    values: dailyValues,
    average,
    interruptions,
    rhythm,
    healthyStops,
    sessions: valid.length,
    days: distinctDays,
    consistentDays,
    before: meanTabs(first),
    after: meanTabs(second.length ? second : first)
  };
}

function getWeeklyProgressModel({ allowPreview = true } = {}) {
  const now = startOfLocalDay(new Date());
  const start = new Date(now);
  start.setDate(start.getDate() - 6);
  const sessions = recentSessions(7);
  const eligibleSessions = sessions.filter((session) => session.readiness !== null && session.readiness !== undefined && session.readiness !== '' && Number.isFinite(Number(session.readiness)));
  const data = eligibleSessions.length
    ? aggregateWeeklyData(sessions)
    : allowPreview && state.personal.previewMode
      ? previewWeeklyData()
      : null;
  return { now, start, sessions, eligibleSessions, data };
}

function renderPersonalProgress() {
  const { now, start, data } = getWeeklyProgressModel();
  const locale = ({ vi: 'vi-VN', en: 'en-US', es: 'es-ES', fr: 'fr-FR', zh: 'zh-CN', ja: 'ja-JP', de: 'de-DE' })[state.language] || 'en-US';
  const rangeFormatter = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short' });
  setText('#weekRange', `${rangeFormatter.format(start)} – ${rangeFormatter.format(now)}${data?.sample ? ` · ${t('previewData')}` : ''}`);
  setText('#progressProfileTitle', `${t('recentRhythm')} · ${state.personal.name || t('personalAccount')}`);
  setText('#trendDataSource', data?.sample ? t('previewSessionData') : t('realSessionData'));

  if (!data) {
    setText('#trendValue', '—');
    setText('#changeHeadline', t('collectingWeekly'));
    setText('#beforeValue', '—');
    setText('#afterValue', '—');
    setText('#beforeLabel', t('weeklyInterruptionsLabel'));
    setText('#afterLabel', t('weeklyInterruptionsLabel'));
    setText('#progressNote', t('collectingWeeklyText'));
    setText('#weeklyAverage', '—');
    setText('#consistentDaysValue', '0');
    setText('#historyTrend', t('collectingWeekly'));
    setText('#weeklyInterruptions', '—');
    setText('#weeklyRhythm', '—');
    setText('#weeklyHealthyStops', '0');
    setText('#trendAverageScore', '—');
    setText('#trendSessionCount', '0');
    setText('#trendActiveDays', '0 / 7');
    setText('#trendDataSource', t('realSessionData'));
    setText('#selfAwarenessInsights', t('noInsightYet'));
    const history = $('#historyList');
    if (history) history.innerHTML = `<p class="empty-state">${escapeHtml(t('collectingWeeklyText'))}</p>`;
    drawChart([]);
    return;
  }

  const trend = data.before > data.after ? `−${Math.round((data.before - data.after) * 10) / 10}` : '→';
  const finiteScores = data.values.filter((value) => value !== null && value !== undefined && value !== '' && Number.isFinite(Number(value))).map(Number);
  const scoreTrend = finiteScores.length > 1 ? Math.round(finiteScores.at(-1) - finiteScores[0]) : 0;
  setText('#trendValue', data.sample ? t('previewData') : trend);
  setText('#changeHeadline', data.before > data.after ? t('departuresHeadline') : t('progressTitleNew'));
  setText('#beforeValue', data.before);
  setText('#afterValue', data.after);
  setText('#beforeLabel', t('weeklyInterruptionsLabel'));
  setText('#afterLabel', t('weeklyInterruptionsLabel'));
  setText('#progressNote', data.sample ? t('previewData') : format(t('insightTabs'), { value: data.interruptions }));
  setText('#weeklyAverage', data.average ?? '—');
  setText('#consistentDaysValue', data.consistentDays ?? Math.round(data.rhythm / 100 * data.sessions));
  setText('#historyTrend', data.sample ? t('previewData') : t('stableMore'));
  setText('#weeklyInterruptions', data.interruptions);
  setText('#weeklyRhythm', `${data.rhythm}%`);
  setText('#weeklyHealthyStops', data.healthyStops);
  setText('#trendAverageScore', data.average ?? '—');
  setText('#trendSessionCount', data.sessions ?? 0);
  setText('#trendActiveDays', `${data.days ?? finiteScores.length} / 7`);
  setText('#historyTrend', data.sample ? t('previewData') : scoreTrend > 0 ? `+${scoreTrend}` : scoreTrend < 0 ? `${scoreTrend}` : '→');
  const insightStrings = [
    format(t('insightTabs'), { value: data.interruptions }),
    format(t('insightRhythm'), { value: data.rhythm }),
    format(t('insightStops'), { value: data.healthyStops })
  ];
  const insights = $('#selfAwarenessInsights');
  if (insights) insights.innerHTML = insightStrings.map((text) => `<li>${escapeHtml(text)}</li>`).join('');
  renderHistory(data.values);
  drawChart(data.values);
}

function renderHistory(values) {
  const locale = ({ vi: 'vi-VN', en: 'en-US', es: 'es-ES', fr: 'fr-FR', zh: 'zh-CN', ja: 'ja-JP', de: 'de-DE' })[state.language] || 'en-US';
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  const dayLabels = values.map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (values.length - 1 - index));
    return formatter.format(date);
  });
  const list = $('#historyList');
  if (!list) return;
  list.innerHTML = values.map((value, index) => {
    const available = value !== null && value !== undefined && value !== '' && Number.isFinite(Number(value));
    const safeValue = available ? clamp(value, 0, 100) : 0;
    return `
    <div class="history-row${available ? '' : ' missing'}">
      <span>${dayLabels[index]}</span>
      <div class="history-track"><i style="width:${safeValue}%"></i></div>
      <strong>${available ? Math.round(Number(value)) : '—'}</strong>
    </div>`;
  }).join('');
}

function drawChart(values) {
  const sourceValues = Array.isArray(values) ? values : [];
  const finiteValues = sourceValues.filter((value) => value !== null && value !== undefined && value !== '' && Number.isFinite(Number(value))).map(Number);
  const empty = $('#chartEmptyState');
  if (empty) empty.hidden = finiteValues.length > 0;
  const width = 700, height = 320, padLeft = 48, padRight = 24, padTop = 24, padBottom = 46;
  const plotWidth = width - padLeft - padRight;
  const plotHeight = height - padTop - padBottom;
  const yFor = (value) => padTop + (100 - clamp(value, 0, 100)) / 100 * plotHeight;
  const points = sourceValues.map((value, index) => {
    if (value === null || value === undefined || value === '' || !Number.isFinite(Number(value))) return null;
    const x = padLeft + index * (plotWidth / Math.max(1, sourceValues.length - 1));
    return [x, yFor(value), clamp(value, 0, 100), index];
  });

  let drawing = false;
  const line = points.map((point) => {
    if (!point) { drawing = false; return ''; }
    const command = drawing ? 'L' : 'M';
    drawing = true;
    return `${command} ${point[0]} ${point[1]}`;
  }).join(' ');
  const segments = [];
  let segment = [];
  points.forEach((point) => {
    if (point) segment.push(point);
    else if (segment.length) { segments.push(segment); segment = []; }
  });
  if (segment.length) segments.push(segment);
  const baselineY = padTop + plotHeight;
  const area = segments.filter((items) => items.length > 1).map((items) => {
    const [first] = items;
    const last = items.at(-1);
    return `M ${first[0]} ${baselineY} L ${items.map((point) => `${point[0]} ${point[1]}`).join(' L ')} L ${last[0]} ${baselineY} Z`;
  }).join(' ');

  if ($('#chartLine')) $('#chartLine').setAttribute('d', line);
  if ($('#chartArea')) $('#chartArea').setAttribute('d', area);
  if ($('#chartDots')) $('#chartDots').innerHTML = points.filter(Boolean).map(([x, y, value, index]) => `<circle class="chart-dot" cx="${x}" cy="${y}" r="7"><title>${escapeHtml(String(value))} / 100 · ${escapeHtml(String(index + 1))}/7</title></circle>`).join('');

  const gridValues = [100, 75, 50, 25, 0];
  if ($('#chartGrid')) $('#chartGrid').innerHTML = gridValues.map((value) => `<line x1="${padLeft}" x2="${width - padRight}" y1="${yFor(value)}" y2="${yFor(value)}"></line>`).join('');
  if ($('#chartYAxisLabels')) $('#chartYAxisLabels').innerHTML = gridValues.map((value) => `<text x="${padLeft - 12}" y="${yFor(value) + 4}" text-anchor="end">${value}</text>`).join('');

  const locale = ({ vi: 'vi-VN', en: 'en-US', es: 'es-ES', fr: 'fr-FR', zh: 'zh-CN', ja: 'ja-JP', de: 'de-DE' })[state.language] || 'en-US';
  const dayFormatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  const labels = sourceValues.map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (sourceValues.length - 1 - index));
    return dayFormatter.format(date);
  });
  if ($('#chartXAxisLabels')) $('#chartXAxisLabels').innerHTML = labels.map((label, index) => {
    const x = padLeft + index * (plotWidth / Math.max(1, labels.length - 1));
    return `<text x="${x}" y="${height - 12}" text-anchor="middle">${escapeHtml(label)}</text>`;
  }).join('');

  const average = finiteValues.length ? Math.round(finiteValues.reduce((sum, value) => sum + value, 0) / finiteValues.length) : null;
  const averageLine = $('#chartAverageLine');
  const averageLabel = $('#chartAverageLabel');
  if (averageLine) {
    const averageY = average === null ? 0 : yFor(average);
    averageLine.setAttribute('x1', String(padLeft));
    averageLine.setAttribute('x2', String(width - padRight));
    averageLine.setAttribute('y1', String(averageY));
    averageLine.setAttribute('y2', String(averageY));
    averageLine.hidden = average === null;
  }
  if (averageLabel) {
    averageLabel.textContent = average === null ? '' : `${t('chartAverage')} ${average}`;
    averageLabel.setAttribute('x', String(width - padRight));
    averageLabel.setAttribute('y', String(yFor(average ?? 0) - 8));
  }
  const wrap = $('#readinessChartWrap');
  if (wrap) wrap.setAttribute('aria-label', finiteValues.length ? `${t('readinessTrendLabel')}: ${finiteValues.join(', ')}` : t('chartEmptyState'));
}

function buildWeeklyReportModel() {
  const locale = ({ vi: 'vi-VN', en: 'en-US', es: 'es-ES', fr: 'fr-FR', zh: 'zh-CN', ja: 'ja-JP', de: 'de-DE' })[state.language] || 'en-US';
  const rangeFormatter = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' });
  let data;
  let name;
  let changeLabel;
  let before;
  let after;
  if (state.profile === 'personal') {
    const weekly = getWeeklyProgressModel();
    data = weekly.data;
    if (!data) return null;
    name = state.personal.name || t('personalAccount');
    changeLabel = t('weeklyInterruptionsLabel');
    before = data.before;
    after = data.after;
  } else {
    const profile = getProfile();
    data = {
      sample: true,
      values: [...profile.chart],
      average: profile.average,
      interruptions: profile.after,
      rhythm: Math.round(profile.streak / 7 * 100),
      healthyStops: profile.status === 'ready' ? 0 : 2,
      sessions: 7,
      days: 7,
      consistentDays: profile.streak,
      before: profile.before,
      after: profile.after
    };
    name = profile.name;
    changeLabel = t(profile.unitKey);
    before = profile.before;
    after = profile.after;
  }
  const now = startOfLocalDay(new Date());
  const start = new Date(now);
  start.setDate(start.getDate() - 6);
  return {
    name,
    range: `${rangeFormatter.format(start)} – ${rangeFormatter.format(now)}`,
    sourceLabel: data.sample ? t('reportSourcePreview') : t('reportSourceReal'),
    sample: Boolean(data.sample),
    values: data.values,
    average: data.average ?? '—',
    sessions: data.sessions ?? 0,
    activeDays: data.days ?? data.values.filter((value) => hasFiniteValue(value)).length,
    rhythm: data.rhythm ?? 0,
    healthyStops: data.healthyStops ?? 0,
    interruptions: data.interruptions ?? '—',
    changeLabel,
    before,
    after,
    insights: [
      format(t('insightTabs'), { value: data.interruptions ?? '—' }),
      format(t('insightRhythm'), { value: data.rhythm ?? 0 }),
      format(t('insightStops'), { value: data.healthyStops ?? 0 })
    ]
  };
}

function weeklyReportChartSvg(model, { width = 900, height = 340 } = {}) {
  const padLeft = 58, padRight = 28, padTop = 32, padBottom = 52;
  const plotWidth = width - padLeft - padRight;
  const plotHeight = height - padTop - padBottom;
  const values = Array.isArray(model.values) ? model.values : [];
  const yFor = (value) => padTop + (100 - clamp(value, 0, 100)) / 100 * plotHeight;
  const points = values.map((value, index) => {
    if (!hasFiniteValue(value)) return null;
    const x = padLeft + index * (plotWidth / Math.max(1, values.length - 1));
    return [x, yFor(value), clamp(value, 0, 100)];
  });
  let drawing = false;
  const line = points.map((point) => {
    if (!point) { drawing = false; return ''; }
    const command = drawing ? 'L' : 'M';
    drawing = true;
    return `${command} ${point[0]} ${point[1]}`;
  }).join(' ');
  const locale = ({ vi: 'vi-VN', en: 'en-US', es: 'es-ES', fr: 'fr-FR', zh: 'zh-CN', ja: 'ja-JP', de: 'de-DE' })[state.language] || 'en-US';
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  const labels = values.map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (values.length - 1 - index));
    return formatter.format(date);
  });
  const grid = [100, 75, 50, 25, 0].map((value) => `<line x1="${padLeft}" x2="${width - padRight}" y1="${yFor(value)}" y2="${yFor(value)}" stroke="#dfe8f1"/><text x="${padLeft - 12}" y="${yFor(value) + 4}" text-anchor="end" fill="#718399" font-size="12">${value}</text>`).join('');
  const xLabels = labels.map((label, index) => `<text x="${padLeft + index * (plotWidth / Math.max(1, labels.length - 1))}" y="${height - 14}" text-anchor="middle" fill="#718399" font-size="12">${escapeHtml(label)}</text>`).join('');
  const dots = points.filter(Boolean).map(([x, y, value]) => `<circle cx="${x}" cy="${y}" r="7" fill="#fff" stroke="#1768e5" stroke-width="5"/><text x="${x}" y="${y - 15}" text-anchor="middle" fill="#10213a" font-size="12" font-weight="700">${Math.round(value)}</text>`).join('');
  return `<svg class="print-report-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(t('readinessTrendLabel'))}">${grid}<path d="${line}" fill="none" stroke="#1768e5" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>${dots}${xLabels}</svg>`;
}

function printWeeklyReport() {
  const model = buildWeeklyReportModel();
  if (!model) {
    showToast(t('reportNoData'), 'error');
    return;
  }
  $('#weeklyPrintReport')?.remove();
  const report = document.createElement('section');
  report.id = 'weeklyPrintReport';
  report.className = 'weekly-print-report';
  report.setAttribute('aria-hidden', 'true');
  report.innerHTML = `<div class="print-report-shell">
    <header class="print-report-header">
      <div><span class="print-report-brand">Sentio · Rich Asians</span><h1>${escapeHtml(t('weeklyReportTitle'))}</h1><p>${escapeHtml(t('weeklyReportSubtitle'))}</p></div>
      <div class="print-report-range"><strong>${escapeHtml(model.name)}</strong><p>${escapeHtml(model.range)}</p><p>${escapeHtml(model.sourceLabel)}</p></div>
    </header>
    <div class="print-report-stats">
      <div class="print-report-stat"><span>${escapeHtml(t('chartAverage'))}</span><strong>${escapeHtml(model.average)}</strong></div>
      <div class="print-report-stat"><span>${escapeHtml(t('chartSessions'))}</span><strong>${escapeHtml(model.sessions)}</strong></div>
      <div class="print-report-stat"><span>${escapeHtml(t('chartActiveDays'))}</span><strong>${escapeHtml(`${model.activeDays} / 7`)}</strong></div>
      <div class="print-report-stat"><span>${escapeHtml(t('weeklyRhythmLabel'))}</span><strong>${escapeHtml(`${model.rhythm}%`)}</strong></div>
    </div>
    ${weeklyReportChartSvg(model)}
    <div class="print-report-change"><strong>${escapeHtml(model.changeLabel)}</strong><p>${escapeHtml(`${model.before} → ${model.after}`)}</p></div>
    <ul class="print-report-insights">${model.insights.map((insight) => `<li>${escapeHtml(insight)}</li>`).join('')}</ul>
    <footer class="print-report-footer"><p>${escapeHtml(t('reportDisclaimer'))}</p><p>${escapeHtml(model.sourceLabel)}</p></footer>
  </div>`;
  document.body.appendChild(report);
  document.body.classList.add('printing-weekly-report');
  const cleanup = () => {
    document.body.classList.remove('printing-weekly-report');
    report.remove();
  };
  window.addEventListener('afterprint', cleanup, { once: true });
  showToast(t('reportPdfReady'), 'success');
  window.setTimeout(() => window.print(), 80);
  window.setTimeout(() => { if (report.isConnected) cleanup(); }, 15000);
}

function fillRoundRect(ctx, x, y, width, height, radius, color) {
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(x, y, width, height, radius);
  } else {
    const safeRadius = Math.min(radius, width / 2, height / 2);
    ctx.moveTo(x + safeRadius, y);
    ctx.arcTo(x + width, y, x + width, y + height, safeRadius);
    ctx.arcTo(x + width, y + height, x, y + height, safeRadius);
    ctx.arcTo(x, y + height, x, y, safeRadius);
    ctx.arcTo(x, y, x + width, y, safeRadius);
    ctx.closePath();
  }
  ctx.fillStyle = color;
  ctx.fill();
}

function drawWrappedCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  words.forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (ctx.measureText(candidate).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else line = candidate;
  });
  if (line) lines.push(line);
  lines.slice(0, maxLines).forEach((value, index) => ctx.fillText(value, x, y + index * lineHeight));
  return y + Math.min(lines.length, maxLines) * lineHeight;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function exportWeeklyReportPng() {
  const model = buildWeeklyReportModel();
  if (!model) {
    showToast(t('reportNoData'), 'error');
    return;
  }
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 1600;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.fillStyle = '#eef4fa';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  fillRoundRect(ctx, 60, 50, 1080, 1500, 34, '#ffffff');

  fillRoundRect(ctx, 100, 95, 68, 68, 18, '#1768e5');
  ctx.fillStyle = '#ffffff';
  ctx.font = '800 36px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('S', 134, 141);
  ctx.textAlign = 'left';
  ctx.fillStyle = '#1768e5';
  ctx.font = '800 22px Arial';
  ctx.fillText('SENTIO · RICH ASIANS', 190, 122);
  ctx.fillStyle = '#10213a';
  ctx.font = '700 46px Arial';
  ctx.fillText(t('weeklyReportTitle'), 100, 225);
  ctx.fillStyle = '#60758c';
  ctx.font = '24px Arial';
  ctx.fillText(model.name, 100, 270);
  ctx.textAlign = 'right';
  ctx.fillText(model.range, 1100, 125);
  ctx.font = '18px Arial';
  ctx.fillText(model.sourceLabel, 1100, 160);
  ctx.textAlign = 'left';

  const stats = [
    [t('chartAverage'), model.average],
    [t('chartSessions'), model.sessions],
    [t('chartActiveDays'), `${model.activeDays} / 7`],
    [t('weeklyRhythmLabel'), `${model.rhythm}%`]
  ];
  stats.forEach(([label, value], index) => {
    const x = 100 + index * 250;
    fillRoundRect(ctx, x, 320, 225, 135, 18, '#f1f6fb');
    ctx.fillStyle = '#708399';
    ctx.font = '700 17px Arial';
    ctx.fillText(String(label).toUpperCase(), x + 18, 355);
    ctx.fillStyle = '#10213a';
    ctx.font = '700 42px Arial';
    ctx.fillText(String(value), x + 18, 420);
  });

  const chartX = 100, chartY = 520, chartW = 1000, chartH = 420;
  fillRoundRect(ctx, chartX, chartY, chartW, chartH, 22, '#f8fbfe');
  const left = chartX + 70, right = chartX + chartW - 30, top = chartY + 35, bottom = chartY + chartH - 65;
  const plotWidth = right - left, plotHeight = bottom - top;
  const yFor = (value) => top + (100 - clamp(value, 0, 100)) / 100 * plotHeight;
  ctx.font = '16px Arial';
  [100, 75, 50, 25, 0].forEach((value) => {
    const y = yFor(value);
    ctx.strokeStyle = '#dce6ef';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(right, y);
    ctx.stroke();
    ctx.fillStyle = '#718399';
    ctx.textAlign = 'right';
    ctx.fillText(String(value), left - 14, y + 5);
  });
  const values = model.values;
  const points = values.map((value, index) => hasFiniteValue(value) ? [left + index * (plotWidth / Math.max(1, values.length - 1)), yFor(value), Number(value)] : null);
  ctx.strokeStyle = '#1768e5';
  ctx.lineWidth = 7;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  let drawing = false;
  ctx.beginPath();
  points.forEach((point) => {
    if (!point) { drawing = false; return; }
    if (drawing) ctx.lineTo(point[0], point[1]);
    else ctx.moveTo(point[0], point[1]);
    drawing = true;
  });
  ctx.stroke();
  const dayFormatter = new Intl.DateTimeFormat(state.language === 'vi' ? 'vi-VN' : 'en-US', { weekday: 'short' });
  points.forEach((point, index) => {
    const x = left + index * (plotWidth / Math.max(1, values.length - 1));
    const date = new Date();
    date.setDate(date.getDate() - (values.length - 1 - index));
    ctx.fillStyle = '#718399';
    ctx.textAlign = 'center';
    ctx.font = '16px Arial';
    ctx.fillText(dayFormatter.format(date), x, bottom + 42);
    if (!point) return;
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#1768e5';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(point[0], point[1], 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#10213a';
    ctx.font = '700 16px Arial';
    ctx.fillText(String(Math.round(point[2])), point[0], point[1] - 20);
  });

  ctx.textAlign = 'left';
  ctx.fillStyle = '#10213a';
  ctx.font = '700 28px Arial';
  ctx.fillText(`${model.changeLabel}: ${model.before} → ${model.after}`, 100, 1015);
  ctx.fillStyle = '#1768e5';
  ctx.font = '800 18px Arial';
  ctx.fillText(t('dynamicReasoningLabel').toUpperCase(), 100, 1080);
  ctx.fillStyle = '#324a62';
  ctx.font = '23px Arial';
  let insightY = 1120;
  model.insights.forEach((insight) => {
    ctx.fillStyle = '#21a878';
    ctx.beginPath();
    ctx.arc(112, insightY - 7, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#324a62';
    insightY = drawWrappedCanvasText(ctx, insight, 135, insightY, 900, 33, 2) + 18;
  });

  ctx.fillStyle = '#718399';
  ctx.font = '18px Arial';
  drawWrappedCanvasText(ctx, t('reportDisclaimer'), 100, 1450, 980, 28, 2);
  canvas.toBlob((blob) => {
    if (!blob) return;
    downloadBlob(blob, `sentio-weekly-report-${localDateKey()}.png`);
    showToast(t('reportPngReady'), 'success');
  }, 'image/png');
}

function renderProgressOutcomes() {
  // Compatibility hook for V5 call sites. V6 renders personal weekly wins
  // and self-awareness insights directly in renderProgress().
}

function renderFilmCards() {
  $('#peopleGrid').innerHTML = Object.entries(profileData).map(([key, p]) => `
    <button class="person-film-card${state.filmPerson === key ? ' active' : ''}" type="button" data-person-card="${key}" style="--accent:${p.accent}" aria-controls="personCaseStudy" aria-expanded="${state.filmPerson === key ? 'true' : 'false'}" aria-label="${escapeHtml(`${t('openProfile')}: ${p.name}`)}">
      <span class="person-heading"><span class="avatar" style="background:${p.accent}">${p.initial}</span><span><strong>${p.name}</strong><small>${escapeHtml(t(p.roleKey))}</small></span></span>
      <span class="person-score"><strong>${p.score}</strong><span>/100</span></span>
      <span class="status-badge ${p.status === 'ready' ? 'ready' : p.status === 'low' ? 'low' : ''}">${escapeHtml(t(p.status))}</span>
      <span class="person-signal"><span class="person-signal-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 18V9m6 9V5m6 13v-7m4 7V3"/></svg></span><span><strong>${escapeHtml(t('liveInputs'))}</strong><small>${escapeHtml(t(p.signalKey))}</small></span></span>
      <span class="person-decision"><span>${escapeHtml(t('recommendation'))}</span><strong>${escapeHtml(t(p.decisionKey))}</strong></span>
      <span class="person-open-hint"><span>${escapeHtml(t('openProfile'))}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
    </button>`).join('');

  $$('[data-person-card]', $('#peopleGrid')).forEach((card) => {
    card.addEventListener('click', () => openPersonCaseStudy(card.dataset.personCard));
  });
  renderPersonCaseStudy();

  $('#weekFilmGrid').innerHTML = Object.values(profileData).map((p) => `
    <article class="week-film-card">
      <div class="person-heading"><span class="avatar" style="background:${p.accent}">${p.initial}</span><span><strong>${p.name}</strong><small>${escapeHtml(t(p.roleKey))}</small></span></div>
      <div class="big-change"><div><span>${escapeHtml(t('before'))}</span><strong>${p.before}</strong><small>${escapeHtml(t(p.unitKey))}</small></div><b aria-hidden="true">→</b><div><span>${escapeHtml(t('after'))}</span><strong>${p.after}</strong><small>${escapeHtml(t(p.unitKey))}</small></div></div>
      <p>${escapeHtml(t(p.filmChangeKey))}</p>
  </article>`).join('');
}

function personSignalMarkup(labelKey, detail, tone, iconPath) {
  return `<div class="case-signal ${tone}">
    <span class="case-signal-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="${iconPath}"/></svg></span>
    <span><small>${escapeHtml(t(labelKey))}</small><strong>${escapeHtml(detail)}</strong></span>
  </div>`;
}

function renderPersonCaseStudy() {
  const panel = $('#personCaseStudy');
  if (!panel) return;
  const p = profileData[state.filmPerson];
  if (!p) {
    panel.hidden = true;
    panel.replaceChildren();
    return;
  }

  const signalTone = (index) => p.sourceStates[index] === 'good' ? 'good' : p.sourceStates[index] === 'attention' ? 'attention' : 'watch';
  const afterValue = `${p.before} → ${p.after} ${t(p.unitKey)}`;
  panel.style.setProperty('--accent', p.accent);
  panel.innerHTML = `
    <header class="case-study-header">
      <div class="case-study-identity">
        <span class="case-avatar" aria-hidden="true">${p.initial}</span>
        <span><small>${escapeHtml(t('caseStudyLabel'))}</small><strong id="caseStudyName">${p.name}</strong><span>${escapeHtml(t(p.roleKey))} · ${escapeHtml(t(p.helpKey))}</span></span>
      </div>
      <div class="case-study-score"><span>${escapeHtml(t('readinessScore'))}</span><strong>${p.score}<small>/100</small></strong></div>
      <button class="case-study-close" id="closeCaseStudy" type="button" aria-label="${escapeHtml(t('closeProfile'))}" title="${escapeHtml(t('closeProfile'))}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
    </header>
    <div class="case-study-intro">
      <div><small>${escapeHtml(t('initialProblem'))}</small><strong>${escapeHtml(t(p.problemKey))}</strong></div>
      <div><small>${escapeHtml(t('learningGoal'))}</small><p>${escapeHtml(t(p.goalKey))}</p></div>
    </div>
    <div class="case-study-body">
      <section class="case-study-signals" aria-labelledby="caseSignalsTitle">
        <h2 id="caseSignalsTitle"><span>01</span>${escapeHtml(t('sentioSignals'))}</h2>
        <div class="case-signal-list">
          ${personSignalMarkup('digitalSignal', format(t('tabSwitches'), { count: p.tabs }), signalTone(0), 'M4 6h16M4 12h10M4 18h7m7-3 3 3-3 3')}
          ${personSignalMarkup('bodySignal', format(t('sleepAndHrv'), { sleep: p.sleep, hrv: p.hrv }), signalTone(1), 'M3 12h4l2-5 4 10 2-5h6')}
          ${personSignalMarkup('environmentSignal', format(t('lightReading'), { lux: p.lux }), signalTone(2), 'M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0')}
        </div>
      </section>
      <section class="case-study-reasoning" aria-labelledby="caseReasoningTitle">
        <h2 id="caseReasoningTitle"><span>02</span>${escapeHtml(t('aiReasoning'))}</h2>
        <p>${escapeHtml(t(p.reasoningKey))}</p>
        <div class="case-technology"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6v3H9zM7 8h10a3 3 0 0 1 3 3v7H4v-7a3 3 0 0 1 3-3Zm1 10v3m8-3v3M8 13h.01M16 13h.01"/></svg><span><small>${escapeHtml(t('technologyRole'))}</small><strong>${escapeHtml(t(p.techKey))}</strong></span></div>
      </section>
      <section class="case-study-result" aria-labelledby="caseActionTitle">
        <div class="case-action">
          <h2 id="caseActionTitle"><span>03</span>${escapeHtml(t('todayAction'))}</h2>
          <strong>${escapeHtml(t(p.decisionKey))}</strong>
          <p>${escapeHtml(t(p.recTextKey))}</p>
        </div>
        <div class="case-outcome">
          <small>${escapeHtml(t('afterSevenDays'))}</small>
          <strong>${escapeHtml(afterValue)}</strong>
          <p>${escapeHtml(t(p.filmChangeKey))}</p>
        </div>
      </section>
    </div>
    <footer class="case-study-disclosure"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/></svg><span>${escapeHtml(t('simulatedCaseStudy'))}</span></footer>`;

  $('#closeCaseStudy')?.addEventListener('click', () => closePersonCaseStudy());
}

function updatePersonQuery(personKey) {
  try {
    const url = new URL(location.href);
    url.searchParams.set('film', '1');
    url.searchParams.set('scene', 'people');
    if (personKey) url.searchParams.set('person', personKey);
    else url.searchParams.delete('person');
    history.replaceState({}, '', url);
  } catch { /* local-file history can be restricted by the browser */ }
}

function openPersonCaseStudy(personKey, options = {}) {
  if (!profileData[personKey]) return;
  const { focus = true, updateUrl = true } = options;
  state.filmPerson = personKey;
  stopFilmAuto();
  renderFilmCards();
  if (updateUrl) updatePersonQuery(personKey);
  const panel = $('#personCaseStudy');
  if (!panel) return;
  panel.hidden = false;
  panel.scrollIntoView({ block: 'start', behavior: document.body.classList.contains('no-motion') ? 'auto' : 'smooth' });
  if (focus) panel.focus({ preventScroll: true });
}

function closePersonCaseStudy(options = {}) {
  const { focus = true, updateUrl = true } = options;
  const personKey = state.filmPerson;
  state.filmPerson = null;
  renderFilmCards();
  if (updateUrl) updatePersonQuery(null);
  if (focus && personKey) $(`[data-person-card="${personKey}"]`)?.focus();
}

function showToast(message, tone = 'info') {
  const toast = $('#appToast');
  if (!toast) return;
  window.clearTimeout(state.toastTimer);
  const textTarget = toast;
  textTarget.textContent = message;
  toast.hidden = false;
  toast.dataset.tone = tone;
  toast.classList.add('show');
  toast.setAttribute('aria-hidden', 'false');
  toast.setAttribute('role', tone === 'error' ? 'alert' : 'status');
  state.toastTimer = window.setTimeout(() => {
    toast.classList.remove('show');
    toast.setAttribute('aria-hidden', 'true');
    window.setTimeout(() => { if (!toast.classList.contains('show')) toast.hidden = true; }, 250);
  }, 3600);
}

function renderOnboarding() {
  const flow = $('#onboardingFlow');
  if (!flow) return;
  const step = clamp(state.onboardingStep, 1, 3);
  state.onboardingStep = step;
  $$('.onboarding-step', flow).forEach((panel) => {
    const active = Number(panel.dataset.onboardingStep) === step;
    panel.classList.toggle('active', active);
    panel.hidden = !active;
    panel.setAttribute('aria-hidden', active ? 'false' : 'true');
  });
  setText('#onboardingStepLabel', format(t('onboardingStep'), { current: step }));
  setAriaProgress('#onboardingProgressBar', step, 3);
  const back = $('#onboardingBack');
  const next = $('#onboardingNext');
  const complete = $('#completeOnboarding');
  const preview = $('#previewDashboard');
  const consent = $('#privacyConsent');
  const hasName = Boolean(onboardingName());
  const hasConsent = Boolean(consent?.checked);
  if (back) {
    back.hidden = step === 1;
    back.disabled = step === 1;
  }
  if (preview) preview.hidden = step !== 1;
  if (next) {
    next.hidden = step === 3;
    setText('#onboardingNextLabel', t(step === 1 ? 'onboardingNextSources' : 'onboardingNextPrivacy'));
  }
  if (complete) {
    complete.hidden = step !== 3;
    complete.disabled = step === 3 && (!hasName || !hasConsent);
  }
  const actionHint = setText('#onboardingActionHint', t(hasName && hasConsent ? 'onboardingReadyHint' : !hasName && !hasConsent ? 'onboardingNeedBoth' : !hasName ? 'onboardingNeedName' : 'onboardingNeedConsent'));
  if (actionHint) actionHint.dataset.ready = hasName && hasConsent ? 'true' : 'false';
  SOURCE_KEYS.forEach((key) => {
    const button = $(`[data-onboarding-source="${key}"]`);
    const selected = Boolean(state.onboardingSetup[key]);
    if (button) {
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    }
    const status = $(`#setup${key.charAt(0).toUpperCase()}${key.slice(1)}Status`);
    if (status) {
      status.textContent = selected ? t('setupSelected') : key === 'digital' ? t('setupReady') : t('setupLater');
      status.dataset.state = selected ? 'selected' : 'pending';
    }
  });
  if (consent && !state.onboardingOpen) consent.checked = state.personal.privacy.consent;
}

function focusFirstIn(element) {
  if (!element) return;
  const focusable = element.querySelector('input:not([disabled]), button:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])');
  if (!focusable && !element.hasAttribute('tabindex')) element.setAttribute('tabindex', '-1');
  window.setTimeout(() => (focusable || element).focus?.(), 0);
}

function openOnboarding(restart = false) {
  const flow = $('#onboardingFlow');
  if (!flow) return false;
  closePanels(false);
  state.onboardingOpen = true;
  state.onboardingStep = 1;
  if (restart) state.onboardingSetup = { digital: true, body: false, environment: false };
  state.lastFocused = document.activeElement;
  state.activeModal = flow;
  flow.hidden = false;
  flow.classList.add('open');
  flow.setAttribute('aria-hidden', 'false');
  document.body.classList.add('onboarding-active');
  if ($('#onboardingName')) $('#onboardingName').value = state.personal.name || '';
  if ($('#privacyConsent')) $('#privacyConsent').checked = state.personal.privacy.consent;
  renderOnboarding();
  focusFirstIn($('.onboarding-step.active', flow) || flow);
  return true;
}

function closeOnboarding({ openCheckinAfter = true } = {}) {
  const flow = $('#onboardingFlow');
  if (!flow) return;
  flow.classList.remove('open');
  flow.setAttribute('aria-hidden', 'true');
  flow.hidden = true;
  document.body.classList.remove('onboarding-active');
  state.onboardingOpen = false;
  if (state.activeModal === flow) state.activeModal = null;
  state.lastFocused?.focus?.();
  if (openCheckinAfter && state.personal.onboardingComplete) window.setTimeout(openCheckin, 300);
}

function onboardingName() {
  return ($('#onboardingName')?.value || state.personal.name || '').trim().slice(0, 80);
}

function moveOnboarding(direction) {
  state.onboardingStep = clamp(state.onboardingStep + direction, 1, 3);
  renderOnboarding();
  focusFirstIn($('.onboarding-step.active', $('#onboardingFlow')));
}

function previewDashboard() {
  const name = onboardingName() || t('personalAccount');
  const preferences = state.personal.preferences;
  state.personal = createPreviewPersonal(name);
  state.personal.preferences = preferences;
  persistPersonal();
  state.profile = 'personal';
  state.liveProfile = null;
  closeOnboarding({ openCheckinAfter: false });
  renderProfile();
  renderProfileOptions();
  showToast(t('onboardingPreviewToast'));
}

function completeOnboarding() {
  const name = onboardingName();
  if (!name) {
    state.onboardingStep = 3;
    renderOnboarding();
    showToast(t('onboardingNameRequired'), 'error');
    $('#onboardingName')?.focus();
    return;
  }
  const consent = $('#privacyConsent');
  if (consent && !consent.checked) {
    state.onboardingStep = 3;
    renderOnboarding();
    showToast(t('onboardingConsentRequired'), 'error');
    consent.focus();
    return;
  }
  const personal = createDefaultPersonal();
  personal.name = name;
  personal.onboardingComplete = true;
  personal.previewMode = false;
  personal.privacy.consent = consent ? consent.checked : true;
  personal.privacy.retentionDays = state.personal.privacy.retentionDays;
  personal.privacy.sourceConsent = { ...state.onboardingSetup };
  personal.preferences = { ...state.personal.preferences };
  personal.baseline = { ...personal.baseline, startedAt: isoNow(), day: 1, eligibleDays: 0, status: 'provisional' };
  personal.sources.digital = createSource('disconnected', 'none', {});
  personal.sources.body = createSource(state.onboardingSetup.body ? 'permission-required' : 'disconnected', 'none', {});
  personal.sources.environment = createSource(state.onboardingSetup.environment ? 'permission-required' : 'disconnected', 'none', {});
  state.personal = personal;
  state.profile = 'personal';
  state.liveProfile = null;
  persistPersonal();
  closeOnboarding({ openCheckinAfter: false });
  renderProfile();
  renderProfileOptions();
  showToast(t('onboardingCompleteToast'), 'success');
}

function ingestSource(key, update = {}, { persist = true, rerender = true } = {}) {
  if (!SOURCE_KEYS.includes(key) || state.profile !== 'personal') return false;
  const source = state.personal.sources[key];
  const incomingTime = update.updatedAt ? new Date(update.updatedAt).getTime() : Date.now();
  const currentTime = source.updatedAt ? new Date(source.updatedAt).getTime() : 0;
  if (Number.isFinite(incomingTime) && currentTime && incomingTime < currentTime) return false;
  if (typeof update.connection === 'string') source.connection = update.connection;
  if (typeof update.mode === 'string') source.mode = update.mode;
  const metrics = { ...(source.metrics || {}) };
  if (update.metrics && typeof update.metrics === 'object') {
    if (key === 'digital') {
      if (hasFiniteValue(update.metrics.focus)) metrics.focus = clamp(update.metrics.focus, 0, 100);
      if (hasFiniteValue(update.metrics.tabs)) metrics.tabs = clamp(update.metrics.tabs, 0, 999);
    } else if (key === 'body') {
      if (hasFiniteValue(update.metrics.sleepMinutes)) metrics.sleepMinutes = clamp(update.metrics.sleepMinutes, 0, 1440);
      if (hasFiniteValue(update.metrics.hrv)) metrics.hrv = clamp(update.metrics.hrv, 1, 300);
      if (hasFiniteValue(update.metrics.restingHr)) metrics.restingHr = clamp(update.metrics.restingHr, 30, 220);
    } else {
      if (hasFiniteValue(update.metrics.lux)) metrics.lux = clamp(update.metrics.lux, 0, 200000);
      if (typeof update.metrics.presence === 'boolean') metrics.presence = update.metrics.presence;
    }
  }
  source.metrics = metrics;
  source.updatedAt = new Date(Number.isFinite(incomingTime) ? incomingTime : Date.now()).toISOString();
  if (key === 'environment' && hasFiniteValue(update.metrics?.lux)) state.roomFixed = false;
  if (persist) persistPersonal();
  if (rerender) renderProfile();
  return true;
}

function sourceMetricRows(key, source) {
  const metrics = source.metrics || {};
  if (!sourceHasMetrics(key, source)) return [[t('currentValueLabel'), t('sourceMissing')]];
  if (key === 'digital') return [[t('continuityEstimate'), `${Math.round(metrics.focus)}%`], [t('pageDepartures'), String(Math.round(metrics.tabs))]];
  if (key === 'body') return [[t('factorSleep'), formatSleepMinutes(metrics.sleepMinutes)], [t('hrvLabel'), hasFiniteValue(metrics.hrv) ? `${Math.round(metrics.hrv)} ms` : '—'], [t('restingHrLabel'), hasFiniteValue(metrics.restingHr) ? `${Math.round(metrics.restingHr)} bpm` : '—']];
  return [[t('light'), hasFiniteValue(metrics.lux) ? `${Math.round(metrics.lux)} lux` : '—'], [t('presence'), metrics.presence === true ? t('detected') : '—']];
}

function renderSourceSheet(key = 'digital') {
  if (!SOURCE_KEYS.includes(key)) key = 'digital';
  state.selectedSource = key;
  const source = state.profile === 'personal' ? state.personal.sources[key] : currentSnapshot().sources[key];
  const sheet = $('#sourceSheet');
  if (sheet) {
    sheet.dataset.source = key;
    sheet.dataset.connection = source.connection;
    sheet.dataset.mode = source.mode;
  }
  const titleKey = key === 'digital' ? 'sourceDigitalTitle' : key === 'body' ? 'sourceBodyTitle' : 'sourceEnvironmentTitle';
  const introKey = key === 'digital' ? 'sourceDigitalIntro' : key === 'body' ? 'sourceBodyIntro' : 'sourceEnvironmentIntro';
  const privacyKey = key === 'digital' ? 'sourcePrivacyDigital' : key === 'body' ? 'sourcePrivacyBody' : 'sourcePrivacyEnvironment';
  setText('#sourceSheetLabel', sourceDisplayName(key));
  setText('#sourceSheetTitle', t(titleKey));
  setText('#sourceSheetIntro', t(introKey));
  setText('#sourceConnectionStatus', `${connectionText(source)} · ${modeText(source.mode)} · ${freshnessText(source)}`);
  setText('#sourcePrivacyCopy', t(privacyKey));
  const metrics = $('#sourceMetrics');
  if (metrics) metrics.innerHTML = sourceMetricRows(key, source).map(([label, value]) => `<div class="source-metric"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join('');
  const connect = $('#connectSourceButton');
  const disconnect = $('#disconnectSourceButton');
  const activeConnection = source.connection === 'paired' || (source.connection === 'connected' && sourceHasMetrics(key, source));
  if (connect) {
    connect.hidden = state.profile !== 'personal' || activeConnection;
    connect.disabled = source.connection === 'connecting';
    connect.setAttribute('aria-busy', source.connection === 'connecting' ? 'true' : 'false');
    connect.textContent = t('connectSource');
  }
  if (disconnect) {
    disconnect.hidden = state.profile !== 'personal' || !activeConnection;
    disconnect.textContent = t('disconnectSource');
  }
}

function openSourceSheet(key = 'digital') {
  if (key === 'body' && $('#healthSheet')) {
    renderHealthSheet();
    openSheet($('#healthSheet'));
    return;
  }
  renderSourceSheet(key);
  if ($('#sourceSheet')) openSheet($('#sourceSheet'));
  else if ($('#whySheet')) openSheet($('#whySheet'));
}

function connectDigitalSource() {
  state.personal.privacy.sourceConsent.digital = true;
  ingestSource('digital', { connection: 'connected', mode: 'live-in-page', metrics: { focus: Number.isFinite(state.liveFocus) ? state.liveFocus : 100, tabs: Number.isFinite(state.liveTabs) ? state.liveTabs : 0 } });
  showToast(t('digitalConnectedToast'), 'success');
}

async function connectEnvironmentSource() {
  const source = state.personal.sources.environment;
  state.personal.privacy.sourceConsent.environment = true;
  source.connection = 'connecting';
  renderSourceSheet('environment');
  try {
    if (navigator.bluetooth?.requestDevice) {
      const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
      if (device.gatt) await device.gatt.connect();
      state.bluetoothDevice = device;
      ingestSource('environment', { connection: 'paired', mode: 'bluetooth-paired', metrics: {} });
      showToast(t('environmentPairedToast'), 'success');
      return;
    }
    ingestSource('environment', { connection: 'connected', mode: 'demo-feed', metrics: { lux: 360, presence: true } });
    showToast(t('environmentDemoToast'));
  } catch (error) {
    if (error?.name === 'NotFoundError') {
      source.connection = 'permission-required';
      source.mode = 'none';
      persistPersonal();
      renderProfile();
      showToast(t('connectionCancelledToast'));
      return;
    }
    ingestSource('environment', { connection: 'connected', mode: 'demo-feed', metrics: { lux: 360, presence: true } });
    showToast(t('environmentDemoToast'));
  }
}

function connectHealthSource() {
  state.personal.privacy.sourceConsent.body = true;
  ingestSource('body', { connection: 'connected', mode: 'bridge-demo', metrics: { sleepMinutes: 430, hrv: 50, restingHr: 64 } });
  showToast(t('healthDemoToast'));
}

function disconnectSource(key) {
  if (!SOURCE_KEYS.includes(key) || state.profile !== 'personal') return;
  const source = state.personal.sources[key];
  state.personal.privacy.sourceConsent[key] = false;
  source.connection = 'disconnected';
  source.mode = 'none';
  source.updatedAt = null;
  source.metrics = {};
  if (key === 'digital') {
    state.liveFocus = null;
    state.liveTabs = 0;
    state.liveProfile = null;
  }
  if (key === 'environment' && state.bluetoothDevice?.gatt?.connected) state.bluetoothDevice.gatt.disconnect();
  if (key === 'environment') state.bluetoothDevice = null;
  persistPersonal();
  renderProfile();
}

function connectSelectedSource() {
  if (state.selectedSource === 'digital') connectDigitalSource();
  else if (state.selectedSource === 'environment') connectEnvironmentSource();
  else connectHealthSource();
}

function renderPrivacyControls() {
  if ($('#retentionSelect')) $('#retentionSelect').value = String(state.personal.privacy.retentionDays);
  if ($('#nudgeSensitivity')) $('#nudgeSensitivity').value = state.personal.preferences.nudgeSensitivity;
  SOURCE_KEYS.forEach((key) => {
    const id = key === 'digital' ? '#privacyDigitalConsent' : key === 'body' ? '#privacyBodyConsent' : '#privacyEnvironmentConsent';
    const input = $(id);
    if (input) input.checked = Boolean(state.personal.privacy.sourceConsent[key]);
  });
}

function pruneRetainedData() {
  const cutoff = Date.now() - state.personal.privacy.retentionDays * 86400000;
  state.personal.sessions = state.personal.sessions.filter((session) => new Date(session.time || session.startedAt || 0).getTime() >= cutoff).slice(-MAX_SESSIONS);
  state.personal.nudges = state.personal.nudges.filter((nudge) => new Date(nudge.triggeredAt || 0).getTime() >= cutoff).slice(-MAX_NUDGES);
  SOURCE_KEYS.forEach((key) => {
    const source = state.personal.sources[key];
    const updatedAt = source.updatedAt ? new Date(source.updatedAt).getTime() : 0;
    if (updatedAt && updatedAt < cutoff) {
      source.metrics = {};
      source.updatedAt = null;
      source.connection = 'disconnected';
      source.mode = 'none';
    }
  });
  const checkInDate = store.get('sentio-checkin-date');
  if (checkInDate && new Date(`${checkInDate}T00:00:00`).getTime() < cutoff) {
    store.remove('sentio-checkin-date');
    store.remove('sentio-checkin-mood');
  }
}

function exportAggregateData() {
  const payload = {
    version: 6,
    exportedAt: isoNow(),
    name: state.personal.name,
    previewMode: state.personal.previewMode,
    baseline: {
      startedAt: state.personal.baseline.startedAt,
      day: state.personal.baseline.day,
      eligibleDays: state.personal.baseline.eligibleDays,
      sampleCount: state.personal.baseline.sampleCount,
      metricCounts: { ...state.personal.baseline.metricCounts },
      lastSampleDate: state.personal.baseline.lastSampleDate,
      status: state.personal.baseline.status,
      metrics: { ...state.personal.baseline.metrics }
    },
    sourceConnections: Object.fromEntries(SOURCE_KEYS.map((key) => [key, {
      connection: state.personal.sources[key].connection,
      mode: state.personal.sources[key].mode,
      updatedAt: state.personal.sources[key].updatedAt,
      aggregateMetrics: { ...(state.personal.sources[key].metrics || {}) }
    }])),
    checkIn: {
      date: store.get('sentio-checkin-date'),
      mood: store.get('sentio-checkin-mood')
    },
    sessions: state.personal.sessions.map((session) => ({ ...session })),
    nudges: state.personal.nudges.map((nudge) => ({ ...nudge })),
    activeSession: state.personal.activeSession ? { ...state.personal.activeSession } : null,
    preferences: { ...state.personal.preferences },
    privacy: { ...state.personal.privacy, sourceConsent: { ...state.personal.privacy.sourceConsent } }
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `sentio-aggregate-${localDateKey()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
  showToast(t('aggregateExported'), 'success');
}

function revokeConnections() {
  if (state.bluetoothDevice?.gatt?.connected) state.bluetoothDevice.gatt.disconnect();
  SOURCE_KEYS.forEach((key) => {
    const source = state.personal.sources[key];
    source.connection = 'disconnected';
    source.mode = 'none';
    source.updatedAt = null;
    source.metrics = {};
  });
  state.personal.privacy.sourceConsent = { digital: false, body: false, environment: false };
  state.bluetoothDevice = null;
  state.liveProfile = null;
  state.liveFocus = null;
  state.liveTabs = 0;
  persistPersonal();
  renderProfile();
  renderPrivacyControls();
  renderSourceSheet(state.selectedSource);
  showToast(t('connectionsRevoked'), 'success');
}

function switchView(view) {
  if (!['today','focus','progress','film'].includes(view)) return;
  if (view !== 'film' && state.view === 'film') stopFilmAuto();
  state.view = view;
  $$('.view').forEach((section) => section.classList.toggle('active', section.dataset.view === view));
  $$('[data-view-link]').forEach((button) => {
    const active = button.dataset.viewLink === view;
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  document.body.classList.toggle('film-active', view === 'film');
  if ($('.bottom-nav')) $('.bottom-nav').style.display = view === 'film' ? 'none' : '';
  if (view === 'progress') {
    renderProgress();
    renderProgressOutcomes();
  }
  window.scrollTo({ top: 0, behavior: document.body.classList.contains('no-motion') ? 'auto' : 'smooth' });
}

function openSheet(sheet) {
  if (!sheet) return;
  const trigger = document.activeElement;
  const restoreTarget = $('#settingsPanel')?.contains(trigger) ? $('#settingsButton') : trigger;
  closePanels(false);
  state.lastFocused = restoreTarget;
  state.activeModal = sheet;
  sheet.classList.add('open');
  sheet.setAttribute('aria-hidden', 'false');
  sheet.hidden = false;
  if (sheet.id === 'profileSheet') $('#profileButton')?.setAttribute('aria-expanded', 'true');
  if (!sheet.hasAttribute('tabindex')) sheet.setAttribute('tabindex', '-1');
  if ($('#backdrop')) $('#backdrop').classList.add('show');
  focusFirstIn(sheet);
}

function openSettings() {
  const panel = $('#settingsPanel');
  if (!panel) return;
  const trigger = document.activeElement;
  closePanels(false);
  state.lastFocused = trigger;
  state.activeModal = panel;
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  panel.hidden = false;
  if ($('#backdrop')) $('#backdrop').classList.add('show');
  focusFirstIn(panel);
}

function closePanels(restoreFocus = true) {
  $$('.sheet').forEach((sheet) => {
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
  });
  const settings = $('#settingsPanel');
  if (settings) {
    settings.classList.remove('open');
    settings.setAttribute('aria-hidden', 'true');
  }
  if ($('#backdrop')) $('#backdrop').classList.remove('show');
  $('#profileButton')?.setAttribute('aria-expanded', 'false');
  state.activeModal = null;
  if (restoreFocus) {
    const target = state.lastFocused;
    const visible = target?.isConnected && !target.closest?.('[hidden], [aria-hidden="true"]');
    (visible ? target : $('#settingsButton') || $('#profileButton'))?.focus?.();
  }
}

function handlePrimaryAction() {
  if (state.profile === 'personal' && (state.sessionStartedAt || state.personal.activeSession)) {
    switchView('focus');
    return;
  }
  const decision = state.decision || getDecision();
  if (decision.recommendation.kind === 'connect') {
    const preferred = SOURCE_KEYS.find((key) => state.personal.privacy.sourceConsent[key]) || 'digital';
    openSourceSheet(preferred);
    return;
  }
  if (decision.recommendation.kind === 'environment') {
    fixRoomEnvironment();
    return;
  }
  switchView('focus');
  resetTimerForProfile();
  if (decision.recommendation.kind === 'reset') startTimer();
}

function fixRoomEnvironment() {
  state.roomFixed = true;
  state.activeNudge = null;
  if (state.profile === 'personal') {
    renderProfile();
    showToast(t('environmentAwaitingSample'));
  } else renderProfile();
  pulseCard();
}

function resetTimerForProfile(minutesOverride = null, { preserveStored = false } = {}) {
  clearInterval(state.timer);
  state.timer = null;
  state.running = false;
  state.timerEndsAt = null;
  state.sessionStartedAt = null;
  state.sessionStartDecision = null;
  if (state.profile === 'personal' && !preserveStored) {
    state.personal.activeSession = null;
    persistPersonal();
  }
  const decision = state.decision || getDecision();
  state.sessionKind = decision.recommendation.kind === 'reset' ? 'break' : decision.recommendation.kind === 'light' ? 'light' : 'focus';
  const hasMinuteOverride = minutesOverride !== null && minutesOverride !== undefined && minutesOverride !== '' && Number.isFinite(Number(minutesOverride));
  const minutes = hasMinuteOverride ? Number(minutesOverride) : decision.recommendation.kind === 'reset' ? 10 : decision.recommendation.kind === 'light' ? 25 : 45;
  state.initial = minutes * 60;
  state.remaining = state.initial;
  const play = $('#playTimer');
  const orbit = $('#timerOrbit');
  if (play) {
    play.classList.remove('running');
    play.setAttribute('aria-pressed', 'false');
  }
  if (orbit) orbit.classList.remove('running');
  updateTimerDisplay();
  updateTimerLabel();
}

function updateTimerDisplay() {
  const minutes = Math.floor(Math.max(0, state.remaining) / 60).toString().padStart(2, '0');
  const seconds = (Math.max(0, state.remaining) % 60).toString().padStart(2, '0');
  setText('#timerDisplay', `${minutes}:${seconds}`);
}

function updateTimerLabel() {
  const play = $('#playTimer');
  if (state.running) {
    setText('#timerLabel', (state.decision || getDecision()).recommendation.kind === 'reset' ? t('resetTimerLabel') : t('timerRunning'));
    play?.setAttribute('aria-label', state.language === 'vi' ? 'Tạm dừng bộ đếm' : 'Pause timer');
  } else if (state.remaining < state.initial) {
    setText('#timerLabel', t('timerPaused'));
    play?.setAttribute('aria-label', state.language === 'vi' ? 'Tiếp tục bộ đếm' : 'Resume timer');
  } else {
    setText('#timerLabel', t('readyWhenYouAre'));
    play?.setAttribute('aria-label', state.language === 'vi' ? 'Bắt đầu bộ đếm' : 'Start timer');
  }
}

function persistActiveSession(running = state.running) {
  if (state.profile !== 'personal' || !state.sessionStartedAt) return;
  state.personal.activeSession = {
    startedAt: state.sessionStartedAt,
    initial: state.initial,
    remaining: state.remaining,
    endsAt: running && state.timerEndsAt ? new Date(state.timerEndsAt).toISOString() : null,
    running: Boolean(running),
    startTabs: state.sessionStartTabs,
    liveTabs: state.liveTabs,
    liveFocus: state.liveFocus,
    kind: state.sessionKind,
    startDecision: state.sessionStartDecision ? { ...state.sessionStartDecision } : null
  };
  persistPersonal();
}

function restoreActiveSession() {
  const session = state.personal.activeSession;
  if (!session || !session.startedAt) return false;
  state.initial = Math.max(60, Number(session.initial) || 45 * 60);
  const endTime = session.endsAt ? new Date(session.endsAt).getTime() : 0;
  state.remaining = session.running && Number.isFinite(endTime)
    ? Math.max(0, Math.ceil((endTime - Date.now()) / 1000))
    : clamp(session.remaining, 0, state.initial);
  state.sessionStartedAt = session.startedAt;
  state.sessionStartTabs = Math.max(0, Number(session.startTabs) || 0);
  state.liveTabs = Math.max(0, Number(session.liveTabs) || 0);
  state.liveFocus = hasFiniteValue(session.liveFocus) ? clamp(session.liveFocus, 0, 100) : null;
  state.sessionKind = ['focus', 'light', 'break'].includes(session.kind) ? session.kind : 'focus';
  state.sessionStartDecision = session.startDecision && typeof session.startDecision === 'object' ? { ...session.startDecision } : null;
  state.liveProfile = 'personal';
  state.running = false;
  state.timerEndsAt = null;
  persistActiveSession(false);
  updateTimerDisplay();
  updateTimerLabel();
  renderProfile();
  return true;
}

function restoreNudgeCooldown() {
  state.nudgeCooldowns = {};
  state.personal.nudges.forEach((nudge) => {
    if (!nudge.ruleId) return;
    const timestamp = new Date(nudge.dismissedAt || nudge.triggeredAt || 0).getTime();
    if (Number.isFinite(timestamp)) state.nudgeCooldowns[nudge.ruleId] = Math.max(state.nudgeCooldowns[nudge.ruleId] || 0, timestamp + 20 * 60000);
  });
}

function startTimer() {
  if (state.running) {
    if (state.timerEndsAt) state.remaining = Math.max(0, Math.ceil((state.timerEndsAt - Date.now()) / 1000));
    clearInterval(state.timer);
    state.timer = null;
    state.running = false;
    state.timerEndsAt = null;
    $('#playTimer')?.classList.remove('running');
    $('#playTimer')?.setAttribute('aria-pressed', 'false');
    $('#timerOrbit')?.classList.remove('running');
    persistActiveSession(false);
    updateTimerLabel();
    return;
  }
  state.running = true;
  if (!state.sessionStartedAt) {
    if (state.profile === 'personal' && sourceIsConnected(state.personal.sources.digital)) {
      state.liveTabs = 0;
      state.liveFocus = 100;
      ingestSource('digital', { connection: 'connected', mode: 'live-in-page', metrics: { tabs: 0, focus: 100 } }, { persist: true, rerender: false });
    }
    const startDecision = computeDecision(currentSnapshot());
    state.decision = startDecision;
    state.sessionStartDecision = {
      score: startDecision.score,
      status: startDecision.status,
      coverage: startDecision.coverage,
      computedAt: startDecision.computedAt
    };
    state.sessionStartedAt = isoNow();
    state.sessionStartTabs = Number(state.liveTabs || 0);
    state.focusEvents = [];
    addFocusEvent('start', 'eventSessionStarted');
    renderProfile();
  }
  state.timerEndsAt = Date.now() + Math.max(0, state.remaining) * 1000;
  persistActiveSession(true);
  $('#playTimer')?.classList.add('running');
  $('#playTimer')?.setAttribute('aria-pressed', 'true');
  $('#timerOrbit')?.classList.add('running');
  updateTimerLabel();
  state.timer = setInterval(() => {
    state.remaining = Math.max(0, Math.ceil((state.timerEndsAt - Date.now()) / 1000));
    updateTimerDisplay();
    if (state.remaining > 0 && state.remaining % 30 === 0) {
      evaluateNudge(true);
      renderNudge();
    }
    if (state.remaining <= 0) finishSession();
  }, 1000);
}

function finishSession() {
  if (!state.sessionStartedAt) {
    showToast(t('sessionNotStarted'), 'error');
    return;
  }
  if (state.running && state.timerEndsAt) state.remaining = Math.max(0, Math.ceil((state.timerEndsAt - Date.now()) / 1000));
  clearInterval(state.timer);
  state.timer = null;
  state.running = false;
  state.timerEndsAt = null;
  $('#playTimer')?.classList.remove('running');
  $('#playTimer')?.setAttribute('aria-pressed', 'false');
  $('#timerOrbit')?.classList.remove('running');
  const elapsedSeconds = Math.max(0, state.initial - state.remaining);
  const elapsed = Math.max(0, Math.round(elapsedSeconds / 60));
  const sessionTabs = Math.max(0, Number(state.liveTabs || 0) - Number(state.sessionStartTabs || 0));
  const decision = computeDecision(currentSnapshot());
  state.decision = decision;
  const startDecision = state.sessionStartDecision || decision;
  const stoppedOnTime = state.healthyStopRequested || (state.remaining > 0 && (decision.status !== 'ready' || Boolean(state.activeNudge)));
  if (state.profile === 'personal' && state.sessionStartedAt) {
    const baselineEligible = state.sessionKind !== 'break' && elapsedSeconds >= 300 && decision.coverage > 0 && updatePersonalBaseline(currentSnapshot());
    const reportEligible = startDecision.status !== 'insufficient';
    state.personal.activeSession = null;
    state.personal.sessions.push({
      startedAt: state.sessionStartedAt,
      time: isoNow(),
      plannedMinutes: Math.round(state.initial / 60),
      focusedMinutes: elapsed,
      tabs: sessionTabs,
      departures: sessionTabs,
      focus: Math.round(state.liveFocus || 0),
      stoppedOnTime,
      wellTimed: reportEligible ? startDecision.score >= 50 : null,
      readiness: reportEligible ? startDecision.score : null,
      endReadiness: decision.status === 'insufficient' ? null : decision.score,
      reportEligible,
      task: $('#taskSelect')?.value || 'reading',
      baselineEligible,
      kind: state.sessionKind
    });
    state.personal.sessions = state.personal.sessions.slice(-MAX_SESSIONS);
    state.personal.preferences.lastTask = $('#taskSelect')?.value || 'reading';
    persistPersonal();
  }
  addFocusEvent('finish', 'eventSessionFinished', stoppedOnTime ? t('stoppedOnTimeInsight') : '');
  const completedBreak = state.sessionKind === 'break';
  setText('#summaryKicker', completedBreak ? t('resetComplete') : t('sessionComplete'));
  setText('#summaryTitle', completedBreak ? t('resetCompleteTitle') : t('niceWork'));
  setText('#summaryMinutes', `${elapsed}m`);
  setText('#summaryMinutesLabel', completedBreak ? t('recoveryTime') : t('sessionTime'));
  setText('#summaryFocus', completedBreak ? '—' : `${Math.round(state.liveFocus || 0)}%`);
  setText('#summaryFocusLabel', completedBreak ? t('bodyState') : t('continuityEstimate'));
  setText('#summaryTabs', completedBreak ? '—' : String(sessionTabs));
  setText('#summaryTabsLabel', completedBreak ? t('gentleAccountability') : t('pageDepartures'));
  const summary = $('#sessionSummary');
  if (summary) {
    summary.classList.add('show');
    summary.setAttribute('aria-hidden', 'false');
    state.lastFocused = document.activeElement;
    state.activeModal = summary;
    focusFirstIn(summary);
  }
  state.remaining = state.initial;
  state.sessionStartedAt = null;
  state.sessionKind = 'focus';
  state.sessionStartDecision = null;
  state.healthyStopRequested = false;
  updateTimerDisplay();
  updateTimerLabel();
  refreshBaseline();
  renderProfile();
  renderProgressOutcomes();
}

function handleNudgeAction() {
  const nudge = state.activeNudge || getNudgeCandidate();
  if (!nudge) return;
  if (nudge.kind === 'environment') {
    fixRoomEnvironment();
    return;
  }
  if (nudge.kind === 'suggestion') {
    dismissActiveNudge();
    return;
  }
  state.healthyStopRequested = true;
  finishSession();
}

function dismissActiveNudge() {
  if (!state.activeNudge) return;
  const id = state.activeNudge.id;
  state.activeNudge.status = 'dismissed';
  state.nudgeCooldowns[state.activeNudge.ruleId] = Date.now() + 20 * 60000;
  if (state.profile === 'personal') {
    const logged = state.personal.nudges.find((nudge) => nudge.id === id);
    if (logged) {
      logged.status = 'dismissed';
      logged.dismissedAt = isoNow();
    } else state.personal.nudges.push({ id, ruleId: state.activeNudge.ruleId, level: state.activeNudge.level, triggeredAt: state.activeNudge.triggeredAt, status: 'dismissed', dismissedAt: isoNow() });
    state.personal.nudges = state.personal.nudges.slice(-MAX_NUDGES);
    persistPersonal();
  }
  addFocusEvent('dismiss', 'eventDismissed');
  state.activeNudge = null;
  showToast(t('nudgeDismissed'));
  renderNudge();
}

function simulateTabSwitch() {
  if (!state.running) return;
  if (state.profile === 'personal' && !sourceIsConnected(state.personal.sources.digital)) return;
  if (state.profile !== 'personal' && state.profile !== 'nam') return;
  state.liveTabs += 1;
  state.liveFocus = Math.max(35, state.liveFocus - 2);
  setText('#liveTabsValue', state.liveTabs);
  setText('#liveFocusValue', `${state.liveFocus}%`);
  setAriaProgress('#liveFocusBar', state.liveFocus);
  addFocusEvent('tab', 'eventTabSwitch', format(t('nudgeDigitalReason'), { tabs: state.liveTabs, focus: state.liveFocus }));
  if (state.profile === 'personal') ingestSource('digital', { connection: 'connected', mode: 'live-in-page', metrics: { tabs: state.liveTabs, focus: state.liveFocus } }, { persist: true, rerender: false });
  persistActiveSession(true);
  evaluateNudge(true);
  renderNudge();
}

function updateFilmAutoControl() {
  const button = $('#toggleFilmAuto');
  if (!button) return;
  button.setAttribute('aria-pressed', String(state.filmAutoPlaying));
  const label = t(state.filmAutoPlaying ? 'pausePresentation' : 'resumePresentation');
  button.setAttribute('aria-label', label);
  button.title = label;
}

function stopFilmAuto() {
  if (state.filmAutoTimer) clearInterval(state.filmAutoTimer);
  state.filmAutoTimer = null;
  state.filmAutoPlaying = false;
  updateFilmAutoControl();
}

function startFilmAuto() {
  stopFilmAuto();
  if (state.filmScene === 'end') setFilmScene('system');
  state.filmAutoPlaying = true;
  updateFilmAutoControl();
  state.filmAutoTimer = setInterval(() => {
    const scenes = ['system', 'people', 'week', 'end'];
    const index = scenes.indexOf(state.filmScene);
    if (index >= scenes.length - 1) {
      stopFilmAuto();
      return;
    }
    setFilmScene(scenes[index + 1]);
  }, 4800);
}

function toggleFilmAuto() {
  if (state.filmAutoPlaying) stopFilmAuto();
  else startFilmAuto();
}

function openFilm(scene = 'system', autoplay = false) {
  if (state.view !== 'film') state.filmOpener = document.activeElement;
  switchView('film');
  setFilmScene(scene);
  if (autoplay && !document.body.classList.contains('no-motion')) startFilmAuto();
  else stopFilmAuto();
}

function setFilmScene(scene) {
  if (!['system','people','week','end'].includes(scene)) scene = 'system';
  state.filmScene = scene;
  if (scene !== 'people' && state.filmPerson) {
    state.filmPerson = null;
    renderFilmCards();
  }
  $$('.film-scene').forEach((el) => {
    const active = el.dataset.scene === scene;
    el.classList.toggle('active', active);
    el.setAttribute('aria-hidden', active ? 'false' : 'true');
  });
  $$('.scene-step').forEach((el) => {
    const active = el.dataset.sceneTarget === scene;
    el.classList.toggle('active', active);
    el.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  const isEnd = scene === 'end';
  const nextButton = $('#nextScene');
  if (nextButton) {
    nextButton.style.visibility = isEnd ? 'hidden' : 'visible';
    nextButton.disabled = isEnd;
    nextButton.setAttribute('aria-hidden', isEnd ? 'true' : 'false');
  }
  const filmView = $('#filmView');
  if (filmView) filmView.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  if (isEnd && state.filmAutoPlaying) stopFilmAuto();
  if (isEnd && document.activeElement === nextButton) $('#exitFilm')?.focus();
}

function nextFilmScene() {
  const scenes = ['system','people','week','end'];
  const index = scenes.indexOf(state.filmScene);
  setFilmScene(scenes[Math.min(scenes.length - 1, index + 1)]);
}

function previousFilmScene() {
  const scenes = ['system','people','week','end'];
  const index = scenes.indexOf(state.filmScene);
  setFilmScene(scenes[Math.max(0, index - 1)]);
}

function exitFilm() {
  stopFilmAuto();
  switchView('today');
  const opener = state.filmOpener;
  const visible = opener?.isConnected && !opener.closest?.('[hidden], [aria-hidden="true"]');
  (visible ? opener : $('#filmButton') || $('#primaryAction'))?.focus?.();
  state.filmOpener = null;
}

function resetApp() {
  if (state.bluetoothDevice?.gatt?.connected) state.bluetoothDevice.gatt.disconnect();
  store.remove('sentio-profile');
  store.remove('sentio-language');
  store.remove('sentio-motion');
  store.remove(V6_STORAGE_KEY);
  store.remove('sentio-checkin-date');
  store.remove('sentio-checkin-mood');
  state.profile = 'personal';
  state.personal = createDefaultPersonal();
  state.language = 'vi';
  state.roomFixed = false;
  state.liveProfile = null;
  state.focusEvents = [];
  state.activeNudge = null;
  state.nudgeCooldowns = {};
  state.lowLightSince = 0;
  state.bluetoothDevice = null;
  state.onboardingStep = 1;
  closePanels(false);
  resetTimerForProfile();
  applyTranslations();
  switchView('today');
  openOnboarding(true);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function runStartupExperience() {
  const overlay = $('#startupOverlay');
  if (!overlay || !state.personal.onboardingComplete || new URLSearchParams(location.search).get('film') === '1') {
    if (overlay) overlay.remove();
    return;
  }
  $('#startupLabel').textContent = t('analyzingSignals');
  window.setTimeout(() => {
    $('#startupLabel').textContent = t('readyResult');
    overlay.classList.add('ready');
  }, 850);
  window.setTimeout(() => {
    overlay.classList.add('hidden');
    window.setTimeout(() => overlay.remove(), 500);
  }, 1450);
}

function openCheckin() {
  const panel = $('#morningCheckin');
  if (!panel || state.onboardingOpen || !state.personal.onboardingComplete || state.view === 'film' || store.get('sentio-checkin-date') === vietnamDateKey()) return;
  setText('#checkinGreeting', t('todayQuestion'));
  panel.classList.add('show');
  panel.setAttribute('aria-hidden', 'false');
  state.lastFocused = document.activeElement;
  state.activeModal = panel;
  focusFirstIn(panel);
}

function closeCheckin(mood = 'skipped') {
  const panel = $('#morningCheckin');
  if (!panel) return;
  store.set('sentio-checkin-date', vietnamDateKey());
  store.set('sentio-checkin-mood', mood);
  panel.classList.remove('show');
  panel.setAttribute('aria-hidden', 'true');
  if (state.activeModal === panel) state.activeModal = null;
  state.lastFocused?.focus?.();
  if (state.profile === 'personal') {
    renderProfile();
    renderFactors(state.decision);
  }
}

function vietnamDateKey() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Ho_Chi_Minh', year:'numeric', month:'2-digit', day:'2-digit' }).format(new Date());
}

function bindOptional(selector, eventName, handler) {
  const element = $(selector);
  if (element) element.addEventListener(eventName, handler);
}

function closeSessionSummary(restoreFocus = true) {
  const summary = $('#sessionSummary');
  if (!summary) return;
  summary.classList.remove('show');
  summary.setAttribute('aria-hidden', 'true');
  if (state.activeModal === summary) state.activeModal = null;
  if (restoreFocus) state.lastFocused?.focus?.();
}

function trapModalFocus(event) {
  if (event.key !== 'Tab' || !state.activeModal) return;
  const modal = state.activeModal;
  const focusable = $$('a[href], button:not([disabled]):not([hidden]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', modal)
    .filter((element) => !element.hidden && element.getAttribute('aria-hidden') !== 'true' && !element.closest('[hidden], [aria-hidden="true"]'));
  if (!focusable.length) {
    event.preventDefault();
    modal.focus?.();
    return;
  }
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (!modal.contains(document.activeElement)) {
    event.preventDefault();
    first.focus();
  } else if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function bindEvents() {
  $$('[data-view-link]').forEach((button) => button.addEventListener('click', () => switchView(button.dataset.viewLink)));
  bindOptional('#profileButton', 'click', () => openSheet($('#profileSheet')));
  bindOptional('#openTrainingButton', 'click', () => openSheet($('#profileSheet')));
  bindOptional('#whyButton', 'click', () => openSheet($('#whySheet')));
  bindOptional('#howItWorksButton', 'click', () => openSheet($('#howSheet')));
  $$('[data-source]').forEach((button) => button.addEventListener('click', () => openSourceSheet(button.dataset.source === 'wearable' ? 'body' : button.dataset.source === 'browser' ? 'digital' : button.dataset.source === 'desk' ? 'environment' : button.dataset.source)));
  bindOptional('#settingsButton', 'click', openSettings);
  bindOptional('#closeSettings', 'click', () => closePanels());
  $$('[data-close-sheet]').forEach((button) => button.addEventListener('click', closePanels));
  bindOptional('#backdrop', 'click', () => closePanels());
  bindOptional('#primaryAction', 'click', handlePrimaryAction);
  bindOptional('#nudgeAction', 'click', handleNudgeAction);
  bindOptional('#nudgeDismiss', 'click', dismissActiveNudge);
  bindOptional('#playTimer', 'click', startTimer);
  bindOptional('#resetTimer', 'click', () => resetTimerForProfile());
  bindOptional('#finishTimer', 'click', finishSession);
  bindOptional('#closeSummary', 'click', () => {
    closeSessionSummary(false);
    switchView('today');
    $('#primaryAction')?.focus();
  });
  bindOptional('#filmButton', 'click', () => openFilm('system', true));
  bindOptional('#exitFilm', 'click', exitFilm);
  bindOptional('#toggleFilmAuto', 'click', toggleFilmAuto);
  bindOptional('#nextScene', 'click', () => { stopFilmAuto(); nextFilmScene(); });
  $$('[data-scene-target]').forEach((button) => button.addEventListener('click', () => {
    stopFilmAuto();
    setFilmScene(button.dataset.sceneTarget);
  }));
  bindOptional('#toggleSignals', 'click', toggleSignalDetails);
  bindOptional('#toggleInsights', 'click', toggleCompanionInsights);
  bindOptional('#languageSelect', 'change', (event) => {
    state.language = translations[event.target.value] ? event.target.value : 'en';
    store.set('sentio-language', state.language);
    applyTranslations();
  });
  bindOptional('#motionToggle', 'change', (event) => {
    document.body.classList.toggle('no-motion', !event.target.checked);
    if (!event.target.checked && state.view === 'film') stopFilmAuto();
    store.set('sentio-motion', event.target.checked ? '1' : '0');
  });
  bindOptional('#resetApp', 'click', () => {
    const message = state.language === 'vi'
      ? 'Đặt lại bản demo sẽ xóa tiến trình, phiên học và dữ liệu đã lưu trên trình duyệt này. Tiếp tục?'
      : 'Resetting the demo will delete progress, sessions, and data stored in this browser. Continue?';
    if (window.confirm(message)) resetApp();
  });
  $$('[data-mood]').forEach((button) => button.addEventListener('click', () => closeCheckin(button.dataset.mood)));
  bindOptional('#skipCheckin', 'click', () => closeCheckin('skipped'));
  bindOptional('#taskSelect', 'change', (event) => {
    if (state.profile !== 'personal') return;
    state.personal.preferences.lastTask = event.target.value;
    persistPersonal();
  });

  bindOptional('#onboardingBack', 'click', () => moveOnboarding(-1));
  bindOptional('#onboardingNext', 'click', () => moveOnboarding(1));
  bindOptional('#previewDashboard', 'click', previewDashboard);
  bindOptional('#completeOnboarding', 'click', completeOnboarding);
  bindOptional('#privacyConsent', 'change', (event) => {
    state.personal.privacy.consent = event.target.checked;
    renderOnboarding();
  });
  bindOptional('#onboardingName', 'input', renderOnboarding);
  $$('[data-onboarding-source]').forEach((button) => button.addEventListener('click', () => {
    const key = button.dataset.onboardingSource;
    if (!SOURCE_KEYS.includes(key)) return;
    state.onboardingSetup[key] = !state.onboardingSetup[key];
    renderOnboarding();
  }));

  bindOptional('#connectSourceButton', 'click', connectSelectedSource);
  bindOptional('#disconnectSourceButton', 'click', () => disconnectSource(state.selectedSource));
  bindOptional('#connectHealthButton', 'click', connectHealthSource);
  bindOptional('#disconnectHealthButton', 'click', () => disconnectSource('body'));
  bindOptional('#manageConnectionsButton', 'click', () => openSourceSheet('digital'));
  bindOptional('#userGuideButton', 'click', () => openSheet($('#userGuideSheet')));
  bindOptional('#footerGuideButton', 'click', () => openSheet($('#userGuideSheet')));
  bindOptional('#privacyButton', 'click', () => {
    renderPrivacyControls();
    openSheet($('#privacySheet'));
  });
  [
    ['#privacyDigitalConsent', 'digital'],
    ['#privacyBodyConsent', 'body'],
    ['#privacyEnvironmentConsent', 'environment']
  ].forEach(([selector, key]) => bindOptional(selector, 'change', (event) => {
    const granted = Boolean(event.target.checked);
    state.personal.privacy.sourceConsent[key] = granted;
    if (!granted) {
      disconnectSource(key);
    } else if (key === 'digital') {
      connectDigitalSource();
    } else {
      const source = state.personal.sources[key];
      source.connection = 'permission-required';
      source.mode = 'none';
      source.updatedAt = null;
      source.metrics = {};
      persistPersonal();
      renderProfile();
    }
    renderPrivacyControls();
  }));
  bindOptional('#retentionSelect', 'change', (event) => {
    const value = Number(event.target.value);
    state.personal.privacy.retentionDays = [14, 30, 90].includes(value) ? value : 30;
    pruneRetainedData();
    persistPersonal();
  });
  bindOptional('#nudgeSensitivity', 'change', (event) => {
    state.personal.preferences.nudgeSensitivity = ['gentle', 'balanced', 'minimal'].includes(event.target.value) ? event.target.value : 'balanced';
    state.activeNudge = null;
    persistPersonal();
    renderNudge();
  });
  bindOptional('#exportDataButton', 'click', exportAggregateData);
  bindOptional('#exportWeeklyPdf', 'click', printWeeklyReport);
  bindOptional('#exportWeeklyPng', 'click', exportWeeklyReportPng);
  bindOptional('#revokeConnectionsButton', 'click', revokeConnections);
  bindOptional('#deleteMyDataButton', 'click', () => {
    const confirmed = window.confirm(state.language === 'vi' ? 'Xóa toàn bộ dữ liệu Sentio đã lưu trong trình duyệt này?' : 'Delete all Sentio data stored in this browser?');
    if (!confirmed) return;
    resetApp();
    showToast(t('dataDeleted'), 'success');
  });
  bindOptional('#restartOnboarding', 'click', () => {
    const hasPersonalData = Boolean(state.personal.sessions.length || state.personal.baseline.sampleCount || state.personal.activeSession);
    if (hasPersonalData) {
      const message = state.language === 'vi'
        ? 'Thiết lập lại onboarding sẽ thay thế baseline, lịch sử phiên và phiên đang dở khi bạn hoàn tất hoặc xem trước. Tiếp tục?'
        : 'Restarting onboarding will replace your baseline, session history, and active session when you complete or preview it. Continue?';
      if (!window.confirm(message)) return;
    }
    openOnboarding(true);
  });
  bindOptional('#openDemoScenarios', 'click', () => {
    closePanels(false);
    openFilm('people');
  });

  document.addEventListener('visibilitychange', () => { if (document.hidden) simulateTabSwitch(); });
  document.addEventListener('keydown', (event) => {
    trapModalFocus(event);
    if (event.key === 'Escape') {
      if (state.onboardingOpen) return;
      if ($('#morningCheckin')?.classList.contains('show')) closeCheckin('skipped');
      else if ($('#sessionSummary')?.classList.contains('show')) closeSessionSummary();
      else if (state.view === 'film' && state.filmPerson) closePersonCaseStudy();
      else if (state.view === 'film') exitFilm();
      else closePanels();
    }
    if (state.view === 'film') {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        stopFilmAuto();
        nextFilmScene();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        stopFilmAuto();
        previousFilmScene();
      }
      const shortcut = { '4': 'system', '5': 'people', '6': 'week', '7': 'end' }[event.key];
      if (shortcut) {
        stopFilmAuto();
        setFilmScene(shortcut);
      }
    }
  });
}

function init() {
  const motionEnabled = store.get('sentio-motion', '1') !== '0';
  if ($('#motionToggle')) $('#motionToggle').checked = motionEnabled;
  document.body.classList.toggle('no-motion', !motionEnabled);
  refreshBaseline();
  pruneRetainedData();
  persistPersonal();
  bindEvents();
  applyTranslations();
  window.setInterval(updateVietnamClock, 60 * 1000);
  resetTimerForProfile(null, { preserveStored: true });
  restoreActiveSession();
  restoreNudgeCooldown();
  const params = new URLSearchParams(location.search);
  if (params.get('film') === '1') {
    openFilm(params.get('scene') || 'system');
    if (params.get('scene') === 'people' && profileData[params.get('person')]) {
      openPersonCaseStudy(params.get('person'), { focus: false, updateUrl: false });
    }
  }
  runStartupExperience();
  if (params.get('film') !== '1' && state.profile === 'personal') {
    if (!state.personal.onboardingComplete) window.setTimeout(() => openOnboarding(), 120);
    else window.setTimeout(openCheckin, 1850);
  }
  renderFocusTimeline();
}

init();
