select id,
    name,
    case
        when POSITION(',' IN characteristics) = 0 then characteristics
        else left(
            characteristics,
            POSITION(',' IN characteristics) -1
        )
    end as characteristic
FROM monsters
order by id

/*
    Ember's Feedback:
    - Great job figuring this one out!
*/

-- Alternative Solution
SELECT id,
    name,
    split_part(characteristics, ',', 1) as characteristic
FROM monsters
ORDER BY id;
