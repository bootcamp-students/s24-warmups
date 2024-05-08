function pigIt(str){
  "use strict"
  let pigWordArray = str.split(" ")
  let finishedString = ""
  

  for (let i = 0; i < pigWordArray.length; i++){
    let word = pigWordArray[i]
    let pigWord = ""
    
    for (let j = 0; j < word.length; j++){
      let char = word[j]
      
      if (/[a-zA-Z]/.test(char)){
        let pigLetterArray = word.slice(j).split("")
        pigLetterArray.push(pigLetterArray.shift())
        pigLetterArray.push("a", "y")
        pigWord += pigLetterArray.join("")
        break;
      }else{
        pigWord += char;
      }
    }
    finishedString += pigWord + " "
  }
return finishedString.trim()
}
/*
im given a string, i need to change it so that its in pig latin, ignoring
punctuation.
this means i need to take the 1st letter of a word and add it to the
end of the word, and add "ay" after that. pig = igpay
1st I need to make it changeable. so make it into an array
ill loop over the array to break it into words,
then loop over the words' individual cahracters.
if the character is a letter then move the first letter of the word to the end
add the a and y and make it back into a string then break the loop.
account for punctuation.
rejoin it all together and return
*/
