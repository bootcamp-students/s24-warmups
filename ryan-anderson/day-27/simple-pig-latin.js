function pigIt(str){
    function pigify(word) {
      let punct = ['.', '?', '!']
      if (!punct.includes(word)) {
     word = word.slice(1, word.length) + word[0] + 'ay'
        }
      return word
    }
    let newStr = (str.split(' ')).map(word => pigify(word))
    return newStr.join(' ')
  }
  
  // split string at spaces
  // slice each word at first letter, add it back to end and add 'ay'
  // if word is a punctuation mark, do nothing to it