SELECT
  id,
  name,
  case
    when POSITION(',' IN characteristics) = 0 then characteristics
    else left(characteristics, POSITION(',' IN characteristics)-1)
    end as characteristic
FROM monsters
ORDER BY id