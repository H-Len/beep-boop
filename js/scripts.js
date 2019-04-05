
var output = function(userInput) {
  var inputNum = parseInt(userInput);
  var rangeLength = (parseInt(inputNum) + 1);
  var userOutput = "";

  console.log(userInput);
  for (i = rangeLength; 0 <= i <= rangeLength; i--) {
    if (inputNum === 3) {
      userOutput += "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (inputNum === 2) {
      userOutput = "boop";
    } else if (inputNum === 1) {
      userOutput = "beep";
    } else {
      return userOutput = inputNum;
    };
    i--;;
    console.log(userOutput);
  };
};

// var userChoice = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var numQuote = ["beep", "boop", "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9];
//
// var output = function(userInput) {
//   var userOutput = "";
//   for (var i = rangeLength; 0 <= i <= rangeLength; i --) {
//     userOutput += numQuote[i];
//     console.log(userOutput);
//   };
// };

//
// User Interface Logic
$(document).ready(function(){
  $("form#numRange").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var result = output(userInput);
    $("#inputRange").text(result);
    console.log(result);
  });
});
