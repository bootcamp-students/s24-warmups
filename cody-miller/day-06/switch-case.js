function evalObject(value) {
  var result = 0;
  switch(value.operation){
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

/* I don't think that value.operation is a valid method.
   I will need to find a valid method that checks for an operator.
   Use the include() method.
      it will have to return its parameter in order to go through the cases.
   Nevermind. It is a valid method, Breaks were just needed to separate cases.
*/

/*
  Ember's Feedback:
  - Great job! :D
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
