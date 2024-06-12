<<<<<<< HEAD
SELECT 
  p.age, 
  COUNT(p.age) AS people_count
FROM people AS p
GROUP BY p.age;
=======
SELECT p.age,
  COUNT(p.age) AS people_count
FROM people AS p
GROUP BY p.age;

/*
  Ember's Feedback:
  - Group by is very useful and that pattern will come up
    in other languages. A good one to pay attention to.
*/
>>>>>>> 4b178708d77906f208d5f903f6748cf4f7eb0eca
