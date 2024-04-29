function spinWords(string) {
  let splitString = string.split(" ");
  console.log("1: ", splitString)

  let mappedString = splitString.map((x) => {
    if (x.length >= 5) {
      console.log(x)
      return x.split("").reverse().join("");
    }
    console.log("2: ", x);
    return x;
  });
  console.log("3: ", mappedString);
  console.log("4: ", mappedString.join(" "));
  return mappedString.join(" ");
}

/*
We receive a string.
  Use string methods.

I need to check to see if each word in the string is 5 letters or longer.
  Have to iterate. So maybe map over apply an equation/condition.

If the word is longer than 5 letters, it needs to be reversed.
  Use the reverse method built in.

String should be put back together and returned.
  Use join method.
*/