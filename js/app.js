$(document).ready(function () {
    // Burger menu
    $(".header__burger, .header__link").on("click", function () {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });


    // Fixed menu
    let header = $("#header");
    let introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();

    $(window).on("scroll load", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset + 50);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset > introH) {
            header.addClass("active");
        } else {
            header.removeClass("active");
        }
    }


    // Smooth scroll
    $("[data-scroll]").on("click", function (e) {
        e.preventDefault();

        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;

        $("#header__menu a").removeClass("active");
        $(this).addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    // Collapse
    $("[data-collapse]").on("click", function (e) {
        e.preventDefault();

        $("#accordion .accordion__item").removeClass("active");
        $(this).addClass("active");
        // let blockId = $(this).data("collapse");
        // $(blockId).slideToggle();
    });


    // Slider
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });



});