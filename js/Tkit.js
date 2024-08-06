$(document).ready(function(){
    
    // 클릭했을때 a태그 위치에 창이 안따라가게
    $("a").click(function(e){
        e.preventDefault();
    })
    
    // 서치 버튼 설정
    $(".top_icon2").click(function(){
        $(".top_option").css({"opacity":"0"})
        $(".top_search_modal").fadeIn(500);
        $(".top_search").css({"top":"0"});
    })

    $(".top_search_modal").click(function(){
        $(".top_option").css({"opacity":"1"});
        $(".top_search").css({"top":"-100%"});
        $(this).fadeOut(500);
    })

    // 삼선버튼 설정
    $(".line").click(function(){
        $(".line_move").toggleClass("act");
        $(".h_mainmenu").delay(500).slideToggle();
    })

    // 모바일용 서브메뉴 설정
    $(".h_mainmenu>li").click(function(){
        $(this).find($(".sub")).slideToggle();
    })// .h_mainmenu>li.click

    // pc형 메인메뉴 라인 호버 작업
    $(".mainmenu_pc>li, .sub_pc, .sub_pc_bg").hover(function(){
        $(this).find($(".line_pc")).stop().css({"width":"100%"});
        $(".sub_pc, .sub_pc_bg").stop().slideDown();
    }, function(){
        $(this).find($(".line_pc")).stop().css({"width":"0"})
        $(".sub_pc, .sub_pc_bg").stop().slideUp();
    })

    // 이미지 슬라이드 슬릭 작업
    $('.slider-for').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    // skill 호버
    $(".skill_img").hover(function(){
        $(this).find($(".skill_modal")).css({"opacity":"0"});
    }, function(){
        $(this).find($(".skill_modal")).css({"opacity":"1"});
    })

    // 슬라이드 이미지 모바일
    $(".slide_list_m").slick({
        autoplay: true,
        dots: false,
        arrows: true
    });

    // 이벤트 카드(모바일용)
    $(".event_img_list_m>li").hover(function(){
        $(this).find($("a.front")).css({"left":"20%","top":"10%","z-index":"211"});
        $(this).find($("a.back")).css({"right":"20%","bottom":"10%","z-index":"212"})
    }, function(){
        $(this).find($("a.front")).css({"left":"8%","top":"2%","z-index":"212"});
        $(this).find($("a.back")).css({"right":"8%","bottom":"2%","z-index":"211"})
    })// a.front.hover

    $(".pop_kit_e").click(function(){
        $(".Tkit_event_pop, .Tkit_event_modal").fadeIn();
    })

    $(".Tkit_event_pop_close").click(function(){
        $(".Tkit_event_pop, .Tkit_event_modal").fadeOut();
    })
})// fin

// 스크롤 감지 애니
$(window).scroll(function(){
    var h = $(window).scrollTop();
    console.log("높이", h)

    if(h >= 1150){
        $("p.location_title1, p.location_title2, .loc_img").addClass("ani")
        $(".location_bg_m").addClass("ani")
    }else{
        $("p.location_title1, p.location_title2, .loc_img").removeClass("ani")
        $(".location_bg_m").removeClass("ani")
    }

})// scroll