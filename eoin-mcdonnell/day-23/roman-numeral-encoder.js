//create a result
//create two arrays, one for roman numerals the other for decimats
//after that we need to iterate over the numer array
//you will need to subtract the value from the number until th
//the list of the general number is not enough, we need a more exhaustive list of decmals and romans
// 
function solution(number)
{
  // convert the number to a roman numeral
  var results = '',
      decimals = [1000, 900, 500, 400, 100, 90, 50, 10, 9, 5, 4, 1],
      roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'X', 'IX', 'V', 'IV', 'I'];

  decimals.map(function(value, index) {
    while (number >= value){
    results += roman[index];
    console.log(value)
    number -= value;
      }
    })
  return results
}

/*--*/

function solution(number)
{
  var result   = '',
      decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  decimals.map(function (value, index) {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });
  
  return result;
}