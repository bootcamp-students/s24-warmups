function solution(number){
    let arr = number.toString().split("")
    let romanArr = [];
    
    
    function hundreds(x) {
      switch (Number(x)) {
          case 1: 
            romanArr.push("C");
            break;
          case 2: 
            romanArr.push("CC");
            break;
          case 3: 
            romanArr.push("CCC");
            break;
          case 4: 
            romanArr.push("CD");
            break;
          case 5: 
            romanArr.push("D");
            break;
          case 6: 
            romanArr.push("DC");
            break;
          case 7: 
            romanArr.push("DCC");
            break;
          case 8: 
            romanArr.push("DCCC");
            break;
          case 9: 
            romanArr.push("CM");
            break;
          case 0: 
            break;
        }
      }
          
      function tens(x) {
        switch (Number(x)) {
          case 1: 
            romanArr.push("X");
            break;
          case 2: 
            romanArr.push("XX");
            break;
          case 3: 
            romanArr.push("XXX");
            break;
          case 4: 
            romanArr.push("XL");
            break;
          case 5: 
            romanArr.push("L");
            break;
          case 6: 
            romanArr.push("LX");
            break;
          case 7: 
            romanArr.push("LXX");
            break;
          case 8: 
            romanArr.push("LXXX");
            break;
          case 9: 
            romanArr.push("XC");
            break;
          case 0: 
            break;
        }
      }
          
      function ones(x) {
        switch (Number(x)) {
          case 1: 
            romanArr.push("I");
            break;
          case 2: 
            romanArr.push("II");
            break;
          case 3: 
            romanArr.push("III");
            break;
          case 4: 
            romanArr.push("IV");
            break;
          case 5: 
            romanArr.push("V");
            break;
          case 6: 
            romanArr.push("VI");
            break;
          case 7: 
            romanArr.push("VII");
            break;
          case 8: 
            romanArr.push("VIII");
            break;
          case 9: 
            romanArr.push("IX");
            break;
          case 0: 
            break;
        }
      }
    
    if (arr.length === 4) {
      for (let i = arr[0]; i > 0; i--) {
        romanArr.push("M")
      }
      hundreds(arr[1]);
      tens(arr[2]);
      ones(arr[3]);
    } else if (arr.length === 3) {
      hundreds(arr[0]);
      tens(arr[1]);
      ones(arr[2]);
    } else if (arr.length === 2) {
      tens(arr[0]);
      ones(arr[1]);
    } else if (arr.length === 1) {
      ones(arr[0]);
    }    
            
    return romanArr.join("")
  }