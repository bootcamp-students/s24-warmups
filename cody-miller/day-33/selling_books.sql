SELECT name, author, copies_sold
FROM books
ORDER BY copies_sold DESC
LIMIT 5;

/*
    Ember's Feedback:
    - order by and limit are really powerful, they are useful
    for implementing pagination when you have very large datasets
*/
