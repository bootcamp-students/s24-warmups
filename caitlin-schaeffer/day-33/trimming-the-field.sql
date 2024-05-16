/*
Instructions: The monsters in the provided table have too many characteristics, they really only need one each. 
Your job is to trim the characteristics down so that each monster only has one.
Params: given table
Return: return table
output schema:
id
name
characteristic
Solution: 
*/

--the characteristics are the only thing we need to adjust, order by the ID
-- split_part is a method used to split a string from a specific delimiter and these queries return the nth substring.
SELECT 
  ID, 
  NAME, 
  split_part(characteristics, ',', 1 ) AS CHARACTERISTIC
FROM
    MONSTERS
ORDER BY ID;