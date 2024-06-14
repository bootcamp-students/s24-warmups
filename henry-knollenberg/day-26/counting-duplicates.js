/* P - text, TEXT, array
    R - number of duplicates

    TEXT = text.UpperCase()
    array = TEXT.split()
    sortedArray = array.sort()
    iterate through array
    if letter has appeared before and current letter doesn't equal letter, add to accumulator
    set letter
    return accumulator
    */

function duplicateCount(text) {
  let TEXT = text.toUpperCase();
  let array = TEXT.split("");
  let sortArr = array.sort();

  let lastLetter = "";
  let appearedTwice = true;
  let acc = 0;

  sortArr.forEach((letter) => {
    if (appearedTwice === false && lastLetter === letter) {
      acc++;
      appearedTwice = true;
    } else if (lastLetter !== letter) {
      appearedTwice = false;
    }
    lastLetter = letter;
  })
  return acc
}

/*
  Ember's Feedback:
  - Great job!
*/
// Alternative Solution
function duplicateCount(text) {
  const count = {};
  for (let i = 0; i < text.length; i++) {

      let character = text.charAt(i).toLowerCase();
      if (count[character]) {
          count[character]++;
      } else {
          count[character] = 1;
      }
  }

  return Object.values(count).filter(x => x > 1).length
}
