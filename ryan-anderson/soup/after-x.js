// Example 1, strings are immutable so make an array
// Eoin
var makeEveryLetterAfterXCaps = function (str, letter) {
    let arr = str.split("")

    for (let char in arr) {
        // char is the index of hte array, and is a string
        // must stop 1 element early to prevent an error
        if (arr[char] === letter && Number(char) < arr.length - 1) {
            arr[Number(char) + 1] = arr[Number(char) + 1].toUpperCase()
        }
    }

    return arr.join("")
}
// similar, Jacinta
var makeEveryLetterAfterXCaps = function (str, letter) {
    let letterArray = str.split('');
    for (let i = 0; i < letterArray.length - 1; i++) {
        if (letter === letterArray[i]) {
            letterArray[i + 1] = letterArray[i + 1].toUpperCase();
        }
    }
    return letterArray.join('');
};

// Example 2, strings are immutable so build up a new string
var makeEveryLetterAfterXCaps = function (str, letter) {
    let modifiedString = "";
    let capitalizeNext = false;
    for (let i = 0; i < str.length; i++) {
        let sub = str.at(i);
        if (capitalizeNext) {
            sub = sub.toUpperCase()
        }
        capitalizeNext = sub === letter
        modifiedString = modifiedString + sub
    }
    return modifiedString;
}

// Did anyone have different approaches? Approaches that failed and why did they fail?

// In this example it is looking behind instead of looking ahead
// faletru on codewars
var makeEveryLetterAfterXCaps = function (str, letter) {
    const arr = str.split('');
    for (let i = 1; i < arr.length; i++)
      if (arr[i-1] == letter)
        arr[i] = arr[i].toUpperCase();
    return arr.join('');
  }
