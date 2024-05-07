/*precept
parameters- take a positive integer and convert it to a string of roman numerals
return- roman numberals from a number
example- (1) returns I
concerns- converting and then stringifying. Ill get there
explain- add a key for each numeral, add a value to match, let result = an empty string. loop over and check
if the number is greater than or equal to the value of the current index in the value array. if condition is true append the roman symbol at the index from the key array to the result string and subtract the value from the number that we are converting. continue looping until the number becomes less than the current value. return result.
positive self talk-
translate-
*/
  

function solution(number) {
    let key = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = '';
  
    for (let i = 0; i < key.length; i++) {
      while (number >= value[i]) {
        result += key[i];
        number -= value[i];
      }
    }
  
    return result;
  }