-- Instructions: Please list people which have first_name with at least 6 character long
-- Examples: 
-- Params: 
-- Return: a table of first and last names where first name is more than 6 characters
-- Concerns: not using length()
-- Solution: where / like



Select 
  first_name, 
  last_name 
FROM Names
Where first_name like '______%'