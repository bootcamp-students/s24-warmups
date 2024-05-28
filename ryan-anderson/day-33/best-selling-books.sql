SELECT books.name as name,
  books.author as author,
  books.copies_sold as copies_sold
FROM books
ORDER BY copies_sold DESC
FETCH FIRST 5 ROWS ONLY

/*
  Ember's Feedback:
  - Great job!
  - This is really useful for things like pagination, -
  which you will probably get into soon
*/

-- Alternative Solution
select *
from books
order by copies_sold desc
limit 5;
