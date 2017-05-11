$(document).ready(function(){
    // Анимация формы
                 $('#first').on('focusin', function(){
                  $('.form-back').css('background', 'white');
                $(this).attr('placeholder', '');
                 })
                 $('#first').on('focusout', function(){
                  $('.form-back').css('background', '#305075');
                    $(this).attr('placeholder', 'Поиск');
                 })
                 
   // Анимация music-bar. Изменение кнопок play/pause              
                 $('.play').on('click', function(){
                     $(this).hide();
                     $('.pause').show();
                     $('.pause').css('display','inline-block')
                 })
                  $('.pause').on('click', function(){
                     $(this).hide();
                     $('.play').show();
                      
                 })
                  
   //  При клике изменение фона кнопок             
                  $('.clickable').on('click', function(){
                      
                     $(this).toggleClass('active');
                       });
    // Выпадение списка юзера
                $('.user').click(function(){
                    $('.second-dropdown').slideToggle(500);
                })
    // Выпадение списка оповещений
                $('.bell').click(function(){
                    $('.first-dropdown').slideToggle(500);
                    $('.fa.fa-bell').toggleClass('active-bell');
                })
               
  // Изменение цвета иконок при нажатии              
                $('.music-icon').on('click', function(){
                    $('.music-bar').slideToggle(500);
                    $('.fa.fa-music').toggleClass('active-icon');
                    
                })
  // Появление music-bara на большом разрешении после тогла дропдауна            
             $( window ).resize(function() {
                 if(window.innerWidth>=1201){
                    $('.music-bar').show();
                                            }
                 else{
                     $('.music-bar').hide();
                 }
             })
             
             
  // Музыка по клику           
               var i=document.getElementById('doors');
                 $('.play').click(function(){
                     i.play();
                 });
    
                 $('.pause').click(function(){
                     i.pause();
                 });
             
                 $('#drop2').hover(function(){
                     $('#drop_item').slideDown(500);
                    
                 });
    
                  $('#drop1').mouseleave(function(){
                        
                     $('#drop1, #drop_item').slideUp();
                         
                 });
    
                 $('#drop0').click(function(){
                    $('.photo .btn-group>ul').show();
                 });
                 
                $('body').on('click', function(event){
                    console.log(event);
                    if(!$(event.toElement.parentNode).hasClass('clickable')&&!$(event.toElement.parentNode).hasClass('second-dropdown')&&!$(event.toElement.parentNode).hasClass('music-icon')){
                       $('.second-dropdown').hide();
                       $('.user').removeClass('active');
                    $('.first-dropdown').hide();
                       $('.bell').removeClass('active');
                        $('.fa.fa-bell').removeClass('active-bell');
                      
                        $('.music-icon').removeClass('active');
                    }
                     
                    
                });
    
                $('.button').on('click', function(){
                    $('.detailed-data').slideToggle(500);
                    if($('.button').html()==='Показать подробную информацию'){
                        $(this).html('Скрыть подробную информацию');
                    }
                    else{
                        $(this).html('Показать подробную информацию');
                    }
                });
    
    
                 
                 	/* This is basic - uses default settings */
	
	$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
    $("a.grouped_elements").fancybox();
       
});
                  