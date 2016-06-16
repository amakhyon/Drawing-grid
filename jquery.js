$(document).ready(function(){
	
	
	alert('welcome!');
	function generate(){
	
		count = 0; //creates squares of grid
		user_square = prompt("please enter number of squares");
		while (user_square>90){
			user_square=prompt("please enter a number that is less than 90 to avoid crashing your browser!");
		};
		actual_grid= Math.pow(user_square, 2);
		$('#container').css("width","user_square px")
		$('#container').css("height","user_square px")
		while(count<actual_grid){
			$('#container').append("<div></div>");
			$('div').addClass('one');
			$('#container').removeClass('one');
		
			count++;
		};
    

	};	

	//marks divs drawn
	function clickable(){
		$('.one').mouseenter(function(){
		$(this).addClass('clicked');
		});
	};
	//makes divs change gradient
	function gradient (){
		$('.one').mouseenter(function(){
			$(this).addClass('grad')
			$(this).fadeTo('fast','-=0.1');
		});
	};

	//toggler
	function toggle(){
		$('.one').mouseenter(function(){
			$(this).toggleClass('clicked');
		});
	};
//gradient button
$('#gradient').on('click',function(){
	$('.one').remove();
	generate();
	gradient();
});



//normal button 
$('#generate').on('click',function(){
 $('.one').remove();	
 generate();
 clickable();
 
});
//clear button
$('#clear').on('click',function(){
	var n = $('.grad').length
	c = 0;
	while(c<n){
		$('#container').append("<div></div>");
		$('div').addClass('one');
		$('#container').removeClass('one');
		c++;
	}; 
	$('.grad').remove();
	$('.clicked').removeClass('clicked');
    
});
//gradient auto effect button 
$('#fade').on('click',function(){
	$('.one').fadeTo('slow',Math.random());
});
//toggler
$("#toggle").on('click',function(){
	$('.one').remove();
	generate();
	toggle();
});


});