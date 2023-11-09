var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlideProgress:true,
})



var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper:swiper,
    }
})


  document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.swiper-slide');

    slides.forEach(function(slide, index) {
        slide.addEventListener('click', function() {
            var overlay = slide.querySelector('.overlay');

            // Oculta todas las overlays visibles
            var visibleOverlays = document.querySelectorAll('.overlay.active');
            visibleOverlays.forEach(function(visibleOverlay) {
                visibleOverlay.classList.remove('active');
                visibleOverlay.classList.add('hidden');
            });

            overlay.classList.toggle('hidden');
            overlay.classList.toggle('active');
        });
    });
});

