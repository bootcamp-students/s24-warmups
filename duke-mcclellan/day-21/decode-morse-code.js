//morse code
//return string from morse code
//('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
//felt really stuck on this one.
//Didn't really know where to start but got some help.
//I want to split the morse code into individual characters
//and iterate over the characters into english and join the string together.

decodeMorse = function (morseCode) {

    const morseCodeWords = morseCode.trim().split('   ');

    const decodedWords = morseCodeWords.map(word => {
        const chars = word.split(' ');
        return chars.map(char => MORSE_CODE[char]).join('');

    });

    const decodedMessage = decodedWords.join(' ');

    return decodedMessage;
}
/*
    Ember's Feedback:
    - Great job!!!
*/
// Alternative Solutions
// RegEx here matches any number of literal . characters and literal - characters, followed by 0 to 2 spaces
// That whole match, spaces and all, are replaced by the output from the function I give .replaceAll
// The function given to replace all takes the capture group, denoted by parenthesis, (i.e. just the dots and dashes)
// and plugs that into the MORSE_CODE object. It then replaces the whole match with that return value.
decodeMorse = function (morseCode) {
    return morseCode.trim().replaceAll(/([\.\-]+)\s{0,2}/g, (_, p1) => {
        return MORSE_CODE[p1]
    });
}
decodeMorse = function (morseCode) {
    return morseCode
        // splits words apart
        .split('   ')
        // turn the words into morse code
        .map(word => word
            // splits letters in word apart
            .split(' ')
            // converts the letters into morse code
            .map(character => MORSE_CODE[character])
            // puts letter together
            .join('')
        )
        // puts words back together into a string
        .join(' ')
        // removes whitespace at beginning and end of the string
        .trim();
}
