document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('img-container');
    const imgs = container.querySelectorAll('img');
    let idx = 0;

    function updateCarousel() {
        container.style.transform = `translateX(${-idx * 500}px)`;
    }

    document.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            idx = (idx + 1) % imgs.length;
        } else {
            idx = (idx - 1 + imgs.length) % imgs.length;
        }
        updateCarousel();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            idx = (idx + 1) % imgs.length;
        } else if (event.key === 'ArrowLeft') {
            idx = (idx - 1 + imgs.length) % imgs.length;
        }
        updateCarousel();
    });

    updateCarousel(); // Initialize carousel position
});
//teste para comentario
