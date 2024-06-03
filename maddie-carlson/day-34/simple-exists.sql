-- create a SELECT statement that will contain data about departments that had a sale with a price over 98.00 dollars
SELECT id,
    name
FROM departments
WHERE EXISTS (
        SELECT department_id
        FROM sales
        WHERE sales.department_id = departments.id
            AND price > 98.00
    )

/*
    Ember's Feedback:
    - Great work!
    - I think you can use anything in the select, I used "SELECT 1"
*/
