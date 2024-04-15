function evalObject(value) {
  let result = 0;
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

// switch statements need breaks in them, otherwise they will run all
// of the switches. im assuming that timmy wants one switch to run at a
// time, otherwise, why use a switch. ill add breaks and see what happens.
// it worked.

/*
  Ember's Feedback:
  - Lets goooooooooooooooooo!!!! Great job!
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
