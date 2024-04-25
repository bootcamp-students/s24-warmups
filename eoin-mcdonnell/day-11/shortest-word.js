function findShort(s){
	var arr = s.split(' ');
	var smallest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].length < smallest.length){
			smallest = arr[i];
		}
	}
	return smallest.length;
}

/*-

function findShort(s){
    let arr = s.split()
    let shortest = arr[0]
    for(let word in arr){
      if(arr[word] < shortest.length){
      console.log(word) 
      shortest = arr[word]
      console.log(logVal)   
      }

   //  csonsole.log(logVal)
    } 
      return shortest.length
  } 
  -*/