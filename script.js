document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. DOM ELEMENT SELECTION
    // ==========================================
    const fullscreenBtn = document.getElementById("fullscreen-btn");

    const startOverlay = document.getElementById("start-overlay");
    const startAppBtn = document.getElementById("start-app-btn");

    const video1 = document.getElementById("videoPlayer1");
    const video2 = document.getElementById("videoPlayer2");

    // Overlays
    const langOverlay = document.getElementById("language-overlay");
    const scene4Overlay = document.getElementById("scene4-overlay");
    const settingsOverlay = document.getElementById("settings-overlay");
    const scene6Overlay = document.getElementById("scene6-overlay");
    const scene7Overlay = document.getElementById("scene7-overlay");
    const scene8Overlay = document.getElementById("scene8-overlay");
    const scene9Overlay = document.getElementById("scene9-overlay");
    const scene10Overlay = document.getElementById("scene10-overlay");
    const scene11Overlay = document.getElementById("scene11-overlay");
    const scene12Overlay = document.getElementById("scene12-overlay");
    const normalLawanOverlay = document.getElementById("normal-lawan-overlay");

    // Video Player & Controls Elements
    const normalLawanVideo = document.getElementById("normalLawanVideo");
    const normalLawanSource = document.getElementById("normalLawanSource");

    const vbtnPause = document.getElementById("vbtn-pause");
    const vbtnPlay = document.getElementById("vbtn-play");
    const vbtnRestart = document.getElementById("vbtn-restart");
    const videoSpeed = document.getElementById("videoSpeed");

    // Navigation Buttons
    const btnBm = document.getElementById("btn-bm");
    const btnEn = document.getElementById("btn-en");
    const skipBtn = document.getElementById("skip-btn");
    const btnChapter = document.getElementById("btn-chapter");
    const btnQuiz = document.getElementById("btn-quiz");

    // Scene 6, 7, 8, 9 Controls
    const btnAsas = document.getElementById("btn-asas");
    const btnPenjagaan = document.getElementById("btn-penjagaan");
    const btnKesihatan = document.getElementById("btn-kesihatan");

    // Settings Controls
    const settingsTitle = document.getElementById("settings-title");
    const labelAudio = document.getElementById("label-audio");
    const labelLanguage = document.getElementById("label-language");
    const textVolumeUp = document.getElementById("text-volume-up");
    const textVolumeDown = document.getElementById("text-volume-down");
    const textMute = document.getElementById("text-mute");
    const textLangBm = document.getElementById("text-lang-bm");
    const textLangEn = document.getElementById("text-lang-en");

    const volumeSlider = document.getElementById("volume-slider");
    const volumePercentage = document.getElementById("volume-percentage");
    const btnVolumeUp = document.getElementById("btn-volume-up");
    const btnVolumeDown = document.getElementById("btn-volume-down");
    const btnMute = document.getElementById("btn-mute");
    const btnSetBm = document.getElementById("btn-set-bm");
    const btnSetEn = document.getElementById("btn-set-en");

    // Quiz DOM Elements
    const quizTitle = document.getElementById("quiz-title");
    const btnQuizAsas = document.getElementById("btn-quiz-asas");
    const btnQuizPenjagaan = document.getElementById("btn-quiz-penjagaan");
    const btnQuizKesihatan = document.getElementById("btn-quiz-kesihatan");

    const quizQuestionText = document.getElementById("quiz-question-text");
    const optA = document.getElementById("opt-a");
    const optB = document.getElementById("opt-b");
    const optC = document.getElementById("opt-c");
    const optD = document.getElementById("opt-d");
    const quizScoreElem = document.getElementById("quiz-score");

    const finalScoreVal = document.getElementById("final-score-val");
    const resultCongrats = document.getElementById("result-congrats");
    const resultMotto = document.getElementById("result-motto");
    const resultScoreLabel = document.getElementById("result-score-label");

    // Modal Elements
    const quizModalOverlay = document.getElementById("quiz-modal-overlay");
    const modalIconElem = document.getElementById("modal-icon-elem");
    const modalTitleElem = document.getElementById("modal-title-elem");
    const modalMsgElem = document.getElementById("modal-msg-elem");
    const modalCloseBtn = document.getElementById("modal-close-btn");

    let pendingNextQuestionCall = null;

    // Global Nav Controls
    const globalControls = document.getElementById("global-controls");
    const btnGlobalSettings = document.getElementById("btn-global-settings");
    const btnGlobalHome = document.getElementById("btn-global-home");
    const btnGlobalBack = document.getElementById("btn-global-back");
    const btnGlobalHint = document.getElementById("btn-global-hint");

    // ==========================================
    // 2. STATE MANAGEMENT & BGM AUDIO LOGIC
    // ==========================================
    let selectedLang = "ms";
    let introAudio = null;
    let previousScene = "scene4";
    let currentVideoParentScene = "scene7";

    let currentScore = 0;
    let currentQuestionIndex = 0;
    let activeQuizCategory = "asas";
    const totalQuestions = 8;

    const bgMusic = new Audio("assets/bgm.mp3");
    bgMusic.loop = true;

    function setBgmVolume(val) {
        let clampedVal = Math.max(0, Math.min(100, val));
        if (volumeSlider) {
            volumeSlider.value = clampedVal;
            volumeSlider.style.background = `linear-gradient(to right, #E70B90 ${clampedVal}%, #FFCCE5 ${clampedVal}%)`;
        }
        if (volumePercentage) volumePercentage.textContent = clampedVal + "%";
        if (bgMusic) bgMusic.volume = clampedVal / 100;
    }

    if (volumeSlider) {
        setBgmVolume(volumeSlider.value);
        volumeSlider.addEventListener("input", (e) => setBgmVolume(e.target.value));
    }

    if (btnVolumeUp) btnVolumeUp.addEventListener("click", () => setBgmVolume(parseInt(volumeSlider.value) + 10));
    if (btnVolumeDown) btnVolumeDown.addEventListener("click", () => setBgmVolume(parseInt(volumeSlider.value) - 10));
    if (btnMute) btnMute.addEventListener("click", () => setBgmVolume(0));

    // ==========================================
    // FULLSCREEN LOGIC
    // ==========================================
    function requestLandscapeFullscreen() {
        const docEl = document.documentElement;
        if (docEl.requestFullscreen) {
            docEl.requestFullscreen().catch(err => console.log(err));
        } else if (docEl.webkitRequestFullscreen) {
            docEl.webkitRequestFullscreen();
        }
    }

    function toggleFullscreen() {
        const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement;
        if (!isFullscreen) {
            requestLandscapeFullscreen();
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        }
    }

    if (fullscreenBtn) fullscreenBtn.addEventListener("click", toggleFullscreen);

    // ==========================================
    // 3. START OVERLAY & INTRO FLOW
    // ==========================================
    if (startAppBtn) {
        startAppBtn.addEventListener("click", (e) => {
            e.preventDefault();
            requestLandscapeFullscreen();

            if (startOverlay) startOverlay.style.setProperty("display", "none", "important");
            if (bgMusic) bgMusic.play().catch(err => console.log(err));

            if (video1) {
                video1.style.display = "block";
                video1.classList.add("active");
                video1.currentTime = 0;
                video1.play().catch(() => {
                    video1.style.display = "none";
                    if (langOverlay) langOverlay.style.setProperty("display", "flex", "important");
                });
            }
        });
    }

    if (video1) {
        video1.addEventListener("ended", () => {
            video1.classList.remove("active");
            video1.style.display = "none";
            if (langOverlay) langOverlay.style.setProperty("display", "flex", "important");
        });
    }

    if (btnBm) btnBm.addEventListener("click", () => startIntroScene("ms"));
    if (btnEn) btnEn.addEventListener("click", () => startIntroScene("en"));

    function startIntroScene(lang) {
        selectedLang = lang;
        updateLocalizationUI();

        if (langOverlay) langOverlay.style.display = "none";
        if (skipBtn) skipBtn.style.display = "flex";

        stopIntroAudio();
        const audioFile = (selectedLang === "en") ? "assets/intro eng.MP3" : "assets/intro.MP3";
        introAudio = new Audio(audioFile);

        if (video2) {
            video2.currentTime = 0;
            video2.classList.add("active");
            video2.play();
        }
        if (introAudio) introAudio.play();
    }

    if (video2) video2.addEventListener("ended", goToScene4);
    if (skipBtn) skipBtn.addEventListener("click", goToScene4);

    function stopIntroAudio() {
        if (introAudio) {
            introAudio.pause();
            introAudio = null;
        }
    }

    function goToScene4() {
        stopIntroAudio();
        if (video2) {
            video2.pause();
            video2.classList.remove("active");
        }
        if (skipBtn) skipBtn.style.display = "none";

        updateLocalizationUI();
        if (scene4Overlay) scene4Overlay.style.display = "flex";
        if (globalControls) globalControls.style.display = "flex";
    }

    // ==========================================
    // 4. DYNAMIC VIDEO PLAYER
    // ==========================================
    function playChapterVideo(videoBaseName, parentSceneId) {
        currentVideoParentScene = parentSceneId;

        const parentOverlay = document.getElementById(parentSceneId + "-overlay");
        if (parentOverlay) parentOverlay.style.display = "none";

        if (normalLawanOverlay) normalLawanOverlay.style.display = "block";

        const langSuffix = selectedLang === "en" ? "bi" : "bm";
        const videoFile = `assets/${videoBaseName}-${langSuffix}.mp4`;

        if (normalLawanSource) normalLawanSource.src = videoFile;

        if (normalLawanVideo) {
            normalLawanVideo.volume = 1.0;
            normalLawanVideo.load();
            applyVideoSpeed();
            normalLawanVideo.play().catch(err => console.log(err));
        }
    }

    const videoButtonsMap = [
        { btnId: "btn-apa-haid", videoName: "Apa-itu-haid", parentScene: "scene7" },
        { btnId: "btn-mengapa-haid", videoName: "Kenapa-haid", parentScene: "scene7" },
        { btnId: "btn-berapa-lama", videoName: "Berapa-lama", parentScene: "scene7" },
        { btnId: "btn-normal-lawan", videoName: "Normal-lawan", parentScene: "scene7" },
        { btnId: "btn-penjagaan-asas", videoName: "Basic-care", parentScene: "scene8" },
        { btnId: "btn-penjagaan-haid", videoName: "Basic-sekolah", parentScene: "scene8" },
        { btnId: "btn-jenis-produk", videoName: "Jenis-pad", parentScene: "scene8" },
        { btnId: "btn-cara-guna", videoName: "reduce", parentScene: "scene8" },
        { btnId: "btn-haid-mental", videoName: "Mental", parentScene: "scene9" },
        { btnId: "btn-mitos-fakta", videoName: "Mitos-fakta", parentScene: "scene9" },
        { btnId: "btn-kesilapan-kebersihan", videoName: "Kesalahan", parentScene: "scene9" },
        { btnId: "btn-sekeliling", videoName: "Orang-keliling", parentScene: "scene9" }
    ];

    videoButtonsMap.forEach(item => {
        const btnElem = document.getElementById(item.btnId);
        if (btnElem) {
            btnElem.addEventListener("click", () => playChapterVideo(item.videoName, item.parentScene));
        }
    });

    function applyVideoSpeed() {
        if (normalLawanVideo && videoSpeed) {
            normalLawanVideo.playbackRate = Number(videoSpeed.value);
        }
    }

    if (videoSpeed) videoSpeed.addEventListener("change", applyVideoSpeed);
    if (vbtnPlay && normalLawanVideo) vbtnPlay.addEventListener("click", () => normalLawanVideo.play());
    if (vbtnPause && normalLawanVideo) vbtnPause.addEventListener("click", () => normalLawanVideo.pause());
    if (vbtnRestart && normalLawanVideo) vbtnRestart.addEventListener("click", () => { normalLawanVideo.currentTime = 0; normalLawanVideo.play(); });

    // ==========================================
    // 5. NAVIGATION & ROUTING
    // ==========================================
    if (btnChapter) btnChapter.addEventListener("click", () => { if (scene4Overlay) scene4Overlay.style.display = "none"; if (scene6Overlay) scene6Overlay.style.display = "flex"; });
    if (btnQuiz) btnQuiz.addEventListener("click", () => { if (scene4Overlay) scene4Overlay.style.display = "none"; if (scene10Overlay) scene10Overlay.style.display = "flex"; });

    if (btnAsas) btnAsas.addEventListener("click", () => { if (scene6Overlay) scene6Overlay.style.display = "none"; if (scene7Overlay) scene7Overlay.style.display = "flex"; });
    if (btnPenjagaan) btnPenjagaan.addEventListener("click", () => { if (scene6Overlay) scene6Overlay.style.display = "none"; if (scene8Overlay) scene8Overlay.style.display = "flex"; });
    if (btnKesihatan) btnKesihatan.addEventListener("click", () => { if (scene6Overlay) scene6Overlay.style.display = "none"; if (scene9Overlay) scene9Overlay.style.display = "flex"; });

    if (btnSetBm) btnSetBm.addEventListener("click", () => { selectedLang = "ms"; updateLocalizationUI(); });
    if (btnSetEn) btnSetEn.addEventListener("click", () => { selectedLang = "en"; updateLocalizationUI(); });

    if (btnGlobalSettings) {
        btnGlobalSettings.addEventListener("click", () => {
            if (settingsOverlay) settingsOverlay.style.display = "flex";
        });
    }

    if (btnGlobalHome) {
        btnGlobalHome.addEventListener("click", () => {
            const overlays = [settingsOverlay, scene6Overlay, scene7Overlay, scene8Overlay, scene9Overlay, scene10Overlay, scene11Overlay, scene12Overlay, normalLawanOverlay];
            overlays.forEach(ov => { if (ov) ov.style.display = "none"; });
            if (scene4Overlay) scene4Overlay.style.display = "flex";
            if (btnGlobalHint) btnGlobalHint.style.display = "none";
        });
    }

    if (btnGlobalBack) {
        btnGlobalBack.addEventListener("click", () => {
            if (settingsOverlay) settingsOverlay.style.display = "none";
            if (scene11Overlay && scene11Overlay.style.display === "flex") {
                scene11Overlay.style.display = "none";
                if (scene10Overlay) scene10Overlay.style.display = "flex";
                if (btnGlobalHint) btnGlobalHint.style.display = "none";
            } else if (scene10Overlay && scene10Overlay.style.display === "flex") {
                scene10Overlay.style.display = "none";
                if (scene4Overlay) scene4Overlay.style.display = "flex";
            } else if (scene7Overlay || scene8Overlay || scene9Overlay) {
                if (scene7Overlay) scene7Overlay.style.display = "none";
                if (scene8Overlay) scene8Overlay.style.display = "none";
                if (scene9Overlay) scene9Overlay.style.display = "none";
                if (scene6Overlay) scene6Overlay.style.display = "flex";
            } else if (scene6Overlay && scene6Overlay.style.display === "flex") {
                scene6Overlay.style.display = "none";
                if (scene4Overlay) scene4Overlay.style.display = "flex";
            }
        });
    }

    // ==========================================
    // 6. POP-UP MODAL FUNCTIONALITY
    // ==========================================
    function showModal(icon, title, message, onComplete) {
        if (!quizModalOverlay) return;
        if (modalIconElem) modalIconElem.textContent = icon;
        if (modalTitleElem) modalTitleElem.textContent = title;
        if (modalMsgElem) modalMsgElem.textContent = message;

        pendingNextQuestionCall = onComplete || null;
        quizModalOverlay.style.display = "flex";
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", () => {
            if (quizModalOverlay) quizModalOverlay.style.display = "none";
            if (pendingNextQuestionCall) {
                const action = pendingNextQuestionCall;
                pendingNextQuestionCall = null;
                action();
            }
        });
    }

    // ==========================================
    // 7. QUIZ DATA & LOGIC (MEMILIKI SUSUNAN TEKS GARISAN UNTUK 24 SOALAN)
    // ==========================================
    const quizCategories = {
        asas: [
            {
                lines: {
                    ms: ["1. Apakah yang berlaku semasa seseorang perempuan", "mengalami haid?"],
                    en: ["1. What happens when a girl gets her", "period?"]
                },
                options: [
                    { text: { ms: "A) Darah dan tisu dari rahim keluar melalui faraj.", en: "A) Blood and tissue leave the body through the vagina." }, isCorrect: true },
                    { text: { ms: "B) Badan menghasilkan lebih banyak tenaga.", en: "B) The body produces extra energy." }, isCorrect: false },
                    { text: { ms: "C) Tulang tumbuh dengan cepat.", en: "C) Bones grow rapidly." }, isCorrect: false },
                    { text: { ms: "D) Hati memproses toksin keluar daripada badan.", en: "D) The liver processes toxins out of the body." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (A). Semasa haid, dinding rahim yang tebal akan luruh dan keluar bersama darah melalui faraj.",
                    en: "The correct answer is (A). During menstruation, the uterine lining sheds and leaves the body as blood through the vagina."
                },
                hint: { ms: "Pikirkan tentang darah & tisu lembut yang keluar daripada badan setiap bulan.", en: "Think about the blood & soft lining that leaves the body every month." }
            },
            {
                lines: {
                    ms: ["2. Purata umur kebanyakan orang mendapat haid pertama mereka", "ialah sekitar umur berapa?"],
                    en: ["2. Around what age do most people get", "their first period?"]
                },
                options: [
                    { text: { ms: "A) 6 tahun.", en: "A) 6 years old." }, isCorrect: false },
                    { text: { ms: "B) 8 tahun.", en: "B) 8 years old." }, isCorrect: false },
                    { text: { ms: "C) 12 tahun.", en: "C) 12 years old." }, isCorrect: true },
                    { text: { ms: "D) 18 tahun.", en: "D) 18 years old." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (C). Purata umur bagi haid pertama (menarke) biasanya adalah sekitar 12 tahun.",
                    en: "The correct answer is (C). The average age for the first period (menarche) is around 12 years old."
                },
                hint: { ms: "Ini biasanya berlaku pada awal usia remaja sekolah rendah/menengah.", en: "It usually happens during early pre-teen / teenage years." }
            },
            {
                lines: {
                    ms: ["3. Mengapakah badan membina lapisan lembut di dalam rahim", "setiap bulan?"],
                    en: ["3. Why does the body build a soft lining inside", "the uterus every month?"]
                },
                options: [
                    { text: { ms: "A) Untuk melindungi rahim daripada jangkitan.", en: "A) To protect the uterus from infection." }, isCorrect: false },
                    { text: { ms: "B) Sebagai persediaan bagi menghadapi kehamilan.", en: "B) To prepare the body for a possible pregnancy." }, isCorrect: true },
                    { text: { ms: "C) Untuk menyimpan cecair badan berlebihan.", en: "C) To store excess body fluids." }, isCorrect: false },
                    { text: { ms: "D) Bagi membantu proses pencernaan makanan.", en: "D) To help digest food." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (B). Badan menyediakan lapisan lembut di rahim sebagai persediaan jika kehamilan berlaku.",
                    en: "The correct answer is (B). The body builds a nutrient-rich lining to prepare for potential pregnancy."
                },
                hint: { ms: "Ia adalah persediaan untuk kemungkinan berkembangnya bayi.", en: "It prepares the body for potential baby growth." }
            },
            {
                lines: {
                    ms: ["4. Apakah yang berlaku kepada lapisan rahim jika kehamilan", "tidak berlaku?"],
                    en: ["4. What happens to the uterus lining if pregnancy", "does not occur?"]
                },
                options: [
                    { text: { ms: "A) Lapisan tersebut diserap semula secara kekal oleh hati.", en: "A) The lining is permanently reabsorbed by the liver." }, isCorrect: false },
                    { text: { ms: "B) Lapisan tersebut akan bertambah tebal setiap bulan.", en: "B) The lining continues to thicken every month." }, isCorrect: false },
                    { text: { ms: "C) Lapisan tersebut luruh dan keluar melalui faraj bersama darah.", en: "C) The lining breaks down and leaves through the vagina as blood." }, isCorrect: true },
                    { text: { ms: "D) Lapisan tersebut bertukar menjadi otot rahim.", en: "D) The lining turns into uterine muscle." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (C). Jika tiada kehamilan, lapisan rahim tidak diperlukan lalu luruh sebagai pendarahan haid.",
                    en: "The correct answer is (C). Without pregnancy, the unneeded lining breaks down and sheds as menstrual blood."
                },
                hint: { ms: "Bila persediaan tidak digunakan, ia akan luruh keluar.", en: "When not used, the lining sheds." }
            },
            {
                lines: {
                    ms: ["5. Berapakah tempoh julat kitaran haid yang normal bagi", "kebanyakan orang?"],
                    en: ["5. What is the normal menstrual cycle length range", "for most people?"]
                },
                options: [
                    { text: { ms: "A) 5 hingga 10 hari.", en: "A) 5 to 10 days." }, isCorrect: false },
                    { text: { ms: "B) 10 hingga 15 hari.", en: "B) 10 to 15 days." }, isCorrect: false },
                    { text: { ms: "C) 21 hingga 35 hari.", en: "C) 21 to 35 days." }, isCorrect: true },
                    { text: { ms: "D) 40 hingga 50 hari.", en: "D) 40 to 50 days." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (C). Kitaran haid yang sihat dan normal biasanya berlangsung antara 21 hingga 35 hari.",
                    en: "The correct answer is (C). A normal and healthy menstrual cycle ranges between 21 to 35 days."
                },
                hint: { ms: "Biasanya antara 3 hingga 5 minggu.", en: "Usually ranges between 3 to 5 weeks." }
            },
            {
                lines: {
                    ms: ["6. Apakah yang berlaku semasa fasa ketiga iaitu", "fasa ovulasi?"],
                    en: ["6. What occurs during the third phase, known as", "ovulation?"]
                },
                options: [
                    { text: { ms: "A) Lapisan rahim mula luruh dan keluar sebagai darah.", en: "A) The lining of the uterus breaks down and leaves as blood." }, isCorrect: false },
                    { text: { ms: "B) Ovari melepaskan telur yang telah matang.", en: "B) An ovary releases a mature egg." }, isCorrect: true },
                    { text: { ms: "C) Badan berhenti menghasilkan hormon secara lengkap.", en: "C) The body completely stops producing hormones." }, isCorrect: false },
                    { text: { ms: "D) Fasa pendarahan menstruasi baru bermula.", en: "D) The menstrual bleeding phase begins." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (B). Semasa fasa ovulasi, salah satu ovari akan membebaskan telur yang matang.",
                    en: "The correct answer is (B). During ovulation, an ovary releases a mature egg cell."
                },
                hint: { ms: "Ovulasi bermaksud pelepasan sel telur.", en: "Ovulation means releasing a mature egg cell." }
            },
            {
                lines: {
                    ms: ["7. Manakah antara warna darah haid berikut yang masih", "dianggap normal?"],
                    en: ["7. Which of the following period blood colors is", "considered normal?"]
                },
                options: [
                    { text: { ms: "A) Hijau terang, kuning, atau oren.", en: "A) Bright green, yellow, or orange." }, isCorrect: false },
                    { text: { ms: "B) Kelabu.", en: "B) Grey." }, isCorrect: false },
                    { text: { ms: "C) Biru pekat, atau ungu.", en: "C) Deep blue, or purple." }, isCorrect: false },
                    { text: { ms: "D) Merah, merah jambu, atau coklat.", en: "D) Red, pink, or brown." }, isCorrect: true }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (D). Darah haid normal boleh berubah rona dari merah cerah, merah gelap, merah jambu hingga coklat.",
                    en: "The correct answer is (D). Normal period blood can vary in shades of red, pink, or brown."
                },
                hint: { ms: "Pilih rona semula jadi darah berasaskan merah/coklat.", en: "Look for natural red or brown shade spectrum." }
            },
            {
                lines: {
                    ms: ["8. Tanda manakah yang menunjukkan anda perlu meminta bantuan", "atau berjumpa dengan doktor?"],
                    en: ["8. Which sign indicates that you should ask for help", "or speak to a doctor?"]
                },
                options: [
                    { text: { ms: "A) Haid berlangsung selama 3 hingga 5 hari.", en: "A) A period that lasts for 3 to 5 days." }, isCorrect: false },
                    { text: { ms: "B) Warna darah bertukar menjadi coklat pada akhir haid.", en: "B) Blood turning brown near the end of your period." }, isCorrect: false },
                    { text: { ms: "C) Perlu menukar pad setiap 1 hingga 2 jam kerana terlalu penuh.", en: "C) Needing to change your pad every 1 to 2 hours because it is full." }, isCorrect: true },
                    { text: { ms: "D) Rasa sedikit perubahan emosi semasa haid.", en: "D) Experiencing slight mood changes during your period." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (C). Pendarahan yang terlampau banyak (pad basah kuyup setiap 1-2 jam) memerlukan nasihat doktor.",
                    en: "The correct answer is (C). Abnormally heavy bleeding (soaking through a pad every 1-2 hours) requires medical advice."
                },
                hint: { ms: "Pendarahan yang terlalu banyak bukanlah keadaan yang selesa.", en: "Extremely heavy bleeding is a sign to seek medical advice." }
            }
        ],
        penjagaan: [
            {
                lines: {
                    ms: ["1. Berapa kerapkah anda perlu menukar pad jika aliran darah", "haid anda adalah banyak?"],
                    en: ["1. How often should you change your pad if your", "period flow is heavy?"]
                },
                options: [
                    { text: { ms: "A) Setiap 12 jam.", en: "A) Every 12 hours." }, isCorrect: false },
                    { text: { ms: "B) Setiap 8 hingga 10 jam.", en: "B) Every 8 to 10 hours." }, isCorrect: false },
                    { text: { ms: "C) Setiap 3 hingga 4 jam.", en: "C) Every 3 to 4 hours." }, isCorrect: true },
                    { text: { ms: "D) Hanya sekali sehari.", en: "D) Only once a day." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (C). Pad perlu ditukar setiap 3 hingga 4 jam bagi mengelakkan kebocoran dan pertumbuhan bakteria.",
                    en: "The correct answer is (C). Pads should be changed every 3 to 4 hours to maintain hygiene and prevent bacteria."
                },
                hint: { ms: "Menukar pad secara berkala menjaga kebersihan diri.", en: "Changing pads regularly keeps hygiene top notch." }
            },
            {
                lines: {
                    ms: ["2. Bagaimanakah cara yang betul untuk membuang pad", "yang telah digunakan?"],
                    en: ["2. What is the proper way to dispose of a", "used pad?"]
                },
                options: [
                    { text: { ms: "A) Pam masuk ke dalam lubang tandas.", en: "A) Flush it down the toilet." }, isCorrect: false },
                    { text: { ms: "B) Bungkus dan buang ke dalam tong sampah.", en: "B) Wrap it up and throw it in the bin." }, isCorrect: true },
                    { text: { ms: "C) Cuci dengan sabun lalu simpan semula.", en: "C) Wash it with soap and keep it." }, isCorrect: false },
                    { text: { ms: "D) Tanam di kawasan tanah luar rumah.", en: "D) Bury it in the dirt outside." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (B). Pad hendaklah dibungkus kemas dengan kertas/plastik dan dibuang ke dalam tong sampah sanitari.",
                    en: "The correct answer is (B). Used pads must be wrapped properly and disposed of in a rubbish bin."
                },
                hint: { ms: "Jangan sekali-kali pam ke dalam tandas!", en: "Never flush sanitary products down the toilet!" }
            },
            {
                lines: {
                    ms: ["3. Antara berikut, manakah barang yang digalakkan untuk disimpan", "di dalam kit kecemasan haid di sekolah?"],
                    en: ["3. Which of the following items is recommended to keep in", "your school period emergency kit?"]
                },
                options: [
                    { text: { ms: "A) Pad, pantyliner, dan seluar dalam tambahan.", en: "A) Pads, pantyliners, and a spare pair of underwear." }, isCorrect: true },
                    { text: { ms: "B) Mainan.", en: "B) Toys." }, isCorrect: false },
                    { text: { ms: "C) Buku cerita tambahan.", en: "C) Additional storybooks." }, isCorrect: false },
                    { text: { ms: "D) Botol penyembur minyak wangi bersaiz besar.", en: "D) Large-sized perfume spray bottle." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (A). Kit kecemasan haid sepatutnya mengandungi tuala wanita, pantyliner, serta seluar dalam ganti.",
                    en: "The correct answer is (A). A period emergency kit should contain spare pads, pantyliners, and extra underwear."
                },
                hint: { ms: "Barang asas untuk persediaan kecemasan haid.", en: "Essential hygiene items for period preparation." }
            },
            {
                lines: {
                    ms: ["4. Apakah arah yang betul semasa mengelap atau membersihkan", "kawasan sulit selepas menggunakan tandas?"],
                    en: ["4. What is the correct direction to wipe or clean your", "private area after using the toilet?"]
                },
                options: [
                    { text: { ms: "A) Dari belakang ke depan.", en: "A) From back to front." }, isCorrect: false },
                    { text: { ms: "B) Dari depan ke belakang.", en: "B) From front to back." }, isCorrect: true },
                    { text: { ms: "C) Dari kiri ke kanan.", en: "C) From left to right." }, isCorrect: false },
                    { text: { ms: "D) Tidak perlu dilap sama sekali.", en: "D) It does not need to be wiped at all." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (B). Mengelap dari depan ke belakang dapat mengelakkan kuman dari dubur berpindah ke faraj.",
                    en: "The correct answer is (B). Wiping front to back prevents spreading bacteria from the anus to the vagina."
                },
                hint: { ms: "Mengelap dari arah kawasan bersih ke belakang elak jangkitan.", en: "Wiping from front to back prevents bacteria spreading." }
            },
            {
                lines: {
                    ms: [
                        "5. Jenis produk haid manakah yang paling sesuai digunakan",
                        "untuk aliran darah yang sangat ringan atau pada",
                        "penghujung haid?"
                    ],
                    en: [
                        "5. Which period product is best suited for very light flow",
                        "or toward the end",
                        "of your period?"
                    ]
                },
                options: [
                    { text: { ms: "A) Pad maxi malam.", en: "A) Overnight maxi pad." }, isCorrect: false },
                    { text: { ms: "B) Pantyliner atau pad ringan.", en: "B) Pantyliner or light pad." }, isCorrect: true },
                    { text: { ms: "C) Pad aliran sangat banyak.", en: "C) Very heavy flow pad." }, isCorrect: false },
                    { text: { ms: "D) Pad bersaiz paling panjang.", en: "D) The longest size pad available." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (B). Pantyliner amat sesuai untuk aliran darah yang sikit atau sebagai perlindungan pada akhir kitaran.",
                    en: "The correct answer is (B). Pantyliners or light pads are designed specifically for light spot flow."
                },
                hint: { ms: "Pad paling nipis sesuai untuk pendarahan sangat sedikit.", en: "Thinnest pad products suited for light spots." }
            },
            {
                lines: {
                    ms: ["6. Apakah kelebihan pad malam (overnight) atau pad maxi", "untuk aliran darah yang sangat banyak?"],
                    en: ["6. What is the advantage of using an overnight or maxi pad", "for very heavy flow?"]
                },
                options: [
                    { text: { ms: "A) Ia bersaiz lebih pendek dan nipis.", en: "A) It is shorter and thinner." }, isCorrect: false },
                    { text: { ms: "B) Ia tidak perlu ditukar langsung.", en: "B) It never needs to be changed." }, isCorrect: false },
                    { text: { ms: "C) Ia biasanya lebih panjang dan mempunyai bahagian belakang lebih lebar untuk mengelakkan kebocoran.", en: "C) It is usually longer and has a wider back to help prevent leaks." }, isCorrect: true },
                    { text: { ms: "D) Ia menukar warna darah haid secara automatik.", en: "D) It automatically changes the color of the blood." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (C). Pad malam direka lebih panjang dengan pelindung belakang lebar untuk mencegah kebocoran semasa baring.",
                    en: "The correct answer is (C). Overnight pads feature extra length and wider backs for maximum leak protection."
                },
                hint: { ms: "Saiz lebih lebar melindungi sewaktu baring/tidur.", en: "Wider back offers extra protection while sleeping." }
            },
            {
                lines: {
                    ms: ["7. Apakah yang boleh dilakukan pada bahagian bawah perut", "untuk mengurangkan sakit senggugut?"],
                    en: ["7. What can you apply to your lower tummy to help", "ease period cramps?"]
                },
                options: [
                    { text: { ms: "A) Letakkan ais batu secara terus selama 1 jam.", en: "A) Ice cubes directly for 1 hour." }, isCorrect: false },
                    { text: { ms: "B) Letakkan pek pemanas atau botol air suam selama 15 hingga 20 minit.", en: "B) A heating pad or hot-water bottle for 15 to 20 minutes." }, isCorrect: true },
                    { text: { ms: "C) Ditekan dengan objek keras dan berat.", en: "C) Heavy, hard objects pressed down firmly." }, isCorrect: false },
                    { text: { ms: "D) Dibiarkan terdedah pada kipas angin berkuasa tinggi.", en: "D) Direct cold air from a high-speed fan." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (B). Haba daripada botol air suam atau pek pemanas melegakan otot rahim yang tegang semasa senggugut.",
                    en: "The correct answer is (B). Applying heat relaxes uterine muscles and reduces cramp pain."
                },
                hint: { ms: "Kehangatan suam membantu melegakan otot rahim.", en: "Gentle warmth helps relax cramping muscles." }
            },
            {
                lines: {
                    ms: ["8. Apakah tindakan yang perlu diambil sebelum mengambil ubat tahan sakit", "seperti Paracetamol untuk mengurangkan sakit haid?"],
                    en: ["8. What should you do before taking pain relief medication", "like Paracetamol for period pain?"]
                },
                options: [
                    { text: { ms: "A) Ambil sahaja mengikut gerak hati sendiri.", en: "A) Take it based on your own guess." }, isCorrect: false },
                    { text: { ms: "B) Minum air berkafein yang tinggi terlebih dahulu.", en: "B) Drink a highly caffeinated beverage first." }, isCorrect: false },
                    { text: { ms: "C) Bertanya atau mendapat kebenaran daripada ibu bapa, penjaga, atau doktor.", en: "C) Ask a parent, guardian, or doctor for advice." }, isCorrect: true },
                    { text: { ms: "D) Sentiasa mengambil ubat melebihi dos yang disyorkan.", en: "D) Always take more than the recommended dose." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (C). Sentiasa dapatkan nasihat atau kebenaran daripada ibu bapa, penjaga, atau doktor sebelum makan ubat.",
                    en: "The correct answer is (C). Always consult a parent, guardian, or doctor before taking medication."
                },
                hint: { ms: "Dapatkan sokongan orang dewasa/doktor terlebih dahulu.", en: "Always get advice from guardians or medical professionals." }
            }
        ],
        kesihatan: [
            {
                lines: {
                    ms: ["1. Apakah yang membezakan PMDD daripada PMS?", ""],
                    en: ["1. What differentiates PMDD from PMS?", ""]
                },
                options: [
                    { text: { ms: "A) PMDD hanya menyebabkan sakit kepala.", en: "A) PMDD only causes headaches." }, isCorrect: false },
                    { text: { ms: "B) PMDD menyebabkan perubahan mood yang lebih melampau dan boleh menjejaskan kehidupan harian.", en: "B) PMDD causes more extreme mood changes that can disrupt daily life." }, isCorrect: true },
                    { text: { ms: "C) PMDD hanya berlaku selepas haid.", en: "C) PMDD only occurs after menstruation." }, isCorrect: false },
                    { text: { ms: "D) PMDD tidak berkaitan dengan perubahan hormon.", en: "D) PMDD is not related to hormonal changes." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (B). PMDD ialah bentuk emosi prahaid yang sangat teruk dan boleh mengganggu fungsi harian secara serius.",
                    en: "The correct answer is (B). PMDD is a severe form of PMS causing intense emotional symptoms that impair daily functioning."
                },
                hint: { ms: "PMDD adalah bentuk PMS yang jauh lebih teruk.", en: "PMDD is a much more severe form of PMS." }
            },
            {
                lines: {
                    ms: ["2. Apakah maksud Peningkatan Prahaid (PME)?", ""],
                    en: ["2. What is the meaning of Premenstrual Exacerbation (PME)?", ""]
                },
                options: [
                    { text: { ms: "A) Haid berlaku lebih awal daripada biasa.", en: "A) Period occurs earlier than usual." }, isCorrect: false },
                    { text: { ms: "B) Kesihatan fizikal menjadi lebih baik sebelum haid.", en: "B) Physical health improves before period." }, isCorrect: false },
                    { text: { ms: "C) Keadaan kesihatan mental sedia ada menjadi lebih teruk sebelum haid.", en: "C) Pre-existing mental health conditions become worse before period." }, isCorrect: true },
                    { text: { ms: "D) Haid berhenti selama beberapa bulan.", en: "D) Period stops for several months." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (C). PME merujuk kepada simptom gangguan kesihatan mental sedia ada yang melonjak teruk sebelum fasa haid.",
                    en: "The correct answer is (C). PME is when existing mental health conditions worsen during the premenstrual phase."
                },
                hint: { ms: "Exacerbation bermaksud menjadikan keadaan lebih buruk.", en: "Exacerbation means worsening pre-existing mental health." }
            },
            {
                lines: {
                    ms: ["3. Yang manakah merupakan fakta tentang bersenam ketika haid?", ""],
                    en: ["3. Which of the following is a fact about exercising", "during menstruation?"]
                },
                options: [
                    { text: { ms: "A) Senaman mesti dielakkan ketika haid.", en: "A) Exercise must be avoided during period." }, isCorrect: false },
                    { text: { ms: "B) Senaman boleh memburukkan senggugut.", en: "B) Exercise can worsen menstrual cramps." }, isCorrect: false },
                    { text: { ms: "C) Aktiviti fizikal adalah selamat dan boleh membantu mengurangkan senggugut serta perubahan mood.", en: "C) Physical activity is safe and can help reduce cramps as well as mood changes." }, isCorrect: true },
                    { text: { ms: "D) Hanya atlet boleh bersenam ketika haid.", en: "D) Only athletes can exercise during period." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (C). Senaman ringan membantu membebaskan endorfin untuk merawat rasa sakit senggugut.",
                    en: "The correct answer is (C). Light physical exercise releases endorphins, relieving cramps and elevating mood."
                },
                hint: { ms: "Pergerakan perlahan merembeskan hormon gembira.", en: "Light movement releases endorphins to help cramps." }
            },
            {
                lines: {
                    ms: ["4. Apakah yang boleh digunakan untuk berenang dengan selamat", "semasa datang haid?"],
                    en: ["4. What can be used to swim safely while", "on your period?"]
                },
                options: [
                    { text: { ms: "A) Pad biasa atau pantyliner.", en: "A) Regular pads or pantyliners." }, isCorrect: false },
                    { text: { ms: "B) Produk haid yang sesuai seperti tampon, cawan haid, atau pakaian renang khas haid.", en: "B) Appropriate period products such as tampons, menstrual cups, or period swimwear." }, isCorrect: true },
                    { text: { ms: "C) Tisu kering yang dilipat.", en: "C) Folded dry tissues." }, isCorrect: false },
                    { text: { ms: "D) Berenang tidak memerlukan sebarang produk haid.", en: "D) Swimming does not require any period products." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (B). Tuala wanita biasa menyerap air kolam, jadi tampon atau cawan haid adalah pilihan yang betul semasa berenang.",
                    en: "The correct answer is (B). Tampons or menstrual cups absorb flow internally, making them suitable for swimming."
                },
                hint: { ms: "Produk dalaman atau khas digunakan untuk aktiviti air.", en: "Internal or specialized products are used for water activities." }
            },
            {
                lines: {
                    ms: ["5. Apakah jenis pakaian yang sepatutnya dielakkan semasa haid", "kerana boleh memerangkap haba dan kelembapan?"],
                    en: ["5. What type of clothing should be avoided during your period", "because it can trap heat and moisture?"]
                },
                options: [
                    { text: { ms: "A) Pakaian daripada fabrik kapas yang longgar.", en: "A) Loose cotton fabric clothing." }, isCorrect: false },
                    { text: { ms: "B) Pakaian yang selesa dan mempunyai pengudaraan baik.", en: "B) Comfortable and breathable clothing." }, isCorrect: false },
                    { text: { ms: "C) Pakaian sintetik yang terlalu ketat.", en: "C) Overly tight synthetic clothing." }, isCorrect: true },
                    { text: { ms: "D) Pakaian yang diperbuat daripada kain benang semula jadi.", en: "D) Clothing made from natural fiber fabrics." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (C). Pakaian ketat bersintetik menyekat aliran udara dan boleh menyebabkan jangkitan kulat/bakteria.",
                    en: "The correct answer is (C). Tight synthetic clothing traps moisture and heat, increasing risk of bacterial/fungal growth."
                },
                hint: { ms: "Pakaian ketat dari bahan buatan menyekat pengudaraan.", en: "Tight synthetic clothes trap sweat and block airflow." }
            },
            {
                lines: {
                    ms: ["6. Mengapakah produk haid berpewangi boleh menyebabkan masalah?", ""],
                    en: ["6. Why can scented menstrual products cause issues?", ""]
                },
                options: [
                    { text: { ms: "A) Ia menyebabkan darah haid berhenti.", en: "A) They cause period blood to stop." }, isCorrect: false },
                    { text: { ms: "B) Ia meningkatkan tempoh haid.", en: "B) They increase the duration of period." }, isCorrect: false },
                    { text: { ms: "C) Ia boleh mengganggu keseimbangan pH semula jadi dan menyebabkan kerengsaan.", en: "C) They can disrupt the natural pH balance and cause irritation." }, isCorrect: true },
                    { text: { ms: "D) Ia menyebabkan haid datang lebih kerap.", en: "D) They cause period to occur more frequently." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (C). Bahan kimia haruman dalam pad berpewangi boleh merengsakan faraj dan mengganggu tahap pH semula jadi.",
                    en: "The correct answer is (C). Added chemical fragrances can irritate intimate tissue and disturb natural pH levels."
                },
                hint: { ms: "Bahan kimia pewangi boleh merengsakan kulit sensitif.", en: "Fragrance chemicals can irritate sensitive areas." }
            },
            {
                lines: {
                    ms: ["7. Apakah yang boleh dilakukan untuk membantu seseorang", "yang mengalami senggugut?"],
                    en: ["7. What can be done to help someone experiencing", "period cramps?"]
                },
                options: [
                    { text: { ms: "A) Menyuruh mereka mengabaikan kesakitan.", en: "A) Telling them to ignore the pain." }, isCorrect: false },
                    { text: { ms: "B) Memberikan pad pemanas atau botol air panas.", en: "B) Providing a heating pad or hot water bottle." }, isCorrect: true },
                    { text: { ms: "C) Menghalang mereka daripada berehat.", en: "C) Preventing them from resting." }, isCorrect: false },
                    { text: { ms: "D) Menyuruh mereka melakukan kerja berat.", en: "D) Asking them to do heavy work." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (B). Menghulurkan pek haba atau botol air suam dapat memberikan kelegaan fizikal yang amat berkesan.",
                    en: "The correct answer is (B). Offering a heating pad or warm bottle helps ease cramping pain effectively."
                },
                hint: { ms: "Bantuan keselesaan haba meringankan rasa sakit.", en: "Warmth provides physical comfort and pain relief." }
            },
            {
                lines: {
                    ms: ["8. Bagaimanakah cara terbaik untuk menyokong seseorang", "yang mengalami perubahan mood ketika haid?"],
                    en: ["8. What is the best way to support someone experiencing", "mood swings during their period?"]
                },
                options: [
                    { text: { ms: "A) Menyalahkan emosi mereka sepenuhnya kepada haid.", en: "A) Blaming their emotions entirely on their period." }, isCorrect: false },
                    { text: { ms: "B) Mengabaikan perasaan mereka.", en: "B) Ignoring their feelings." }, isCorrect: false },
                    { text: { ms: "C) Mendengar tanpa menghakimi dan mengiktiraf perasaan mereka.", en: "C) Listening without judgment and acknowledging their feelings." }, isCorrect: true },
                    { text: { ms: "D) Memberitahu mereka bahawa mereka terlalu sensitif.", en: "D) Telling them that they are being overly sensitive." }, isCorrect: false }
                ],
                explanation: {
                    ms: "Jawapan betul ialah (C). Sikap prihatin, empati, dan sedia mendengar tanpa menghakimi adalah bentuk sokongan terbaik.",
                    en: "The correct answer is (C). Empathetic active listening without judgment offers the best emotional support."
                },
                hint: { ms: "Empati dan sokongan emosi tanpa menghakimi.", en: "Empathy, support, and active listening help most." }
            }
        ]
    };

    function updateScoreDisplay() {
        if (quizScoreElem) quizScoreElem.textContent = `${currentScore}/${totalQuestions}`;
    }

    function showQuizCompletion() {
        if (scene11Overlay) scene11Overlay.style.display = "none";
        if (scene12Overlay) scene12Overlay.style.display = "flex";
        if (finalScoreVal) finalScoreVal.textContent = `${currentScore} / ${totalQuestions}`;

        const isEn = selectedLang === "en";
        if (currentScore <= 3) {
            if (resultCongrats) resultCongrats.textContent = isEn ? "Oh no!" : "Ohh tidak!";
            if (resultMotto) resultMotto.textContent = isEn ? "Keep up the effort" : "Teruskan usaha!";
        } else {
            if (resultCongrats) resultCongrats.textContent = isEn ? "Congratulations!" : "Tahniah!";
            if (resultMotto) resultMotto.textContent = isEn ? "Effort is the key to success!" : "Usaha tangga kejayaan!";
        }
    }

    // FUNGSI MEMUTUSKAN TEKS KEPADA q-line SUPAYA TEPAT ATAS GARISAN
    function loadQuestion() {
        if (!quizQuestionText || !optA || !optB || !optC || !optD) return;
        const currentCategoryQuestions = quizCategories[activeQuizCategory] || quizCategories["asas"];

        if (currentQuestionIndex >= currentCategoryQuestions.length) {
            showQuizCompletion();
            return;
        }

        const q = currentCategoryQuestions[currentQuestionIndex];
        const lang = selectedLang || "ms";
        const lineArray = q.lines[lang];

        let formattedHTML = "";
        lineArray.forEach(lineStr => {
            formattedHTML += `<span class="q-line">${lineStr}</span>`;
        });

        quizQuestionText.innerHTML = formattedHTML;
        optA.textContent = q.options[0].text[lang];
        optB.textContent = q.options[1].text[lang];
        optC.textContent = q.options[2].text[lang];
        optD.textContent = q.options[3].text[lang];
    }

    [optA, optB, optC, optD].forEach((btn, optionIndex) => {
        if (!btn) return;
        btn.addEventListener("click", () => {
            const currentCategoryQuestions = quizCategories[activeQuizCategory] || quizCategories["asas"];
            const currentQ = currentCategoryQuestions[currentQuestionIndex];
            const isEn = selectedLang === "en";

            if (currentQ.options[optionIndex].isCorrect) {
                currentScore += 1;
                updateScoreDisplay();

                showModal(
                    "🎉",
                    isEn ? "Correct!" : "Jawapan Betul!",
                    isEn ? "Great job! That is the right answer." : "Syabas! Jawapan anda sangat tepat.",
                    () => {
                        currentQuestionIndex++;
                        loadQuestion();
                    }
                );
            } else {
                updateScoreDisplay();
                const reasonText = currentQ.explanation ? currentQ.explanation[selectedLang || "ms"] : "";
                const wrongMsg = isEn 
                    ? `Oops, that was incorrect!\n\n${reasonText}` 
                    : `Alamak, jawapan anda tidak tepat!\n\n${reasonText}`;

                showModal(
                    "❌",
                    isEn ? "Incorrect!" : "Jawapan Salah!",
                    wrongMsg,
                    () => {
                        currentQuestionIndex++;
                        loadQuestion();
                    }
                );
            }
        });
    });

    function startCategoryQuiz(categoryKey) {
        activeQuizCategory = categoryKey;
        currentScore = 0;
        currentQuestionIndex = 0;
        updateScoreDisplay();
        loadQuestion();

        if (scene10Overlay) scene10Overlay.style.display = "none";
        if (scene11Overlay) scene11Overlay.style.display = "flex";
        if (btnGlobalHint) btnGlobalHint.style.display = "flex";
    }

    if (btnQuizAsas) btnQuizAsas.addEventListener("click", () => startCategoryQuiz("asas"));
    if (btnQuizPenjagaan) btnQuizPenjagaan.addEventListener("click", () => startCategoryQuiz("penjagaan"));
    if (btnQuizKesihatan) btnQuizKesihatan.addEventListener("click", () => startCategoryQuiz("kesihatan"));

    if (btnGlobalHint) {
        btnGlobalHint.addEventListener("click", () => {
            const currentCategoryQuestions = quizCategories[activeQuizCategory] || quizCategories["asas"];
            const currentQ = currentCategoryQuestions[currentQuestionIndex];
            const isEn = selectedLang === "en";
            const hintText = currentQ && currentQ.hint ? currentQ.hint[selectedLang || "ms"] : (isEn ? "Read carefully!" : "Baca soalan dengan teliti!");

            showModal("💡", isEn ? "Hint" : "Petunjuk", hintText, null);
        });
    }

    // ==========================================
    // 8. LOCALIZATION
    // ==========================================
    function updateLocalizationUI() {
        const isEn = selectedLang === "en";

        if (isEn) {
            if (settingsTitle) settingsTitle.textContent = "Setting";
            if (labelAudio) labelAudio.textContent = "Sound";
            if (labelLanguage) labelLanguage.textContent = "Language";
            if (textVolumeUp) textVolumeUp.textContent = "Volume Up";
            if (textVolumeDown) textVolumeDown.textContent = "Volume Down";
            if (textMute) textMute.textContent = "Mute";
            if (textLangBm) textLangBm.textContent = "Malay";
            if (textLangEn) textLangEn.textContent = "English";

            if (btnChapter) btnChapter.textContent = "Chapter";
            if (btnQuiz) btnQuiz.textContent = "Quiz";
            if (skipBtn) skipBtn.textContent = "Skip";
            if (quizTitle) quizTitle.textContent = "Menstrual Care Quiz";
            if (resultScoreLabel) resultScoreLabel.textContent = "Your score:";
            if (modalCloseBtn) modalCloseBtn.textContent = "CONTINUE";

        } else {
            if (settingsTitle) settingsTitle.textContent = "Tetapan";
            if (labelAudio) labelAudio.textContent = "Audio";
            if (labelLanguage) labelLanguage.textContent = "Bahasa";
            if (textVolumeUp) textVolumeUp.textContent = "Kuatkan";
            if (textVolumeDown) textVolumeDown.textContent = "Perlahankan";
            if (textMute) textMute.textContent = "Senyap";
            if (textLangBm) textLangBm.textContent = "Bahasa Melayu";
            if (textLangEn) textLangEn.textContent = "Bahasa Inggeris";

            if (btnChapter) btnChapter.textContent = "Bab";
            if (btnQuiz) btnQuiz.textContent = "Kuiz";
            if (skipBtn) skipBtn.textContent = "Langkau";
            if (quizTitle) quizTitle.textContent = "Kuiz Penjagaan Haid";
            if (resultScoreLabel) resultScoreLabel.textContent = "Skor anda:";
            if (modalCloseBtn) modalCloseBtn.textContent = "TERUSKAN";
        }

        if (scene11Overlay && scene11Overlay.style.display === "flex") {
            loadQuestion();
        }
    }
});
