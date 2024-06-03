/*
Instructions: Your task is to use a select statement to return a single column table containing the full title of the person
Params: given table
Given the table below:
** names table schema **
id
prefix
first
last
suffix
Return: table
** output table schema **

title
Concerns: spaces
Solution: 

*/

SELECT 
    CONCAT_WS(' ', prefix, first, last, suffix) AS title
FROM
    names