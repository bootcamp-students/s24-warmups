-- needs to return a table of monsters with an id, name, and singular characteristic
-- original table has id, name, legs, arms, and characteristics
-- i've got no idea how to identify the locations of specific characters in SQL so we're just brute-forcing

SELECT id, name,
CASE
  WHEN monsters.characteristics LIKE 'big%' THEN 'big'
  WHEN monsters.characteristics LIKE 'small%' THEN 'small'
  WHEN monsters.characteristics LIKE 'idiotic%' THEN 'idiotic'
  WHEN monsters.characteristics LIKE 'mad%' THEN 'mad'
  ELSE monsters.characteristics
END AS characteristic
FROM monsters
ORDER BY id;

--POST KATA COMMENT: Apparently could be done easily with "split_part(characteristics, ',', 1) as characteristic" which wasn't mentioned in any of the linked documentation. >:(

/*
  Ember's Feedback:
  - This works by brute forcing it but the moment the data in your DB changes, this fails.
  - I linked how to find the location of specific characters in SQL, you didn't read :P
  - split_part is easy and nice, and Jacinta found it easy enough using Google, a tool you also
    have access to. That being said, you already had linked documentation for a solution to this problem.
    Turn that frown upside down :P
  - I chose to link documentation to make it easier on you all instead of -
    watching you flounder like in cohorts past. You are welcome :)
*/

-- Alternative Solutions
SELECT id,
    name,
    split_part(characteristics, ',', 1) as characteristic
FROM monsters
ORDER BY id;

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
