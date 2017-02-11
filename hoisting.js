// function callMe() {
  // console.log("I just met you...");
  // console.log("and this is crazy..");
  // console.log("but here's my number..");
  // console.log("so call me");
  // return lyric;
  // var lyric = "maybe";
// }

function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  var lyric = "maybe";
  return lyric;
  // var lyric = "maybe";
}


// function crazy() {
  // fix the code in here:
  // thisIsCrazy();

  // var thisIsCrazy = function (){
    // console.log("hey!!!")
  // }
// }
var thisIsCrazy = () => {
  console.log("hey!!!")
}
var crazy = () => thisIsCrazy()

// function sayMyName() {
  // fix the code in here:
  // var name = "Cricky";

  // sayMy();

  // function sayMy() {
    // console.log(name);
    // var name = "Kristin";
  // }
//}

var sayMyName = () => {
  var name = "Cricky";
  sayMy = () => {
    var name = "Kristin";
    console.log(name);
  }
  return sayMy();
}
