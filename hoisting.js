function callMe() {
// moved var declartion to the top, so that it is declared with a value, and it will return the value "maybe" instead of
// returning just an undefined variable
  var lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;

}


function crazy() {
  // fix the code in here:
  // moved the var and function declaration before calling the function
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }

  thisIsCrazy();
}

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";
  function sayMy() {
    var name = "Kristin";
    console.log(name);
  }
  sayMy();

}
