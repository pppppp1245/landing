/**
 * AI Card Section - Swiper Initialization
 */

document.addEventListener('DOMContentLoaded', function() {
    // Swiper 초기화
    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        initialSlide: 0,
        speed: 800,
        cardsEffect: {
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 8,
        },
    });
});
