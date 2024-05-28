-- needs to select the top 5 bestselling books at a store
-- and list names, authors, and copies sold

SELECT name, author, copies_sold FROM books
ORDER BY copies_sold DESC
LIMIT 5;
