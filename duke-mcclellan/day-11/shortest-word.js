//parameters - String 
//return - a number of the shortest word 
//example - if statement/for loop to cycle through the words. 
//concerns - selecting the wrong method
//explain - I believe that I can loop through the words and return the value of the shortest word using that.
//positive self-talk - You can do it! 


function findShort(s){
  
  // Split the string into an array of words
    const words = s.split(/\s+/);

    // Initialize variables to keep track of shortest word and its length
    let shortestWord = words[0];
    let shortestLength = shortestWord.length;

    // Iterate over each word in the array
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        // Check if the current word is shorter than the shortest word found so far
        if (word.length < shortestLength) {
            shortestWord = word;
            shortestLength = word.length;
        }
    }

    // Return the length of the shortest word
    return shortestLength;
}

