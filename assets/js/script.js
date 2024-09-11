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

    var scroll = new SmoothScroll('a[href*="#"]', {
        // Selectors
        ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
        header: null, // Selector for fixed headers (must be a valid CSS selector)
        topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
        // Speed & Duration
        speed: 100, // Integer. Amount of time in milliseconds it should take to scroll 1000px
        speedAsDuration: true, // If true, use speed as the total duration of the scroll animation
        durationMax: null, // Integer. The maximum amount of time the scroll animation should take
        durationMin: null, // Integer. The minimum amount of time the scroll animation should take
        clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
        offset: () => {
            return 85;
        },
        // Easing
        easing: 'easeInOutCubic', // Easing pattern to use
        // History
        updateURL: false, // Update the URL on scroll
        popstate: false, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
        // Custom Events
        emitEvents: true // Emit custom events 
    });
})(jQuery);

