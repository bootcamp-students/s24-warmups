function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0){
        return true;
  }
  else{
    return false;
  }
}
/*
im given a number and need to see if its divisible by 2 other numbers, x and y.
i can write an if statement to compare compare the remainders of each, if
both = 0 then return true, else return false.

*/
