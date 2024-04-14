
var makeEveryLetterAfterXCaps = function (str, letter) {
  let LetterArray = str.split('');
  for (let i = 0; i < letterArray.length -1; i++) {
    if (letter === letterArray[i]) {
      letterArray[i + 1] = letterArray[i + 1].toUpperCase();
    }
   }
   return letterArray.join('');
};
  
  
  
  
  
  
//   console.log('str', str);
//   console.log('letter', letter);

//   let ans = "";
//   for (let i = 1; i < str.length; i++) {
//    if (str[i-1] === letter) {
//     let temp = str[i].toUpperCase();
//      ans += str[i-1];
//      ans += temp
//      console.log('Cap', temp, ans);
//      i++
// //      str[i + 1] = str[i + 1];
//    } else {
//      ans += str[i-1];
//      console.log("no match", i, ans)
//    } if (i = str.length-1) {
//      ans+= str[i];
//    }
//     console.log('final', i, ans);
//   } 
//       return ans;
//   }




//   let string = str.toUpperCase('x');{
//     console.log(string.toUpperCase('x'));
//   } return ;

  

//P create a function that will make the letter after 'x' capital and if it 
//is already Cap then it should stay Cap.
//R return the function that will capitalize a letter out of a string 
//E ('bac', 'a'), 'baC'
//I can use the toUpperCase() method with split and join. 

// I really struggled on this one. can we go over this please. i tried two different methods.
