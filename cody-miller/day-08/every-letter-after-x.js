const makeEveryLetterAfterXCaps = function (str, letter) {
// test word :parameter  paRaMeter or paramTeR
    let result = ""; //Strings are immutable, so a new string is necessary?
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (str.charAt(i) === letter && i < str.length - 1) {
            result += str.charAt(i + 1).toUpperCase();
            i++;
        }
    }
    return result;
}
/*
I have to use toUpperCase
I have to identify a letter
I have to target the letter after the identified letter

letter.toUpperCase(CharAt(string[letter]+1))
*/