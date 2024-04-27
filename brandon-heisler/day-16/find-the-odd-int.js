function findOdd(A) {
  "use strict"
  
  const counter = {};
  
  A.forEach (ele => {
    if (counter[ele]) {
      counter[ele] += 1;
    }else{
      counter[ele] = 1
    }
  })
  console.log("counter", counter)
  
  for (let x in counter){
   if(counter[x] % 2 !== 0) return Number(x)
   };
  
}

/*
my idea is to take the array and make a counter to sort it into an object of numbers.
the object should show how many times each number appears.
then i want to go through each index of the object and if the count of the number isnt divisible
by 2 then its my culprit, then return it.
