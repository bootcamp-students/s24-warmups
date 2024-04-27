function spinWords(string){
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++){
    
    if(words[i].length >= 5){
        words[i] = words[i].split("").reverse().join("");
  
    }
  }
 
  return words.join(" ");
}

//use split()
// create var for words = to string
// use reverse() method 
// words[i] to access each word in the array 
// create a for loop
// return words.join
