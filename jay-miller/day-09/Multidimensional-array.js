function getElement(array, indexes) {
  let currentIndex = array
  for (const index of indexes) {
    currentIndex = currentIndex[index];
  }
  return currentIndex;
}
/*
  Ember's Feedback:
  - Great job!
  - Add pseudo code, this was a hard one and it leverages
    nested arrays so make sure you know this well enough to
    communicate it
*/
