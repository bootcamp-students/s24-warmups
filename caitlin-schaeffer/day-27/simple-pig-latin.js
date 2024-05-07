/*
Instructions: Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples: pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
Params: string
Return: string
Concerns: make a copy or mutate the original? 
Solution: 

Given Code: 
function pigIt(str){
  //Code here
}
*/

function pigIt(str){
    let words = str.split(' ')
    // this splits every word up into an array of words, doing words[1] returns the element at that index
    console.log('words:', words)
    console.log('word index:', words[1])
    // this first slices off the first letter of every word, then it supplies the first letter of every word to the end of the word and then it adds 'ay'
    let pig = words.map(word => {
       return word.slice(1) + word.charAt(0) + "ay"
    })
    console.log('pig:', pig)
    return pig.join(' ')
    
  }