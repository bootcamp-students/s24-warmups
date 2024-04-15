const absentVowel = (string) => {
  const vowelArray = ['a', 'e', 'i', 'o', 'u'];
  let vowelObj = {};

  for (let i = 0; i < string.length; i++) {
    vowelObj[string[i]] = true;
  }

  for (let j = 0; j < vowelArray.length; j++) {
      if(vowelObj[vowelArray[j]] === undefined) {
          return j;
      }
  }
}
