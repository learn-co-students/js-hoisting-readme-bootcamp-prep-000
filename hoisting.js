function callMe() {
  var lyric;
  lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");

  return lyric;
}


// function crazy() {
//   // fix the code in here:
//   thisIsCrazy();
//   var thisIsCrazy = function (){
//     console.log("hey!!!")
//
//   }
// }

function crazy() {
  var thisIsCrazy;
  thisIsCrazy = function() {
    console.log("hey!!!")
  }
  thisIsCrazy();
}

// function sayMyName() {
//   // fix the code in here:
//   var name = "Cricky";
//
//   sayMy();
//
//   function sayMy() {
//     console.log(name);
//     var name = "Kristin";
//   }
// }

function sayMyName(){
  var name;
  name = "Cricky"

  function sayMy() {
    var name;
    name = "Kristin";
    console.log(name);
  }
  sayMy();
}
