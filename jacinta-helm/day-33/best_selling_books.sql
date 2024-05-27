-- Your Code Here
-- SELECT * FROM books

SELECT 
  name,
  author, 
  copies_sold
FROM 
  books
ORDER BY 
  copies_sold DESC LIMIT 5