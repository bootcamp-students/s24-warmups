function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

// function toCamelCase(str) {
//   let answer;
//   if (str.includes("-")) {
//     answer = str
//       .split("-")
//       .map(function (part, index) {
//         if (index === 0) {
//           return part; // First word remains as is
//         }
//         return part.charAt(0).toUpperCase() + part.slice(1);
//       })
//       .join("");
//   } else if (str.includes("_")) {
//     answer = str
//       .split("_")
//       .map(function (part, index) {
//         if (index === 0) {
//           return part; // First word remains as is
//         }
//         return part.charAt(0).toUpperCase() + part.slice(1);
//       })
//       .join("");
//   } else {
//     answer = str; // If neither "-" nor "_" is found, return the original string
//   }
//   console.log(answer);
// }

// Index at to ignore first word[1]

/*
It looks like we have to find the - and then capitalize the word 
right after it.

split at the - or the _ 
get the next Character

*/
