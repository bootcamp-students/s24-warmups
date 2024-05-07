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
    let punctuation = '! " # $ % & ( ) * + , - . / : ; ? @ [ \ ] ^ _ ` { | } ~ '
    let words = str.split(' ')
    // this splits every word up into an array of words, doing words[1] returns the element at that index
    console.log('words:', words)
    console.log('word index:', words[1])
    // this first slices off the first letter of every word, then it supplies the first letter of every word to the end of the word and then it adds 'ay'
    // in the if/else, we first check to make sure that the word does not include a punctuation mark, but we have to return word in the else to include punctuation
    let pig = words.map(word => {
        if (!punctuation.includes(word))
        {return word.slice(1) + word.charAt(0) + "ay"}
        else {
        return word
        }
    })
    console.log('pig:', pig)
    return pig.join(' ')
    
  }