// 멀티미디어 요소 로딩전 실행
$(document).ready(function () {
    // 안내창 기능
    // 추가기능(스크롤바 없애기)
    $('html').css('overflow', 'hidden');
    let modalWrap = $('.modal-wrap');
    let modalClose = $('.modal-close');
    modalClose.click(function(){
        modalWrap.stop().fadeOut(200);
        // 추가기능(스크롤바 살리기)
        $('html').css('overflow', 'auto')
    });
    // 배경눌렀을때 닫기
    let modalMain = $('.modal-main');
    // 내용배경 클릭
    modalMain.click(function(event){
        // 클릭 정보 전달 막기
        event.stopPropagation();
    });
    // 전체 배경 클릭
    modalWrap.click(function(event){
        $(this).stop().fadeOut(200);
        $('html').css('overflow', 'auto')
    });

    });

    // 모바일 메뉴
    let mb_div = $('.mb-div');
    // 모바일 보기 버튼 기능
    let mb_bt = $('.mb-bt');
    mb_bt.click(function () {
        mb_div.show();
    });
    // 모바일 닫기 버튼 기능
    let mb_close = $('.mb-close');
    mb_close.click(function () {
        mb_div.hide();
    });
    // 배경 누르면 닫기
    mb_div.click(function () {
        mb_div.hide();
    });
    // 내용을 클릭하면 배경으로의 신호 전달을 막는다.
    $('.mb-bg').click(function (event) {
        // 이벤트 전달 막기
        event.stopPropagation();
    });

    // 모바일 메뉴 기능
    let mb_menu_li = $('.mb-menu>li');
    $.each(mb_menu_li, function (index, item) {
        // mb-mainmenu 를 찾아서 보관
        let temp = $(this).find('.mb-mainmenu');
        temp.click(function () {
            // 펼쳐져 있는 경우 true , 없으면 false
            let result = temp.hasClass('mb-mainmenu-open');

            if (result == true) {
                //펼쳐진 클래스 가진 경우
                temp.removeClass('mb-mainmenu-open');
                // 펼쳐진 서브메뉴 닫기
                mb_menu_li.eq(index).find('.mb-submenu').hide();
            } else {
                // 모든 클래스 일다 제거
                mb_menu_li.find('.mb-mainmenu').removeClass('mb-mainmenu-open')
                // 모든 펼쳐진 서브메뉴를 닫는다.
                mb_menu_li.find('.mb-submenu').hide();
                //펼쳐진 클래스 없는 경우
                temp.addClass('mb-mainmenu-open');
                //서브메뉴 펼치기
                mb_menu_li.eq(index).find('.mb-submenu').show()
            }
        });
    });

    // window 너비 체크 
    $(window).resize(function () {
        let temp = $(window).width();
        if (temp >= 880) {
            mb_div.hide();
            $('.mb-mainmenu').removeClass('mb-mainmenu-open');
            $('.mb-submenu').hide();
        };
    });
});

// 멀티미디어 요소 로딩 완료후 실행
window.onload = function () {
    // 스크롤시 header 고정
    let header = $('.header');
    let wrap = $('.wrap');
    // 사라지는 시점 px 값(banner가 보일때)
    let fixY = $('.banner').height();

    $(window).scroll(function () {
        // 스크롤바의 세로상단 px 값
        let temp = $(window).scrollTop();
        // 50은 banner의 높이 값 px
        if (temp > fixY) {
            header.addClass('header-fix');
            wrap.addClass('wrap-fix');
        } else {
            header.removeClass('header-fix');
            wrap.removeClass('wrap-fix');
        }
    });

    // 상단 베너 닫기 기능
    let banner_close = $('.banner-close');
    banner_close.click(function () {
        fixY = 0;
        $('.banner').slideUp(300);
    });


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
    new Swiper('.sw-visual', {
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