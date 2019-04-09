function output(userInputString) {
  var userInputNum = parseInt(userInputString);
  var numArr = [];
  for (var i = userInputNum; i >= 0; i--) {
    if(i.toString().match("3")){
      numArr.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i.toString().match("2")){
      numArr.push("boop");
    } else if (i.toString().match("1")){
      numArr.push("beep");
    } else {
      numArr.push(i);
    }
  }
  return numArr;
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
