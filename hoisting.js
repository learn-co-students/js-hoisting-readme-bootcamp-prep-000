function callMe() {
  var lyric;
  lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}


function crazy() {
  // fix the code in here:
  return function thisIsCrazy(){
    console.log("hey!!!");
  }
}crazy()();



function sayMyName() {
  // fix the code in here:
  var name = "Cricky";
  return function sayMy() {
    var name = "Kristin";
    console.log(name);
  }
} sayMyName()();
