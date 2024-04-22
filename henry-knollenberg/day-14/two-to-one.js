/* 
P - s1, s2, sortedCombo, arr1, arr2, indArr, sortedArr
R- sortedCombo

  Split s1 and s2 into arrays
  Iterate through arr2 and push each letter onto arr
  Iterate through arr, filter if not included in indArr, push to indArr
  sortedArr = indArray sorted
  sortedCombo = sortedArr joined into a string
  return sortedCombo
*/


function longest(s1, s2) {
    let arr1 = s1.split("");
    let arr2 = s2.split("");
    
    arr2.forEach((letter) => arr1.push(letter));
    
    let indArr = []
    arr1.forEach((letter) => {
      if (!indArr.includes(letter)) {
        indArr.push(letter);
      }
    });
    
    let sortedArr = indArr.sort();
    let sortedCombo = sortedArr.join("");
    return sortedCombo;
  }