-- Use LIKE and '%______%' to grab all names six characters or longer from table names
-- Should only grab first and last names, not ids
SELECT first_name, last_name FROM names
WHERE first_name LIKE '%______%';

/*
    Ember's Feedback:
    - Great work!
    - snake case file name
*/
