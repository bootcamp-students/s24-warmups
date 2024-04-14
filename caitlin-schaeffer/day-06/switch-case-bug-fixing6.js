/*
Params: Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
Return: The evaluated string as a number
Problems: The eval() function evaluates JavaScript code represented as a string and returns its
completion value. The source is parsed as a script. However it says to never use this!
Solution: add breaks
Given Code:
function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
    case'-': result = value.a - value.b;
    case'/': result = value.a / value.b;
    case'*': result = value.a * value.b;
    case'%': result = value.a % value.b;
    case'^': result = Math.pow(value.a, value.b);
  }
  return result;
}
*/

// I think maybe it's just missing break statements? I think right now the code may not be evaluating
// everything as it's own function? will try to add break statements to see if that works:
// breaks basically push it to the next statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
// I think the other option would be to take away the equal sign after result and replace with a colon
// or to simplify the code to like '+': (a, b) = a + b,?

function evalObject(value) {
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
  }
  return result;
}

/*
  Ember's Feedback:
  - Great job! Killing it!
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
