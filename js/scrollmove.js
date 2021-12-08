var _MAIN = {};
_MAIN.isMove = false;
_MAIN.$pagers = null;
_MAIN.contents = null;

_MAIN.setIndicator = function() {

	

	

	$(window).keydown(function(e){
		var _page = $(".parallax_paging");
		var _nPage = 0;
		var _mPage = _page.find("a").length;
		_page.find("a").each(function(i){
			if($(this).hasClass("on")){
				_nPage = i+1;
			}
		});

		var key = e.keyCode;
		var possibleKey = [33,34,38,40];
		switch(key){
			case 33:
				_nPage--;
				break;
			case 38:
				_nPage--;
				break;
			case 34 :
				_nPage++;
				break;
			case 40 :
				_nPage++;
				break;
		}

		if(_nPage < 1){
			_nPage = 1;
		}
		else if(_nPage > _mPage){
			_nPage = 9;
			//return;
		}
		if(possibleKey.indexOf(key) != -1){
			_MAIN.movePage(_nPage);
		}
	});
};


// 페이징
_MAIN.setSlide = function() {
	var slidesPerPage = 1

	$(".main_img_slide, .main_img_slide_c").on("init", function(event, slick) {
		maxPages = Math.ceil(slick.slideCount / slidesPerPage);
		$(this).find('.slider-paging-number li').append(' / ' + maxPages);
	});

	$(".main_img_slide").slick({
		slidesToShow : slidesPerPage,
		slidesToScroll : slidesPerPage,
		arrows : true,
		fade : true,
		dots : true,
		infinite : true,
		dotsClass : 'slider-paging-number',
		customPaging : function(slider, i) {
			return '<span>' + (i + 1) + '</span>';
		}
	});

	$(".main_img_slide_c").slick({
		slidesToShow : 3,
		slidesToScroll : 1,
		focusOnSelect : true,
		variableWidth : true,

		dots : true,
		dotsClass : 'slider-paging-number',
		customPaging : function(slider, i) {
			return '<span>' + (i + 1) + '</span>';
		}
	});

};

$(document).ready(function() {
	_MAIN.setIndicator();
	_MAIN.setSlide();

	// 화살표
	$(".slick-arrow").on("focusin", function(){
		$(this).parents(".box").attr("tabindex", "0").addClass("show");
	});


	// Detect objectFit support
	if('objectFit' in document.documentElement.style === false) {

	  // assign HTMLCollection with parents of images with objectFit to variable
	  var container = document.getElementsByClassName('cover');

	  // Loop through HTMLCollection
	  for(var i = 0; i < container.length; i++) {

	    // Asign image source to variable
	    var imageSource = container[i].querySelector('img').src;

	    // Hide image
	    container[i].querySelector('img').style.display = 'none';

	    // Add background-size: cover
	    container[i].style.backgroundSize = 'cover';

	    // Add background-image: and put image source here
	    container[i].style.backgroundImage = 'url(' + imageSource + ')';

	    // Add background-position: center center
	    container[i].style.backgroundPosition = 'center center';
	  }
	}
	else {
	  // You don't have to worry
	  console.log('No worries, your browser supports objectFit')
	}

	$(".parallax_paging").find("a").on("click", function(){
		$(this).addClass("on");
	});
});