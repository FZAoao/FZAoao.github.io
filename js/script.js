document.addEventListener('DOMContentLoaded', () => {

    // ========== Hero 页面加载动画 ==========
    const heroTitle = document.querySelector('.hero-content h1');
    const heroText = heroTitle.textContent;
    heroTitle.innerHTML = '';
    for (let char of heroText) {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        heroTitle.appendChild(span);
    }

    anime.timeline({ easing: 'easeOutExpo' })
        .add({
            targets: '.hero-content h1 span',
            opacity: [0, 1],
            translateY: [50, 0],
            rotateX: [-90, 0],
            duration: 800,
            delay: anime.stagger(60)
        })
        .add({
            targets: '.hero-content p',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600
        }, '-=400')
        .add({
            targets: '.hero-content .btn',
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 500
        }, '-=300');

    // ========== 移动端菜单切换 ==========
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // ========== Navbar 滚动效果 ==========
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 50;
        navbar.style.background = scrolled
            ? 'rgba(255, 255, 255, 0.98)'
            : 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = scrolled
            ? '0 2px 20px rgba(0, 0, 0, 0.1)'
            : '0 2px 10px rgba(0, 0, 0, 0.1)';
    });

    // ========== 滚动触发动画 ==========
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;

                if (el.classList.contains('section-title')) {
                    anime({
                        targets: el,
                        opacity: [0, 1],
                        translateY: [40, 0],
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                }

                if (el.classList.contains('stat')) {
                    const numberEl = el.querySelector('.stat-number');
                    const targetText = numberEl.textContent;
                    const targetNum = parseInt(targetText);
                    const suffix = targetText.replace(/[\d]/g, '');

                    anime({
                        targets: numberEl,
                        innerHTML: [0, targetNum],
                        duration: 1500,
                        delay: anime.stagger(200),
                        easing: 'easeOutCubic',
                        round: 1,
                        update: function (anim) {
                            const val = Math.round(anim.animations[0].currentValue);
                            numberEl.textContent = val + suffix;
                        }
                    });
                }

                if (el.classList.contains('skill-progress')) {
                    const targetWidth = el.dataset.targetWidth;
                    el.style.width = '0%';
                    anime({
                        targets: el,
                        width: [0, targetWidth],
                        duration: 1200,
                        delay: anime.stagger(150),
                        easing: 'easeOutCubic'
                    });
                }

                if (el.classList.contains('project-card')) {
                    anime({
                        targets: el,
                        opacity: [0, 1],
                        translateY: [60, 0],
                        duration: 800,
                        delay: anime.stagger(150),
                        easing: 'easeOutExpo'
                    });
                }

                observer.unobserve(el);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    document.querySelectorAll('.section-title').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    document.querySelectorAll('.stat').forEach(el => observer.observe(el));

    document.querySelectorAll('.skill-progress').forEach(el => {
        el.dataset.targetWidth = el.style.width;
        el.style.width = '0%';
        observer.observe(el);
    });

    document.querySelectorAll('.project-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // ========== 联系表单提交动画 ==========
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('.btn');
        const originalText = btn.textContent;

        anime({
            targets: btn,
            scale: [1, 0.95],
            duration: 100,
            easing: 'easeOutQuad',
            complete: () => {
                btn.textContent = '已发送!';
                btn.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';

                anime({
                    targets: btn,
                    scale: [0.95, 1],
                    duration: 200,
                    easing: 'easeOutQuad'
                });

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    contactForm.reset();
                }, 2000);
            }
        });
    });

    // ========== 页面滚动进度指示器 ==========
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 70px;
        left: 0;
        height: 3px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 999;
        transition: width 0.1s;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

});