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
