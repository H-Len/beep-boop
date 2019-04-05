
var output = function(userInput) {
  var userOutput = "";
  var userChoice = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var numQuote = ["beep", "boop", "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9];
  var inputNum = parseInt(userInput);
  var rangeLength = (inputNum + 1);


  for (var i = rangeLength; 0 <= i <= rangeLength; i --) {
    userOutput += numQuote[i];
    console.log(userOutput);
  };


  // If (userInput === 3) {
  //   userOutput = "I'm sorry, Dave. I'm afraid I can't do that.";
  // } else if (userInput === 2) {
  //   userOutput = "boop";
  // } else if (userInput === 1) {
  //   userOutput = "beep";
  // } else {
  //   return userOutput;
  // };
  console.log(userOutput);
};



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
//
// alert("you entered" + userInput);
// var output = function(userInput) {
//   console.log(userInput);
// };
//
//
//
