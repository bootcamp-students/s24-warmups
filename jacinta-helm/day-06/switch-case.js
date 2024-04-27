function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case '+':
      result = value.a + value.b;
      break;
    case '-':
      result = value.a - value.b;
      break;
    case '/':
      result = value.a / value.b;
      break;
    case '*':
      result = value.a * value.b;
      break;
    case '%':
      result = value.a % value.b;
      break;
    case '^':
      result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

// fix Timmy's equation
// look up switch statements
// use switch statement functions to fix his function.
// add in breaks and correct formatting.

/*
  Ember's Feedback:
  - Good solution.
  - use let or const, var has odd behavior you can avoid if
    you just use the two block scope variables
*/
// Alternate solution
function evalObject(value) {
  switch (value.operation) {
    case '+': return value.a + value.b;
    case '-': return value.a - value.b;
    case '/': return value.a / value.b;
    case '*': return value.a * value.b;
    case '%': return value.a % value.b;
    case '^': return Math.pow(value.a, value.b);
    default: return 0;
  }
}
