SELECT 
    id, 
    name, 
    CASE 
        WHEN POSITION(',' IN characteristics) > 0 THEN LEFT(characteristics, POSITION(',' IN characteristics) - 1)
        ELSE characteristics 
    END AS characteristic
FROM 
    Monsters
ORDER BY id;

