
function callMe() {
  var lyric = "maybe";//declare and assign variable before return
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}


function crazy() {
  // fix the code in here:
  var thisIsCrazy = function (){
    console.log("hey!!!")//moved var above call, could probably just remove var and declare function
  }
  thisIsCrazy();
}

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";
  sayMy();
  function sayMy() {
    var name = "Kristin";//moved var name up, should return Kristin
      console.log(name);
  }
}
