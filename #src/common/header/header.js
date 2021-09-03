{
    let header = document.querySelector('.header');
    if (header) {
        let menu = document.querySelector('.menu');
        window.addEventListener('scroll', () => {
            header.classList.toggle('is-scroll', window.pageYOffset > 50);
        })

        const setMenuHeight = () => {
            if (document.documentElement.clientWidth < 1140) {
                menu.style.height = document.documentElement.clientHeight - header.clientHeight + 'px';
            }
        }

        function burgerBtnAnimation(e) {
            $('.burger span:nth-child(1)').toggleClass('first');
            $('.burger span:nth-child(2)').toggleClass('second');
            $('.burger span:nth-child(3)').toggleClass('third');
            $('.burger span:nth-child(4)').toggleClass('fourth');
            menu.classList.toggle('open');
            header.classList.toggle('menu-open');
            document.body.classList.toggle('lock');

            setMenuHeight();
            let id = setInterval(setMenuHeight, 200);
            setTimeout(() => {
                clearInterval(id);
            }, 1000)
        }
        $('.burger').click((e) => burgerBtnAnimation(e));



        setMenuHeight();
        let id = setInterval(setMenuHeight, 200);
        setTimeout(() => {
            clearInterval(id);
        }, 1000)
        window.addEventListener('resize', setMenuHeight);
        window.addEventListener('scroll', setMenuHeight);
    }

}