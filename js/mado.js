$(document).ready(function(){
	// var imageCollection = ['uploads/slider/11.jpg','uploads/slider/22.jpg',
	// 'uploads/slider/33.jpg','uploads/slider/44.jpg','uploads/slider/55.jpg',
	// 'uploads/slider/66.jpg','uploads/slider/77.jpg'];

	var imageCollection = ['uploads/slider/11.jpg','uploads/slider/22.jpg',
	'uploads/slider/33.jpg'];

	
	var index = 0;

	// $('.dot-content').has('span')
	// .append('<div class="dot active"></div>')

	for (var i = 0; i < imageCollection.length; i++) {
		$('.dot-content').append('<div class="dot"></div>');
		if (i == 0) {
			$('.dot').addClass('active')
		}
	}

	setInterval(function(){

		var dots = document.getElementsByClassName('dot');

		for(var i = index; i < dots.length; i++) {
			$('.dot').eq(index).addClass('active');
			$('.dot').eq(index-1).removeClass('active');
		}


		$('.slide-main-content').css({
		'background-image':'url('+imageCollection[index]+')'
		});
		console.log(index)
		index ++;
		if (index >= imageCollection.length) {
			index = 0;
		}
	},2000)

	
});