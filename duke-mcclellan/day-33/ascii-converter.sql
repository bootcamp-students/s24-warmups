SELECT 
    id,
    ASCII(substr(name, 1, 1)) AS name,
    birthday,
    ASCII(substr(race, 1, 1)) AS race
FROM 
    demographics;
