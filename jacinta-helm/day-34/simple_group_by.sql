-- Create your SELECT statement here
-- SELECT * FROM people 

SELECT 
  age,
  count(people.age) AS people_count
FROM 
  people
GROUP BY 
  age 
