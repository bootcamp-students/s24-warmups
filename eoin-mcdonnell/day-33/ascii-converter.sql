/*  SQL  */
SELECT id, ASCII(left(name,1)) AS name, birthday, ASCII(left(race, 1)) as race
FROM demographics;