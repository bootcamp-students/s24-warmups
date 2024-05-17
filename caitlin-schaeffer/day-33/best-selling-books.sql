/*
Instructions: You work at a book store. It's the end of the month, and you need to find out the 5 bestselling books at your 
store. Use a select statement to list names, authors, and number of copies sold of the 5 books which were sold most.
books table schema
-name
-author
-copies_sold
Params: given table
Return: table with only top 5 sold books
Solution: use order by and DESC Limit
*/

Select 
    Name,
    Author,
    Copies_sold
FROM    
    Books
ORDER BY
    copies_sold DESC LIMIT 5