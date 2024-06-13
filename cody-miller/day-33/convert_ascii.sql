SELECT 
    id,
    ASCII(SUBSTRING(name, 1, 1)) AS name,
    birthday,
    ASCII(SUBSTRING(race, 1, 1)) AS race
FROM demographics;
