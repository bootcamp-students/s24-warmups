function findUniq(arr) {
  const count = {};
  for (let ele of arr){
    if (count[ele]){
      count[ele] +=1
    }else{
      count[ele] =1
    }
  }
  console.log(count)
  
  for (let key in count){
    if (count[key] === 1){
      console.log("key", key)
      
      return parseFloat(key)
    }
  }
  
}
/*
im given an array, i need to return the one unique number in the array.
i need a loop to go over each index
maybe i could set up 2 variables and count each time a number appears
and assign it to the variables.
the one with least is the one that i need to return

i have an object with each key representing the array number
and a value of how many times they appear
loop over each object index
if the value === 1 return the key
i kept ending up with key being the number in quotes
had to find parseInt, which eventually led me to parseFloat

*/
