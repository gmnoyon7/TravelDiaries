(function ($) {
    ("use strict");

/*---------------------
  menu-stick
--------------------- */
var s = $("#sticker");
var pos = s.position();					   
$(window).on('scroll',function() {
	var windowpos = $(window).scrollTop();
	if (windowpos > pos.top) {
	s.addClass("stick");
	} else {
		s.removeClass("stick");	
	}
});

jQuery(document).ready(function($) {
	jQuery('.stellarnav').stellarNav({
		theme: 'light',
		breakpoint: 991,
		position: 'right',
		phoneBtn: '18009997788',
		locationBtn: 'https://www.google.com/maps'
	});
});


/*----------------------------
 wow js
------------------------------ */
new WOW().init();

/*----------------------------
 isotop
------------------------------ */
$('.destination-items').imagesLoaded(function () {
	
  $('.destination-items').isotope();

 // filter items on button click
 $('.top-destination-menu li').on('click', function() {
   
   $(".top-destination-menu li").removeClass("active");
   $(this).addClass("active");        

   var selector = $(this).attr('data-filter');
   $(".destination-items").isotope({ 
     filter: selector, 
     animationOptions: {
       duration: 750, 
       easing: 'linear',
       queue: false
     } 
   });
   return false; 
 });

});
  
/*--------------------------
travel-carousel
---------------------------- */
$(".travel-carousel").slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  adaptiveHeight: true,
  centerMode: true,
  variableWidth: true,
  prevArrow: '<i class="arrow_carrot-left"></i>',
  nextArrow: '<i class="arrow_carrot-right"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

// Counterup

setTimeout(function(){
  odometer.innerHTML = 700;
}, 1000);

setTimeout(function(){
  touristnumber.innerHTML = 500;
}, 1200);





	
})(jQuery);
