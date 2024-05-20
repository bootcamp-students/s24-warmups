SELECT 
  COUNT(id) AS people_count,
  AGE
FROM people
GROUP BY age;