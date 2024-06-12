SELECT p.age,
  COUNT(p.age) AS people_count
FROM people AS p
GROUP BY p.age;

/*
  Ember's Feedback:
  - Group by is very useful and that pattern will come up
    in other languages. A good one to pay attention to.
*/
