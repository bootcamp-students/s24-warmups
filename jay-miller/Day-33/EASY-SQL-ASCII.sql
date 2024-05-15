SELECT id, 
ASCII(LEFT(name,1)) as name, 
birthday, 
ASCII(LEFT(race,1)) as race
FROM demographics
