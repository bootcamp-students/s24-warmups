function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': return result = value.a + value.b;
    case'-': return result = value.a - value.b;
    case'/': return result = value.a / value.b;
    case'*': return result = value.a * value.b;
    case'%': return result = value.a % value.b;
    case'^': return result = Math.pow(value.a, value.b);
    console.log(result)
  }
  return result;
  console.log(result)
}

//figure out why the result is not working. 
//isolate first statement and go from there. 
//need to add return