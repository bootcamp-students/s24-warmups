/* a
  b
  a<b
  i <= b
  i = a
  i++
  push i to array*/

function between(a, b) {
  let array = [];
  for (let i = a; i <= b; i++) {
    array.push(i);
  }
  return array;
}

/* Ember's Feedback:
  Great job!
  The pseudocode looking a little rough on this one.
  Write your pseudocode in plain English logic. Let me see that you can communicate in such a way that you will pass a whiteboard interview.
*/
