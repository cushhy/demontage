const select1 = new ItcCustomSelect('#select-1');
const select2 = new ItcCustomSelect('#select-2');

lightGallery(document.getElementById('gallery-hash-demo'));

lightGallery(document.getElementById('gallery-hash-demo-2'), {
    galleryId: 2
});

lightGallery(document.getElementById('gallery-hash-demo-3'), {
    galleryId: 3
});

lightGallery(document.getElementById('gallery-hash-demo-4'), {
    galleryId: 4
});

lightGallery(document.getElementById('gallery-hash-demo-5'), {
    galleryId: 5
});

lightGallery(document.getElementById('gallery-hash-demo-6'), {
    galleryId: 6
});


const swiper = new Swiper('.works__slider', {
    slidesPerView: 2,

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
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

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.61406806, 37.70561281],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17
    });
}