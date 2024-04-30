// var uniqueInOrder = function (iterable) {
//   let inputValue = iterable.split("");
//     console.log("Before the loop: ", inputValue);
//   for (let i = 1; i < iterable.length; i++) {
//     if (inputValue[i] === inputValue[i - 1])
//       inputValue.splice(i, 1);
//       console.log("Inside the loop: ", inputValue);
//   };
//   console.log("Outside the loop: ", inputValue);
//   return inputValue;
// };

var uniqueInOrder = function (iterable) {
  return Array.prototype.filter.call(iterable, (value, index, array) => value !== array[index - 1]);
};


/*
The input cannot have a same character next to it.
  Use boolean to determine if the character next to it ===
If else statement; if !== continue onto the next letter and 
  that letter become the next boolean check.
Looking behind. length -1.
*/