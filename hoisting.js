var lyric = "maybe";
function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
  //Move to global -> var lyric = "maybe";
}

callMe(); //Make the function call

function crazy() {
  // fix the code in here:
  //Move out of this part of function --> thisIsCrazy();

  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  thisIsCrazy(); //move to here
}

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";
  var name = "Kristin"; //Moved this variable up from function sayMy()
  // move the function call like the one before ---> sayMy();

  function sayMy() {
    console.log(name);

  }
  sayMy(); //move here
}
