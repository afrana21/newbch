// After Scroll navbar
$(window).scroll(function(){
    $('nav').toggleClass('scrolled' , $(this).scrollTop()>0);  
    });