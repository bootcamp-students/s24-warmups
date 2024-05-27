SELECT id,
    name
FROM departments
WHERE EXISTS (
        SELECT name
        FROM sales
        WHERE departments.id = sales.department_id
            AND sales.price > 98
    )

/*
    Ember's Feedback:
    - Great work!
    - I think you could select anything in the sub query, I did "select 1"
*/
