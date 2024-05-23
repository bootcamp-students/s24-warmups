-- concat the columns together to create a name
SELECT CONCAT_WS(' ', prefix, first, last, suffix) AS title FROM names;
