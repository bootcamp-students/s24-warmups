function findShort(s) {
  //function takes a string "s" and returns the length (a number) of the shortest word in that string
  //"string will never be empty and you do not need to account for different data types", apparently
  
  //start by splitting the string via its spaces into an array to identify words
  let array = s.split(" ")
  let shortest = 1000
  
  //then iterate over that array in a loop, checking the length of each word and storing the smallest value found
  for (let i = 0; i < array.length; i++) {
    if (array[i].length < shortest) {
      shortest = array[i].length
    }
  }
  
  //return smallest value
  return shortest
}
