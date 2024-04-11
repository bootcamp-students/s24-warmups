// Array Plus Array

let bothArray = arr1.concat(arr2);
[1, 2, 3, 4, 5, 6]

let returnValue = 0;

for (let value of bothArray) {
    returnValue += value;
}
console.log(returnValue);

for (let counter = 0; counter < arr1.length; counter++)
    returnValue += arr1[counter]; // another way to do this.

let sum = 0;
for (let i = 0; i < array.length; i++);
sum += array[i];
console.log(sum)
