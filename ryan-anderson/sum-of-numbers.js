function getSum(a, b)
{ let s = 0; //Creates sum variable to store sum over each iteration
 if (a == b) { //if the two numbers are the same, return that number
  s = a;
  } else if (a < b) { 
      for (let i = a; i <= b; i++)  //iterates on each number in the test array
      s += i; //add each number to the stored sum of all previous numbers
    } else if (a > b){
      for (let i = b; i <= a; i++)
       s += i;
    }
 return s //the test compares the first output to the exptected output, so the sum must be stored and not returned until the very end
}