function callMe() {
  var lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
  //var lyric = "maybe";                        //this should be at the top so that lyric the variable is defined before it is called for in return
}


function crazy() {
  // fix the code in here:
  //thisIsCrazy();                                //this needs to be after the variable thisIsCrazy is defined because hoisting the variable thisIsCrazy doesn't carry with it the funciton inside it

  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  thisIsCrazy();
}

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  sayMy();

  function sayMy() {
    var name = "Kristin";
    console.log(name);
    //var name = "Kristin";                       // variable needs to be defined before console.log calls for name. In the nested function saymy, name is hoisted and undefined even though it was previously defined in sayMyName as Cricky
  }
}
