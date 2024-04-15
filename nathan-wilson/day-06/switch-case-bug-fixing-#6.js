function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case '+':
      return (result = value.a + value.b);
    case '-':
      return (result = value.a - value.b);
    case '/':
      return (result = value.a / value.b);
    case '*':
      return (result = value.a * value.b);
    case '%':
      return (result = value.a % value.b);
    case '^':
      return (result = Math.pow(value.a, value.b));
  }
  return result;
}

// one parameter that is an object with 3 key/value pairs first 2 are operands 3rd is an operator.
// It wants us to return a number
// {a:1,b:1,operation:'+'}), 2
// I could reference the wrong value, I could return the wrong type of value. I could have a syntax error
// I take the operation and compare different cases of what it could be. For each operation case
// I will perform the actual calculation and return the result
// I can do this! The framework is already created I just have to correct it!

/*
  Ember's Feedback:
  - YEEESSSS excellent job! Pseudo code is on POINT
  - In your solution, if .operation doesn't match anything in the switch case you return 0.
    In my solution, if nothing matches it reaches the end of the function and returns undefined by default.
    Neither is better or worse, I just wanted to make the difference known if you are curious.
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
