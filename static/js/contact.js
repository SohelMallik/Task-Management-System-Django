/* ============================================
   contact.js — Animated Contact Form Behavior
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('form[method="POST"]');
    const submitBtn = form ? form.querySelector('button[type="submit"], .btn-primary') : null;
    const inputs = form ? form.querySelectorAll('.form-control') : [];

    /* ---------- Ripple effect on button click ---------- */
    if (submitBtn) {
        submitBtn.style.position = 'relative';
        submitBtn.style.overflow = 'hidden';

        submitBtn.addEventListener('click', function (e) {
            const rect = submitBtn.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);

            ripple.classList.add('ripple');
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

            submitBtn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    }

    /* ---------- Input focus micro-interaction ---------- */
    inputs.forEach(function (input) {
        input.addEventListener('focus', function () {
            input.classList.remove('is-invalid');
            const wrapper = input.closest('.mb-3');
            if (wrapper) wrapper.classList.add('active-field');
        });

        input.addEventListener('blur', function () {
            const wrapper = input.closest('.mb-3');
            if (wrapper) wrapper.classList.remove('active-field');
        });
    });

    /* ---------- Simple validation with shake animation ---------- */
    if (form) {
        form.addEventListener('submit', function (e) {
            let hasError = false;

            inputs.forEach(function (input) {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    hasError = true;
                    triggerInvalid(input);
                }
                if (input.type === 'email' && input.value.trim()) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(input.value.trim())) {
                        hasError = true;
                        triggerInvalid(input);
                    }
                }
            });

            if (hasError) {
                e.preventDefault();
                return;
            }

            // Show loading state on the button while the form submits
            if (submitBtn) {
                submitBtn.classList.add('btn-loading');
                submitBtn.disabled = true;
            }
        });
    }

    function triggerInvalid(input) {
        input.classList.add('is-invalid');
        input.addEventListener('animationend', function handler() {
            input.classList.remove('is-invalid');
            input.removeEventListener('animationend', handler);
        });
    }

    /* ---------- Auto-dismiss success alert ---------- */
    const alertBox = document.querySelector('.alert-success');
    if (alertBox) {
        setTimeout(function () {
            alertBox.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            alertBox.style.opacity = '0';
            alertBox.style.transform = 'translateY(-15px)';
            setTimeout(() => alertBox.remove(), 600);
        }, 5000);
    }

    /* ---------- Parallax mouse-move on background bubbles ---------- */
    document.addEventListener('mousemove', function (e) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
    });

});