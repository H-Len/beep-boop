
var output = function(userInput) {
  // var inputNum = parseInt(userInput);
  var rangeLength = (parseInt(inputNum) + 1);
  var userOutput = "";

  for (i = userInput; 0 <= i <= userInput-1; i--) {
      if (userInput === 3) {
        userOutput += "I'm sorry, Dave. I'm afraid I can't do that.";
      } else if (userInput === 2) {
        userOutput = "boop";
      } else if (userInput === 1) {
        userOutput = "beep";
      } else {
        return userOutput = inputNum;
      };
    };
    console.log(userOutput);
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
