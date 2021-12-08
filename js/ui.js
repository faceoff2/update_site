/* footer selectbox */
function viewItem(item) {
	var gon = document.getElementById(item);
	gon.style.display = '';
}

function hideItem(item) {
	var gon = document.getElementById(item);
	gon.style.display = 'none';
}

/* tabmenu */
$(function(){
	$('.tab_section').hide(); 
	$('.tabs a').bind('click', function(e){
		$('.tabs a.on').removeClass('on');
		$('.tab_section:visible').hide();
		$(this.hash).show();
		$(this).addClass('on');
		e.preventDefault();
		$('.slider-paging-number .slick-active').trigger('click');
	}).filter(':first').click();
});

