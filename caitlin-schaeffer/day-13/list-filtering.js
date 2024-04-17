/*
Instructions: In this kata you will create a function that takes a list of non-negative 
integers and strings and returns a new list with the strings filtered out.
Params: given array that contains integers and strings
Return: integer only array
Example: filter_list([1,2,'a','b']) == [1,2]
Solution: 

Given Code: 
function filter_list(l) {
  // Return a new array with the strings filtered out
}
*/

function filter_list(l) {
    // console.log(l)
    //   console.log(l.map(Number))
      let filteredList = l.filter((Number)
        (Number.isNaN(l)))
      console.log(filteredList)
      return filteredList
    }

// this returns numbers but it doesn't return 0 
// maybe this instead?
function filter_list(l) {

    function zeroCheck(element){
      if (element === 0){
        return 0
      }
    }
      console.log(l)
    console.log(l.map(Number))
    let filteredList = l.filter(Number)
    console.log(filteredList)
    
    return filteredList
    
  }



