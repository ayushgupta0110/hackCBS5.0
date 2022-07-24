window.addEventListener('load', function() {
    new Swiper(".swiper",{
        effect: "carousel",
        grabCursor: true,
        loop: true,
        loopedSlides: 3,
        slidesPerView: 1.8,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination"
        },
        watchSlidesProgress: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000
        },
    });
});