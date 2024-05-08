function pigIt(str){
    //Code here
    //declare variables
    let newArr = [],
        //split the words up
        strArr = str.split(" ")
    //iterate over the words in the array
    strArr.forEach(x => {
      let wordArr = x.split("")
      wordArr.push(wordArr[0], 'ay'), wordArr.shift()
      //avoid punctuation
      if (x === "!" || x === "?" || x === "."){
        newArr.push(x)
      } else {
        newArr.push(wordArr.join(""))
      }
    })
    return newArr.join(" ")
  }