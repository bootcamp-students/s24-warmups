SELECT id,
  name,
  CASE
    WHEN POSITION(',' IN characteristics) != 0 THEN LEFT(
      characteristics,
      POSITION(',' IN characteristics) - 1
    )
    ELSE characteristics
  END AS characteristic
FROM monsters
ORDER BY id

/*
  Ember's Feedback:
  - Great work! This was a tricky one
*/

-- Alternative Solution
SELECT id,
  name,
  split_part(characteristics, ',', 1) as characteristic
FROM monsters
ORDER BY id;
