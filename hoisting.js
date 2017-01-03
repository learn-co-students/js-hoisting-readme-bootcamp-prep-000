var lyric = "maybe";
function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;

}


function crazy() {
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  thisIsCrazy();


}
crazy();

function sayMyName() {
  // fix the code in her
  var name = "Cricky";

  sayMy();


  function sayMy() {
    var name = "Kristin";
    console.log(name);

  }
}
sayMyName();
//when you have a nested function with 2 independent variables, JS will read from top to bottom. the first declared variable will be read and stored without a value and then it will return the value. Make sure you watch where variables are being declared.
