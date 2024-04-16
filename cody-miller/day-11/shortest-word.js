function findShort(sentence) {
  let words = sentence.split(" ");
  let answer = words.reduce((acc, curr) =>
    acc.length < curr.length ? acc : curr
  );
  return answer.length;
}
/*
We know it will be a string of words.
We know they will be strings.
Separate by " ",
Find the length of the array.
Return the shortest one.
*/
