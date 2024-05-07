
/*
P-str, array, regExp, firstLetter, restWord, concatStr, fullPig
R- mapArr

split string into array by (" ")
map through array (x) (mapArr)
    if contains legger
        then slice - firstLetter
        slice - restWord
        concat both of them
        add ay
join mapArr

*/

function pigIt(str){
    let regExp = /^[a-zA-Z]+$/
    
    let arr = str.split(" ");
    let mapArr = arr.map((x) => {
      console.log(x)
      if (regExp.test(x)) {
        console.log(x)
        let firstLetter = x.slice(0, 1);
        let restWord = x.slice(1, (x.length));
        let concatStr = restWord.concat(firstLetter);
        let fullPig = concatStr + "ay";
        return fullPig;
      }
      return x;
    })
    console.log(mapArr)
    return mapArr.join(" ")
  }