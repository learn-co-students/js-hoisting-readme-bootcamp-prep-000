function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
    var lyric = "maybe";
  return lyric; //so I need to hoist lyric to the top?

}


function crazy() {
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }  // fix the code in here:
  thisIsCrazy();


}

var name = "Kristin";
function sayMyName() {
  function sayMy() {
    console.log(name);

  }
  // fix the code in here:


  sayMy();



}
