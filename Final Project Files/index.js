
	$(document).ready(function(){

		var firstName;
		var lastName;
		var accommodations;
		var overallExperience;
		var explainExperienceText;
		var arrivalQuestionYesNo;
		var arrivalExperience;
		var arrivalExperienceText;
		var commentArrivalExperienceText;
		var checkInExperience;
		var checkInExperienceText;
		var accommodationsExperience;
		var accommodationsExperienceText;
		var serviceExperience;
		var serviceExperienceText;
		var otherExperienceText;
		var swim;
		var food;
		var beach;
		var water;
		var fishing;
		var kayaking;
		var tennis;
		var fitness;
		var choosePathRemaining;





//ACTIVITIES MULTISELECT
	 $("#favoriteActivities input").click(function(){
	 	 $(this).toggleClass("selected");
});

$('#favoriteActivities button').click(function() {
	if ($("#swim").hasClass("selected")){
		swim = $("#swim").val();
	}
	if ($("#food").hasClass("selected")){
		food = $("#food").val();
	}
	if ($("#beach").hasClass("selected")){
		beach = $("#beach").val();
	}
	if ($("#water-sports").hasClass("selected")){
		water = $("#water-sports").val();
	}
	if ($("#fishing").hasClass("selected")){
		fishing = $("#fishing").val();
	}
	if ($("#tennis").hasClass("selected")){
		tennis = $("#tennis").val();
	}
	if ($("#scuba-diving").hasClass("selected")){
		kayaking = $("#kayaking").val();
	}
	if ($("#fitness").hasClass("selected")){
		fitness = $("#fitness").val();
	};
		 $("#favoriteActivities").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	 });
	 	 returnTop();
	 });


// Get Name

$('#provideName button').click(function() {
	 	 firstName = $("#firstName").val();
	 	 lastName = $("#lastName").val();
	 	 $("#provideName").fadeOut("slow", function(){
	 	 $("#rateExperience").fadeIn("slow");
	 	 });
	 	 console.log(firstName, lastName);
	 	 returnTop();
	 });


//1A OVERALL EXPERIENCE
	 $('#rateExperience input').click(function() {
	 	 overallExperience = $(this).val();
	 	 console.log(overallExperience);
	 	 if (overallExperience <= 2) {
	 	 $("#rateExperience").fadeOut("slow", function(){
	 	 $("#explainExperienceContainer").fadeIn("slow");
	 	 	});
	 	}
	 	else {
	 	 $("#rateExperience").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	});
	 	returnTop();
	 	

     };
//1B 

	 	 $('#explainExperienceContainer button').click(function() {
	 	 explainExperienceText = $("#explainExperienceContainer textarea").val();
	 	 console.log(explainExperienceText);
	 	 $("#explainExperienceContainer").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	 $("#choosePath").hide();
	 	 });
	 	 returnTop();
	 });


//N Path Selector
	 $('#choosePath input').click(function() {
	 	 pathSelect = $(this).val();
	 	 if (pathSelect === "Arrival") {
	 	 $("#choosePath").fadeOut("slow", function(){
	 	 $("#questionArrival").fadeIn("slow");
	 	 	});
	 	}
	 	 if (pathSelect === "Check-In") {
	 	 $("#choosePath").fadeOut("slow", function(){
	 	 $("#rateCheckIn").fadeIn("slow");
	 	 	});
	 	}
	 	 if (pathSelect === "Accommodation") {
	 	 $("#choosePath").fadeOut("slow", function(){
	 	 $("#rateAccommodations").fadeIn("slow");
	 	 	});
	 	}
	 	 if (pathSelect === "Service") {
	 	 $("#choosePath").fadeOut("slow", function(){
	 	 $("#rateService").fadeIn("slow");
	 	 	});
	 	}
 		if (pathSelect === "Other") {
	 	 $("#choosePath").fadeOut("slow", function(){
	 	 $("#explainOtherContainer").fadeIn("slow");
	 	 	});
	 	}
	 	 if (pathSelect === "Complete Survey") {
	 	 $("#choosePath").fadeOut("slow", function(){
	 	 $("#submit").fadeIn("slow");
	 	 	});
	 	}
	 	console.log(pathSelect);
	 	returnTop();
     });


//2A ARRIVAL QUESTION
	 $('#questionArrival input').click(function() {
	 	 arrivalQuestionYesNo = $(this).val();
	 	 console.log(arrivalQuestionYesNo);
	 	 if (arrivalQuestionYesNo =="YES") {
	 	 $("#questionArrival").fadeOut("slow", function(){
	 	 $("#rateArrival").fadeIn("slow");
	 	 	});
	 	}
	 	if (arrivalQuestionYesNo === "NO"){
	 	 $("#questionArrival").fadeOut("slow", function(){
	 	 $("#commentArrivalContainer").fadeIn("slow");
	 	});
     };
     $("#arrival-button").prop("disabled", true);
     returnTop();
 });


//2B RATE ARRIVAL EXPERIENCE
	 $('#rateArrival input').click(function() {
	 	 arrivalExperience = $(this).val();
	 	 console.log(arrivalExperience);
	 	 if (arrivalExperience <= 2) {
	 	 $("#rateArrival").fadeOut("slow", function(){
	 	 $("#explainArrivalContainer").fadeIn("slow");
	 	 	});

	 	}
	 	else {
	 	 $("#rateArrival").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	});
     };
     returnTop();
     });
//2C EXPLAIN ARRIVAL EXPERIENCE

	 	 $('#explainArrivalContainer button').click(function() {
	 	 arrivalExperienceText = $("#explainArrivalContainer textarea").val();
	 	 console.log(arrivalExperienceText);
	 	 $("#explainArrivalContainer").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	 });
	 	 returnTop();
	 });

//2D COMMENT ARRIVAL EXPERIENCE

	 	 $('#commentArrivalContainer button').click(function() {
	 	 commentArrivalExperienceText = $("#commentArrivalContainer textarea").val();
	 	 console.log(commentArrivalExperienceText);
	 	 $("#commentArrivalContainer").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	 });
	 	 returnTop();
	 });


//3A CHECKIN EXPERIENCE
	 $('#rateCheckIn input').click(function() {
	 	 checkInExperience = $(this).val();
	 	 console.log(checkInExperience);
	 	 if (checkInExperience <= 2) {
	 	 $("#rateCheckIn").fadeOut("slow", function(){
	 	 $("#explainCheckInContainer").fadeIn("slow");
	 	 	});

	 	}
	 	else {
	 	 $("#rateCheckIn").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	});
     };
     $("#check-in-button").prop("disabled", true);
     returnTop();
     });

//3B 

	 	 $('#explainCheckInContainer button').click(function() {
	 	 checkInExperienceText = $("#explainCheckInContainer textarea").val();
	 	 console.log(checkInExperienceText);
	 	 $("#explainCheckInContainer").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	 });
	 	 returnTop();
	 	});

//4A ACOMMODATIONS EXPERIENCE
	 $('#rateAccommodations input').click(function() {
	 	 accommodationsExperience = $(this).val();
	 	 console.log(accommodationsExperience);
	 	 if (accommodationsExperience <= 2) {
	 	 $("#rateAccommodations").fadeOut("slow", function(){
	 	 $("#explainAccommodationsContainer").fadeIn("slow");
	 	 	});

	 	}
	 	else {
	 	 $("#rateAccommodations").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	});
     };
     $("#accommodation-button").prop("disabled", true);
     returnTop();
     });

//4B ACCOMMODATIONS EXPLAIN

	 	 $('#explainAccommodationsContainer button').click(function() {
	 	 accommodationsExperienceText = $("#explainAccommodationsContainer textarea").val();
	 	 console.log(accommodationsExperienceText);
	 	 $("#explainAccommodationsContainer").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	 });
	 	 returnTop();
	 	});

//5A SERVICE EXPERIENCE
	 $('#rateService input').click(function() {
	 	 serviceExperience = $(this).val();
	 	 console.log(serviceExperience);
	 	 if (serviceExperience <= 2) {
	 	 $("#rateService").fadeOut("slow", function(){
	 	 $("#explainServiceContainer").fadeIn("slow");
	 	 	});

	 	}
	 	else {
	 	 $("#rateService").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	});
     };
     $("#service-button").prop("disabled", true);
     returnTop();
     });

//5B SERVICE EXPLAIN

	 	 $('#explainServiceContainer button').click(function() {
	 	 serviceExperienceText = $("#explainServiceContainer textarea").val();
	 	 console.log(serviceExperienceText);
	 	 $("#explainServiceContainer").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	 });
	 	 returnTop();
	 	});

//6 OTHER
		 $('#explainOtherContainer button').click(function() {
	 	 otherExperienceText = $("#explainOtherContainer textarea").val();
	 	 console.log(otherExperienceText);
	 	 $("#explainOtherContainer").fadeOut("slow", function(){
	 	 $("#choosePath").fadeIn("slow");
	 	 });
	 	 $("#other-button").prop("disabled", true);
	 	 returnTop();
	 	});

		

		var totalAnswered;
		var newValue;
		var totalValue;

//submit survey function
	 	$('#complete-button').click(function() {
	 		//submit all values to Google
	 		postContactToGoogle();
	 		//change background, low res if less than 600px, else full resolution
	 		if ($(window).width() <= 600) {
   			$('body').css('background-image', 'url("survey-bg-no-blur-reduced-600px.jpg")');	 
			}
			else {
  			 $('body').css('background-image', 'url("survey-bg-no-blur-reduced.jpg")');	 
			}
			$("#sd-logo").fadeOut("slow");
	 		
			//create array that contains all variables with number;

	 		var totalValue = [overallExperience, arrivalExperience, checkInExperience, accommodationsExperience,
			serviceExperience];
			//eliminate undefined variables from function by
			//cycling through totalValue and pushing only variables
			//with value to newArray.  Then parse the variables values
			//so they are numeric, not string, values.	
			var newArray = new Array();	
	 		for (i = 0; i < totalValue.length; i++){
	 		if (totalValue[i]){
        	newArray.push(parseInt(totalValue[i]));	
    };
  };

//now that the variables have numerical values
//cycle through each and add values to together.
//newValue now equals sum of all values.

console.log(newArray);
newValue = 0;
$.each(newArray,function() {
    newValue += this;
	console.log(newValue);
});

//Establish overall score by dividing the sum of all numeric values
//by the total number of values in newArray

	finalValue = newValue / newArray.length;
	console.log(finalValue);

//define ranking of average value and provide approriate messaging

if (finalValue < 2.3){
		console.log("they had a bad experience");
		 $("#choosePath").fadeOut("slow", function(){
	 	 setTimeout(badExperience, 2000);
	 	 });
	 	 returnTop();
}
else if (finalValue >= 2.3 && finalValue <= 3.2){
	console.log("they had an ok experience");
		$("#choosePath").fadeOut("slow", function(){
	 	 setTimeout(okExperience, 2000);
	 	 });
	 	 returnTop();

}

else {
	console.log("they had a great experience");
	$("#choosePath").fadeOut("slow", function(){
	setTimeout(greatExperience, 2000);
	});
	returnTop();
}
	 	});
	 	     	
	 	 });



	  function postContactToGoogle() {
          $.ajax({
              url: "https://docs.google.com/forms/d/1LhYEyMKY2nRqJNqwr0vDwnIJjrayOe69MOs-TttwFPE/formResponse",
              data: { 
              "entry.428533182": overallExperience, 
              "entry.1447387079": explainExperienceText,
              "entry.660795754": arrivalExperience,
              "entry.1659805839": swim,
              "entry.1043167667": food,
              "entry.1443328567": beach,
              "entry.2132321252": water,
              "entry.1041476142": fishing,
              "entry.387432865": tennis,
              "entry.1969578007": fitness,
              "entry.1484677548": kayaking,
              "entry.1973419171": arrivalQuestionYesNo,
              "entry.1952859007":arrivalExperience,
              "entry.2066698541":arrivalExperienceText,
              "entry.332010930":checkInExperience,
              "entry.1865974282":checkInExperienceText,
              "entry.175538394":accommodationsExperience,
              "entry.1199835736":accommodationsExperienceText,
              "entry.698190917":serviceExperience,
              "entry.443065806":serviceExperienceText,
              "entry.1564517891":otherExperienceText,
              "entry.562344336":lastName,
              "entry.38889136":firstName

          		},
              type: "POST",
              dataType: "xml",
          });
    }

//functions for each experience

var badExperience = function(){
	$("#badTimeText").fadeIn(2000);
};

var okExperience = function(){
	$("#okTimeText").fadeIn(2000);
};


var greatExperience = function(){
	$("#greatTimeText").fadeIn(2000);
};


//scroll back to top on submit
var returnTop =  function(){
    $("body").animate({
        scrollTop: $("body").offset().top  
    }, 800); 
    }; 
});

