/*
Instructions: For this challenge you need to create a SELECT statement that will contain data about departments that 
had a sale with a price over 98.00 dollars. This SELECT statement will have to use an EXISTS to achieve the task.
Params: given two tables:

departments table schema
id
name

sales table schema
id
department_id (department foreign key)
name
price
card_name
card_number
transaction_date

Return: return a table:
resultant table schema
id
name
Concerns: handling input from two tables that both have some of the same names
Solution: select the two columns from the departments table and then use a WHERE EXIST that checks price and for the 
sale department id equaling the departments id
*/

SELECT
    id,
    name
FROM
    Departments
WHERE EXISTS
    (SELECT name FROM sales WHERE sales.department_id = departments.id  AND price > 98)

