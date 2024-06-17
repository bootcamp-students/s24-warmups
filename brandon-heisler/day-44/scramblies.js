function scramble(str1, str2) {
    
    let charCount = {};
    
    
    for (let char of str1) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    console.log(charCount)
    
    for (let char of str2) {
        if (!charCount[char] || charCount[char] <= 0) {
            return false;
        }
        charCount[char]--;
    }
    
    return true;
}
// would be simpler in python with Counter. that being said, we just need to count the letters
// in str1 and compare to str2, if they match then we return true. if the quantity of letters
// is different in any way then we return false.
// ill store the letters in an object with their counts.
// then compare letters and counts against each letter of str2.
