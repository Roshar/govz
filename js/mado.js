$(document).ready(function(){
	var imageCollection = ['uploads/slider/11.jpg','uploads/slider/22.jpg',
	'uploads/slider/33.jpg','uploads/slider/44.jpg','uploads/slider/55.jpg',
	'uploads/slider/66.jpg','uploads/slider/77.jpg'];

	var current = 1;
	var index = 0;
	var indexdot = 1;

	for (var i = 1; i <= imageCollection.length; i++) {
		if (i == 1) {
			$('.dot-content').append('<div class="dot active"></div>');	
		}
		$('.dot-content').append('<div class="dot"></div>');
	}

	var dots = document.getElementsByClassName('dot');

	setInterval(function(){

	 var image = $('.slide-main-content');

	 for (var i = index; i < imageCollection.length; i++) {
	 	if(indexdot >= 1) {
	 		dots[indexdot-1].classList.remove("active");
	 	}
	 	if (indexdot > imageCollection.length) {
	 		dots[indexdot-1].classList.remove("active");
	 	}
	 	dots[indexdot].classList.add("active");
	 }
    
	 image.css({
      "background-image": "url("+imageCollection[index]+")"});

		index++;
		indexdot++;

	if(index>=imageCollection.length){
	    index = 0;
	}
	if (indexdot > imageCollection.length) {
	 		indexdot = 1;
	 	}
	},4000);

});