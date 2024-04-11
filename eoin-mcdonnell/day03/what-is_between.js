function between(a, b) {
    // your code here
    arr = []
    let i = a;
    while (b>=i){
      arr.push(i)
      i++,
      console.log(arr)
    }
    return arr;
      
  }
  
  // array lenght is b-a + 1 
  // iterate for array lenghth for numbers between a and b
  // 4- 1 = 3 + 1
  // 10, 15 would be 10 11 12 13 14 15  15-10=5 + 1 = 6
  // a 