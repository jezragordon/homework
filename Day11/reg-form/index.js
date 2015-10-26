$(document).ready(function() {

  //create variables to change guest number in label and name  
  var guestNumb = 1;
  var guest;

  //click function that creates new field and hides action button  

  $(".guests").delegate('.showButton', 'click', function() {
    guest = "Guest" + "-" + (guestNumb += 1);
    newField();
    this.remove();
  });

  //create function for creating new fields with growing guest numbers

  var newField = function() {
    if (guestNumb >= 8) {
      $(".guests").append('<div class="guestAdd">' +
        '<label for=' + guest + '>' + guest + '</label>' +
        '<input type="text" name=' + guest + '>');
    } else {
      $('<div class="guestAdd">' +
        '<label for=' + guest + '>' + guest + '</label>' +
        '<input type="text" name=' + guest + '>' +
        '<div class="showButton">' + 'Add another guest' + '</div>').appendTo(".guests").hide().fadeIn(850);
      $(this).remove();
    };

  };


  //form data gather on submit

  $("form").on("submit", function(e) {
    e.preventDefault();
$( "form" ).validate({
  rules: {
    field: {
      required: true,
      email: true
    }
  }
});

    var firstName = $("input[name='firstName']").val();
    var lastName = $("input[name='lastName']").val();
    var email = $("input[name='email']").val();
    var phoneNumber = $("input[name='phoneNumber']").val();
    var addressOne = $("input[name='address-1']").val();
    var addressTwo = $("input[name='address-2]").val();
    var city = $("input[name='city']").val();
    var state = $("input[name='state']").val();
    var country = $("input[name='country']").val();
    var postalCode = $("input[name='postalCode']").val();
    var flightDate = $("input[name='flight-arrival-date']").val();
    var flightArrival = $("input[name='flight-arrival']").val();
    var airline = $("input[name='airline']").val();
    var flightNumber = $("input[name='flight-number']").val();
    var guestOne = $("input[name='Guest-1']").val();
    var guestTwo = $("input[name='Guest-2']").val();
    var guestThree = $("input[name='Guest-3']").val();
    var guestFour = $("input[name='Guest-4']").val();
    var guestFive = $("input[name='Guest-5']").val();
    var guestSix = $("input[name='Guest-6']").val();
    var guestSeven = $("input[name='Guest-7']").val();
    var guestEight = $("input[name='Guest-8']").val();

    var guestDetails = {
      userFirstName: firstName,
      userLastName: lastName,
      userEmail: email,
      userPhoneNumber: phoneNumber,
      userAddressOne: addressOne,
      userAddressTwo: addressTwo,
      userCity: city,
      userState: state,
      userCountry: country,
      userPostalCode: postalCode,
      userFlightDate: flightDate,
      userFlightArrval: flightArrival,
      userAirline: airline,
      userFlightNumber: flightNumber,
      userGuestOne: guestOne,
      userGuestTwo: guestTwo,
      userGuestThree: guestThree,
      userGuestFour: guestFour,
      userGuestFive: guestFive,
      userGuestSix: guestSix,
      userGuestSeven: guestSeven,
      userGuestEight: guestEight,
    }
    $("section").fadeOut(1000, function() {
      $("body").addClass("whiteBackground");
      $("#afterFormSubmit").fadeOut().delay(1300).fadeIn(4000);
      });
    });

  });

//});