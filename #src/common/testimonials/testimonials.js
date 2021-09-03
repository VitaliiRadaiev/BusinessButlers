{
    let testimonials = document.querySelector('.testimonials');
    if(testimonials) {
        let dataSlider = new Swiper(testimonials.querySelector('.testimonials__slider'), {
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            speed: 800,
            loop: true,
            breakpoints: {
                320: {
                    spaceBetween: 20,
                    slidesPerView: 'auto',
                },
                768: {
                    spaceBetween: 30,
                    slidesPerView: 3,
                },
                992: {
                    spaceBetween: 47,
                    slidesPerView: 4,
                },
            },
        });
    }
}