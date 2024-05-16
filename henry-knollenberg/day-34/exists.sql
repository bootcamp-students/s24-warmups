SELECT id, name
FROM departments
WHERE EXISTS (SELECT name FROM sales WHERE departments.id = sales.department_id AND sales.price > 98)