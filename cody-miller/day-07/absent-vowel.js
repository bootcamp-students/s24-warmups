function absentVowel(x) {
  let whichMissingVowel = null;
  let vowelArray = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < vowelArray.length; i++) {
        if (!x.includes(vowelArray[i])) {
            whichMissingVowel = i;
        }
    }return whichMissingVowel;
}

/* let string = whichMissingVowel.includes(x);
   if string = false, match missing letter with vowelArray index;
      vowelArray.values(x) === whichMissingVowel.includes (x);
      return vowelArray[x];
*/
