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

/* I dont think that value.operation is a valid method.
   I will need to find a valid method that checks for an operator.
   Use the include() method.
      it will have to return its parameter in order to go through the cases.
   Nevermind. It is a valid method, Breaks were just needed to separate cases.
*/