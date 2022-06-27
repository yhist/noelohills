// 멀티미디어 요소 로딩전 실행
$(document).ready();
// 멀티미디어 요소 로딩 완료후 실행
window.onload = function () {
    // 상단 배너 슬라이드
    new Swiper('.sw-banner', {
        loop: true,
        // fade 효과
        effect: 'fade',
        // pagination , click
        pagination: {
            el: ".sw-banner-pg",
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // touchMove 제거
        allowTouchMove: false,
    });
    // visual 슬라이드
    new Swiper ('.sw-visual', {
        loop: true,
        speed: 1000,
        pagination: {
            el: ".sw-visual-pg",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    })

};
