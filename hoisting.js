// Variable hoisting: Remember to define all variables at the top of the scope.
// Define all variables at the top of your functions to access them later.

function callMe() {
  var lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}

function crazy() {
  // fix the code in here:
  console.log("hey!!!")
  var thisIsCrazy = function() {
    thisIsCrazy();
  }
}
/*function crazy() {
  // fix the code in here:
  var thisIsCrazy = function (){
    console.log("hey!!!");
  }
thisIsCrazy();
}*/

/*function sayMyName() {
  // fix the code in here:
  var name = "Cricky";
  sayMy();
  function sayMy() {
var name = "Kristen";
    console.log(name);
  }
}*/
function sayMyName() {
  // fix the code in here:
  var name = "Kristin";
  console.log(name);
  var name = "Cricky"
  function sayMy() {
    sayMy();
  }
}
