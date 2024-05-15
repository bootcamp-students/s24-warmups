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
