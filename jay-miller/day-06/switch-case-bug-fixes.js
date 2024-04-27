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
/*
  Ember's Feedback:
  - Good job!
  - Add some pseudocode for the practice
  - I think that technically you should add a default case to return zero
    if you go look at the prompt you will see what I mean
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
