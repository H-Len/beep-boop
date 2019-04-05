//business logic
// inputNum = [];

var userChoice = [1, 2, 3];
var numQuote = ["beep", "boop", "I'm sorry, Dave. I'm afraid I can't do that."];

var output = function(userInput) {
  var userOutput = "";
  // parseInt(userInput);
  for (var i = userInput.length()-1; i >=0; i--) {
    if (userInput === 3) {
      userOutput = "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (userInput === 2) {
      userOutput = "boop";
    } else if (userInput === 1) {
      userOutput = "beep";
    } else {
      return userOutput;
    }
    console.log(userOutput);
  }

}
  // var rangeOutput = "user";
  // for (var i = userChoice.length-1; i >= 0; i--) {
  //   if (userInput >= userChoice[i]) {
  //     rangeOutput = exceptQuote[i];
  //   }
  // }
  // return rangeOutput;
  // }
  //   // if (userInput === 1) {
  //   //   userInput = "beep";
  //   //   return userInput;
  //   // }
  // console.log(userInput);
});
//
// //UI logic
// $(document).ready(function(){
//   $("#numSwitchForm").submit(function(event){
//     event.preventDefault();
//     var userInput = parseInt($("#userInput").val());
//     var result = output(userInput);
//     $("#romanNumeral").text(result);
//   });
// });
