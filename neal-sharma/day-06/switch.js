/* precept
parameters- bug fix. Breaks maybe?
return- the operation
example- 1 + 1 = 2
concerns- n/a
explain- there is a problem with the switch case. i looked at my project from last week (in
which i used switch case. and this problem has no breaks.)
positive self talk- I CAN DO IT
translate- add breaks for the equation. also cleaned it up a little bit for easier reading.
*/
function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case '+':
      result = value.a + value.b;
      break;
    case '-':
      result = value.a - value.b;
      break;
    case '/':
      result = value.a / value.b;
      break;
    case '*':
      result = value.a * value.b;
      break;
    case '%':
      result = value.a % value.b;
      break;
    case '^':
      result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}
/*
  Ember's Feedback:
  - Great job! Awesome pseudo code :D
*/
// Alternate solution
function evalObject(value) {
  switch (value.operation) {
    case '+': return value.a + value.b;
    case '-': return value.a - value.b;
    case '/': return value.a / value.b;
    case '*': return value.a * value.b;
    case '%': return value.a % value.b;
    case '^': return Math.pow(value.a, value.b);
  }
}
