function breakChocolate(n,m) {
  if (n==0 || m==0) {
    return 0;
  }
  return n * m -1;
}

//P create a function where it will return the number of breaks needed for the candy bar.
// R the data needed is taking n * m and subtracting 1 to get the number of breaks.
// an Example (5, 5), 24. or (1, 1), 0 
//C i could messed up if i dont do the math correctly or if i don't understand the problem to my best ability.
//Explain I would take 5 * 5 which will give me 25. i would subtract 1 from 25 to get 24.
//Explain I would take 1 * 1 which will give me 1. i would subtract 1 from 1 to get 0. 
