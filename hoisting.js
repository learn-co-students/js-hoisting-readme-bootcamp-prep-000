function callMe() {
  var lyric;
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  lyric = "maybe";
  return lyric;
}

function crazy() {
  // fix the code in here:
  var thisIsCrazy = function (){
    console.log("hey!!!");
  }
  thisIsCrazy();
}

/*
function crazy() {
  // fix the code in here:
  var thisIsCrazy;
  thisIsCrazy = function() {
    console.log("hey!!!")
  }
  function();
}


function sayMyName() {
  // fix the code in here:
  // var name = "Cricky";
  var name
  function sayMy() {
    console.log(name);
  }
  name = "Kristin";
  sayMy();
}
*/
function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  sayMy();

  function sayMy() {

    name = "Kristin";
    console.log(name);
  }
}
