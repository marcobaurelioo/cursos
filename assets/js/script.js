(function ($) {
    "use strict";


    const swiper = new Swiper('.swiper', {
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

        //autoplay
        autoplay: {
            delay: 3000,
        },
    });

    function adjustSrcBanners() {
        const bannerName = ['Drop.jpg', 'Mesas resinadas.jpg', 'Informatica.jpg', 'Inteligencias artificiais.jpg'];

        let baseUrl = `assets/images/banners/${window.innerWidth > 800 ? 'lg' : 'sm'}/`;

        const elSlide = Object.values(document.getElementsByClassName('swiper-image'));

        elSlide.forEach((el, index) => {
            el.src = baseUrl + bannerName[index];
        });
    }

    $(document).ready(function () {

        adjustSrcBanners();

        $(window).on('resize', function () {
            adjustSrcBanners();
        })

    })

    const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination2',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },

        //autoplay
        autoplay: {
            delay: 3000,
        },
    });
})(jQuery);

