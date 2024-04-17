'use strict'
function filter_list(l) {
  return l.filter(item => typeof(item) != 'string')
}

// array filter to remove items whose type is not string