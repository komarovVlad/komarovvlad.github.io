$(document).ready(function(){
    
    //NAVBAR
    $('#shopping-cart a, #search-li a, .links a').on('click', function(event){
       event.preventDefault();
    })
    $("#search-li a").on('click', function(event){
        $('#search').toggle();
    })
    $(document).on('click', function(event) {
        if ($(event.target).closest("#search-li").length) return;
        $("#search").hide();
    });
    $(".navigation ul li").on('click', function(event){
        $(".navigation ul li").removeClass('active-li');
        $(this).addClass('active-li');
        if($(event.target).closest('#search-li').length||
          $(event.target).closest('.navigation ul li:nth-child(7)').length){
            $(this).css('border-bottom-color','transparent');
        }
    })
    
    //adding color while pageYOffset > 0
    var bar = document.querySelector('.navigation-wrapper');
    document.addEventListener('scroll', function(){
        if(document.body.scrollTop >= bar.offsetHeight){
            bar.style.transition = '0.5s';
            bar.style.backgroundColor = 'rgba(114, 131, 154, 0.8)';
            bar.style.boxShadow= '1px 1px 5px #000000';
            $toUp.show(100);
        }
        else{
            bar.style.backgroundColor = '';
            bar.style.boxShadow='';
            $toUp.hide(100);
        }
    });
    // button up
    var $toUp = $('#toUp');
    $toUp.on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500);
    })
    
    // mobile-menu
    $('.sandvich').on('click', function(){
        $('.mobile-menu').slideToggle();
    })
    $(document).on('click',function(e){
        if(!$(e.target).closest('.mobile-menu').length && !$(e.target).closest('.sandvich').length) {
            
            $('.mobile-menu').slideUp();
        }
    })
    // sliding anchors
    $('.navigation ul li a, .mobile-menu a').on('click', function(e){
        var elem = $(this).attr('href');
        var destination = $(elem).offset().top;
        $('html, body').animate({
            scrollTop: destination-bar.offsetHeight-10
        }, 500)
    })
    
    //changing class while scrolling
    $(window).on('scroll', function(){
        var div = $('#about, #services, #portfolio, #stories, #footer');
        div.each(function(){
             var div_1 = $(this).attr('id');
            var winTop = $(window).scrollTop();
            
            if(winTop > $(this).offset().top - 200) {
               $('.navigation ul li').removeClass('active-li');
                $(".navigation").find('a[href=\\#'+div_1+']').closest('li').addClass('active-li');
            }
            if(winTop < 100){
                $('.navigation ul li').removeClass('active-li');
                $(".navigation").find('a[href=\\#home]').closest('li').addClass('active-li');
            }
            
        });
    })
    //home-slider
    $(".home-slider.owl-carousel").owlCarousel({
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
        loop: true,
        dots: true,
        nav: false
    });
    
    //members
    var members = document.querySelectorAll('.member span');
    var timer, timer1, timer2, timer3;
    var memberOn = true;
    document.addEventListener('scroll', function(){
        if(pageYOffset >= 750 && memberOn){
             memberOn = false;
             timer = setInterval(function(){
                    count(0, 42);
                },25);
             timer1 = setInterval(function(){
                    count(1, 123);
                },10)
             timer2 = setInterval(function(){
                    count(2, 15);
                },100);
             timer3 = setInterval(function(){
                    count(3, 99);
                },13);
        }
})
    function count(number, till){
        members[number].innerHTML = +members[number].innerHTML + 1;
        if(members[number].innerHTML >= till){
            switch (number){
                case 0:
                    clearInterval(timer);
                    break;
                case 1:
                    clearInterval(timer1);
                    break;
                case 2:
                    clearInterval(timer2);
                    break;
                case 3:
                    clearInterval(timer3);
                    break;
                default:
                    'hello world';
                    break;
                          }

            }
        }
            
    // accordion   
    
    var $acContent = $('.ac-content');
    var $acHeader = $('.ac-header');
    $acHeader.on('click', function(){
        if($(this).next().hasClass('ac-active')) return;
        $acContent.slideUp();
        $acContent.removeClass('ac-active');
        $(this).next().slideDown();
        $(this).next().addClass('ac-active');
        
    })
    
    
    //quotes
    $(".quotes.owl-carousel").owlCarousel({
        autoplay: false,
        items: 1,
        loop: true,
        nav: true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        dots: false
    });
});


    