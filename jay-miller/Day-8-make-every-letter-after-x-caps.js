var makeEveryLetterAfterXCaps = function (str, letter) {
  let letterArray = str.split('');
  for (let i = 0; i < letterArray.length -1; i++) {
    if (letter === letterArray[i]) {
      letterArray[i + 1] = letterArray[i + 1].toUpperCase();
    }
   }
   return letterArray.join('');
};
