//Add a break; after each case

function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case '+': result = value.a + value.b
      break;
    case '-': result = value.a - value.b
      break;
    case '/': result = value.a / value.b
      break;
    case '*': result = value.a * value.b
      break;
    case '%': result = value.a % value.b
      break;
    case '^': result = Math.pow(value.a, value.b);
  }
  return result;
}

/*
  Ember's Feedback:
  - after you complete the feedback PR come rename this so it conforms to the class convention fo file naming
  - attention to detail is huge in software, that's why I am using this is a teaching point
  - Great job, you found the bug in this kata. It was missing break statements, which means that case
  statements would "fall through" and multiple operations would happen on the result variable.
  - Below is how I solved it. Similar but different, just for exposure to different styles.
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
    default: return 0;
  }
}
