var uniqueInOrder=function(iterable){
  console.log(iterable)
  let result = [];
  let last 

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push( last = iterable[i])
    }
  }
    return result;
}


//P create a function that returns a list of items without any elements with the same value.
//R my function should return a new array with elements that dont repeat each other.
//Example ('AAAABBBCCDAABBB'), ['A','B','C','D','A','B']
//Concerns there are no repeated values in the array.
//Explain I can just create a variable for result and last. Use Push method iterating over my array, the indexes. and comparing to the last element.
// making sure that the Index value doesnt equal the last element. 
