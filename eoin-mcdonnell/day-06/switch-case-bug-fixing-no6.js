function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case '+': return result = value.a + value.b;
    case '-': return result = value.a - value.b;
    case '/': return result = value.a / value.b;
    case '*': return result = value.a * value.b;
    case '%': return result = value.a % value.b;
    case '^': return result = Math.pow(value.a, value.b);
  }
  return result;
}

// figure out why the result is not working.
// isolate first statement and go from there.
// need to add return

/*
  Ember's Feedback:
  - Good solution, good pseudo code!
  - rename this file using the class file naming convention of dashes instead of underscores
*/
