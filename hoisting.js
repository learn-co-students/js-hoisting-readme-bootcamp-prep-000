function callMe() {
var lyric="maybe";
  return lyric;

}
/*
console.log("I just met you...");
console.log("and this is crazy..");
console.log("but here's my number..");
console.log("so call me"); */


/* fixed
function crazy() {
  // fix the code in here:
  thisIsCrazy();

  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
}
*/

function crazy () {
var thisIsCrazy=function (){
  console.log ("hey!!!");
}
thisIsCrazy();

}
/*
function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  sayMy();

  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
}
*/
var name="Cricky";
function sayMyName() {
  var name="Kristin";

  function sayMy (){

    console.log(name);

  }
sayMy();
}
sayMyName();
