function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case '+':
      result = value.a + value.b;
      break
    case '-':
      result = value.a - value.b;
      break
    case '/':
      result = value.a / value.b;
      break
    case '*':
      result = value.a * value.b;
      break
    case '%':
      result = value.a % value.b;
      break
    case '^':
      result = Math.pow(value.a, value.b);
      break
  }
  return result;
}

/*
  Ember's Feedback:
  - Write some pseudocode! Write in here what you mentioned in standup about your aha moment understanding 'fall through' behavior
  - Good solution.
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
