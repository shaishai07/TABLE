//Zero
$(function(){
	$('#zero').on("click", function () {
		$('.classThree').removeClass("w");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classThree').addClass("w");
	}
});
//Color Zero
$(document).ready(function(){
    $("#zero").click(function(){
        $(".class, .classOne, .classTwo, .classFour, .classFive, .classSix").addClass("colorZero");
        setTimeout(RemoveClass, 1000 )
     });
    function RemoveClass() {
		$(".class, .classOne, .classTwo, .classFour, .classFive, .classSix").removeClass("colorZero");
	}
});


//One
$(function(){
	$('#one').on("click", function () {
		$('.classThree').removeClass("w");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classThree').addClass("w");
	}
});
$(function(){
	$('#one').on("click", function () {
		$('.classOne').removeClass("u");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classOne').addClass("u");
	}
});
$(function(){
	$('#one').on("click", function () {
		$('.classFour').removeClass("x");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classFour').addClass("x");
	}
});
$(function(){
	$('#one').on("click", function () {
		$('.classSix').removeClass("z");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classSix').addClass("z");
	}
});
//Color One
$(document).ready(function(){
    $("#one").click(function(){
        $(".class, .classTwo, .classFive").addClass("colorOne");
        setTimeout(RemoveClass, 1000 )
     });
    function RemoveClass() {
		$(".class, .classTwo, .classFive").removeClass("colorOne");
	}
});


//Two
$(function(){
	$('#two').on("click", function () {
		$('.classOne').removeClass("u");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classOne').addClass("u");
	}
});
$(function(){
	$('#two').on("click", function () {
		$('.classFive').removeClass("y");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classFive').addClass("y");
	}
});
//Color Two
$(document).ready(function(){
    $("#two").click(function(){
        $(".class, .classTwo, .classThree, .classFour, .classSix").addClass("colorTwo");
        setTimeout(RemoveClass, 1000 )
     });
    function RemoveClass() {
		$(".class, .classTwo, .classThree, .classFour, .classSix").removeClass("colorTwo");
	}
});


//Three
$(function(){
	$('#three').on("click", function () {
		$('.classOne').removeClass("u");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classOne').addClass("u");
	}
});
$(function(){
	$('#three').on("click", function () {
		$('.classFour').removeClass("x");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classFour').addClass("x");
	}
});
//Color Three
$(document).ready(function(){
    $("#three").click(function(){
        $(".class, .classTwo, .classThree, .classFive, .classSix").addClass("colorThree");
        setTimeout(RemoveClass, 1000 )
     });
    function RemoveClass() {
		$(".class, .classTwo, .classThree, .classFive, .classSix").removeClass("colorThree");
	}
});


//Four
$(function(){
	$('#four').on("click", function () {
		$('.classFour').removeClass("x");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classFour').addClass("x");
	}
});
$(function(){
	$('#four').on("click", function () {
		$('.classSix').removeClass("z");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classSix').addClass("z");
	}
});
$(function(){
	$('#four').on("click", function () {
		$('.class').removeClass("t");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.class').addClass("t");
	}
});
//Color Four
$(document).ready(function(){
    $("#four").click(function(){
        $(".classOne, .classTwo, .classThree, .classFive").addClass("colorFour");
        setTimeout(RemoveClass, 1000 )
     });
    function RemoveClass() {
		$(".classOne, .classTwo, .classThree, .classFive").removeClass("colorFour");
	}
});


//Five
$(function(){
	$('#five').on("click", function () {
		$('.classFour').removeClass("x");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classFour').addClass("x");
	}
});
$(function(){
	$('#five').on("click", function () {
		$('.classTwo').removeClass("v");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classTwo').addClass("v");
	}
});
//Color Five
$(document).ready(function(){
    $("#five").click(function(){
        $(".class, .classOne, .classThree, .classFive, .classSix").addClass("colorFive");
        setTimeout(RemoveClass, 1000 )
     });
    function RemoveClass() {
		$(".class, .classOne, .classThree, .classFive, .classSix").removeClass("colorFive");
	}
});


//Six
$(function(){
	$('#six').on("click", function () {
		$('.classTwo').removeClass("v");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classTwo').addClass("v");
	}
});
//Color Six
$(document).ready(function(){
    $("#six").click(function(){
        $(".class, .classOne, .classThree, .classFour, .classFive, .classSix").addClass("colorSix");
        setTimeout(RemoveClass, 1000 )
     });
    function RemoveClass() {
		$(".class, .classOne, .classThree, .classFour, .classFive, .classSix").removeClass("colorSix");
	}
});


//Seven
$(function(){
	$('#seven').on("click", function () {
		$('.classFour').removeClass("x");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classFour').addClass("x");
	}
});
$(function(){
	$('#seven').on("click", function () {
		$('.classOne').removeClass("u");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classOne').addClass("u");
	}
});
$(function(){
	$('#seven').on("click", function () {
		$('.classSix').removeClass("z");
		setTimeout(RemoveClass, 1000);
	});
	function RemoveClass() {
		$('.classSix').addClass("z");
	}
});
//Color Seven
$(document).ready(function(){
    $("#seven").click(function(){
        $(".class, .classTwo, .classThree, .classFive").addClass("colorSeven");
        setTimeout(RemoveClass, 1000 )
     });
    function RemoveClass() {
		$(".class, .classTwo, .classThree, .classFive").removeClass("colorSeven");
	}
});