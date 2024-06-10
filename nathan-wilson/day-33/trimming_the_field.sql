SELECT id,
    name,
    CASE
        WHEN POSITION(',' IN characteristics) = 0 THEN characteristics
        ELSE left(
            characteristics,
            POSITION(',' IN characteristics) -1
        )
    END AS characteristic
FROM monsters
ORDER BY id

/*
    Ember's Feedback:
    - This one was a hard one! Great job figuring it out :D
*/

-- Alternative Solution
SELECT id,
    name,
    split_part(characteristics, ',', 1) as characteristic
FROM monsters
ORDER BY id;
