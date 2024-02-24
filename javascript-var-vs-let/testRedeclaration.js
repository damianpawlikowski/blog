function testRedeclaration() {
  var testVar = "";
  var testVar = "I'm var!";
  console.log(testVar); // I'm var!

  let testLet = "";
  let testLet = "I'm let!"; // SyntaxError: Identifier 'testLet' has already been declared
  console.log(testLet);
}

testRedeclaration();
