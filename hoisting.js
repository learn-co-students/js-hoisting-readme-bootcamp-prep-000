function callMe() {
  var lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}
callMe();


function crazy() {
  function thisIsCrazy() {
    console.log("hey!!!");
  }
  thisIsCrazy();
}
crazy();

function sayMyName() {
  var name = "Cricky";
  function sayMy() {
    name = "Kristin";
    console.log(name);
  }
  sayMy();
}
sayMyName();
