SELECT id, name
FROM departments
WHERE EXISTS (SELECT name FROM sales WHERE sales.department_id = departments.id AND price > 98.00);

/*
    Ember's Feedback:
    - .sql not .py please
*/
