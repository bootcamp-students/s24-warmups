SELECT
    id,
    ASCII(substr(name, 1, 1)) AS name,
    birthday,
    ASCII(substr(race, 1, 1)) AS race
FROM
    demographics;

/*
    Ember's Feedback:
    - Great work!
    - you can actually just give ASCII the column and it will
        return the value of the 1st character automatically
*/
