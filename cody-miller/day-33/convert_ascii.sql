SELECT
    id,
    ASCII(SUBSTRING(name, 1, 1)) AS name,
    birthday,
    ASCII(SUBSTRING(race, 1, 1)) AS race
FROM demographics;

/*
    Ember's Feedback:
    - not a sql file
    - ASCII takes the first character by default so you can just
        do ASCII(name)
*/
