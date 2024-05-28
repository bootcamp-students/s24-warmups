SELECT COUNT(id) AS people_count,
  AGE
FROM people
GROUP BY age;

/*
  Ember's Feedback:
  - Group by is really powerful and a common pattern. I highly recommend -
  giving a look for understanding.
*/
