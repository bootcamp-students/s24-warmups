SELECT
  books.name as name,
  books.author as author,
  books.copies_sold as copies_sold
FROM books
ORDER BY copies_sold DESC
FETCH FIRST 5 ROWS ONLY