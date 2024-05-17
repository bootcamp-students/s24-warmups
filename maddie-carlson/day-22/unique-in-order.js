var uniqueInOrder = function (iterable) {
  //function takes a var that could be either an array OR a string
  //needs to return an array without any identical values next to each other, otherwise in the order that they came in

  //first check our types
  if (typeof iterable == "string") {
    iterable = iterable.split("") // get an array
  }

  //and check if the array is empty
  if (iterable.length == 0) {
    return [] //empty array case
  }

  //to solve, first make a new array and a counter to track our location in that array
  //then, loop over our first array, adding any unique, non-adjacent elements to our new one
  let new_array = []
  let j = 0
  new_array.push(iterable[0]) //push the first element, always

  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] != new_array[j]) {
      new_array.push(iterable[i])
      j++ //second counter
    }
  }

  //then return
  return new_array
}

/*
  Ember's Feedback:
  - Good job!
  - I was confused on why you needed J but I see you did it so you don't go
    try to access an index that doesn't exist. I know we talked about it in the
    whiteboard practice just putting it here again. JS doesn't throw an out-of-
    bounds error it will simply return undefined.
  - Line 17 could be new_array = [iterable[0]];
*/
// Alternative Solution
// Here is how you would tailor your approach based on the input type
var uniqueInOrder = function (iterable) {
  // I need to handle mixed input
  switch (typeof iterable) {
    case "string":
      // a solution from a previous kata, remove adjacent duplicates in a string
      return iterable.replace(/(.)\1+/g, "$1").split("");
    case "object":
      // iterate over the input array
      return iterable.reduce((accumulator, currentValue, index, array) => {
        // remove adjacent duplicates, respecting case sensitivity
        if (currentValue !== array[index + 1]) {
          accumulator.push(currentValue);
        }
        return accumulator;
      }, []);
  }
};
/*
    PRECEPT
    Params - string | number[] | string[]
    Returns - string[] | number[]
    Example - 'AAAABBBCCDAABBB' => ['A','B','C','D','A','B']
    Concerns - using the wrong method on the wrong input
    Explain -
        I need to iterate over the input and remove adjacent duplicates, -
        respecting case sensitivity.
        Don't reorder the elements.
    Positive self talk - I have solved a similar katas before.
    Translate - I will put my logic lego pieces as inline comments.
*/
/*
  Regex explanation:
  (.)\1+
  1st Capturing Group (.)
    . matches any character (except for line terminators)
  \1 matches the same text as most recently matched by the 1st capturing group
  + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
  in .replace, you give the "$1" meaning replace everything in the match with what was in the first capture group
  aaaaaaaaaaaaaaaaaaaaaaa => a
  (a) is captured, so all the a's are replaced with just the 1st a :P
*/
