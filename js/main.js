document.addEventListener('DOMContentLoaded', function() {
    // 輪播圖功能
    const slider = {
        slides: document.querySelectorAll('.slide'),
        dotsContainer: document.querySelector('.slider-dots'),
        currentSlide: 0,
        interval: null,
        
        init: function() {
            // 創建指示點
            this.slides.forEach((slide, index) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if(index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => this.goToSlide(index));
                this.dotsContainer.appendChild(dot);
            });
            
            // 設置自動輪播
            this.startAutoPlay();
            
            // 添加控制按鈕事件
            document.querySelector('.prev-slide').addEventListener('click', () => this.prevSlide());
            document.querySelector('.next-slide').addEventListener('click', () => this.nextSlide());
            
            // 鼠標懸停暫停輪播
            document.querySelector('.slider-container').addEventListener('mouseenter', () => this.stopAutoPlay());
            document.querySelector('.slider-container').addEventListener('mouseleave', () => this.startAutoPlay());
        },
        
        goToSlide: function(index) {
            this.slides[this.currentSlide].classList.remove('active');
            document.querySelectorAll('.slider-dots .dot')[this.currentSlide].classList.remove('active');
            
            this.currentSlide = (index + this.slides.length) % this.slides.length;
            
            this.slides[this.currentSlide].classList.add('active');
            document.querySelectorAll('.slider-dots .dot')[this.currentSlide].classList.add('active');
        },
        
        nextSlide: function() {
            this.goToSlide(this.currentSlide + 1);
        },
        
        prevSlide: function() {
            this.goToSlide(this.currentSlide - 1);
        },
        
        startAutoPlay: function() {
            this.stopAutoPlay();
            this.interval = setInterval(() => this.nextSlide(), 5000);
        },
        
        stopAutoPlay: function() {
            if(this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    };
    
    // 標籤頁功能
    const tabSystem = {
        init: function() {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const tabId = e.target.getAttribute('data-tab');
                    this.switchTab(e.target.closest('.tab-buttons') || e.target.closest('.ranking-tabs') || e.target.closest('.update-tabs'), tabId);
                });
            });
        },
        
        switchTab: function(container, tabId) {
            // 切換按鈕狀態
            container.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            container.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
            
            // 切換內容
            const contentContainer = container.nextElementSibling || container.parentElement.querySelector('.tab-content-container');
            if(contentContainer) {
                contentContainer.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                contentContainer.querySelector(`#${tabId}`).classList.add('active');
            } else {
                container.parentElement.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                container.parentElement.querySelector(`#${tabId}`).classList.add('active');
            }
        }
    };
    
    // 語言切換功能
    const languageSwitcher = {
        init: function() {
            document.querySelectorAll('.lang-options a').forEach(option => {
                option.addEventListener('click', (e) => {
                    e.preventDefault();
                    const lang = e.target.getAttribute('data-lang');
                    this.switchLanguage(lang);
                });
            });
        },
        
        switchLanguage: function(lang) {
            // 這裡實際應該發送請求到後端切換語言
            // 這裡只是前端演示
            const langText = {
                'zh-CN': '简体版',
                'zh-TW': '繁體版',
                'en': 'English'
            };
            
            document.querySelector('.current-lang').textContent = langText[lang];
            
            // 可以添加實際的語言切換邏輯，比如重新加載頁面或使用AJAX獲取翻譯內容
            console.log(`切換語言到: ${lang}`);
        }
    };
    
    // 初始化所有功能
    slider.init();
    tabSystem.init();
    languageSwitcher.init();
    
    // 模擬數據加載
    setTimeout(() => {
        document.querySelectorAll('.loading-placeholder').forEach(el => {
            el.classList.remove('loading-placeholder');
        });
    }, 1000);
});