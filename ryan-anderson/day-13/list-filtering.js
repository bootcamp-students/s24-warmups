'use strict'
function filter_list(l) {
  return l.filter(item => typeof(item) != 'string')
}

// filter for items that are not strings