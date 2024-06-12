function scramble(str1, str2) {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
  
    for (let char of arr2) {
        let index = arr1.indexOf(char);
        if (index === -1) {
            return false;
        }
        arr1.splice(index, 1);
    }
  
    return true;
}