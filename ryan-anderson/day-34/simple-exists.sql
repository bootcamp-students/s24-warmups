SELECT id, name 
FROM departments
WHERE EXISTS
(SELECT department_id FROM sales 
 WHERE sales.department_id = departments.id AND price > 98);