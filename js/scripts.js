
var output = function(userInput) {
  var inputNum = parseInt(userInput);
  var rangeLength = (parseInt(inputNum) + 1);
  var userOutput = "inputNum";

  console.log(userInput);
  for (i = rangeLength; 0 <= i <= rangeLength; i--) {
    if (inputNum === 3) {
      userOutput += "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (inputNum === 2) {
      userOutput = "boop";
    } else if (inputNum === 1) {
      userOutput = "beep";
    } else {
      return userOutput;
    }
    i -= i;
    console.log(userOutput);
  }
};



$(document).ready(function(){
  $("form#numRange").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var result = output(userInput);
    $("#inputRange").text(result);
    console.log(result);
  });
});
