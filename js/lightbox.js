function initLightbox() {
    // Vytvoření lightboxu
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '×';
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    // Přidání event listenerů na všechny obrázky
    document.querySelectorAll('.workflow-image, .install-image').forEach(image => {
        image.addEventListener('click', () => {
            const clone = image.cloneNode(true);
            lightbox.innerHTML = '';
            lightbox.appendChild(closeBtn);
            lightbox.appendChild(clone);
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Zavření lightboxu
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === closeBtn) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Zavření pomocí ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

document.addEventListener('DOMContentLoaded', initLightbox);
