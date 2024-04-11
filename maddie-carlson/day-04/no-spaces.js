function noSpace(x) {
  // parameter is x, which is a string
  // should return another string with any and all spaces removed
  // this can be accomplished by replacing all spaces with an empty string with replaceAll()
  return x.replaceAll(" ", "");
}

/*
  Ember's Feedback:
  Great job!
  Good use of replaceAll
  it will iterate over your string and every time it finds the first parameter,
  it will replace it with the second parameter. It builds up a new string and returns it to you.
*/
