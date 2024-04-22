function longest(s1, s2) {
    console.log("s1: ", s1, "s2: ", s2)
    let initialString = s1 + s2;
    console.log("initialString: ", initialString);
  
    let stringToArray = initialString.split("");
    console.log("stringToArray: ", stringToArray);
  
    let filteredArray = stringToArray.filter((value, index) => stringToArray.indexOf(value) === index);
    console.log("filteredArray: ", filteredArray);
    filteredArray.sort();
  
    let finalString = filteredArray.join("");
    console.log("finalString: ", finalString);
  
    return finalString;
}