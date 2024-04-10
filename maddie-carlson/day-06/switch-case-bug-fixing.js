function evalObject(value){
  //the problem with this function is that it's missing break; to end the evaluation after each case, fixing it is as simple as adding those
  
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
      break;
    case'-': result = value.a - value.b;
      break;
    case'/': result = value.a / value.b;
      break;
    case'*': result = value.a * value.b;
      break;
    case'%': result = value.a % value.b;
      break;
    case'^': result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}
