SELECT
id,
name,
CASE
WHEN POSITION(',' IN characteristics) = 0 THEN characteristics
ELSE left(characteristics, POSITION(',' IN characteristics)-1)
END AS characteristic
FROM monsters
ORDER BY id