
// =====================================================================================================================================
// color and backgroundColor Browser 

if (JSON.parse(localStorage.getItem("myCr")) && JSON.parse(localStorage.getItem("mybg")) && JSON.parse(localStorage.getItem("dN")) && JSON.parse(localStorage.getItem("dB")) && JSON.parse(localStorage.getItem("crInvert")) && JSON.parse(localStorage.getItem("mybg"))) {
	// icon Hide and show ---------------------------------

	$(".sun-moon-sun").css("display", JSON.parse(localStorage.getItem("dN")));
	$(".moon-sun-moon ").css("display", JSON.parse(localStorage.getItem("dB")));

	//color and backgroundColor Browser ---------------------------------
	$("body ,.box-nav-all a,.color-js-css ,.box-SERVICES-SERVICES .swiper-slide .service-details p ").css("color", JSON.parse(localStorage.getItem("myCr")));
	$("body ,.navbar,.navbar.animate , .box-nav-all ,.box-cilsh-nav ,.box-SERVICES-SERVICES .swiper-slide ,.Services-nav ul ").css("backgroundColor", JSON.parse(localStorage.getItem("mybg")));



	//Invert colors ---------------------------------
	$(".box-color-bg,.news-content span, .news-content p ,.project-block .inner-box .content-box").css("color", JSON.parse(localStorage.getItem("crInvert")));
	$(".box-color-bg,.news-content span, .news-content p,.project-block .inner-box .content-box ").css("backgroundColor", JSON.parse(localStorage.getItem("bgInvert")));

}
else {
	console.log('no')
}


$(".sun-moon-sun").click(function () {
	// icon Hide and show ---------------------------------
	localStorage.setItem('dN', JSON.stringify(`none`));
	localStorage.setItem('dB', JSON.stringify(`block`));
	$(".sun-moon-sun").css({ "display": 'none' });
	$(".moon-sun-moon").css({ "display": 'block' });

	//color and backgroundColor Browser ---------------------------------
	localStorage.setItem('myCr', JSON.stringify(`#323031`));
	localStorage.setItem('mybg', JSON.stringify(`#f4f4f4`));
	$("body ,.box-nav-all a,.color-js-css ,.box-SERVICES-SERVICES .swiper-slide .service-details p ").css("color", `#323031`);
	$("body ,.navbar,.navbar.animate , .box-nav-all ,.box-cilsh-nav ,.box-SERVICES-SERVICES .swiper-slide ,.Services-nav ul ").css("backgroundColor", `#f4f4f4`);

	
	//Invert colors ---------------------------------
	localStorage.setItem('crInvert', JSON.stringify(`#f4f4f4`));
	localStorage.setItem('bgInvert', JSON.stringify(`#323031`));
	$(".box-color-bg,.news-content span, .news-content p,.project-block .inner-box .content-box").css("color", "#f4f4f4");
	$(".box-color-bg,.news-content span, .news-content p,.project-block .inner-box .content-box").css("backgroundColor", "#323031");

})


$(".moon-sun-moon").click(function () {

	//icon Hide and show ---------------------------------
	localStorage.setItem('dN', JSON.stringify(`block`));
	localStorage.setItem('dB', JSON.stringify(`none`));
	$(".sun-moon-sun").css({ 'display': 'block' });
	$(".moon-sun-moon").css({ 'display': 'none' });

	// color and backgroundColor Browser---------------------------------
	localStorage.setItem('myCr', JSON.stringify(`#f4f4f4`));
	localStorage.setItem('mybg', JSON.stringify(`#323031`));
	$("body ,.box-nav-all a,.color-js-css ,.box-SERVICES-SERVICES .swiper-slide .service-details p ").css("color", `#f4f4f4`);
	$("body ,.navbar,.navbar.animate , .box-nav-all ,.box-cilsh-nav ,.box-SERVICES-SERVICES .swiper-slide ,.Services-nav ul ").css("backgroundColor", `#323031`);
	
	//Invert colors ---------------------------------
	localStorage.setItem('crInvert', JSON.stringify(`#323031`));
	localStorage.setItem('bgInvert', JSON.stringify(`#f4f4f4`));
	$(".box-color-bg ,.news-content span, .news-content p,.project-block .inner-box .content-box").css("color", "#323031");
	$(".box-color-bg , .news-content span, .news-content p,.project-block .inner-box .content-box").css("backgroundColor", "#f4f4f4");
})




// --------------------------------------------------------------------
$(function () {
	let scroll = $(document).scrollTop();
	let navHeight = $('.box-nav-all').outerHeight();

	$(window).scroll(function () {
		var scrolled = $(document).scrollTop();

		if (scrolled > navHeight) {
			$('.box-nav-all').addClass('animate');
		} else {
			$('.box-nav-all').removeClass('animate');
		}

		if (scrolled > scroll) {
			$('.box-nav-all').removeClass('sticky');

		} else {
			$('.box-nav-all').addClass('sticky');
		}
		scroll = $(document).scrollTop();
	});
});
