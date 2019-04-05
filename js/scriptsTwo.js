
// var arabicNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
// var romanNum = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

var userChoice = [1, 2, 3];
var numQuote = ["beep", "boop", "I'm sorry, Dave. I'm afraid I can't do that."];

var output = function(userInput) {
  var userOutput = userInput;
  // parseInt(userInput);
  for (var i = userChoice.length()-1; i >=0; i--) {
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
//
// User Interface Logic
$(document).ready(function(){
  $("form#numRange").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var result = output(userInput);
    $("#result").text(result);
    console.log(result);

    $("userInput").text(inputFromUser);
  });
});

alert("you entered" + userInput);
var output = function(userInput) {
  console.log(userInput);
};
