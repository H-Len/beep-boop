var arabicNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
var romanNum = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

var output = function(userInput) {
  var userOutput = "";
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
  return romanNumOutput;
}

// User Interface Logic
$(document).ready(function(){
  $("#numSwitchForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = output(userInput);
    $("#romanNumeral").text(result);
  });
});
