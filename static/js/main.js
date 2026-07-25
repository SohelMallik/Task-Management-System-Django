/* ============================================
   main.js — Advanced Background & Interaction
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Inject aurora blob layer ---------- */
    const blobWrap = document.createElement('div');
    blobWrap.className = 'bg-blobs';
    blobWrap.innerHTML = `
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
        <div class="blob blob-4"></div>
        <div class="blob blob-5"></div>
    `;
    document.body.prepend(blobWrap);

    /* ---------- Inject particle canvas ---------- */
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    document.body.insertBefore(canvas, blobWrap.nextSibling);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function createParticles() {
        const count = Math.floor((canvas.width * canvas.height) / 16000);
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.8 + 0.6,
                dx: (Math.random() - 0.5) * 0.4,
                dy: (Math.random() - 0.5) * 0.4,
                alpha: Math.random() * 0.5 + 0.3
            });
        }
    }
    createParticles();
    window.addEventListener('resize', createParticles);

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

            if (mouse.x !== null) {
                const distX = mouse.x - p.x;
                const distY = mouse.y - p.y;
                const dist = Math.sqrt(distX * distX + distY * distY);
                if (dist < 140) {
                    p.x -= distX * 0.01;
                    p.y -= distY * 0.01;
                }
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
            ctx.fill();
        });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 110) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(110, 255, 192, ${0.12 * (1 - dist / 110)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(drawParticles);
    }
    drawParticles();

    window.addEventListener('mousemove', function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', function () {
        mouse.x = null;
        mouse.y = null;
    });

    /* ---------- Tilt effect on developer image ---------- */
    const devImg = document.querySelector('.text-center.mb-5 img.rounded-circle');
    if (devImg) {
        devImg.addEventListener('mousemove', function (e) {
            const rect = devImg.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            devImg.style.transform = `scale(1.08) rotateX(${-y / 8}deg) rotateY(${x / 8}deg)`;
        });
        devImg.addEventListener('mouseleave', function () {
            devImg.style.transform = '';
        });
    }

    /* ---------- Ripple effect on all buttons ---------- */
    const buttons = document.querySelectorAll('.jumbotron .btn');
    buttons.forEach(function (btn) {
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';

        btn.addEventListener('click', function (e) {
            const rect = btn.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);

            ripple.style.position = 'absolute';
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255,255,255,0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'rippleEffect 0.6s linear';

            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    if (!document.getElementById('ripple-keyframes')) {
        const style = document.createElement('style');
        style.id = 'ripple-keyframes';
        style.textContent = `
            @keyframes rippleEffect {
                to { transform: scale(4); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    /* ---------- Scroll reveal for feature cards & about section ---------- */
    const revealTargets = document.querySelectorAll(
        '.row.text-center .card, .card.shadow-sm.mt-4'
    );
    revealTargets.forEach(el => el.classList.add('reveal-on-scroll'));

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealTargets.forEach(el => observer.observe(el));

    /* ---------- Smooth scroll for internal anchor links ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});