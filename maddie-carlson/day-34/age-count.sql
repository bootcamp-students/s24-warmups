-- group all the people by their ages and count the people who have the same age
SELECT age,
    COUNT(age) AS people_count
FROM people
GROUP BY age;

/*
    Ember's Feedback:
    - Great job!
*/
