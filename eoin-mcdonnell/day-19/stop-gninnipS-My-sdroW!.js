//first split with all the spaces
//get the length of all the strings
//if the length is greater than 5 split and reverse and join
//find strings longer than 5 letters
//map functions goes through tthe array
//if greaterthan or equeal to 5 return word split revere 
// else return word
// join all 

function spinWords(string){
    //TODO Have fun :)
    return string.split(" ").map(function(word){
      if (word.length >=5){
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    }).join(" ")
  }
  
  console.log(spinWords)
  