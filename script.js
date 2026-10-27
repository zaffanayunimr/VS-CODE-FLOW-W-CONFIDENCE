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

    const vbtnRewind = document.getElementById("vbtn-rewind");
    const vbtnPause = document.getElementById("vbtn-pause");
    const vbtnPlay = document.getElementById("vbtn-play");
    const vbtnRestart = document.getElementById("vbtn-restart");
    const vbtnForward = document.getElementById("vbtn-forward");
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
    const scene11BackBtn = document.getElementById("scene11-back-btn");
    const scene11SettingsBtn = document.getElementById("scene11-settings-btn");

    const finalScoreVal = document.getElementById("final-score-val");
    const resultCongrats = document.getElementById("result-congrats");
    const resultMotto = document.getElementById("result-motto");
    const resultScoreLabel = document.getElementById("result-score-label");
    const scene12HomeBtn = document.getElementById("scene12-home-btn");
    const scene12BackBtn = document.getElementById("scene12-back-btn");
    const scene12SettingsBtn = document.getElementById("scene12-settings-btn");

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

    // Initialize Background Music
    const bgMusic = new Audio("assets/bgm.mp3");
    bgMusic.loop = true;

    // VOLUME SLIDER ONLY ADJUSTS BGM VOLUME
    function setBgmVolume(val) {
        let clampedVal = Math.max(0, Math.min(100, val));

        if (volumeSlider) {
            volumeSlider.value = clampedVal;
            volumeSlider.style.background = `linear-gradient(to right, #E70B90 ${clampedVal}%, #FFCCE5 ${clampedVal}%)`;
        }
        if (volumePercentage) volumePercentage.textContent = clampedVal + "%";

        if (bgMusic) {
            bgMusic.volume = clampedVal / 100;
        }
    }

    if (volumeSlider) {
        setBgmVolume(volumeSlider.value);
        volumeSlider.addEventListener("input", (e) => setBgmVolume(e.target.value));
    }

    if (btnVolumeUp) btnVolumeUp.addEventListener("click", () => setBgmVolume(parseInt(volumeSlider.value) + 10));
    if (btnVolumeDown) btnVolumeDown.addEventListener("click", () => setBgmVolume(parseInt(volumeSlider.value) - 10));
    if (btnMute) btnMute.addEventListener("click", () => setBgmVolume(0));

    // ==========================================
    // FULLSCREEN: Mobile API with fallback logic
    // ==========================================
    function isFullscreenActive() {
        return Boolean(document.fullscreenElement || document.webkitFullscreenElement || document.documentElement.classList.contains("fullscreen-fallback"));
    }

    async function toggleFullscreen() {
        const root = document.documentElement;
        try {
            if (document.fullscreenElement || document.webkitFullscreenElement) {
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    await document.webkitExitFullscreen();
                }
                root.classList.remove("fullscreen-fallback");
            } else {
                if (root.requestFullscreen) {
                    await root.requestFullscreen();
                } else if (root.webkitRequestFullscreen) {
                    await root.webkitRequestFullscreen();
                } else {
                    root.classList.toggle("fullscreen-fallback");
                }
            }
        } catch (err) {
            root.classList.toggle("fullscreen-fallback");
            console.error("Fullscreen fallback:", err);
        }
        updateFullscreenIcon();
    }

    function updateFullscreenIcon() {
        const isFullscreen = isFullscreenActive();
        if (fullscreenIcon) {
            if (isFullscreen) {
                fullscreenIcon.innerHTML = `<path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>`;
            } else {
                fullscreenIcon.innerHTML = `<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>`;
            }
        }
        if (fullscreenBtn) fullscreenBtn.setAttribute("aria-pressed", String(isFullscreen));
    }

    if (fullscreenBtn) fullscreenBtn.addEventListener("click", toggleFullscreen);
    document.addEventListener("fullscreenchange", updateFullscreenIcon);
    document.addEventListener("webkitfullscreenchange", updateFullscreenIcon);

    // ==========================================
    // 3. START OVERLAY & INTRO FLOW
    // ==========================================
    if (startAppBtn) {
        startAppBtn.addEventListener("click", () => {
            if (startOverlay) startOverlay.style.display = "none";
            bgMusic.play().catch(err => console.error("BGM error:", err));
            if (video1) video1.play().catch(err => console.error("Video1 error:", err));
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

        stopIntroAudio();

        const audioFile = (selectedLang === "en") ? "assets/intro eng.MP3" : "assets/intro.MP3";
        introAudio = new Audio(audioFile);

        if (video2) {
            video2.currentTime = 0;
            video2.classList.add("active");
        }

        introAudio.addEventListener("canplaythrough", () => {
            if (video2) video2.currentTime = 0;
            introAudio.currentTime = 0;

            Promise.all([
                video2 ? video2.play() : Promise.resolve(),
                introAudio.play()
            ]).catch(err => console.error("Sync error:", err));
        }, { once: true });

        introAudio.load();
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
    // 4. DYNAMIC VIDEO PLAYER (24 VIDEOS)
    // ==========================================
    function loadChapterVideo(startTime = 0) {
        const video = normalLawanVideo;
        const notice = document.getElementById('video-loading-notice');
        if (notice) notice.remove();
        video.pause();
        video.removeAttribute('src');
        video.preload = 'auto';
        video.onloadedmetadata = () => {
            video.onloadedmetadata = null;
            if (startTime > 0) seekChapterVideo(startTime);
        };
        video.load();
        video.play().then(() => {
            if (bgMusic && bgMusic.volume > 0 && bgMusic.paused) {
                bgMusic.play().catch(error => console.error("BGM resume error:", error));
            }
            window.setTimeout(() => {
                if (bgMusic && bgMusic.volume > 0 && bgMusic.paused) {
                    bgMusic.play().catch(error => console.error("BGM resume error:", error));
                }
            }, 250);
        }).catch(error => console.log('Press Play to start video:', error));
    }

    function seekChapterVideo(target) {
        const video = normalLawanVideo;
        if (!Number.isFinite(target)) return;
        const ranges = video.seekable;
        for (let i = 0; i < ranges.length; i++) {
            const start = ranges.start(i);
            const end = Math.max(start, ranges.end(i) - 0.05);
            if (target >= start && target <= end) {
                video.currentTime = target;
                return;
            }
        }
        if (ranges.length && target > video.currentTime) {
            const end = Math.max(ranges.start(ranges.length - 1), ranges.end(ranges.length - 1) - 0.05);
            if (end > video.currentTime) video.currentTime = end;
        }
    }

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
            loadChapterVideo();
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
            btnElem.addEventListener("click", () => {
                playChapterVideo(item.videoName, item.parentScene);
            });
        }
    });

    if (vbtnPlay && normalLawanVideo) vbtnPlay.addEventListener("click", () => normalLawanVideo.play());
    if (vbtnPause && normalLawanVideo) vbtnPause.addEventListener("click", () => normalLawanVideo.pause());
    if (vbtnRestart && normalLawanVideo) {
        vbtnRestart.addEventListener("click", () => {
            normalLawanVideo.currentTime = 0;
            normalLawanVideo.play();
        });
    }
    if (vbtnRewind && normalLawanVideo) {
        vbtnRewind.addEventListener("click", () => {
            seekChapterVideo(Math.max(0, normalLawanVideo.currentTime - 10));
        });
    }
    if (vbtnForward && normalLawanVideo) {
        vbtnForward.addEventListener("click", () => {
            const duration = normalLawanVideo.duration;
            const currentTime = normalLawanVideo.currentTime;
            if (!Number.isFinite(duration) || duration <= 0 || !Number.isFinite(currentTime)) return;
            seekChapterVideo(Math.min(duration, currentTime + 10));
        });
    }

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

            if (previousScene === "normal-lawan") {
                if (normalLawanOverlay) normalLawanOverlay.style.display = "block";

                if (normalLawanVideo && currentVideoBaseName) {
                    const langSuffix = selectedLang === "en" ? "bi" : "bm";
                    const newVideoFile = `assets/${currentVideoBaseName}-${langSuffix}.mp4`;

                    if (!normalLawanSource.src.endsWith(newVideoFile)) {
                        const currentTime = normalLawanVideo.currentTime;

                        normalLawanSource.src = newVideoFile;
                        loadChapterVideo(currentTime);
                    } else {
                        normalLawanVideo.play().catch(err => console.log("Video play error:", err));
                    }
                }
            } else if (previousScene === "scene12") {
                if (scene12Overlay) scene12Overlay.style.display = "flex";
            } else if (previousScene === "scene11") {
                if (scene11Overlay) scene11Overlay.style.display = "flex";
            } else if (previousScene === "scene10") {
                if (scene10Overlay) scene10Overlay.style.display = "flex";
            } else if (previousScene === "scene9") {
                if (scene9Overlay) scene9Overlay.style.display = "flex";
            } else if (previousScene === "scene8") {
                if (scene8Overlay) scene8Overlay.style.display = "flex";
            } else if (previousScene === "scene7") {
                if (scene7Overlay) scene7Overlay.style.display = "flex";
            } else if (previousScene === "scene6") {
                if (scene6Overlay) scene6Overlay.style.display = "flex";
            } else {
                if (scene4Overlay) scene4Overlay.style.display = "flex";
            }
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
    // 6. QUIZ DATA
    // ==========================================
    const quizCategories = {
        asas: [
            {
                question: {
                    ms: "1. Apakah yang berlaku semasa seseorang perempuan mengalami haid?",
                    en: "1. What happens when a girl gets her period?"
                },
                options: [
                    { text: { ms: "A) Darah dan tisu dari rahim keluar melalui faraj.", en: "A) Blood and tissue leave the body through the vagina." }, isCorrect: true },
                    { text: { ms: "B) Badan menghasilkan lebih banyak tenaga.", en: "B) The body produces extra energy." }, isCorrect: false },
                    { text: { ms: "C) Tulang tumbuh dengan cepat.", en: "C) Bones grow rapidly." }, isCorrect: false },
                    { text: { ms: "D) Hati memproses toksin keluar daripada badan.", en: "D) The liver processes toxins out of the body." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "2. Purata umur kebanyakan orang mendapat haid pertama mereka ialah sekitar umur berapa?",
                    en: "2. Around what age do most people get their first period?"
                },
                options: [
                    { text: { ms: "A) 6 tahun.", en: "A) 6 years old." }, isCorrect: false },
                    { text: { ms: "B) 8 tahun.", en: "B) 8 years old." }, isCorrect: false },
                    { text: { ms: "C) 12 tahun.", en: "C) 12 years old." }, isCorrect: true },
                    { text: { ms: "D) 18 tahun.", en: "D) 18 years old." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "3. Mengapakah badan membina lapisan lembut di dalam rahim setiap bulan?",
                    en: "3. Why does the body build a soft lining inside the uterus every month?"
                },
                options: [
                    { text: { ms: "A) Untuk melindungi rahim daripada jangkitan.", en: "A) To protect the uterus from infection." }, isCorrect: false },
                    { text: { ms: "B) Sebagai persediaan bagi menghadapi kehamilan.", en: "B) To prepare the body for a possible pregnancy." }, isCorrect: true },
                    { text: { ms: "C) Untuk menyimpan cecair badan berlebihan.", en: "C) To store excess body fluids." }, isCorrect: false },
                    { text: { ms: "D) Bagi membantu proses pencernaan makanan.", en: "D) To help digest food." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "4. Apakah yang berlaku kepada lapisan rahim jika kehamilan tidak berlaku?",
                    en: "4. What happens to the uterus lining if pregnancy does not occur?"
                },
                options: [
                    { text: { ms: "A) Lapisan tersebut diserap semula secara kekal oleh hati.", en: "A) The lining is permanently reabsorbed by the liver." }, isCorrect: false },
                    { text: { ms: "B) Lapisan tersebut akan bertambah tebal setiap bulan.", en: "B) The lining continues to thicken every month." }, isCorrect: false },
                    { text: { ms: "C) Lapisan tersebut luruh dan keluar melalui faraj bersama darah.", en: "C) The lining breaks down and leaves through the vagina as blood." }, isCorrect: true },
                    { text: { ms: "D) Lapisan tersebut bertukar menjadi otot rahim.", en: "D) The lining turns into uterine muscle." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "5. Berapakah tempoh julat kitaran haid yang normal bagi kebanyakan orang?",
                    en: "5. What is the normal menstrual cycle length range for most people?"
                },
                options: [
                    { text: { ms: "A) 5 hingga 10 hari.", en: "A) 5 to 10 days." }, isCorrect: false },
                    { text: { ms: "B) 10 hingga 15 hari.", en: "B) 10 to 15 days." }, isCorrect: false },
                    { text: { ms: "C) 21 hingga 35 hari.", en: "C) 21 to 35 days." }, isCorrect: true },
                    { text: { ms: "D) 40 hingga 50 hari.", en: "D) 40 to 50 days." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "6. Apakah yang berlaku semasa fasa ketiga iaitu fasa ovulasi?",
                    en: "6. What occurs during the third phase, known as ovulation?"
                },
                options: [
                    { text: { ms: "A) Lapisan rahim mula luruh dan keluar sebagai darah.", en: "A) The lining of the uterus breaks down and leaves as blood." }, isCorrect: false },
                    { text: { ms: "B) Ovari melepaskan telur yang telah matang.", en: "B) An ovary releases a mature egg." }, isCorrect: true },
                    { text: { ms: "C) Badan berhenti menghasilkan hormon secara lengkap.", en: "C) The body completely stops producing hormones." }, isCorrect: false },
                    { text: { ms: "D) Fasa pendarahan menstruasi baru bermula.", en: "D) The menstrual bleeding phase begins." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "7. Manakah antara warna darah haid berikut yang masih dianggap normal?",
                    en: "7. Which of the following period blood colors is considered normal?"
                },
                options: [
                    { text: { ms: "A) Hijau terang, kuning, atau oren.", en: "A) Bright green, yellow, or orange." }, isCorrect: false },
                    { text: { ms: "B) Kelabu.", en: "B) Grey." }, isCorrect: false },
                    { text: { ms: "C) Biru pekat, atau ungu.", en: "C) Deep blue, or purple." }, isCorrect: false },
                    { text: { ms: "D) Merah, merah jambu, atau coklat.", en: "D) Red, pink, or brown." }, isCorrect: true }
                ]
            },
            {
                question: {
                    ms: "8. Tanda manakah yang menunjukkan anda perlu meminta bantuan atau berjumpa dengan doktor?",
                    en: "8. Which sign indicates that you should ask for help or speak to a doctor?"
                },
                options: [
                    { text: { ms: "A) Haid berlangsung selama 3 hingga 5 hari.", en: "A) A period that lasts for 3 to 5 days." }, isCorrect: false },
                    { text: { ms: "B) Warna darah bertukar menjadi coklat pada akhir haid.", en: "B) Blood turning brown near the end of your period." }, isCorrect: false },
                    { text: { ms: "C) Perlu menukar pad setiap 1 hingga 2 jam kerana terlalu penuh.", en: "C) Needing to change your pad every 1 to 2 hours because it is full." }, isCorrect: true },
                    { text: { ms: "D) Rasa sedikit perubahan emosi semasa haid.", en: "D) Experiencing slight mood changes during your period." }, isCorrect: false }
                ]
            }
        ],
        penjagaan: [
            {
                question: {
                    ms: "1. Berapa kerapkah anda perlu menukar pad jika aliran darah haid anda adalah banyak?",
                    en: "1. How often should you change your pad if your period flow is heavy?"
                },
                options: [
                    { text: { ms: "A) Setiap 12 jam.", en: "A) Every 12 hours." }, isCorrect: false },
                    { text: { ms: "B) Setiap 8 hingga 10 jam.", en: "B) Every 8 to 10 hours." }, isCorrect: false },
                    { text: { ms: "C) Setiap 3 hingga 4 jam.", en: "C) Every 3 to 4 hours." }, isCorrect: true },
                    { text: { ms: "D) Hanya sekali sehari.", en: "D) Only once a day." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "2. Bagaimanakah cara yang betul untuk membuang pad yang telah digunakan?",
                    en: "2. What is the proper way to dispose of a used pad?"
                },
                options: [
                    { text: { ms: "A) Pam masuk ke dalam lubang tandas.", en: "A) Flush it down the toilet." }, isCorrect: false },
                    { text: { ms: "B) Bungkus dan buang ke dalam tong sampah.", en: "B) Wrap it up and throw it in the bin." }, isCorrect: true },
                    { text: { ms: "C) Cuci dengan sabun lalu simpan semula.", en: "C) Wash it with soap and keep it." }, isCorrect: false },
                    { text: { ms: "D) Tanam di kawasan tanah luar rumah.", en: "D) Bury it in the dirt outside." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "3. Antara berikut, manakah barang yang digalakkan untuk disimpan di dalam kit kecemasan haid di sekolah?",
                    en: "3. Which of the following items is recommended to keep in your school period emergency kit?"
                },
                options: [
                    { text: { ms: "A) Pad, pantyliner, dan seluar dalam tambahan.", en: "A) Pads, pantyliners, and a spare pair of underwear." }, isCorrect: true },
                    { text: { ms: "B) Mainan.", en: "B) Toys." }, isCorrect: false },
                    { text: { ms: "C) Buku cerita tambahan.", en: "C) Additional storybooks." }, isCorrect: false },
                    { text: { ms: "D) Botol penyembur minyak wangi bersaiz besar.", en: "D) Large-sized perfume spray bottle." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "4. Apakah arah yang betul semasa mengelap atau membersihkan kawasan sulit selepas menggunakan tandas?",
                    en: "4. What is the correct direction to wipe or clean your private area after using the toilet?"
                },
                options: [
                    { text: { ms: "A) Dari belakang ke depan.", en: "A) From back to front." }, isCorrect: false },
                    { text: { ms: "B) Dari depan ke belakang.", en: "B) From front to back." }, isCorrect: true },
                    { text: { ms: "C) Dari kiri ke kanan.", en: "C) From left to right." }, isCorrect: false },
                    { text: { ms: "D) Tidak perlu dielap sama sekali.", en: "D) It does not need to be wiped at all." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "5. Jenis produk haid manakah yang paling sesuai digunakan untuk aliran darah yang sangat ringan atau pada penghujung haid?",
                    en: "5. Which period product is best suited for very light flow or toward the end of your period?"
                },
                options: [
                    { text: { ms: "A) Pad maxi malam.", en: "A) Overnight maxi pad." }, isCorrect: false },
                    { text: { ms: "B) Pantyliner atau pad ringan.", en: "B) Pantyliner or light pad." }, isCorrect: true },
                    { text: { ms: "C) Pad aliran sangat banyak.", en: "C) Very heavy flow pad." }, isCorrect: false },
                    { text: { ms: "D) Pad bersaiz paling panjang.", en: "D) The longest size pad available." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "6. Apakah kelebihan pad malam (overnight) atau pad maxi untuk aliran darah yang sangat banyak?",
                    en: "6. What is the advantage of using an overnight or maxi pad for very heavy flow?"
                },
                options: [
                    { text: { ms: "A) Ia bersaiz lebih pendek dan nipis.", en: "A) It is shorter and thinner." }, isCorrect: false },
                    { text: { ms: "B) Ia tidak perlu ditukar langsung.", en: "B) It never needs to be changed." }, isCorrect: false },
                    { text: { ms: "C) Ia biasanya lebih panjang dan mempunyai bahagian belakang lebih lebar untuk mengelakkan kebocoran.", en: "C) It is usually longer and has a wider back to help prevent leaks." }, isCorrect: true },
                    { text: { ms: "D) Ia menukar warna darah haid secara automatik.", en: "D) It automatically changes the color of the blood." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "7. Apakah yang boleh dilakukan pada bahagian bawah perut untuk mengurangkan sakit senggugut?",
                    en: "7. What can you apply to your lower tummy to help ease period cramps?"
                },
                options: [
                    { text: { ms: "A) Letakkan ais batu secara terus selama 1 jam.", en: "A) Ice cubes directly for 1 hour." }, isCorrect: false },
                    { text: { ms: "B) Letakkan pek pemanas atau botol air suam selama 15 hingga 20 minit.", en: "B) A heating pad or hot-water bottle for 15 to 20 minutes." }, isCorrect: true },
                    { text: { ms: "C) Ditekan dengan objek keras dan berat.", en: "C) Heavy, hard objects pressed down firmly." }, isCorrect: false },
                    { text: { ms: "D) Dibiarkan terdedah pada kipas angin berkuasa tinggi.", en: "D) Direct cold air from a high-speed fan." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "8. Apakah tindakan yang perlu diambil sebelum mengambil sebarang ubat tahan sakit seperti Paracetamol untuk mengurangkan sakit haid??",
                    en: "8. What should you do before taking pain relief medication like Paracetamol for period pain?"
                },
                options: [
                    { text: { ms: "A) Ambil sahaja mengikut gerak hati sendiri.", en: "A) Take it based on your own guess." }, isCorrect: false },
                    { text: { ms: "B) Minum air berkafein yang tinggi terlebih dahulu.", en: "B) Drink a highly caffeinated beverage first." }, isCorrect: false },
                    { text: { ms: "C) Bertanya atau mendapat kebenaran daripada ibu bapa, penjaga, atau doktor.", en: "C) Ask a parent, guardian, or doctor for advice." }, isCorrect: true },
                    { text: { ms: "D) Sentiasa mengambil ubat melebihi dos yang disyorkan.", en: "D) Always take more than the recommended dose." }, isCorrect: false }
                ]
            }
        ],
        kesihatan: [
            {
                question: {
                    ms: "1. Apakah yang membezakan PMDD daripada PMS?",
                    en: "1. What differentiates PMDD from PMS?"
                },
                options: [
                    { text: { ms: "A) PMDD hanya menyebabkan sakit kepala.", en: "A) PMDD only causes headaches." }, isCorrect: false },
                    { text: { ms: "B) PMDD menyebabkan perubahan mood yang lebih melampau dan boleh menjejaskan kehidupan harian.", en: "B) PMDD causes more extreme mood changes that can disrupt daily life." }, isCorrect: true },
                    { text: { ms: "C) PMDD hanya berlaku selepas haid.", en: "C) PMDD only occurs after menstruation." }, isCorrect: false },
                    { text: { ms: "D) PMDD tidak berkaitan dengan perubahan hormon.", en: "D) PMDD is not related to hormonal changes." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "2. Apakah maksud Peningkatan Prahaid (PME)?",
                    en: "2. What is the meaning of Premenstrual Exacerbation (PME)?"
                },
                options: [
                    { text: { ms: "A) Haid berlaku lebih awal daripada biasa.", en: "A) Period occurs earlier than usual." }, isCorrect: false },
                    { text: { ms: "B) Kesihatan fizikal menjadi lebih baik sebelum haid.", en: "B) Physical health improves before period." }, isCorrect: false },
                    { text: { ms: "C) Keadaan kesihatan mental sedia ada menjadi lebih teruk sebelum haid.", en: "C) Pre-existing mental health conditions become worse before period." }, isCorrect: true },
                    { text: { ms: "D) Haid berhenti selama beberapa bulan.", en: "D) Period stops for several months." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "3. Yang manakah merupakan fakta tentang bersenam ketika haid?",
                    en: "3. Which of the following is a fact about exercising during menstruation?"
                },
                options: [
                    { text: { ms: "A) Senaman mesti dielakkan ketika haid.", en: "A) Exercise must be avoided during period." }, isCorrect: false },
                    { text: { ms: "B) Senaman boleh memburukkan senggugut.", en: "B) Exercise can worsen menstrual cramps." }, isCorrect: false },
                    { text: { ms: "C) Aktiviti fizikal adalah selamat dan boleh membantu mengurangkan senggugut serta perubahan mood.", en: "C) Physical activity is safe and can help reduce cramps as well as mood changes." }, isCorrect: true },
                    { text: { ms: "D) Hanya atlet boleh bersenam ketika haid.", en: "D) Only athletes can exercise during period." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "4. Apakah yang boleh digunakan untuk berenang dengan selamat semasa datang haid?",
                    en: "4. What can be used to swim safely while on your period?"
                },
                options: [
                    { text: { ms: "A) Pad biasa atau pantyliner.", en: "A) Regular pads or pantyliners." }, isCorrect: false },
                    { text: { ms: "B) Produk haid yang sesuai seperti tampon, cawan haid, atau pakaian renang khas haid.", en: "B) Appropriate period products such as tampons, menstrual cups, or period swimwear." }, isCorrect: true },
                    { text: { ms: "C) Tisu kering yang dilipat.", en: "C) Folded dry tissues." }, isCorrect: false },
                    { text: { ms: "D) Berenang tidak memerlukan sebarang produk haid.", en: "D) Swimming does not require any period products." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "5. Apakah jenis pakaian yang sepatutnya dielakkan semasa haid kerana boleh memerangkap haba dan kelembapan serta menggalakkan pertumbuhan bakteria dan kulat?",
                    en: "5. What type of clothing should be avoided during your period because it can trap heat and moisture, promoting bacteria and fungal growth?"
                },
                options: [
                    { text: { ms: "A) Pakaian daripada fabrik kapas yang longgar.", en: "A) Loose cotton fabric clothing." }, isCorrect: false },
                    { text: { ms: "B) Pakaian yang selesa dan mempunyai pengudaraan baik.", en: "B) Comfortable and breathable clothing." }, isCorrect: false },
                    { text: { ms: "C) Pakaian sintetik yang terlalu ketat.", en: "C) Overly tight synthetic clothing." }, isCorrect: true },
                    { text: { ms: "D) Pakaian yang diperbuat daripada kain benang semula jadi.", en: "D) Clothing made from natural fiber fabrics." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "6. Mengapakah produk haid berpewangi boleh menyebabkan masalah?",
                    en: "6. Why can scented menstrual products cause issues?"
                },
                options: [
                    { text: { ms: "A) Ia menyebabkan darah haid berhenti.", en: "A) They cause period blood to stop." }, isCorrect: false },
                    { text: { ms: "B) Ia meningkatkan tempoh haid.", en: "B) They increase the duration of period." }, isCorrect: false },
                    { text: { ms: "C) Ia boleh mengganggu keseimbangan pH semula jadi dan menyebabkan kerengsaan.", en: "C) They can disrupt the natural pH balance and cause irritation." }, isCorrect: true },
                    { text: { ms: "D) Ia menyebabkan haid datang lebih kerap.", en: "D) They cause period to occur more frequently." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "7. Apakah yang boleh dilakukan untuk membantu seseorang yang mengalami senggugut?",
                    en: "7. What can be done to help someone experiencing period cramps?"
                },
                options: [
                    { text: { ms: "A) Menyuruh mereka mengabaikan kesakitan.", en: "A) Telling them to ignore the pain." }, isCorrect: false },
                    { text: { ms: "B) Memberikan pad pemanas atau botol air panas.", en: "B) Providing a heating pad or hot water bottle." }, isCorrect: true },
                    { text: { ms: "C) Menghalang mereka daripada berehat.", en: "C) Preventing them from resting." }, isCorrect: false },
                    { text: { ms: "D) Menyuruh mereka melakukan kerja berat.", en: "D) Asking them to do heavy work." }, isCorrect: false }
                ]
            },
            {
                question: {
                    ms: "8. Bagaimanakah cara terbaik untuk menyokong seseorang yang mengalami perubahan mood ketika haid?",
                    en: "8. What is the best way to support someone experiencing mood swings during their period?"
                },
                options: [
                    { text: { ms: "A) Menyalahkan emosi mereka sepenuhnya kepada haid.", en: "A) Blaming their emotions entirely on their period." }, isCorrect: false },
                    { text: { ms: "B) Mengabaikan perasaan mereka.", en: "B) Ignoring their feelings." }, isCorrect: false },
                    { text: { ms: "C) Mendengar tanpa menghakimi dan mengiktiraf perasaan mereka.", en: "C) Listening without judgment and acknowledging their feelings." }, isCorrect: true },
                    { text: { ms: "D) Memberitahu mereka bahawa mereka terlalu sensitif.", en: "D) Telling them that they are being overly sensitive." }, isCorrect: false }
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

    if (scene11BackBtn) {
        scene11BackBtn.addEventListener("click", () => {
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

        // Global Back Button updates
        if (normalLawanBackBtn) normalLawanBackBtn.textContent = isEn ? "Back" : "Kembali";
        if (scene7BackBtn) scene7BackBtn.textContent = isEn ? "Back" : "Kembali";
        if (scene8BackBtn) scene8BackBtn.textContent = isEn ? "Back" : "Kembali";
        if (scene9BackBtn) scene9BackBtn.textContent = isEn ? "Back" : "Kembali";
        if (scene11BackBtn) scene11BackBtn.textContent = isEn ? "Back" : "Kembali";
        if (scene12BackBtn) scene12BackBtn.textContent = isEn ? "Back" : "Kembali";

        if (isEn) {
            if (settingsTitle) settingsTitle.textContent = "Setting";
            if (labelAudio) labelAudio.textContent = "Sound";
            if (labelLanguage) labelLanguage.textContent = "Language";
            if (textVolumeUp) textVolumeUp.textContent = "Volume Up";
            if (textVolumeDown) textVolumeDown.textContent = "Volume Down";
            if (textMute) textMute.textContent = "Mute";
            if (textLangBm) textLangBm.textContent = "Malay";
            if (textLangEn) textLangEn.textContent = "English";
            if (backBtn) backBtn.textContent = "Back";

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
            if (backBtn) backBtn.textContent = "Kembali";

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
