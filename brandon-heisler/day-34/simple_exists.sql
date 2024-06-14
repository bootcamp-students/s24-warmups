SELECT id, name
FROM departments
WHERE EXISTS(SELECT department_id FROM sales WHERE department_id = departments.id AND price > 98.00);
-- i have 2 tables. i need to see what department ids have a sale over $98
-- i need to return a table, where the department is represented minus any department without the
-- requisite sale.
-- i need to use EXISTS and compare the department id to the departments table id and allow for
-- the right price.