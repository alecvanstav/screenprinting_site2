

//When oil is hovered, paper turns transparent

$(document).ready(function() {
    $('.page3item1').hover(
        function() {
    $('.page3item3').fadeIn();
  }, function() {
   $('.page3item2').fadeOut();
  }
    );

//MOUSE SCROLL
    
    $(function() {

   $('body').mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 30);
    
      event.preventDefault();

        });

    });
    
//Pour ink
    
     $('.squeegee1-animate').hide();
     $('.emulsionscreencovered-animate').hide();
    
$('.emulsion').click(function() {
    $('.emulsion').toggleClass('emulsion-animate');
    $('.squeegee1').toggleClass('squeegee1-animate');
    $('.emulsionscreencovered').delay(2000).fadeIn(3000);
    });
	  
    

// POINT SCOLLING
  
  $('.page2_link').click(function() {  
      
  $.scrollTo( '.page2back', 800);
      
});
    
 $('.page3_link').click(function() {  
      
  $.scrollTo( '.page3back', 800);
      
});
    
 $('.page4_link').click(function() {  
      
  $.scrollTo( '.page4back', 800);
      
});
            
 $('.page5_link').click(function() {  
      
  $.scrollTo( '.page5back', 800);
      
});
            
 $('.page7_link').click(function() {  
      
  $.scrollTo( '.page7back', 800);
      
});
    
 $('.page8_link').click(function() {  
      
  $.scrollTo( '.page8back', 800);
      
});
    $('.home_link').click(function() {  
      
  $.scrollTo( '.page1back', 800);
      
});
      
    
    
    
//opening page
    $('.page1_img1').hide();
   $('.page1_img2').hide();


    $('.page1_img1').delay(3500).slideDown();
   $('.page1_img2').delay(1480).slideDown();
    $('.page1hand').delay(2000).fadeIn();
 


//light is hidden until clicked


    $('.light').hide();

    
    $('.room1').click(function() {
            $('.light').toggle(10);
            $('.page4hand').fadeOut(1000);
        });

  

//door and window are open until clicked


    $('.window').hide();
    $('.door').hide();

        $('.room2').click(function() {
            $('.window').slideDown();
            $('.door').show(10);
            $('.page5hand').fadeOut(1000);
            $('.page5back').addClass('dark');
        });

  




//when doc loads all descriptions hidden except screen


    $('.svgoil').hide();
    $('.svgphoto').hide();
    $('.svgpaper').hide();
    $('.svgsqueegee').hide();
    $('.svgink').hide();
    $('.svgbulb').hide();
  
     $('.image23').click(function() {
        $('.contentcontainer > div').fadeOut();
        $('.svgscreen').fadeIn(1000);
            });
   
    $('.image24').click(function() {
        $('.contentcontainer > div').fadeOut();
        $('.svgoil').fadeIn(1000);
            });
        
    $('.image25').click(function() {
        $('.contentcontainer > div').fadeOut();
        $('.svgphoto').fadeIn(1000);
            });
        
    $('.image26').click(function() {
        $('.contentcontainer > div').fadeOut();
        $('.svgpaper').fadeIn(1000);
            });

    $('.image27').click(function() {
        $('.contentcontainer > div').fadeOut();
        $('.svgsqueegee').fadeIn(1000);   
            });
    $('.image28').click(function() {
        $('.contentcontainer > div').fadeOut();
        $('.svgink').fadeIn(1000);   
            });
    $('.image29').click(function() {
        $('.contentcontainer > div').fadeOut();
        $('.svgbulb').fadeIn(1000);   
       });
    
    //Sponge
    
    $('.sponge').click(function() {
        
            $('.sponge').toggleClass('sponge2');
            $('.water').delay(5000).toggleClass('wateranimate');
            $('.water2').delay(5000).toggleClass('water2animate');
            $('.finalscreen2').delay(1500).fadeOut(1000);
        });
    
    

});