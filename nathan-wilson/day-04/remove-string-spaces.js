function noSpace(x) {
  return x
    .split('')
    .filter((letter) => {
      return letter != ' ';
    })
    .join('');
}

// takes a string with a lot of spaces
// Expects a string without spaces
// '8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB'
// I could use the wrong method or overcomplicate it
// split x then filter out spaces then join it

/*
  Ember's Feedback:
  Great job!
  The only thing I would consider doing differently is that if you split on empty space,
  you can remove the filtering because it will join back together for you without spaces.
*/
// Alternative solution
function noSpace(x) {
  return x.split(' ').join('');
}
