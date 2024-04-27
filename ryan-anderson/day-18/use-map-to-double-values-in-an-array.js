function double(array) {
  
    function times2(x) {
      return x*2;
    }
      
    return array.map(times2)
    }
    
    //use map to run array through a function that multiplies each item by 2