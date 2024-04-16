function findShort(s) {
  let words = s.split(' ');
  return words.reduce((acc, cur) => {
    return Math.min(acc, cur.length);
  }, Infinity);
}

//s is a string

// expecting me to return the shortest words length inside of the string

// "bitcoin take over the world maybe who knows perhaps"), 3

// I could have a type error. I could get the length of the word wrong

// Take the string. Split it into its original words, get the length of all of
//them individually, check which is shortest, then return that number

// Im confident I can do this!
