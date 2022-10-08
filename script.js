$(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 20){
                $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }
            if(this.scrollY > 500){
                $('.scroll-up-but').addClass("show");
            }else{
                $('.scroll-up-but').removeClass("show");

            }
        });

        // slide up but 
        $('.scroll-up-but').click(function(){
            $('html').animate({scrollTop:0});
        });



        //  owl carousel script

        $('.carousel').owlCarousel({
                margin: 20,
                loop: true,
                autoplayTimeOut: 200,
                autoplayHoverPause: true,
                responsive: {
                    0:{
                        items: 1,
                        nav: false
                    },
                    600:{
                        items: 2,
                        nav: false
                    },
                    1000:{
                        items: 3,
                        nav: false
                    }
                }
            });

        // menu button script
        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing",{
        strings: [ "YouTuber" , "Frontend Developer", "Gamer" ],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });

    
    var typed = new Typed(".typing2",{
        strings: [ "YouTuber" , "Frontend Developer", "Gamer" ],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });
});
