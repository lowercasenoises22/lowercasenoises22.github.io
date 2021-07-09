
$(".work_bars") .on('click', function(){
	event.preventDefault();
	$(this).toggleClass("active");
});
$('.npm') .magnificPopup({
	
     type: 'image'
  // other options
});
$('.navbar--footer a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 380,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});