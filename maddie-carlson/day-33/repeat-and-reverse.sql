-- take the monsters table and return just name and characteristics
-- where the original name is repeated three times, and the characteristics are the original strings in reverse
SELECT REPEAT(name, 3) AS name,
    REVERSE(characteristics) AS characteristics
FROM monsters;

/*
    Ember's Feedback:
    - Great job! Fun tools available to you in PostgreSQL
*/
