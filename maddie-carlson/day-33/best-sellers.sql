-- needs to select the top 5 bestselling books at a store
-- and list names, authors, and copies sold
SELECT name,
    author,
    copies_sold
FROM books
ORDER BY copies_sold DESC
LIMIT 5;

/*
    Ember's Feedback:
    - Yay! Great job :)
    - Limit comes in handy for things like pagination
*/
