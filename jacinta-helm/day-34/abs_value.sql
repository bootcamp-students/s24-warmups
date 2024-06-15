/*  SQL  */

-- SELECT * FROM decimals

-- SELECT 
--   ABS(number1) AS abs_number1,
--   LOG(number1, number2) AS "64"
-- FROM 
--   decimals;

SELECT ABS(number1) AS abs, LOG(number2, 64) AS log
FROM decimals;
