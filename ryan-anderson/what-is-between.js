function between(a, b) {
    // initialize array containing output numbers
    // for loop to add each number to array
    let numbersBetween = [a];
    for (i = 1; i <= (b - a); i++) { 
      numbersBetween[i] = numbersBetween[i-1]+1;
    }
    return numbersBetween
  }