SELECT age,
  count(people.age) AS people_count
FROM people
GROUP BY age

/*
  Ember's Feedback:
  - Group by is really powerful, it is one of the ones I would get familiar with.
  - You will probably use an ORM, but the concept behind GROUP BY is a common pattern.
*/
