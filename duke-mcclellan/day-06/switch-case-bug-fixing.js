//syntax needs to be corrected
//debug

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b
      break;
    case'-': result = value.a - value.b
      break;
    case'/': result = value.a / value.b
      break;
    case'*': result = value.a * value.b
      break;
    case'%': result = value.a % value.b
      break;
    case'^': result = Math.pow(value.a, value.b);
  }
  return result;
}
