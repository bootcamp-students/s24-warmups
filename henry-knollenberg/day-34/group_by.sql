SELECT age,
    COUNT (id) as people_count
FROM people
GROUP BY age

/*
    Ember's Feedback:
    - Great work!
    - COUNT (*) also works
*/
