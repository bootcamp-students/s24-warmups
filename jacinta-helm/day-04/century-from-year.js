function century(year) {
    let century = Math.ceil(year/100);
    return century;
  }

  // P - find the year of a century
  // R - take the year subtract 1 divide it by 100 years and add 1 to get the correct century
  // E - year 1705 -1 = 1704 / 100 = 17 + 1 = 18. 18 is the century OR
  // - take 1705 / 100 and use Math.ceil method to round up.
  // C - not calculating correctly, not using Math.ceil to round up to whole number.
  // confused on why I don't need to add or subtract 1

/*
  Ember's Feedback:
  Good job!
  I think what you were going for was if you had 1600,
    1600 - 1 is 1599
    1599 / 100 is 15.99
    15.99 floored would be 15
    15 + 1 is 16, which would be the correct century for 1600.
    That would work with floor but you came up with a simpler solution.

  Ceil works here and I'll do another example for it.
  If you are give year 1605, dividing it by 100 gives you 16.05
  16.05 given to Math.ceil will round up to the nearest whole number, which is 17
  17 if the correct century.
  if given 1600 though, division by 100 gives 16
  16 passed to Math.ceil will round to the nearest whole number, but 16 is already a whole number
  So, 16 is returned for the century. And that would be correct.
*/
