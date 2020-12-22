$(document).ready(function() {
    var body = $(".body");
    var banner = $(".banner");
// /////////////////////////////////////////////////////////////
function showAllObjects (object) {
		object.fadeIn(900);
}
// /////////////////////////////////////////////////////////////
function moving (object, speed) {
	body.on('mousemove', function(event) {
		var X = -(Math.floor((event.pageX)/speed))/6 + "px";
    	var Y = -(Math.floor((event.pageY)/speed))/6 + "px";	
    	object.css('transform', 'translate('+X+' , '+Y+')');
	});
}
// /////////////////////////////////////////////////////////////
function moveAll (object) {
	moving($(object[0]),12);	
}
// /////////////////////////////////////////////////////////////
showAllObjects(banner);
moveAll(banner);
// /////////////////////////////////////////////////////////////
});

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let window1 = document.getElementById('window1');
let window2 = document.getElementById('window2');
let window3 = document.getElementById('window3');
let window4 = document.getElementById('window4');
let window5 = document.getElementById('window5');
let window6 = document.getElementById('window6');
function btnFirst(){
	window2.classList.add('hide');
	window3.classList.add('hide');
	window4.classList.add('hide');
	window5.classList.add('hide');
	window6.classList.add('hide');
	window1.classList.remove('hide');
}

function btnSecond(){
	window1.classList.add('hide');
	window3.classList.add('hide');
	window4.classList.add('hide');
	window5.classList.add('hide');
	window6.classList.add('hide');
	window2.classList.remove('hide');
}

function btnThird(){
	window1.classList.add('hide');
	window2.classList.add('hide');
	window4.classList.add('hide');
	window5.classList.add('hide');
	window6.classList.add('hide');
	window3.classList.remove('hide');
}

function btnFourth(){
	window1.classList.add('hide');
	window2.classList.add('hide');
	window3.classList.add('hide');
	window5.classList.add('hide');
	window6.classList.add('hide');
	window4.classList.remove('hide');
}

function btnFifth(){
	window1.classList.add('hide');
	window2.classList.add('hide');
	window3.classList.add('hide');
	window4.classList.add('hide');
	window6.classList.add('hide');
	window5.classList.remove('hide');
}

function btnSixth(){
	window1.classList.add('hide');
	window2.classList.add('hide');
	window3.classList.add('hide');
	window4.classList.add('hide');
	window5.classList.add('hide');
	window6.classList.remove('hide');
}

$(document).ready(function() {
    var body = $(".body");
    var bakteria = $(".bakteria");
// /////////////////////////////////////////////////////////////
function showAllObjects (object) {
		object.fadeIn(900);
}
// /////////////////////////////////////////////////////////////
function moving (object, speed) {
	body.on('mousemove', function(event) {
		var X = -(Math.floor((event.pageX)/speed))/6 + "px";
    	var Y = -(Math.floor((event.pageY)/speed))/6 + "px";	
    	object.css('transform', 'translate('+X+' , '+Y+')');
	});
}
// /////////////////////////////////////////////////////////////
function moveAll (object) {
	moving($(object[0]),12);	
}
// /////////////////////////////////////////////////////////////
showAllObjects(bakteria);
moveAll(bakteria);
// /////////////////////////////////////////////////////////////
});

$(document).ready(function() {
    var body = $(".body");
    var bakteria2 = $(".bakteria2");
// /////////////////////////////////////////////////////////////
function showAllObjects (object) {
		object.fadeIn(900);
}
// /////////////////////////////////////////////////////////////
function moving (object, speed) {
	body.on('mousemove', function(event) {
		var X = -(Math.floor((event.pageX)/speed))/6 + "px";
    	var Y = -(Math.floor((event.pageY)/speed))/6 + "px";	
    	object.css('transform', 'translate('+X+' , '+Y+')');
	});
}
// /////////////////////////////////////////////////////////////
function moveAll (object) {
	moving($(object[0]),12);	
}
// /////////////////////////////////////////////////////////////
showAllObjects(bakteria2);
moveAll(bakteria2);
// /////////////////////////////////////////////////////////////
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.modal_window').length == 0) {
			$(this).fadeOut();					
		}
	});
});