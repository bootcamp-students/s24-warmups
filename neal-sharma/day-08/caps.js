/* precept
parameters- make letter after selected letter capital
return- string with modified letters
example- ('aaaa', 'a') will result into "aAaA"
concerns- this one was really tough. I would feel like i was close but then fail the next test.
finally got it with help.
positive self talk- BELIEVE IT
explain- this one made my brain tired. see comments below
translate-
*/

var makeEveryLetterAfterXCaps = function (str, letter) {
  // Initialize an empty string to store the modified result
  let result = "";
  // Initialize a boolean variable to track whether the next letter should be capitalized
  let capNext = false;

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Get the current character
    let currentChar = str[i];

    // If capitalizeNext is true, capitalize the current character
    if (capNext) {
      currentChar = currentChar.toUpperCase();
    }

    // Check if the current character is the target letter
    capNext = currentChar === letter;

    // Append the current character (possibly capitalized) to the result
    result += currentChar;
  }

  // Return the modified result
  return result;
};

/*
  Ember's Feedback:
  - Excellent! :D
  - Really great job, this is also how I solved it
*/
