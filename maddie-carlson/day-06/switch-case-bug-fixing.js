function evalObject(value) {
  //the problem with this function is that it's missing break; to end the evaluation after each case, fixing it is as simple as adding those

  var result = 0;
  switch (value.operation) {
    case '+': result = value.a + value.b;
      break;
    case '-': result = value.a - value.b;
      break;
    case '/': result = value.a / value.b;
      break;
    case '*': result = value.a * value.b;
      break;
    case '%': result = value.a % value.b;
      break;
    case '^': result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

/*
  Ember's Feedback:
  - Great job!
  - Good pseudo code
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
  }
}
