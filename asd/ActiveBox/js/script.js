$('.reviews_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  dots:true
});
$(".menu-btn") .on('click', function(){
	event.preventDefault();
	  $(".navbar") .toggleClass('active');
});
$("[data-scroll]") .on('click', function(){
	  event.preventDefault();

	   let blockid = $(this) .data("scroll");
	   let blockoffset = $(blockid) .offset().top

	   $("html,body") .animate({
            scrollTop:blockoffset  	   	
	   });
});

let introH = $('.intro') .innerHeight();
let scrollPos = $(window) .scrollTop();


$(window) .on('scroll', function(){
	scrollPos = $(this) .scrollTop();

	if (scrollPos > introH) {
        $('.header') .addClass('fixed'); 
	}
	else{
		$('.header') .removeClass('fixed');
	};
});


$(".reviews_slider").slick({
  infinity:true,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay:true,
  autoplaySpeed:500

}); 