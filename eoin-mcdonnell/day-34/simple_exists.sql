<<<<<<< HEAD
SELECT id, name
FROM departments
WHERE EXISTS
  (SELECT department_id FROM sales 
   WHERE departments.id = sales.department_id
   AND price > 98.0)
=======
SELECT id,
  name
FROM departments
WHERE EXISTS (
    SELECT department_id
    FROM sales
    WHERE departments.id = sales.department_id
      AND price > 98.0
  )

/*
  Ember's Feedback:
  - Good work!
*/
>>>>>>> 4b178708d77906f208d5f903f6748cf4f7eb0eca
