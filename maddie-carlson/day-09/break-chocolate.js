function breakChocolate(n,m) {
  //takes two numbers describing the width and length of a chocolate bar 
  //returns how many times the chocolate to reduce it into 1x1 chunks
  //needs to return zero if anything weird is sent in
  
  if (!n || !m) { //falsey vars return 0
    return 0;
  }
  
  if (n == 1 && m == 1) { //single unit chocolate already
    return 0;
  }
  
  //should be able to solve the problem by multiplying n * m - 1 to get the breaks
  return (n * m) - 1;
}
