'use strict';

const chai = require('chai')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
const spies = require('chai-spies')

chai.use(spies)

const expect = chai.expect

function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
  var lyric = "maybe";
}

function('hoisting') {
  jsdom({src: fs.readFileSync(path.resolve(__dirname, '..', 'hoisting.js'), 'utf-8')})
}

function('callMe') {
  return('maybe');
    callMe() // "maybe"
}

function('loggers') {
  function(beforeEach()) {
    chai.spy.on(console, 'log')
  }
}

function(afterEach()) {
  console.log.reset()
}

function crazy() {
  function('crazy') {
   console.log("hey!!!")
  thisIsCrazy();
  var thisIsCrazy = function (){
  }
 }
}
function sayMyName() {
  function('sayMyName') {
    console.log("Kristin")
  }
 }
}
  var name = "Cricky";

  sayMy();

  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
