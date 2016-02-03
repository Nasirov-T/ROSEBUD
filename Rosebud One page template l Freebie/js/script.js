		var slider1 = document.querySelector(".food-1 .img-up a");
		var slider2 = document.querySelector(".food-2 .img-up a");
		var slider3 = document.querySelector(".food-3 .img-up a");
		var slider4 = document.querySelector(".food-4 .img-up a");
		var slider5 = document.querySelector(".food-5 .img-up a");
		var slider6 = document.querySelector(".food-6 .img-up a");
		var sliderimage1 = document.querySelector(".slider-1");
		var sliderimage2 = document.querySelector(".slider-2");
		var sliderimage3 = document.querySelector(".slider-3");
		var sliderimage4 = document.querySelector(".slider-4");
		var sliderimage5 = document.querySelector(".slider-5");
		var sliderimage6 = document.querySelector(".slider-6");
		var close = document.querySelector(".close-slider a")
		var close2 = document.querySelector(".close-slider-2 a")
		var close3 = document.querySelector(".close-slider-3 a")
		var close4 = document.querySelector(".close-slider-4 a")
		var close5 = document.querySelector(".close-slider-5 a")
		var close6 = document.querySelector(".close-slider-6 a")
	





		slider1.addEventListener("click", function(event) { 
			event.preventDefault();
		sliderimage1.classList.add("slider-show");
	});

		slider2.addEventListener("click", function(event) { 
			event.preventDefault();
		sliderimage2.classList.add("slider-show");
	});

		slider3.addEventListener("click", function(event) { 
			event.preventDefault();
		sliderimage3.classList.add("slider-show");
	});

		slider4.addEventListener("click", function(event) { 
			event.preventDefault();
		sliderimage4.classList.add("slider-show");
	});

		slider5.addEventListener("click", function(event) { 
			event.preventDefault();
		sliderimage5.classList.add("slider-show");
	});

		slider6.addEventListener("click", function(event) { 
			event.preventDefault();
		sliderimage6.classList.add("slider-show");
	});






		
		close.addEventListener("click", function(event) { 
			event.preventDefault();
		sliderimage1.classList.remove("slider-show");
	})
	

		close2.addEventListener("click", function(event) { 
			event.preventDefault();
		sliderimage2.classList.remove("slider-show");
	})
	

		close3.addEventListener("click", function(event) { 
			event.preventDefault();
		sliderimage3.classList.remove("slider-show");
	})
	

		close4.addEventListener("click", function(event) { 
			event.preventDefault();
		sliderimage4.classList.remove("slider-show");
	})
	

		close5.addEventListener("click", function(event) { 
			event.preventDefault();
		sliderimage5.classList.remove("slider-show");
	})
	

		close6.addEventListener("click", function(event) { 
			event.preventDefault();
		sliderimage6.classList.remove("slider-show");
	});
	




//Окончание слайда для food-menu










/*



//создание главного слайда в хедере страницы
function one() {
var slideNext = document.querySelector(".slide-next");

}



var slidePrev = document.querySelector(".slide-prev");
var slideNext = document.querySelector(".slide-next");
var slideBackground = document.querySelector(".slide");
var slideNext2 = document.querySelector(".slide-img-1");
var slideNext3 = document.querySelector(".slide-img-2");
var slideNext4 = document.querySelector(".slide-img-3");
var slideNext5 = document.querySelector(".slide-img-4");






slidePrev.addEventListener("click", function(event) { 
			event.preventDefault();
		slideBackground.classList.add("slide");
		slideBackground.classList.remove("slide-img-1");
		slideNext.classList.add("slide-next");
		slideNext.classList.remove("slide-next-button-1");

		slidePrev.classList.add("slide-prev");
		slidePrev.classList.remove("slide-prev-button-1");
	});




//добавляй новый класс с другим бекграундом



slideNext.addEventListener("click", function(event) { 
			event.preventDefault();
		console.log("sldfj");
		slideBackground.style.background\-image="url('../img/menu-6.png')";
});








		/*.classList.add("slide-img-1");
		slideBackground.classList.remove("slide");
		slideNext.classList.add("slide-next-button-1");
		slideNext.classList.remove("slide-next");
		slidePrev.classList.add("slide-prev-button-1");
		slidePrev.classList.remove("slide-prev");


if (true) {


var slideNextButton = document.querySelector(".slide-next-button-1");
slideNextButton.addEventListener("click", function(event) { 
		event.preventDefault();
		slideBackground.classList.add("slide-img-2");
		slideBackground.classList.remove("slide-img-1");
		slideNext.classList.add("slide-next-button-2");
		slideNext.classList.remove("slide-next-button-1");
		slidePrev.classList.add("slide-prev-button-1");
		slidePrev.classList.remove("slide-prev");




	});	




	};


	};




	});	









var slideNextButton = document.querySelector(".slide-next-button-1");
slideNextButton.addEventListener("click", function(event) { 
		event.preventDefault();
		slideBackground.classList.add("slide-img-2");
		slideBackground.classList.remove("slide-img-1");
		slideNext.classList.add("slide-next-button-2");
		slideNext.classList.remove("slide-next-button-1");






	});





var slideNextButton2 = document.querySelector(".slide-next-button-2");
	slideNextButton2.addEventListener("click", function(event) { 
		event.preventDefault();
		slideBackground.classList.add("slide-img-3");
		slideBackground.classList.remove("slide-img-2");
		slideNext.classList.add("slide-next-button-3");
		slideNext.classList.remove("slide-next-button-2");


	});



var slideNextButton3 = document.querySelector(".slide-next-button-3");

	slideNextButton3.addEventListener("click", function(event) { 
		event.preventDefault();
		slideBackground.classList.add("slide-img-4");
		slideBackground.classList.remove("slide-img-3");
		slideNext.classList.add("slide-next-button-4");
		slideNext.classList.remove("slide-next-button-3");










	});


var slideNextButton4 = document.querySelector(".slide-next-button-4");

	slideNextButton4.addEventListener("click", function(event) { 
		event.preventDefault();


		slideBackground.classList.add("slide");
		slideBackground.classList.remove("slide-img-4");
		slideNext.classList.add("slide-next");
		slideNext.classList.remove("slide-next-button-4");




	});






*/