//split items from the iterable list
//make sur the itesm are splice int sea
//apparently they do not need to be split, won't work with integers
//iterate throuhgh and fint te current character if it is not eay push , set char as current har

var uniqueInOrder=function(iterable){
    const arr = []
    let currentChar;
    //iterable.split("")
    for(const char of iterable){
      if (char != currentChar){
        arr.push(char)
        currentChar = char;
      }
    }
    return arr;
  }