$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 1000,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa  fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa  fa-chevron-right"></i></button>'
  });
});



$('#bonus').modal({
     keyboard: true,
     backdrop: 'static'
 });


$(document).ready(function(){
    $('.nav-link').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 80 }, 500); 
        }
	    return false; 
    });
});

$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});



(function blink() { 
  $('#blink').fadeOut(500).fadeIn(500, blink); 
})();