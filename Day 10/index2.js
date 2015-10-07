$(document).ready(function(){
//establish input variable
var city;

//set function to occur when submit
$(document).on('change', '#entry', function() {
	changeBackground();
});
//set if else statement

//if input = city, set body class to city name
function changeBackground(){
	var x = document.getElementById("entry").selectedIndex;
	city = document.getElementsByTagName("option")[x].value
	console.log(city);
	console.log(x);

	if (city === "New York City"){
		$("body").removeClass().addClass("nyc");
	} 
	else if (city === "San Francisco"){
		$("body").removeClass().addClass("sf");
	}
	else if (city === "Los Angeles"){
		$("body").removeClass().addClass("la");
	}
	else if (city === "Austin"){
		$("body").removeClass().addClass("austin");
	}
	else if (city === "Sydney"){
		$("body").removeClass().addClass("sydney");
	}

	else if (city === "Boston"){
		$("body").removeClass().addClass("boston");
	}

	else if (city === "Narnia"){
		$("body").removeClass().addClass("narnia");
	}

	else {
		$("body").removeClass()
	};
};
});

// 	// $("#entry")[0].reset();
// 	$("#city-type").val(null);
// };

