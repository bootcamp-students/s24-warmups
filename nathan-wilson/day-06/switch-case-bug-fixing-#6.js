function evalObject(value) {
  var result = 0;
  console.log(value.a + value.b);
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
// I could refernce the wrong value, I could return the wrong type of value. I could have a syntax error
// I take the operation and compare different cases of what it could be. For each operation case
// I will perform the actual calculation and return the result
// I can do this! The framework is already created I just have to correct it!
