/*precept
parameters- map each value and double it
return- new array with each value doubled.
example- [1,2] return [2,4]
concerns- haven't done much with map() but i'm ready
explain-  map over the array and double each number
positive self talk-
translate-
*/

function double(array) {
    const doubled = array.map((x) => x * 2);
  console.log(doubled);
  return doubled;
}