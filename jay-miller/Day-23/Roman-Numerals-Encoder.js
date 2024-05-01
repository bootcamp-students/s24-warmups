function solution(number){
  // Make a new array called result
  let result   = '',
      // Make a decimal variable array
      decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      // Make a roman variable array
      roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  // Use .map in a while loop through value and index
    decimals.map(function (value, index) {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });
  // Return result
  return result;
}
