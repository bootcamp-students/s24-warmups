//l . filter with iterate ove the array and the function with return variable v with a type of exactly equal to number

function filter_list(l) {
    return l.filter(function(v) {return typeof v === 'number'})
  }