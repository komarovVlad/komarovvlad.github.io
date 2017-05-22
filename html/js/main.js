$(document).ready(function(){
    
   $('.user').on('click', function(){
       if($('#right').hasClass('clicked')){
            $('.navigation-mobile').slideUp(250);
            $('.dropdown').hide();
            $('button.btn').removeClass('active-btn');
            $('#right').removeClass('clicked');
            $('#cent').removeClass('shadow-right');
            $('#left').removeClass('shadow-left');
          }
       $('.log-in-mobile').slideToggle(250);
       $('#left').toggleClass('clicked');
       $('.user').toggleClass('user-active');
       $('#cent').toggleClass('shadow-left');
       $('#right').toggleClass('shadow-right');
       
   });
    
    $('button.btn').on('click', function(){
        if($('#left').hasClass('clicked')){
            $('.log-in-mobile').slideUp(250);
            $('#left').removeClass('clicked');
            $('.user').removeClass('user-active');
            $('#right').removeClass('shadow-right');
            $('#cent').removeClass('shadow-left');
          }
        $('.navigation-mobile').slideToggle(250);
        $('.dropdown').hide();
        $('.main-menu>li').removeClass('li-active');
        $(this).toggleClass('active-btn');
        $('#right').toggleClass('clicked');
        $('#cent').toggleClass('shadow-right');
        $('#left').toggleClass('shadow-left');
    });
    
    $('.main-menu>li').on('click', function(){
        $(this).toggleClass('li-active');
    });
    
    $('.services').on('click', function(){
        $('.dropdown').slideToggle(250);
    });
    
    $('.dot:not(.active)').hover(function(){
        $(this).attr('src', 'img/dot-active.png');
    }, function(){
        $(this).attr('src', 'img/dot.png');
    });
    

});