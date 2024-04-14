//syntax needs to be corrected
//debug

function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case '+': result = value.a + value.b
      break;
    case '-': result = value.a - value.b
      break;
    case '/': result = value.a / value.b
      break;
    case '*': result = value.a * value.b
      break;
    case '%': result = value.a % value.b
      break;
    case '^': result = Math.pow(value.a, value.b);
  }
  return result;
}
/*
  Ember's Feedback:
  - Great job :D
  - The pseudocode here should be more like, "this syntax is broken because it is missing break statements."
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
