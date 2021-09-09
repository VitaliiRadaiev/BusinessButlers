{
    let aboutTeamSlider = document.querySelector('.about-team__slider');
    if(aboutTeamSlider) {
        let dataSlider = new Swiper(aboutTeamSlider, {

            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
        
            slidesPerView: 'auto',
            spaceBetween: 10,
            speed: 5000,
            loop: true,
        });
    }
}