/*-include all fields order descending limit to 5 results-*/
<<<<<<< HEAD
select name, author, copies_sold
from books
order by copies_sold desc
limit 5;
=======
select name,
    author,
    copies_sold
from books
order by copies_sold desc
limit 5;

/*
    Ember's Feedback:
    - limit is really useful when you want to do pagination
*/
>>>>>>> 4b178708d77906f208d5f903f6748cf4f7eb0eca
