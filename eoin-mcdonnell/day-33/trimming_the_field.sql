/*- do not include the comma only take the one -*/
/*  SQL  */
SELECT id,
  name,
  split_part(characteristics, ',', 1) as characteristic
FROM monsters
ORDER BY id;

/*
  Ember's Feedback:
  - Great work!
  - split_part kind of works like .split() in JS
*/
