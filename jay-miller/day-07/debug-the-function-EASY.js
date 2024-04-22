function multi(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
}

function add(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function reverse(str) {
  return str.split("").reverse().join("");
}
