// 'use strict';
import $ from 'jquery'
import 'slick-carousel'
import mixitup from 'mixitup';
import { Fancybox } from "@fancyapps/ui"


$(function () {

    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close')
    })
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close')
    })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,

    })

    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,

    })



    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"> <img src="../img/blog/img-arrow-left.svg" alt="img"></button> ',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"> <img src="../img/blog/img-arrow-right.svg" alt="img"></button> ',

    })

var mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.living'
    }
});
})
