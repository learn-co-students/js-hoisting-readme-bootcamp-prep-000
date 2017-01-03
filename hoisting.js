// Variable hoisting: Remember to define all variables at the top of the scope.
// Define all variables at the top of your functions to access them later.
// Below, since var lyric is being returned within the callMe function, it
// does not need to be globally accessible, just within the function callMe().
function callMe() {
  var lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}

// var thisIsCrazy is set to a function. A function which logs "hey!!!".
// Instead of calling a variable inside of itself, call it outside of the
// variable declaration, but still inside the crazy function.
function crazy() {
  // fix the code in here:
  var thisIsCrazy = function (){
    console.log("hey!!!");
  }
thisIsCrazy();
}

// When JS reads through code, it notes any variables you've defined
// and stores the value undefined in them. It executes any console.logs
// when it hits them. It also keeps track of any functions that are defined
// and stores them in local memory. That is how you can call a function in
// a file on a line above where the function is defined, like sayMy(); below.
// When JS sees function sayMyName(), it stores the entire function in memory
// under sayMyName. The second line that JS reads is actually the function call
// sayMyName(). More info https://rainsoft.io/javascript-hoisting-in-details/
function sayMyName() {
  // fix the code in here:
  var name = "Cricky";
  sayMy();
  function sayMy() {
    var name = "Kristin";
    console.log(name);
  }
}
