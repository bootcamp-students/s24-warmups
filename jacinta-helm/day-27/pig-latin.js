function pigIt(str) {
    return str.replace(/(\w+)|(\W+)/g, function (match, word, punctuation) {
      if (word) {
        return word.slice(1) + word[0] + "ay";
      } else {
        return punctuation;
      }
    });
  }
  