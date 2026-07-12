const revealItems = document.querySelectorAll('.reveal');

if (revealItems.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach((item) => {
        revealObserver.observe(item);
    });
}

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-question');

    if (!trigger) return;

    trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        faqItems.forEach((entry) => {
            entry.classList.remove('is-open');
            const button = entry.querySelector('.faq-question');
            if (button) {
                button.setAttribute('aria-expanded', 'false');
            }
        });

        if (!isOpen) {
            item.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
        }
    });
});

const lightbox = document.getElementById('tripLightbox');
const lightboxImage = lightbox ? lightbox.querySelector('.lightbox__image') : null;
const lightboxClose = lightbox ? lightbox.querySelector('.lightbox__close') : null;
const lightboxTriggers = document.querySelectorAll('[data-lightbox-src]');

function closeLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightbox.hidden = true;
    lightboxImage.src = '';
    lightboxImage.alt = '';
    document.body.style.overflow = '';
}

if (lightbox && lightboxImage && lightboxTriggers.length > 0) {
    lightboxTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const src = trigger.getAttribute('data-lightbox-src');
            const alt = trigger.getAttribute('data-lightbox-alt') || '';

            if (!src) return;

            lightboxImage.src = src;
            lightboxImage.alt = alt;
            lightbox.hidden = false;
            document.body.style.overflow = 'hidden';
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !lightbox.hidden) {
            closeLightbox();
        }
    });
}
