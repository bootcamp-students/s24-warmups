SELECT d.id,
  d.name
FROM departments d
WHERE EXISTS (
    SELECT 1
    FROM sales s
    WHERE s.department_id = d.id
      AND s.price > 98.00
  );

/*
  Ember's Feedback:
  - snake case file name
  - Good work!
*/
