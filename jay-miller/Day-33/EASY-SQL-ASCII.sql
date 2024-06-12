SELECT id,
    ASCII(LEFT(name, 1)) as name,
    birthday,
    ASCII(LEFT(race, 1)) as race
FROM demographics

/*
    Ember's Feedback:
    - Rename this file to be all lowercase, snake_case
    - Good work!
*/

-- Alternative Solution
SELECT id,
    ASCII(name) as name,
    birthday,
    ASCII(race) as race
FROM demographics
