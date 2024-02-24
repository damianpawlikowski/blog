function testScope() {
  if (true) {
    var testVar = "I'm var!";
    let testLet = "I'm let!";
  }

  console.log(testVar); // I'm var!
  console.log(testLet); // ReferenceError: testLet is not defined
}

testScope();
