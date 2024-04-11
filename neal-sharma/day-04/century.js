/* precept
parameters- century 1 spans from 1-100, century 2 spans from 101-200 etc.
return value- return the century.
example- 1705 = 18th century 1900 = 19th century
concerns- if loop? method?
explain- Math.ceil rounds the number up to the nearest integer if necessary and returns the result
positive self talk- I can figure it just like i have for the rest of them so far.
translate- Math.ceil-round up number to nearest integer- (year/100) (1705/100) = 17.05 rounded up
to nearest integer = 18
*/

function century(year) {
  return Math.ceil(year / 100);
}

/*
  Ember's Feedback:
  Yep excellent job!
  A concern here would be what is your expected failure behavior.
  At the moment, is you are given a negative number it will return using your logic,
  but maybe if you were writing this function for yourself you would want to return something
  like "B.C.E. unsupported" or something.
*/
