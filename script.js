document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. DOM ELEMENT SELECTION
    // ==========================================
    const fullscreenBtn = document.getElementById("fullscreen-btn");
    const fullscreenIcon = document.getElementById("fullscreen-icon");

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
    const normalLawanHomeBtn = document.getElementById("normal-lawan-home-btn");
    const normalLawanBackBtn = document.getElementById("normal-lawan-back-btn");
    const normalLawanSettingsBtn = document.getElementById("normal-lawan-settings-btn");

    // Navigation Buttons
    const btnBm = document.getElementById("btn-bm");
    const btnEn = document.getElementById("btn-en");
    const skipBtn = document.getElementById("skip-btn");
    const btnChapter = document.getElementById("btn-chapter");
    const btnQuiz = document.getElementById("btn-quiz");
    const settingsBtn = document.getElementById("settings-btn");
    const homeBtn = document.getElementById("home-btn");
    const backBtn = document.getElementById("back-btn");

    // Scene 6 DOM Elements
    const chapterTitle = document.getElementById("chapter-title");
    const labelAsas = document.getElementById("label-asas");
    const labelPenjagaan = document.getElementById("label-penjagaan");
    const labelKesihatan = document.getElementById("label-kesihatan");
    const scene6HomeBtn = document.getElementById("scene6-home-btn");
    const scene6SettingsBtn = document.getElementById("scene6-settings-btn");

    // Scene 7 DOM Elements
    const btnAsas = document.getElementById("btn-asas");
    const scene7HomeBtn = document.getElementById("scene7-home-btn");
    const scene7BackBtn = document.getElementById("scene7-back-btn");
    const scene7SettingsBtn = document.getElementById("scene7-settings-btn");
    const asasTitle = document.getElementById("asas-title");
    const labelApaHaid = document.getElementById("label-apa-haid");
    const labelMengapaHaid = document.getElementById("label-mengapa-haid");
    const labelBerapaLama = document.getElementById("label-berapa-lama");
    const labelNormalLawan = document.getElementById("label-normal-lawan");

    // Scene 8 DOM Elements
    const btnPenjagaan = document.getElementById("btn-penjagaan");
    const scene8HomeBtn = document.getElementById("scene8-home-btn");
    const scene8BackBtn = document.getElementById("scene8-back-btn");
    const scene8SettingsBtn = document.getElementById("scene8-settings-btn");
    const penjagaanTitle = document.getElementById("penjagaan-title");
    const labelPenjagaanAsas = document.getElementById("label-penjagaan-asas");
    const labelPenjagaanHaid = document.getElementById("label-penjagaan-haid");
    const labelJenis = document.getElementById("label-jenis");
    const labelCara = document.getElementById("label-cara");

    // Scene 9 DOM Elements
    const btnKesihatan = document.getElementById("btn-kesihatan");
    const scene9HomeBtn = document.getElementById("scene9-home-btn");
    const scene9BackBtn = document.getElementById("scene9-back-btn");
    const scene9SettingsBtn = document.getElementById("scene9-settings-btn");
    const kesihatanTitle = document.getElementById("kesihatan-title");
    const labelHaidMental = document.getElementById("label-haid-mental");
    const labelMitosFakta = document.getElementById("label-mitos-fakta");
    const labelKesilapanKebersihan = document.getElementById("label-kesilapan-kebersihan");
    const labelSekeliling = document.getElementById("label-sekeliling");

    // Settings UI Text & Audio Controls
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
    const scene10SettingsBtn = document.getElementById("scene10-settings-btn");
    const scene10HomeBtn = document.getElementById("scene10-home-btn");
    const quizTitle = document.getElementById("quiz-title");
    const labelQuizAsas = document.getElementById("label-quiz-asas");
    const labelQuizPenjagaan = document.getElementById("label-quiz-penjagaan");
    const labelQuizKesihatan = document.getElementById("label-quiz-kesihatan");
    const btnQuizAsas = document.getElementById("btn-quiz-asas");
    const btnQuizPenjagaan = document.getElementById("btn-quiz-penjagaan");
    const btnQuizKesihatan = document.getElementById("btn-quiz-kesihatan");

    const quizQuestionText = document.getElementById("quiz-question-text");
    const optA = document.getElementById("opt-a");
    const optB = document.getElementById("opt-b");
    const optC = document.getElementById("opt-c");
    const optD = document.getElementById("opt-d");
    const quizScoreElem = document.getElementById("quiz-score");
    const labelScore = document.getElementById("label-score");

    const scene11HomeBtn = document.getElementById("scene11-home-btn");
    const scene11QuitBtn = document.getElementById("scene11-quit-btn");
    const scene11HintBtn = document.getElementById("scene11-hint-btn");
    const scene11SettingsBtn = document.getElementById("scene11-settings-btn");

    const finalScoreVal = document.getElementById("final-score-val");
    const totalScoreVal = document.getElementById("total-score-val");
    const resultCongrats = document.getElementById("result-congrats");
    const resultMotto = document.getElementById("result-motto");
    const resultScoreLabel = document.getElementById("result-score-label");
    const scene12HomeBtn = document.getElementById("scene12-home-btn");
    const scene12BackBtn = document.getElementById("scene12-back-btn");
    const scene12SettingsBtn = document.getElementById("scene12-settings-btn");

    // Modal Feedback & Hint Elements
    const quizModal = document.getElementById("quiz-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");
    const modalNextBtn = document.getElementById("modal-next-btn");

    const hintModal = document.getElementById("hint-modal");
    const hintModalTitle = document.getElementById("hint-modal-title");
    const hintModalMessage = document.getElementById("hint-modal-message");
    const hintModalCloseBtn = document.getElementById("hint-modal-close-btn");

    // ==========================================
    // 2. STATE MANAGEMENT & BGM AUDIO LOGIC
    // ==========================================
    let selectedLang = "ms";
    let introAudio = null;
    let previousScene = "scene4";
    let currentVideoParentScene = "scene7";
    let currentVideoBaseName = "";

    let currentScore = 0;
    let currentQuestionIndex = 0;
    let activeQuizCategory = "asas";

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
    // FULLSCREEN & AUTO-ROTATE LOGIC
    // ==========================================
    function requestLandscapeFullscreen() {
        const docEl = document.documentElement;
        if (docEl.requestFullscreen) {
            docEl.requestFullscreen().then(() => lockOrientationLandscape()).catch(err => console.log(err));
        } else if (docEl.webkitRequestFullscreen) {
            docEl.webkitRequestFullscreen();
            lockOrientationLandscape();
        }
    }

    function lockOrientationLandscape() {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock("landscape").catch(err => console.log(err));
        }
    }

    function hideFullscreenBtn() {
        const isMobile = window.innerWidth <= 768 || window.innerHeight <= 768;
        if (fullscreenBtn) {
            fullscreenBtn.style.setProperty("display", isMobile ? "none" : "flex", "important");
        }
    }

    function toggleFullscreen() {
        const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement;
        if (!isFullscreen) {
            requestLandscapeFullscreen();
            hideFullscreenBtn();
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
            hideFullscreenBtn();

            if (startOverlay) startOverlay.style.setProperty("display", "none", "important");
            if (bgMusic) bgMusic.play().catch(err => console.log(err));

            if (video1) {
                video1.style.display = "block";
                video1.classList.add("active");
                video1.currentTime = 0;
                video1.play().catch(() => {
                    video1.classList.remove("active");
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
        introAudio.play();
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
    }

    // ==========================================
    // 4. DYNAMIC VIDEO PLAYER
    // ==========================================
    function playChapterVideo(videoBaseName, parentSceneId) {
        currentVideoParentScene = parentSceneId;
        currentVideoBaseName = videoBaseName;

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
        if (!normalLawanVideo || !videoSpeed) return;
        normalLawanVideo.playbackRate = Number(videoSpeed.value);
    }

    if (videoSpeed) videoSpeed.addEventListener("change", applyVideoSpeed);
    if (vbtnPlay && normalLawanVideo) vbtnPlay.addEventListener("click", () => normalLawanVideo.play());
    if (vbtnPause && normalLawanVideo) vbtnPause.addEventListener("click", () => normalLawanVideo.pause());
    if (vbtnRestart && normalLawanVideo) vbtnRestart.addEventListener("click", () => {
        normalLawanVideo.currentTime = 0;
        normalLawanVideo.play();
    });

    if (normalLawanBackBtn) {
        normalLawanBackBtn.addEventListener("click", () => {
            if (normalLawanVideo) normalLawanVideo.pause();
            if (normalLawanOverlay) normalLawanOverlay.style.display = "none";
            const parentOverlay = document.getElementById(currentVideoParentScene + "-overlay");
            if (parentOverlay) parentOverlay.style.display = "flex";
        });
    }

    if (normalLawanHomeBtn) {
        normalLawanHomeBtn.addEventListener("click", () => {
            if (normalLawanVideo) normalLawanVideo.pause();
            if (normalLawanOverlay) normalLawanOverlay.style.display = "none";
            if (scene4Overlay) scene4Overlay.style.display = "flex";
        });
    }

    if (normalLawanSettingsBtn) {
        normalLawanSettingsBtn.addEventListener("click", () => {
            if (normalLawanVideo) normalLawanVideo.pause();
            previousScene = "normal-lawan";
            if (normalLawanOverlay) normalLawanOverlay.style.display = "none";
            if (settingsOverlay) settingsOverlay.style.display = "flex";
        });
    }

    // ==========================================
    // 5. NAVIGATION & SCENE ROUTING
    // ==========================================
    if (btnChapter) {
        btnChapter.addEventListener("click", () => {
            if (scene4Overlay) scene4Overlay.style.display = "none";
            if (scene6Overlay) scene6Overlay.style.display = "flex";
        });
    }

    if (settingsBtn) {
        settingsBtn.addEventListener("click", () => {
            previousScene = "scene4";
            if (scene4Overlay) scene4Overlay.style.display = "none";
            if (settingsOverlay) settingsOverlay.style.display = "flex";
        });
    }

    if (scene6SettingsBtn) {
        scene6SettingsBtn.addEventListener("click", () => {
            previousScene = "scene6";
            if (scene6Overlay) scene6Overlay.style.display = "none";
            if (settingsOverlay) settingsOverlay.style.display = "flex";
        });
    }

    if (scene6HomeBtn) {
        scene6HomeBtn.addEventListener("click", () => {
            if (scene6Overlay) scene6Overlay.style.display = "none";
            if (scene4Overlay) scene4Overlay.style.display = "flex";
        });
    }

    if (btnAsas) {
        btnAsas.addEventListener("click", () => {
            if (scene6Overlay) scene6Overlay.style.display = "none";
            if (scene7Overlay) scene7Overlay.style.display = "flex";
        });
    }

    if (scene7BackBtn) {
        scene7BackBtn.addEventListener("click", () => {
            if (scene7Overlay) scene7Overlay.style.display = "none";
            if (scene6Overlay) scene6Overlay.style.display = "flex";
        });
    }

    if (scene7HomeBtn) {
        scene7HomeBtn.addEventListener("click", () => {
            if (scene7Overlay) scene7Overlay.style.display = "none";
            if (scene4Overlay) scene4Overlay.style.display = "flex";
        });
    }

    if (scene7SettingsBtn) {
        scene7SettingsBtn.addEventListener("click", () => {
            previousScene = "scene7";
            if (scene7Overlay) scene7Overlay.style.display = "none";
            if (settingsOverlay) settingsOverlay.style.display = "flex";
        });
    }

    if (btnPenjagaan) {
        btnPenjagaan.addEventListener("click", () => {
            if (scene6Overlay) scene6Overlay.style.display = "none";
            if (scene8Overlay) scene8Overlay.style.display = "flex";
        });
    }

    if (scene8BackBtn) {
        scene8BackBtn.addEventListener("click", () => {
            if (scene8Overlay) scene8Overlay.style.display = "none";
            if (scene6Overlay) scene6Overlay.style.display = "flex";
        });
    }

    if (scene8HomeBtn) {
        scene8HomeBtn.addEventListener("click", () => {
            if (scene8Overlay) scene8Overlay.style.display = "none";
            if (scene4Overlay) scene4Overlay.style.display = "flex";
        });
    }

    if (scene8SettingsBtn) {
        scene8SettingsBtn.addEventListener("click", () => {
            previousScene = "scene8";
            if (scene8Overlay) scene8Overlay.style.display = "none";
            if (settingsOverlay) settingsOverlay.style.display = "flex";
        });
    }

    if (btnKesihatan) {
        btnKesihatan.addEventListener("click", () => {
            if (scene6Overlay) scene6Overlay.style.display = "none";
            if (scene9Overlay) scene9Overlay.style.display = "flex";
        });
    }

    if (scene9BackBtn) {
        scene9BackBtn.addEventListener("click", () => {
            if (scene9Overlay) scene9Overlay.style.display = "none";
            if (scene6Overlay) scene6Overlay.style.display = "flex";
        });
    }

    if (scene9HomeBtn) {
        scene9HomeBtn.addEventListener("click", () => {
            if (scene9Overlay) scene9Overlay.style.display = "none";
            if (scene4Overlay) scene4Overlay.style.display = "flex";
        });
    }

    if (scene9SettingsBtn) {
        scene9SettingsBtn.addEventListener("click", () => {
            previousScene = "scene9";
            if (scene9Overlay) scene9Overlay.style.display = "none";
            if (settingsOverlay) settingsOverlay.style.display = "flex";
        });
    }

    if (btnSetBm) {
        btnSetBm.addEventListener("click", () => {
            selectedLang = "ms";
            updateLocalizationUI();
        });
    }

    if (btnSetEn) {
        btnSetEn.addEventListener("click", () => {
            selectedLang = "en";
            updateLocalizationUI();
        });
    }

    if (btnQuiz) {
        btnQuiz.addEventListener("click", () => {
            if (scene4Overlay) scene4Overlay.style.display = "none";
            if (scene10Overlay) scene10Overlay.style.display = "flex";
        });
    }

    if (scene10SettingsBtn) {
        scene10SettingsBtn.addEventListener("click", () => {
            previousScene = "scene10";
            if (scene10Overlay) scene10Overlay.style.display = "none";
            if (settingsOverlay) settingsOverlay.style.display = "flex";
        });
    }

    if (scene10HomeBtn) {
        scene10HomeBtn.addEventListener("click", () => {
            if (scene10Overlay) scene10Overlay.style.display = "none";
            if (scene4Overlay) scene4Overlay.style.display = "flex";
        });
    }

    // BACK BUTTON FROM SETTINGS
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            if (settingsOverlay) settingsOverlay.style.display = "none";
            const targetScene = document.getElementById(previousScene + "-overlay");
            if (targetScene) targetScene.style.display = "flex";
            else if (previousScene === "normal-lawan" && normalLawanOverlay) normalLawanOverlay.style.display = "block";
            else if (scene4Overlay) scene4Overlay.style.display = "flex";
        });
    }

    if (homeBtn) {
        homeBtn.addEventListener("click", () => {
            if (settingsOverlay) settingsOverlay.style.display = "none";
            if (scene6Overlay) scene6Overlay.style.display = "none";
            if (scene7Overlay) scene7Overlay.style.display = "none";
            if (scene8Overlay) scene8Overlay.style.display = "none";
            if (scene9Overlay) scene9Overlay.style.display = "none";
            if (scene10Overlay) scene10Overlay.style.display = "none";
            if (scene11Overlay) scene11Overlay.style.display = "none";
            if (scene12Overlay) scene12Overlay.style.display = "none";
            if (normalLawanOverlay) normalLawanOverlay.style.display = "none";
            if (scene4Overlay) scene4Overlay.style.display = "flex";
        });
    }

    // ==========================================
    // 6. QUIZ DATA (FULL 8 QUESTIONS PER CATEGORY) & LOGIC
    // ==========================================
    const quizCategories = {
        asas: [
            {
                question: { ms: "1. Apakah yang berlaku semasa seseorang perempuan mengalami haid?", en: "1. What happens when a girl gets her period?" },
                explanation: { ms: "Semasa haid, lapisan rahim bersama darah dan tisu luruh serta keluar melalui faraj.", en: "During menstruation, the lining of the uterus breaks down and leaves the body through the vagina." },
                hint: { ms: "Fikirkan tentang cecair semula jadi yang keluar dari rahim setiap bulan.", en: "Think about the natural fluids leaving the uterus every month." },
                options: [
                    { text: { ms: "A) Darah dan tisu dari rahim keluar melalui faraj.", en: "A) Blood and tissue leave the body through the vagina." }, isCorrect: true },
                    { text: { ms: "B) Badan menghasilkan lebih banyak tenaga.", en: "B) The body produces extra energy." }, isCorrect: false },
                    { text: { ms: "C) Tulang tumbuh dengan cepat.", en: "C) Bones grow rapidly." }, isCorrect: false },
                    { text: { ms: "D) Hati memproses toksin keluar daripada badan.", en: "D) The liver processes toxins out of the body." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "2. Purata umur kebanyakan orang mendapat haid pertama mereka ialah sekitar umur berapa?", en: "2. Around what age do most people get their first period?" },
                explanation: { ms: "Purata umur kebanyakan orang mendapat haid pertama adalah sekitar 12 tahun.", en: "The average age for most people to get their first period is around 12 years old." },
                hint: { ms: "Ia berlaku pada awal umur akil baligh (sekitar umur sekolah rendah / awal menengah).", en: "It happens around early puberty (upper primary or early secondary school age)." },
                options: [
                    { text: { ms: "A) 6 tahun.", en: "A) 6 years old." }, isCorrect: false },
                    { text: { ms: "B) 8 tahun.", en: "B) 8 years old." }, isCorrect: false },
                    { text: { ms: "C) 12 tahun.", en: "C) 12 years old." }, isCorrect: true },
                    { text: { ms: "D) 18 tahun.", en: "D) 18 years old." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "3. Berapa lamakah kitaran haid yang biasa?", en: "3. How long is a typical menstrual cycle?" },
                explanation: { ms: "Kitaran haid secara purata berlangsung antara 21 hingga 35 hari.", en: "A typical menstrual cycle lasts between 21 to 35 days." },
                hint: { ms: "Kira-kira sebulan sekali.", en: "Approximately once a month." },
                options: [
                    { text: { ms: "A) 7 hingga 10 hari.", en: "A) 7 to 10 days." }, isCorrect: false },
                    { text: { ms: "B) 21 hingga 35 hari.", en: "B) 21 to 35 days." }, isCorrect: true },
                    { text: { ms: "C) 40 hingga 50 hari.", en: "C) 40 to 50 days." }, isCorrect: false },
                    { text: { ms: "D) 60 hari.", en: "D) 60 days." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "4. Apakah fungsi utama ovari?", en: "4. What is the main function of the ovaries?" },
                explanation: { ms: "Ovari menyimpan dan melepaskan telur (ovum) serta menghasilkan hormon.", en: "Ovaries store and release eggs (ova) and produce hormones." },
                hint: { ms: "Organ ini melepaskan telur setiap bulan.", en: "This organ releases an egg every month." },
                options: [
                    { text: { ms: "A) Menyimpan dan melepaskan telur.", en: "A) Store and release eggs." }, isCorrect: true },
                    { text: { ms: "B) Memproses makanan.", en: "B) Process food." }, isCorrect: false },
                    { text: { ms: "C) Menapis darah.", en: "C) Filter blood." }, isCorrect: false },
                    { text: { ms: "D) Memompa darah ke seluruh badan.", en: "D) Pump blood to the body." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "5. Berapa hari lamanya pendarahan haid biasanya berlangsung?", en: "5. How many days does menstrual bleeding typically last?" },
                explanation: { ms: "Pendarahan haid yang normal selalunya berlanjutan selama 3 hingga 7 hari.", en: "Normal menstrual bleeding usually lasts for 3 to 7 days." },
                hint: { ms: "Biasanya kurang daripada seminggu.", en: "Usually less than a week." },
                options: [
                    { text: { ms: "A) 1 hingga 2 hari.", en: "A) 1 to 2 days." }, isCorrect: false },
                    { text: { ms: "B) 3 hingga 7 hari.", en: "B) 3 to 7 days." }, isCorrect: true },
                    { text: { ms: "C) 10 hingga 14 hari.", en: "C) 10 to 14 days." }, isCorrect: false },
                    { text: { ms: "D) 20 hari.", en: "D) 20 days." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "6. Hormon utama yang mengawal kitaran haid ialah:", en: "6. The primary hormones regulating the menstrual cycle are:" },
                explanation: { ms: "Estrogen dan progesteron adalah dua hormon utama yang mengawal kitaran haid.", en: "Estrogen and progesterone are the two main hormones regulating the cycle." },
                hint: { ms: "Dua hormon wanita penting.", en: "Two important female hormones." },
                options: [
                    { text: { ms: "A) Estrogen dan Progesteron.", en: "A) Estrogen and Progesterone." }, isCorrect: true },
                    { text: { ms: "B) Insulin dan Glukagon.", en: "B) Insulin and Glucagon." }, isCorrect: false },
                    { text: { ms: "C) Adrenalina dan Kortisol.", en: "C) Adrenaline and Cortisol." }, isCorrect: false },
                    { text: { ms: "D) Tiroksin dan Melatonin.", en: "D) Thyroxine and Melatonin." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "7. Apakah maksud proses ovulasi?", en: "7. What does the process of ovulation mean?" },
                explanation: { ms: "Ovulasi ialah proses pelepasan telur matang dari ovari.", en: "Ovulation is the release of a mature egg from the ovary." },
                hint: { ms: "Pelepasan telur matang.", en: "Release of a mature egg." },
                options: [
                    { text: { ms: "A) Pelepasan telur matang dari ovari.", en: "A) Release of a mature egg from the ovary." }, isCorrect: true },
                    { text: { ms: "B) Peluruhan lapisan rahim.", en: "B) Shedding of the uterine lining." }, isCorrect: false },
                    { text: { ms: "C) Pembentukan sel darah baharu.", en: "C) Formation of new blood cells." }, isCorrect: false },
                    { text: { ms: "D) Pembersihan saluran kencing.", en: "D) Clearing of the urinary tract." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "8. Adakah haid merupakan tanda sistem pembiakan yang sihat?", en: "8. Is menstruation a sign of a healthy reproductive system?" },
                explanation: { ms: "Ya, mengalami haid secara teratur menunjukkan sistem pembiakan berfungsi dengan sihat.", en: "Yes, regular periods indicate a healthy functioning reproductive system." },
                hint: { ms: "Ia adalah proses fizikal semula jadi.", en: "It is a natural physical process." },
                options: [
                    { text: { ms: "A) Ya, ia proses semula jadi dan sihat.", en: "A) Yes, it is a natural and healthy process." }, isCorrect: true },
                    { text: { ms: "B) Tidak, ia adalah tanda penyakit.", en: "B) No, it is a sign of illness." }, isCorrect: false },
                    { text: { ms: "C) Hanya jika berlaku setiap hari.", en: "C) Only if it happens daily." }, isCorrect: false },
                    { text: { ms: "D) Tidak pasti.", en: "D) Not sure." }, isCorrect: false }
                ]
            }
        ],
        penjagaan: [
            {
                question: { ms: "1. Berapa kerapkah anda perlu menukar pad jika aliran darah haid anda adalah banyak?", en: "1. How often should you change your pad if your period flow is heavy?" },
                explanation: { ms: "Pad harus ditukar sekurang-kurangnya setiap 3 hingga 4 jam untuk menjaga kebersihan.", en: "Pads should be changed every 3 to 4 hours to maintain proper hygiene." },
                hint: { ms: "Beberapa kali sehari (setiap 3-4 jam).", en: "Several times a day (every 3-4 hours)." },
                options: [
                    { text: { ms: "A) Setiap 12 jam.", en: "A) Every 12 hours." }, isCorrect: false },
                    { text: { ms: "B) Setiap 8 hingga 10 jam.", en: "B) Every 8 to 10 hours." }, isCorrect: false },
                    { text: { ms: "C) Setiap 3 hingga 4 jam.", en: "C) Every 3 to 4 hours." }, isCorrect: true },
                    { text: { ms: "D) Hanya sekali sehari.", en: "D) Only once a day." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "2. Bagaimanakah cara terbaik membuang tuala wanita terpakai?", en: "2. What is the best way to dispose of a used sanitary pad?" },
                explanation: { ms: "Bungkus pad terpakai dengan kertas/plastik dan buang ke dalam tong sampah.", en: "Wrap the used pad in paper/plastic and throw it into a trash bin." },
                hint: { ms: "Jangan sekali-kali pam ke dalam tandas.", en: "Never flush it down the toilet." },
                options: [
                    { text: { ms: "A) Pam ke dalam mangkuk tandas.", en: "A) Flush it down the toilet." }, isCorrect: false },
                    { text: { ms: "B) Bungkus rapi dan buang ke dalam tong sampah.", en: "B) Wrap neatly and throw into a trash bin." }, isCorrect: true },
                    { text: { ms: "C) Tinggalkan di atas lantai tandas.", en: "C) Leave it on the bathroom floor." }, isCorrect: false },
                    { text: { ms: "D) Tanam di dalam tanah.", en: "D) Bury it in the soil." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "3. Mengapakah mandi semasa haid itu penting?", en: "3. Why is showering during your period important?" },
                explanation: { ms: "Mandi membantu menjaga kebersihan diri, mengelakkan bau serta jangkitan bakteria.", en: "Showering maintains personal hygiene, prevents odor and bacterial infection." },
                hint: { ms: "Kekal bersih dan segar.", en: "Keep clean and fresh." },
                options: [
                    { text: { ms: "A) Membantu menjaga kebersihan dan elak jangkitan.", en: "A) Helps maintain hygiene and prevent infections." }, isCorrect: true },
                    { text: { ms: "B) Untuk menghentikan aliran haid.", en: "B) To stop the period flow." }, isCorrect: false },
                    { text: { ms: "C) Ia tidak penting langsung.", en: "C) It is not important at all." }, isCorrect: false },
                    { text: { ms: "D) Supaya tidak perlu menukar pad.", en: "D) So you don't need to change pads." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "4. Apakah cecair terbaik untuk membersihkan kawasan kewanitaan?", en: "4. What is the best liquid to clean the intimate area?" },
                explanation: { ms: "Air bersih sudah mencukupi untuk membersihkan bahagian luar kawasan intim.", en: "Clean water is sufficient for washing the external intimate area." },
                hint: { ms: "Gunakan cecair semula jadi tanpa bahan kimia keras.", en: "Use a natural liquid without harsh chemicals." },
                options: [
                    { text: { ms: "A) Sabun wangi berkimia tinggi.", en: "A) Highly fragranced chemical soap." }, isCorrect: false },
                    { text: { ms: "B) Air bersih.", en: "B) Clean water." }, isCorrect: true },
                    { text: { ms: "C) Alkohol pembersih.", en: "C) Rubbing alcohol." }, isCorrect: false },
                    { text: { ms: "D) Peluntur berasaskan klorin.", en: "D) Chlorine-based bleach." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "5. Apakah amalan yang membantu melegakan kesakitan senggugut?", en: "5. What practice helps relieve menstrual cramps?" },
                explanation: { ms: "Meletakkan tuaman hangat di bahagian bawah perut membantu melegakan otot rahim.", en: "Applying a warm compress on the lower abdomen helps relax uterine muscles." },
                hint: { ms: "Menggunakan haba atau suam.", en: "Applying warmth." },
                options: [
                    { text: { ms: "A) Tuaman hangat pada bahagian perut.", en: "A) Warm compress on the abdomen." }, isCorrect: true },
                    { text: { ms: "B) Minum air ais yang terlalu sejuk.", en: "B) Drinking extremely cold ice water." }, isCorrect: false },
                    { text: { ms: "C) Berlari maraton.", en: "C) Running a marathon." }, isCorrect: false },
                    { text: { ms: "D) Menahan diri daripada makan.", en: "D) Refraining from eating." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "6. Arah basuhan yang betul semasa membersihkan bahagian intim ialah:", en: "6. The correct wiping/washing direction for the intimate area is:" },
                explanation: { ms: "Basuh dari depan ke belakang untuk mengelakkan bakteria dari dubur masuk ke faraj.", en: "Wipe from front to back to prevent bacteria from the anus entering the vagina." },
                hint: { ms: "Daripada bahagian depan menuju ke belakang.", en: "From the front towards the back." },
                options: [
                    { text: { ms: "A) Dari belakang ke depan.", en: "A) From back to front." }, isCorrect: false },
                    { text: { ms: "B) Dari depan ke belakang.", en: "B) From front to back." }, isCorrect: true },
                    { text: { ms: "C) Dari tepi ke tepi.", en: "C) From side to side." }, isCorrect: false },
                    { text: { ms: "D) Bebas ke mana-mana arah.", en: "D) Any random direction." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "7. Jenis seluar dalam yang manakah paling sesuai dipakai semasa haid?", en: "7. Which type of underwear is most suitable during periods?" },
                explanation: { ms: "Seluar dalam kain kapas menyerap peluh dan memberi peredaran udara yang baik.", en: "Cotton underwear absorbs sweat and provides good breathability." },
                hint: { ms: "Bahan semula jadi yang serap peluh.", en: "Natural sweat-absorbing material." },
                options: [
                    { text: { ms: "A) Kain kapas (cotton) yang serap peluh.", en: "A) Breathable cotton underwear." }, isCorrect: true },
                    { text: { ms: "B) Kain sintetik yang terlalu ketat.", en: "B) Tight synthetic fabric." }, isCorrect: false },
                    { text: { ms: "C) Seluar dalam plastik.", en: "C) Plastic underwear." }, isCorrect: false },
                    { text: { ms: "D) Tidak perlu pakai seluar dalam.", en: "D) No underwear needed." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "8. Mengapa penting untuk membasuh tangan sebelum dan selepas menukar pad?", en: "8. Why is it important to wash hands before and after changing pads?" },
                explanation: { ms: "Membasuh tangan mengelakkan pemindahan bakteria jahat ke kawasan intim dan persekitaran.", en: "Washing hands prevents transferring harmful bacteria to the intimate area and surroundings." },
                hint: { ms: "Untuk mengelakkan kuman dan jangkitan.", en: "To prevent germs and infections." },
                options: [
                    { text: { ms: "A) Mencegah penyebaran kuman dan kotoran.", en: "A) Prevent the spread of germs and dirt." }, isCorrect: true },
                    { text: { ms: "B) Supaya tangan kelihatan wangi sahaja.", en: "B) Just to make hands smell nice." }, isCorrect: false },
                    { text: { ms: "C) Tidak penting, basuh selepas sahaja.", en: "C) Not important, wash after only." }, isCorrect: false },
                    { text: { ms: "D) Hanya syarat formaliti.", en: "D) Just a formality." }, isCorrect: false }
                ]
            }
        ],
        kesihatan: [
            {
                question: { ms: "1. Apakah yang membezakan PMDD daripada PMS?", en: "1. What differentiates PMDD from PMS?" },
                explanation: { ms: "PMDD adalah bentuk PMS yang lebih teruk yang menyebabkan emosi terganggu secara berlebihan.", en: "PMDD is a severe form of PMS causing severe mood changes that impact daily life." },
                hint: { ms: "PMDD memberi kesan yang lebih teruk kepada emosi dan aktiviti harian.", en: "PMDD causes far more severe mood impacts on daily activities." },
                options: [
                    { text: { ms: "A) PMDD hanya menyebabkan sakit kepala.", en: "A) PMDD only causes headaches." }, isCorrect: false },
                    { text: { ms: "B) PMDD menyebabkan perubahan mood yang lebih melampau dan boleh menjejaskan kehidupan harian.", en: "B) PMDD causes more extreme mood changes that can disrupt daily life." }, isCorrect: true },
                    { text: { ms: "C) PMDD hanya berlaku selepas haid.", en: "C) PMDD only occurs after menstruation." }, isCorrect: false },
                    { text: { ms: "D) PMDD tidak berkaitan dengan perubahan hormon.", en: "D) PMDD is not related to hormonal changes." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "2. Adakah mitos bahawa seseorang tidak boleh bersukan semasa haid?", en: "2. Is it a myth that one should not exercise during periods?" },
                explanation: { ms: "Ya! Senaman ringan sebenarnya membantu melegakan kesakitan senggugut.", en: "Yes! Light exercise actually helps relieve menstrual cramps." },
                hint: { ms: "Senaman ringan adalah bagus.", en: "Light exercise is good." },
                options: [
                    { text: { ms: "A) Ya, ia mitos. Senaman ringan adalah digalakkan.", en: "A) Yes, it is a myth. Light exercise is encouraged." }, isCorrect: true },
                    { text: { ms: "B) Tidak, bersukan berbahaya semasa haid.", en: "B) No, playing sports is dangerous during periods." }, isCorrect: false },
                    { text: { ms: "C) Hanya sukan renang dibenarkan.", en: "C) Only swimming is allowed." }, isCorrect: false },
                    { text: { ms: "D) Bersukan membuatkan haid berhenti.", en: "D) Exercise stops menstrual flow." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "3. Apakah simptom emosi yang biasa dialami semasa PMS?", en: "3. What is a common emotional symptom during PMS?" },
                explanation: { ms: "Perubahan mood (mood swings) dan rasa cepat marah sering berlaku disebabkan perubahan hormon.", en: "Mood swings and irritability often happen due to hormonal changes." },
                hint: { ms: "Emosi berubah-ubah.", en: "Fluctuating emotions." },
                options: [
                    { text: { ms: "A) Perubahan mood dan emosi sensitif.", en: "A) Mood swings and emotional sensitivity." }, isCorrect: true },
                    { text: { ms: "B) Rasa terlalu gembira sepanjang masa.", en: "B) Feeling overjoyed all the time." }, isCorrect: false },
                    { text: { ms: "C) Hilang ingatan ingatan jangka panjang.", en: "C) Long-term memory loss." }, isCorrect: false },
                    { text: { ms: "D) Tiada sebarang kesan emosi.", en: "D) No emotional impact at all." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "4. Bolehkah memakan makanan sihat membantu mengurangkan rasa tidak selesa semasa haid?", en: "4. Can eating healthy food help reduce discomfort during periods?" },
                explanation: { ms: "Ya, diet seimbang kaya dengan zat besi dan magnesium membantu badan kekal bertenaga.", en: "Yes, a balanced diet rich in iron and magnesium helps keep the body energized." },
                hint: { ms: "Makanan berkhasiat membantu badan.", en: "Nutritious food helps the body." },
                options: [
                    { text: { ms: "A) Ya, nutrisi seimbang mengurangkan simptom tidak selesa.", en: "A) Yes, balanced nutrition reduces uncomfortable symptoms." }, isCorrect: true },
                    { text: { ms: "B) Tidak, makanan tiada kaitan langsung.", en: "B) No, food has no connection." }, isCorrect: false },
                    { text: { ms: "C) Hanya gula berlebihan yang membantu.", en: "C) Only excess sugar helps." }, isCorrect: false },
                    { text: { ms: "D) Makan junk food paling digalakkan.", en: "D) Eating junk food is recommended." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "5. Mengapakah anemia boleh berlaku disebabkan haid yang terlalu berat?", en: "5. Why can anemia occur due to excessively heavy periods?" },
                explanation: { ms: "Kehilangan darah yang banyak menyebabkan paras zat besi dan sel darah merah menurun.", en: "Losing a lot of blood causes a drop in iron levels and red blood cells." },
                hint: { ms: "Kekurangan zat besi dalam darah.", en: "Lack of iron in the blood." },
                options: [
                    { text: { ms: "A) Kehilangan banyak darah mengurangkan zat besi.", en: "A) Heavy blood loss reduces body iron levels." }, isCorrect: true },
                    { text: { ms: "B) Kerana terlalu banyak tidur.", en: "B) Because of sleeping too much." }, isCorrect: false },
                    { text: { ms: "C) Anemia tidak berkaitan dengan darah.", en: "C) Anemia is not related to blood." }, isCorrect: false },
                    { text: { ms: "D) Akibat minum air terlalu banyak.", en: "D) Due to drinking too much water." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "6. Apakah tindakan sewajarnya jika anda mengalami sakit senggugut yang teruk sehingga pengsan?", en: "6. What is the appropriate action if you experience period pain so severe that you faint?" },
                explanation: { ms: "Kesakitan ekstrem sehingga pengsan adalah tidak normal dan memerlukan pemeriksaan doktor.", en: "Extreme pain causing fainting is abnormal and requires a doctor's examination." },
                hint: { ms: "Dapatkan bantuan pakar perubatan.", en: "Seek medical professional help." },
                options: [
                    { text: { ms: "A) Jumpa doktor untuk pemeriksaan kesihatan.", en: "A) See a doctor for a health examination." }, isCorrect: true },
                    { text: { ms: "B) Biarkan sahaja kerana itu perkara biasa.", en: "B) Ignore it as it is completely normal." }, isCorrect: false },
                    { text: { ms: "C) Hanya makan gula-gula.", en: "C) Just eat candy." }, isCorrect: false },
                    { text: { ms: "D) Berhenti mandi selama seminggu.", en: "D) Stop showering for a week." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "7. Adakah meminum air yang cukup penting semasa haid?", en: "7. Is drinking enough water important during menstruation?" },
                explanation: { ms: "Minum air yang cukup mengelakkan kembung perut dan kekejangan otot.", en: "Drinking sufficient water prevents bloating and muscle cramps." },
                hint: { ms: "Hidrasi badan amat penting.", en: "Body hydration is very important." },
                options: [
                    { text: { ms: "A) Ya, air membantu mengurangkan kembung dan senggugut.", en: "A) Yes, water helps reduce bloating and cramps." }, isCorrect: true },
                    { text: { ms: "B) Tidak, air menambah pendarahan.", en: "B) No, water increases bleeding." }, isCorrect: false },
                    { text: { ms: "C) Hanya perlu minum apabila dahaga sangat.", en: "C) Only drink when extremely thirsty." }, isCorrect: false },
                    { text: { ms: "D) Minuman bersoda lebih baik.", en: "D) Carbonated drinks are better." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "8. Apakah matlamat utama meningkatkan kesedaran tentang kesihatan haid?", en: "8. What is the main goal of raising awareness about menstrual health?" },
                explanation: { ms: "Tujuannya adalah membendung stigma serta memastikan kebersihan dan kesihatan terjaga.", en: "The goal is to eliminate stigma and ensure proper hygiene and health care." },
                hint: { ms: "Menghapuskan rasa malu dan stigma jahil.", en: "Eliminating shame and ignorant stigma." },
                options: [
                    { text: { ms: "A) Menghapuskan stigma dan memupuk amalan sihat.", en: "A) Eliminate stigma and promote healthy practices." }, isCorrect: true },
                    { text: { ms: "B) Menyembunyikan topik ini daripada masyarakat.", en: "B) Hide this topic from society." }, isCorrect: false },
                    { text: { ms: "C) Memaksa semua orang berhenti sekolah.", en: "C) Force everyone to drop out of school." }, isCorrect: false },
                    { text: { ms: "D) Mengurangkan jualan pad di pasaran.", en: "D) Reduce pad sales in the market." }, isCorrect: false }
                ]
            }
        ]
    };

    function updateScoreDisplay() {
        if (quizScoreElem) quizScoreElem.textContent = currentScore;
    }

    function showQuizCompletion() {
        if (scene11Overlay) scene11Overlay.style.display = "none";
        if (scene12Overlay) scene12Overlay.style.display = "flex";

        // Dapatkan jumlah soalan kategori aktif
        const currentCategoryQuestions = quizCategories[activeQuizCategory] || quizCategories["asas"];
        const totalQuestions = currentCategoryQuestions.length; // 8 soalan

        if (finalScoreVal) finalScoreVal.textContent = currentScore;
        if (totalScoreVal) totalScoreVal.textContent = ` / ${totalQuestions}`;

        const isEn = selectedLang === "en";
        if (currentScore <= 0) {
            if (resultCongrats) resultCongrats.textContent = isEn ? "Oh no!" : "Ohh tidak!";
            if (resultMotto) resultMotto.textContent = isEn ? "Keep up the effort" : "Teruskan usaha!";
        } else {
            if (resultCongrats) resultCongrats.textContent = isEn ? "Congratulations!" : "Tahniah!";
            if (resultMotto) resultMotto.textContent = isEn ? "Effort is the key to success!" : "Usaha tangga kejayaan!";
        }
    }

    function loadQuestion() {
        if (!quizQuestionText || !optA || !optB || !optC || !optD) return;
        const currentCategoryQuestions = quizCategories[activeQuizCategory] || quizCategories["asas"];

        if (currentQuestionIndex >= currentCategoryQuestions.length) {
            showQuizCompletion();
            return;
        }

        const q = currentCategoryQuestions[currentQuestionIndex];
        const lang = selectedLang || "ms";

        quizQuestionText.textContent = q.question[lang];
        optA.textContent = q.options[0].text[lang];
        optB.textContent = q.options[1].text[lang];
        optC.textContent = q.options[2].text[lang];
        optD.textContent = q.options[3].text[lang];
    }

    function showFeedbackModal(isCorrect, explanationObj) {
        const isEn = selectedLang === "en";
        const lang = selectedLang || "ms";

        if (isCorrect) {
            modalTitle.textContent = isEn ? "Correct!" : "Betul!";
            modalTitle.style.color = "#28a745";
        } else {
            modalTitle.textContent = isEn ? "Incorrect!" : "Salah!";
            modalTitle.style.color = "#dc3545";
        }

        if (explanationObj && explanationObj[lang]) {
            modalMessage.textContent = explanationObj[lang];
        } else {
            modalMessage.textContent = isCorrect 
                ? (isEn ? "Great job, your answer is correct!" : "Tahniah, jawapan anda tepat!") 
                : (isEn ? "Keep going and try your best on the next question." : "Teruskan usaha untuk soalan seterusnya.");
        }

        if (modalNextBtn) modalNextBtn.textContent = isEn ? "Next" : "Seterusnya";
        if (quizModal) quizModal.classList.remove("hidden");
    }

    if (modalNextBtn) {
        modalNextBtn.addEventListener("click", () => {
            if (quizModal) quizModal.classList.add("hidden");
            currentQuestionIndex++;
            loadQuestion();
        });
    }

    function showHintModal() {
        const currentCategoryQuestions = quizCategories[activeQuizCategory] || quizCategories["asas"];
        const currentQ = currentCategoryQuestions[currentQuestionIndex];
        const isEn = selectedLang === "en";
        const lang = selectedLang || "ms";

        if (hintModalTitle) hintModalTitle.textContent = isEn ? "💡 Hint" : "💡 Petunjuk";
        if (currentQ && currentQ.hint && currentQ.hint[lang]) {
            hintModalMessage.textContent = currentQ.hint[lang];
        } else {
            hintModalMessage.textContent = isEn ? "No hint available for this question." : "Tiada petunjuk disediakan untuk soalan ini.";
        }

        if (hintModalCloseBtn) hintModalCloseBtn.textContent = isEn ? "Close" : "Tutup";
        if (hintModal) hintModal.classList.remove("hidden");
    }

    if (hintModalCloseBtn) {
        hintModalCloseBtn.addEventListener("click", () => {
            if (hintModal) hintModal.classList.add("hidden");
        });
    }

    if (scene11HintBtn) scene11HintBtn.addEventListener("click", showHintModal);

    if (scene11QuitBtn) {
        scene11QuitBtn.addEventListener("click", () => {
            if (scene11Overlay) scene11Overlay.style.display = "none";
            if (scene10Overlay) scene10Overlay.style.display = "flex";
        });
    }

    [optA, optB, optC, optD].forEach((btn, optionIndex) => {
        if (!btn) return;
        btn.addEventListener("click", () => {
            const currentCategoryQuestions = quizCategories[activeQuizCategory] || quizCategories["asas"];
            const currentQ = currentCategoryQuestions[currentQuestionIndex];
            const isCorrect = currentQ.options[optionIndex].isCorrect;

            if (isCorrect) currentScore += 1;
            else currentScore -= 1;

            updateScoreDisplay();
            showFeedbackModal(isCorrect, currentQ.explanation);
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
    }

    if (btnQuizAsas) btnQuizAsas.addEventListener("click", () => startCategoryQuiz("asas"));
    if (btnQuizPenjagaan) btnQuizPenjagaan.addEventListener("click", () => startCategoryQuiz("penjagaan"));
    if (btnQuizKesihatan) btnQuizKesihatan.addEventListener("click", () => startCategoryQuiz("kesihatan"));

    if (scene11HomeBtn) {
        scene11HomeBtn.addEventListener("click", () => {
            if (scene11Overlay) scene11Overlay.style.display = "none";
            if (scene4Overlay) scene4Overlay.style.display = "flex";
        });
    }

    if (scene11SettingsBtn) {
        scene11SettingsBtn.addEventListener("click", () => {
            previousScene = "scene11";
            if (scene11Overlay) scene11Overlay.style.display = "none";
            if (settingsOverlay) settingsOverlay.style.display = "flex";
        });
    }

    if (scene12HomeBtn) {
        scene12HomeBtn.addEventListener("click", () => {
            if (scene12Overlay) scene12Overlay.style.display = "none";
            if (scene4Overlay) scene4Overlay.style.display = "flex";
        });
    }

    if (scene12BackBtn) {
        scene12BackBtn.addEventListener("click", () => {
            if (scene12Overlay) scene12Overlay.style.display = "none";
            if (scene10Overlay) scene10Overlay.style.display = "flex";
        });
    }

    if (scene12SettingsBtn) {
        scene12SettingsBtn.addEventListener("click", () => {
            previousScene = "scene12";
            if (scene12Overlay) scene12Overlay.style.display = "none";
            if (settingsOverlay) settingsOverlay.style.display = "flex";
        });
    }

    // ==========================================
    // 7. LOCALIZATION
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

            if (chapterTitle) chapterTitle.textContent = "Menstrual Care Chapter";
            if (labelAsas) labelAsas.textContent = "Basic";
            if (labelPenjagaan) labelPenjagaan.textContent = "Care";
            if (labelKesihatan) labelKesihatan.innerHTML = "Health &amp;<br>Awareness";

            if (asasTitle) asasTitle.textContent = "Basic";
            if (labelApaHaid) labelApaHaid.textContent = "What is period?";
            if (labelMengapaHaid) labelMengapaHaid.textContent = "Why do periods happen?";
            if (labelBerapaLama) labelBerapaLama.textContent = "How long is a normal period cycle?";
            if (labelNormalLawan) labelNormalLawan.textContent = "Normal vs. not normal";

            if (penjagaanTitle) penjagaanTitle.textContent = "Care";
            if (labelPenjagaanAsas) labelPenjagaanAsas.textContent = "Basic period care";
            if (labelPenjagaanHaid) labelPenjagaanHaid.textContent = "Period care at school";
            if (labelJenis) labelJenis.textContent = "Types of sanitary pads";
            if (labelCara) labelCara.textContent = "How to reduce period pain";

            if (kesihatanTitle) kesihatanTitle.innerHTML = "Health &amp;<br>Awareness";
            if (labelHaidMental) labelHaidMental.textContent = "Menstruation & mental health";
            if (labelMitosFakta) labelMitosFakta.textContent = "Myths & facts";
            if (labelKesilapanKebersihan) labelKesilapanKebersihan.textContent = "Hygiene mistakes during menstruation";
            if (labelSekeliling) labelSekeliling.textContent = "Period care for those around you";

            if (quizTitle) quizTitle.textContent = "Menstrual Care Quiz";
            if (labelQuizAsas) labelQuizAsas.textContent = "Basic Quiz";
            if (labelQuizPenjagaan) labelQuizPenjagaan.textContent = "Care Quiz";
            if (labelQuizKesihatan) labelQuizKesihatan.innerHTML = "Health &amp;<br>Awareness Quiz";
            if (labelScore) labelScore.textContent = "Score";

            if (currentScore <= 0) {
                if (resultCongrats) resultCongrats.textContent = "Oh no!";
                if (resultMotto) resultMotto.textContent = "Keep up the effort";
            } else {
                if (resultCongrats) resultCongrats.textContent = "Congratulations!";
                if (resultMotto) resultMotto.textContent = "Effort is the key to success!";
            }
            if (resultScoreLabel) resultScoreLabel.textContent = "Your score:";

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

            if (chapterTitle) chapterTitle.textContent = "Bab Penjagaan Haid";
            if (labelAsas) labelAsas.textContent = "Asas";
            if (labelPenjagaan) labelPenjagaan.textContent = "Penjagaan";
            if (labelKesihatan) labelKesihatan.innerHTML = "Kesihatan &amp;<br>Kesedaran";

            if (asasTitle) asasTitle.textContent = "Asas";
            if (labelApaHaid) labelApaHaid.textContent = "Apakah itu haid?";
            if (labelMengapaHaid) labelMengapaHaid.textContent = "Mengapa haid berlaku?";
            if (labelBerapaLama) labelBerapaLama.textContent = "Berapa lamakah kitaran haid?";
            if (labelNormalLawan) labelNormalLawan.textContent = "Normal lawan tidak normal";

            if (penjagaanTitle) penjagaanTitle.textContent = "Penjagaan";
            if (labelPenjagaanAsas) labelPenjagaanAsas.textContent = "Penjagaan asas semasa haid";
            if (labelPenjagaanHaid) labelPenjagaanHaid.textContent = "Penjagaan haid di sekolah";
            if (labelJenis) labelJenis.textContent = "Jenis-jenis tuala wanita";
            if (labelCara) labelCara.textContent = "Cara menggurangkan sakit senggugut";

            if (kesihatanTitle) kesihatanTitle.innerHTML = "Kesihatan &amp;<br>Kesedaran";
            if (labelHaidMental) labelHaidMental.textContent = "Haid & kesihatan mental";
            if (labelMitosFakta) labelMitosFakta.textContent = "Mitos & fakta";
            if (labelKesilapanKebersihan) labelKesilapanKebersihan.textContent = "Kesilapan kebersihan semasa haid";
            if (labelSekeliling) labelSekeliling.textContent = "Penjagaan haid kepada orang sekeliling";

            if (quizTitle) quizTitle.textContent = "Kuiz Penjagaan Haid";
            if (labelQuizAsas) labelQuizAsas.textContent = "Kuiz Asas";
            if (labelQuizPenjagaan) labelQuizPenjagaan.textContent = "Kuiz Penjagaan";
            if (labelQuizKesihatan) labelQuizKesihatan.innerHTML = "Kuiz Kesihatan &amp;<br>Kesedaran";
            if (labelScore) labelScore.textContent = "Skor";

            if (currentScore <= 0) {
                if (resultCongrats) resultCongrats.textContent = "Ohh tidak!";
                if (resultMotto) resultMotto.textContent = "Teruskan usaha!";
            } else {
                if (resultCongrats) resultCongrats.textContent = "Tahniah!";
                if (resultMotto) resultMotto.textContent = "Usaha tangga kejayaan!";
            }
            if (resultScoreLabel) resultScoreLabel.textContent = "Skor anda:";
        }

        if (scene11Overlay && scene11Overlay.style.display === "flex") {
            loadQuestion();
        }
    }
});
