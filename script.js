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

    // Scene 6 DOM
    const chapterTitle = document.getElementById("chapter-title");
    const labelAsas = document.getElementById("label-asas");
    const labelPenjagaan = document.getElementById("label-penjagaan");
    const labelKesihatan = document.getElementById("label-kesihatan");
    const scene6HomeBtn = document.getElementById("scene6-home-btn");
    const scene6SettingsBtn = document.getElementById("scene6-settings-btn");

    // Scene 7 DOM
    const btnAsas = document.getElementById("btn-asas");
    const scene7HomeBtn = document.getElementById("scene7-home-btn");
    const scene7BackBtn = document.getElementById("scene7-back-btn");
    const scene7SettingsBtn = document.getElementById("scene7-settings-btn");
    const asasTitle = document.getElementById("asas-title");
    const labelApaHaid = document.getElementById("label-apa-haid");
    const labelMengapaHaid = document.getElementById("label-mengapa-haid");
    const labelBerapaLama = document.getElementById("label-berapa-lama");
    const labelNormalLawan = document.getElementById("label-normal-lawan");

    // Scene 8 DOM
    const btnPenjagaan = document.getElementById("btn-penjagaan");
    const scene8HomeBtn = document.getElementById("scene8-home-btn");
    const scene8BackBtn = document.getElementById("scene8-back-btn");
    const scene8SettingsBtn = document.getElementById("scene8-settings-btn");
    const penjagaanTitle = document.getElementById("penjagaan-title");
    const labelPenjagaanAsas = document.getElementById("label-penjagaan-asas");
    const labelPenjagaanHaid = document.getElementById("label-penjagaan-haid");
    const labelJenis = document.getElementById("label-jenis");
    const labelCara = document.getElementById("label-cara");

    // Scene 9 DOM
    const btnKesihatan = document.getElementById("btn-kesihatan");
    const scene9HomeBtn = document.getElementById("scene9-home-btn");
    const scene9BackBtn = document.getElementById("scene9-back-btn");
    const scene9SettingsBtn = document.getElementById("scene9-settings-btn");
    const kesihatanTitle = document.getElementById("kesihatan-title");
    const labelHaidMental = document.getElementById("label-haid-mental");
    const labelMitosFakta = document.getElementById("label-mitos-fakta");
    const labelKesilapanKebersihan = document.getElementById("label-kesilapan-kebersihan");
    const labelSekeliling = document.getElementById("label-sekeliling");

    // Settings Audio & Text
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

    // Quiz DOM
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
    const scene11SettingsBtn = document.getElementById("scene11-settings-btn");
    const scene11QuitBtn = document.getElementById("scene11-quit-btn");
    const scene11HintBtn = document.getElementById("scene11-hint-btn");

    const finalScoreVal = document.getElementById("final-score-val");
    const resultCongrats = document.getElementById("result-congrats");
    const resultMotto = document.getElementById("result-motto");
    const resultScoreLabel = document.getElementById("result-score-label");
    const scene12HomeBtn = document.getElementById("scene12-home-btn");
    const scene12BackBtn = document.getElementById("scene12-back-btn");
    const scene12SettingsBtn = document.getElementById("scene12-settings-btn");

    // Pop-up Modals DOM
    const hintModal = document.getElementById("hint-modal");
    const hintModalClose = document.getElementById("hint-modal-close");
    const hintModalText = document.getElementById("hint-modal-text");
    const modalOkBtn = document.getElementById("modal-ok-btn");

    const quitModal = document.getElementById("quit-modal");
    const quitModalClose = document.getElementById("quit-modal-close");
    const quitConfirmBtn = document.getElementById("quit-confirm-btn");
    const quitCancelBtn = document.getElementById("quit-cancel-btn");

    // ==========================================
    // 2. STATE MANAGEMENT & BGM LOGIC
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
    // FULLSCREEN CONTROL
    // ==========================================
    async function toggleFullscreen() {
        try {
            if (!document.fullscreenElement && !document.webkitFullscreenElement) {
                const elem = document.documentElement;
                if (elem.requestFullscreen) await elem.requestFullscreen();
                else if (elem.webkitRequestFullscreen) await elem.webkitRequestFullscreen();
            } else {
                if (document.exitFullscreen) await document.exitFullscreen();
                else if (document.webkitExitFullscreen) await document.webkitExitFullscreen();
            }
        } catch (err) {
            console.error("Fullscreen error:", err);
        }
    }

    if (fullscreenBtn) fullscreenBtn.addEventListener("click", toggleFullscreen);

    // ==========================================
    // 3. START & INTRO SCENE
    // ==========================================
    if (startAppBtn) {
        startAppBtn.addEventListener("click", () => {
            if (startOverlay) startOverlay.style.display = "none";
            bgMusic.play().catch(err => console.log("BGM error:", err));
            if (video1) video1.play().catch(err => console.log("Video1 error:", err));
        });
    }

    if (video1) {
        video1.addEventListener("ended", () => {
            video1.classList.remove("active");
            if (langOverlay) langOverlay.style.display = "flex";
        });
    }

    if (btnBm) btnBm.addEventListener("click", () => startIntroScene("ms"));
    if (btnEn) btnEn.addEventListener("click", () => startIntroScene("en"));

    function startIntroScene(lang) {
        selectedLang = lang;
        updateLocalizationUI();

        if (langOverlay) langOverlay.style.display = "none";
        if (skipBtn) skipBtn.style.display = "flex";

        if (introAudio) introAudio.pause();

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

    function goToScene4() {
        if (introAudio) introAudio.pause();
        if (video2) {
            video2.pause();
            video2.classList.remove("active");
        }
        if (skipBtn) skipBtn.style.display = "none";

        updateLocalizationUI();
        if (scene4Overlay) scene4Overlay.style.display = "flex";
    }

    // ==========================================
    // 4. VIDEO PLAYER ROUTING
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
            normalLawanVideo.load();
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

    if (vbtnPlay && normalLawanVideo) vbtnPlay.addEventListener("click", () => normalLawanVideo.play());
    if (vbtnPause && normalLawanVideo) vbtnPause.addEventListener("click", () => normalLawanVideo.pause());
    if (vbtnRestart && normalLawanVideo) vbtnRestart.addEventListener("click", () => { normalLawanVideo.currentTime = 0; normalLawanVideo.play(); });

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
    // 5. NAVIGATION ROUTING
    // ==========================================
    if (btnChapter) btnChapter.addEventListener("click", () => { if (scene4Overlay) scene4Overlay.style.display = "none"; if (scene6Overlay) scene6Overlay.style.display = "flex"; });
    if (settingsBtn) settingsBtn.addEventListener("click", () => { previousScene = "scene4"; if (scene4Overlay) scene4Overlay.style.display = "none"; if (settingsOverlay) settingsOverlay.style.display = "flex"; });
    if (scene6SettingsBtn) scene6SettingsBtn.addEventListener("click", () => { previousScene = "scene6"; if (scene6Overlay) scene6Overlay.style.display = "none"; if (settingsOverlay) settingsOverlay.style.display = "flex"; });
    if (scene6HomeBtn) scene6HomeBtn.addEventListener("click", () => { if (scene6Overlay) scene6Overlay.style.display = "none"; if (scene4Overlay) scene4Overlay.style.display = "flex"; });

    if (btnAsas) btnAsas.addEventListener("click", () => { if (scene6Overlay) scene6Overlay.style.display = "none"; if (scene7Overlay) scene7Overlay.style.display = "flex"; });
    if (scene7BackBtn) scene7BackBtn.addEventListener("click", () => { if (scene7Overlay) scene7Overlay.style.display = "none"; if (scene6Overlay) scene6Overlay.style.display = "flex"; });
    if (scene7HomeBtn) scene7HomeBtn.addEventListener("click", () => { if (scene7Overlay) scene7Overlay.style.display = "none"; if (scene4Overlay) scene4Overlay.style.display = "flex"; });
    if (scene7SettingsBtn) scene7SettingsBtn.addEventListener("click", () => { previousScene = "scene7"; if (scene7Overlay) scene7Overlay.style.display = "none"; if (settingsOverlay) settingsOverlay.style.display = "flex"; });

    if (btnPenjagaan) btnPenjagaan.addEventListener("click", () => { if (scene6Overlay) scene6Overlay.style.display = "none"; if (scene8Overlay) scene8Overlay.style.display = "flex"; });
    if (scene8BackBtn) scene8BackBtn.addEventListener("click", () => { if (scene8Overlay) scene8Overlay.style.display = "none"; if (scene6Overlay) scene6Overlay.style.display = "flex"; });
    if (scene8HomeBtn) scene8HomeBtn.addEventListener("click", () => { if (scene8Overlay) scene8Overlay.style.display = "none"; if (scene4Overlay) scene4Overlay.style.display = "flex"; });
    if (scene8SettingsBtn) scene8SettingsBtn.addEventListener("click", () => { previousScene = "scene8"; if (scene8Overlay) scene8Overlay.style.display = "none"; if (settingsOverlay) settingsOverlay.style.display = "flex"; });

    if (btnKesihatan) btnKesihatan.addEventListener("click", () => { if (scene6Overlay) scene6Overlay.style.display = "none"; if (scene9Overlay) scene9Overlay.style.display = "flex"; });
    if (scene9BackBtn) scene9BackBtn.addEventListener("click", () => { if (scene9Overlay) scene9Overlay.style.display = "none"; if (scene6Overlay) scene6Overlay.style.display = "flex"; });
    if (scene9HomeBtn) scene9HomeBtn.addEventListener("click", () => { if (scene9Overlay) scene9Overlay.style.display = "none"; if (scene4Overlay) scene4Overlay.style.display = "flex"; });
    if (scene9SettingsBtn) scene9SettingsBtn.addEventListener("click", () => { previousScene = "scene9"; if (scene9Overlay) scene9Overlay.style.display = "none"; if (settingsOverlay) settingsOverlay.style.display = "flex"; });

    if (btnSetBm) btnSetBm.addEventListener("click", () => { selectedLang = "ms"; updateLocalizationUI(); });
    if (btnSetEn) btnSetEn.addEventListener("click", () => { selectedLang = "en"; updateLocalizationUI(); });

    if (btnQuiz) btnQuiz.addEventListener("click", () => { if (scene4Overlay) scene4Overlay.style.display = "none"; if (scene10Overlay) scene10Overlay.style.display = "flex"; });
    if (scene10SettingsBtn) scene10SettingsBtn.addEventListener("click", () => { previousScene = "scene10"; if (scene10Overlay) scene10Overlay.style.display = "none"; if (settingsOverlay) settingsOverlay.style.display = "flex"; });
    if (scene10HomeBtn) scene10HomeBtn.addEventListener("click", () => { if (scene10Overlay) scene10Overlay.style.display = "none"; if (scene4Overlay) scene4Overlay.style.display = "flex"; });

    if (backBtn) {
        backBtn.addEventListener("click", () => {
            if (settingsOverlay) settingsOverlay.style.display = "none";
            const sceneMap = {
                "normal-lawan": normalLawanOverlay,
                "scene12": scene12Overlay,
                "scene11": scene11Overlay,
                "scene10": scene10Overlay,
                "scene9": scene9Overlay,
                "scene8": scene8Overlay,
                "scene7": scene7Overlay,
                "scene6": scene6Overlay
            };
            const target = sceneMap[previousScene] || scene4Overlay;
            if (target) target.style.display = (target === normalLawanOverlay) ? "block" : "flex";
        });
    }

    if (homeBtn) {
        homeBtn.addEventListener("click", () => {
            [settingsOverlay, scene6Overlay, scene7Overlay, scene8Overlay, scene9Overlay, scene10Overlay, scene11Overlay, scene12Overlay, normalLawanOverlay].forEach(el => {
                if (el) el.style.display = "none";
            });
            if (scene4Overlay) scene4Overlay.style.display = "flex";
        });
    }

    // ==========================================
    // 6. KUIZ & POP-UP HINT/QUIT LOGIC
    // ==========================================
    const quizCategories = {
        asas: [
            {
                question: { ms: "1. Apakah yang berlaku semasa seseorang perempuan mengalami haid?", en: "1. What happens when a girl gets her period?" },
                hint: { ms: "Darah dan tisu rahim akan keluar dari badan.", en: "Blood and uterine tissue leave the body." },
                options: [
                    { text: { ms: "A) Darah dan tisu dari rahim keluar melalui faraj.", en: "A) Blood and tissue leave the body through the vagina." }, isCorrect: true },
                    { text: { ms: "B) Badan menghasilkan lebih banyak tenaga.", en: "B) The body produces extra energy." }, isCorrect: false },
                    { text: { ms: "C) Tulang tumbuh dengan cepat.", en: "C) Bones grow rapidly." }, isCorrect: false },
                    { text: { ms: "D) Hati memproses toksin keluar daripada badan.", en: "D) The liver processes toxins out of the body." }, isCorrect: false }
                ]
            },
            {
                question: { ms: "2. Purata umur kebanyakan orang mendapat haid pertama mereka ialah sekitar umur berapa?", en: "2. Around what age do most people get their first period?" },
                hint: { ms: "Fikirkan umur awal remaja sekolah rendah/menengah.", en: "Think of early teenage school age." },
                options: [
                    { text: { ms: "A) 6 tahun.", en: "A) 6 years old." }, isCorrect: false },
                    { text: { ms: "B) 8 tahun.", en: "B) 8 years old." }, isCorrect: false },
                    { text: { ms: "C) 12 tahun.", en: "C) 12 years old." }, isCorrect: true },
                    { text: { ms: "D) 18 tahun.", en: "D) 18 years old." }, isCorrect: false }
                ]
            }
        ],
        penjagaan: [
            {
                question: { ms: "1. Berapa kerapkah anda perlu menukar pad jika aliran darah haid anda adalah banyak?", en: "1. How often should you change your pad if your period flow is heavy?" },
                hint: { ms: "Jangan biarkan pad dipakai lebih dari 4-5 jam.", en: "Do not wear a pad for more than 4-5 hours." },
                options: [
                    { text: { ms: "A) Setiap 12 jam.", en: "A) Every 12 hours." }, isCorrect: false },
                    { text: { ms: "B) Setiap 8 hingga 10 jam.", en: "B) Every 8 to 10 hours." }, isCorrect: false },
                    { text: { ms: "C) Setiap 3 hingga 4 jam.", en: "C) Every 3 to 4 hours." }, isCorrect: true },
                    { text: { ms: "D) Hanya sekali sehari.", en: "D) Only once a day." }, isCorrect: false }
                ]
            }
        ],
        kesihatan: [
            {
                question: { ms: "1. Apakah yang membezakan PMDD daripada PMS?", en: "1. What differentiates PMDD from PMS?" },
                hint: { ms: "PMDD adalah bentuk perubahan emosi yang jauh lebih teruk.", en: "PMDD is a much more severe form of emotional shift." },
                options: [
                    { text: { ms: "A) PMDD hanya menyebabkan sakit kepala.", en: "A) PMDD only causes headaches." }, isCorrect: false },
                    { text: { ms: "B) PMDD menyebabkan perubahan mood yang lebih melampau dan boleh menjejaskan kehidupan harian.", en: "B) PMDD causes more extreme mood changes that can disrupt daily life." }, isCorrect: true },
                    { text: { ms: "C) PMDD hanya berlaku selepas haid.", en: "C) PMDD only occurs after menstruation." }, isCorrect: false },
                    { text: { ms: "D) PMDD tidak berkaitan dengan perubahan hormon.", en: "D) PMDD is not related to hormonal changes." }, isCorrect: false }
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
        if (finalScoreVal) finalScoreVal.textContent = currentScore;

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

    [optA, optB, optC, optD].forEach((btn, optionIndex) => {
        if (!btn) return;
        btn.addEventListener("click", () => {
            const currentCategoryQuestions = quizCategories[activeQuizCategory] || quizCategories["asas"];
            const currentQ = currentCategoryQuestions[currentQuestionIndex];

            if (currentQ.options[optionIndex].isCorrect) currentScore += 1;
            else currentScore -= 1;

            updateScoreDisplay();
            currentQuestionIndex++;
            loadQuestion();
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

    // EVENT LISENTER POP-UP HINT & QUIT KUIZ
    if (scene11HintBtn) {
        scene11HintBtn.addEventListener("click", () => {
            const currentCategoryQuestions = quizCategories[activeQuizCategory] || quizCategories["asas"];
            const currentQ = currentCategoryQuestions[currentQuestionIndex];
            const lang = selectedLang || "ms";

            if (hintModalText) hintModalText.textContent = currentQ.hint ? currentQ.hint[lang] : "Tiada petunjuk.";
            if (hintModal) hintModal.style.display = "flex";
        });
    }

    if (hintModalClose) hintModalClose.addEventListener("click", () => { if (hintModal) hintModal.style.display = "none"; });
    if (modalOkBtn) modalOkBtn.addEventListener("click", () => { if (hintModal) hintModal.style.display = "none"; });

    if (scene11QuitBtn) {
        scene11QuitBtn.addEventListener("click", () => {
            if (quitModal) quitModal.style.display = "flex";
        });
    }

    if (quitModalClose) quitModalClose.addEventListener("click", () => { if (quitModal) quitModal.style.display = "none"; });
    if (quitCancelBtn) quitCancelBtn.addEventListener("click", () => { if (quitModal) quitModal.style.display = "none"; });
    if (quitConfirmBtn) {
        quitConfirmBtn.addEventListener("click", () => {
            if (quitModal) quitModal.style.display = "none";
            if (scene11Overlay) scene11Overlay.style.display = "none";
            if (scene10Overlay) scene10Overlay.style.display = "flex";
        });
    }

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
            if (labelCara) labelCara.textContent = "Cara mengurangkan sakit senggugut";

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
            if (resultScoreLabel) resultScoreLabel.textContent = "Skor anda:";
        }

        if (scene11Overlay && scene11Overlay.style.display === "flex") {
            loadQuestion();
        }
    }
});
