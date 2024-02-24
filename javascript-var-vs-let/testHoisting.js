function testHoisting() {
  console.log(testVar); // undefined
  var testVar;

  console.log(testLet); // ReferenceError: Cannot access 'testLet' before initialization
  let testLet;
}

testHoisting();
