function callMe() {
  var lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}


function crazy() {
  // declaration and assignment need to be before function call
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  thisIsCrazy();
}

function sayMyName() {
  var name = "Cricky";
  sayMy();

  // this works because the entire function is hoisted.
  function sayMy() {
    var name = "Kristin";
    console.log(name);
  }
}
