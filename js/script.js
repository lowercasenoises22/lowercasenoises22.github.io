$("[data-collapse]").on('click', function() {
    event.preventDefault();
    var blockId = $(this).data('collapse');
    $(this).toggleClass('active');

});

$(".button") .on('click', function(){
	event.preventDefault();
	$(".navbar") .toggleClass("active");
});
$(".button") .on('click', function(){
	event.preventDefault();
	$(".button") .toggleClass("active");
});
$("[data-scroll]") .on('click', function(){
	event.preventDefault();

	let blockId = $(this) .data('scroll');
	let blockoffset = $(blockId) .offset().top;

	$('body,html') .animate({
        scrollTop:blockoffset
	});
});
$('.reviews_ite').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});



document.querySelector('div').addeventListener('click')