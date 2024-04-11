/*precept
parameters-Change every letter after X to a capital
return-return the string with all letters after x into a capital
example-makeEveryLetterAfterXCaps('aaaa', 'a') will result into "aAaA"
concerns- This one seems complicated
really struggled with this one. But eventually got there. Thanks to help.
explain- first checks if string or letter are not strings. if not return empty string. Then split
str into an array of characters for manipulation. then we look for the letter in the array. if the
letter is not found we return the string unchanged. then iterate over the over the array w/ flag
(capsNext) to indicate if the letter should be capitalized. When encountering a letter after the 
specified letter, it capitalizes it if the capsNext flag is set to true. we then join the array
with the modifications and return it. PHEW!
positive self talk- BELIEVE IT
translate- see comments below 
*/

let makeEveryLetterAfterXCaps = function (str, letter) {
    // Function to capitalize letters after a given letter in a sentence
    
    // Guard clause to check if inputs are strings
    if (typeof str != "string" || typeof letter != "string") {
      // Return empty string if inputs are not strings
      return "";
    }
    
    // Split the sentence into an array of characters
    let arr = str.split("");
    
    // Find the index of the given letter in the array
    let index = arr.indexOf(letter);
    
    // Guard clause to handle case when the given letter is not found in the sentence
    if (index == -1) {
      // Return the original sentence if the given letter is not found
      return str;
    }
    
    let capsNext = true; // Flag to track if the next letter should be capitalized
    
    // Loop over the array starting from the index of the given letter
    for (let i = index + 1; i < arr.length; i++) {
      // Check if the next letter should be capitalized
      if (capsNext) {
        // Capitalize the current letter
        arr[i] = arr[i].toUpperCase();
        
        // Reset the flag after capitalization
        capsNext = false;
      }
      
      // Check if the current letter is the same as the given letter
      if (arr[i] == letter) {
        // Set the flag to capitalize the next letter
        capsNext = true;
      }
    }
    
    // Recombine the array into a string
    str = arr.join("");
      
    // Return the modified sentence
    return str;
  }