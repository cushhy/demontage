function range() {
	let val = $('.square-input').val();
	val = (val * 100) / 1000;
	$('.square-input').css({
		'background': '-webkit-linear-gradient(left, #ECA96B 0%, #ECA96B ' + val + '%, #F3F3F3 ' + val + '%, #F3F3F3 100%)'
	});

}
