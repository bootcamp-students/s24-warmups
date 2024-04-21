function filter_list(l) {
  console.log('l', l);
  return l.filter(item => typeof item !== 'string');

}


//P create function that returns a new list with the strings filtered out. 
//R my function should return a new list without the strings 
//Example ([1, 2, 'a', 'b']) = [1, 2]
//Concerns there are no strings to remove.
//Explain, i can use a filter method and type of method to filter out types of strings


