import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

var mySwiper = new Swiper('.photos__swiper', {
    modules: [Navigation],
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 3,
    navigation: {
        nextEl: '.photos__button-next',
        prevEl: '.photos__button-prev',
    },
    breakpoints:{
        1200:{
            speed: 1000,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 80,
                depth: 200,
                modifier: 1,
                slideShadows: false,
            },
        }
    }
})

const menu = document.querySelector('.menu');
const list = document.querySelector('.header__list');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    list.classList.toggle('active')
    body.classList.toggle('hidden')
})