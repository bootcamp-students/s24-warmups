/*- do not include the commaa only take the one -*/
/*  SQL  */
SELECT
  id,
  name,
  split_part(characteristics, ',', 1) as characteristic
FROM
  monsters
ORDER BY id;