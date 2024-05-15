-- needs to return the demographics table where all text fields are changed to ascii codes of their first byte
-- can be done with ASCII()

SELECT id, ASCII(name) AS name, birthday, ASCII(race) AS race
FROM demographics;
