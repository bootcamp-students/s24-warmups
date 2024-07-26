<<<<<<< HEAD
/*- do not include the commaa only take the one -*/
/*  SQL  */
SELECT
  id,
  name,
  split_part(characteristics, ',', 1) as characteristic
FROM
  monsters
ORDER BY id;
=======
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
>>>>>>> 4b178708d77906f208d5f903f6748cf4f7eb0eca
