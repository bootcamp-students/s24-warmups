SELECT COUNT(name) AS people_count,
    age
FROM people
GROUP BY age

/*
    Ember's Feedback:
    - Group by is a pattern you will see in a lot of places, I would
    give it special attention. We use it in C# quite a lot.
*/
