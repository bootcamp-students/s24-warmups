SELECT id,
  name,
  case
    when POSITION(',' IN characteristics) = 0 then characteristics
    else left(
      characteristics,
      POSITION(',' IN characteristics) - 1
    )
  end as characteristic
FROM monsters
ORDER BY id

/*
  Ember's Feedback:
  - great work! This was a hard one
*/

-- Alternative Solution
SELECT id,
    name,
    split_part(characteristics, ',', 1) as characteristic
FROM monsters
ORDER BY id;
