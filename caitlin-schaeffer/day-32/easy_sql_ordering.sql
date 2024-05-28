-- Instructions: Your task is to sort the information in the provided table 'companies' by number of employees (high to low).
--Returned table should be in the same format as provided:
-- companies table schema:
-- id
-- ceo
-- motto
-- employees
-- Return: table with all cols, sorted by number of employees in descending order
-- Concerns: getting order to descend
-- Solution:
Select id,
  ceo,
  motto,
  employees
FROM Companies
ORDER BY employees DESC;
/*
 Ember's Feedback:
 - Good work!
 - snake case file
 */
