/*  SQL  */

-- SELECT * FROM names

SELECT CONCAT_WS(' ', prefix, first, last, suffix) AS title
FROM names;

