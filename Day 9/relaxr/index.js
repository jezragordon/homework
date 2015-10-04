//I wanted to do this in a way that made sense for the page.  
//But I feel like there's a way to create this function without
//having to be so specific with previous/next selectors.
//I was intrigued by this idea, though, of creating an array
//of the HTML elements and then slicing out the ones I wanted to access.
//I'm sure it's basic, but I thought it was cool.


$(document).ready(function(){

	$(".read").click(function(){
		$(this).nextAll().slice(0,2).slideDown('slow');
		$(this).hide();
	});	

		$(".readless").click(function(){
		$(this).prevAll().slice(0,2).slideUp('slow').show();
		$(this).hide();
	});	

		$("#learn").click(function(){
		$(this).nextAll().slice(0,3).slideDown('slow');
		$(this).hide();
	});	
		$("#learnLess").click(function(){
		$(this).prevAll().slice(0,3).slideUp('slow').show();
		$(this).hide();

	});	

});