SELECT id,
    name,
    CASE
        WHEN POSITION(',' IN characteristics) > 0 THEN SUBSTRING(
            characteristics
            FROM 1 FOR POSITION(',' IN characteristics) - 1
        )
        ELSE characteristics
    END AS characteristic
FROM monsters
ORDER BY id;
-- i need to return 3 columns, id, name, characteristics AS characteristic
-- trimming off any additional items besides the 1st (if more than one) in the characteristics column
-- i need to find the position of the comma if there is one. then chop off the rest.
--  i can use substring, set the initial position from 1 to the comma and return it -1 position to knock the comma off
-- reassign as characteristic
-- then order by id

/*
    Ember's Feedback:
    - Great work! That was a hard one :D but now you know how to use a case statement!
*/
-- Alternative Solution
SELECT id,
    name,
    split_part(characteristics, ',', 1) as characteristic
FROM monsters
ORDER BY id;
