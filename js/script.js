const select1 = new ItcCustomSelect('#select-1');
const select2 = new ItcCustomSelect('#select-2');

lightGallery(document.getElementById('gallery-hash-demo'));

lightGallery(document.getElementById('gallery-hash-demo-2'), {
    galleryId: 2
});

lightGallery(document.getElementById('gallery-hash-demo-3'), {
    galleryId: 3
});


const swiper = new Swiper('.works__cards', {
    spaceBetween: 20,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {
        730: {
            slidesPerView: 3,
        },

        1: {
            freeMode: true,
            grid: {
                rows: 1,
            },
            slidesPerView: 1,
        },
    }
});


const swiper2 = new Swiper('.result__item', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper3 = new Swiper('.video__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper4 = new Swiper('.reviews__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        730: {
            slidesPerView: 3,
        },

        1: {
            slidesPerView: 1,
        },
    }
});