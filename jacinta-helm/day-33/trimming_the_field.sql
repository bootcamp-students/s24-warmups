--SELECT * FROM monsters /*  SQL  */

SELECT 
  id, 
  name, 
  split_part(characteristics, ',', 1 ) AS characteristic
FROM
    monsters
ORDER BY id;


--split_part?? what is that It allows the last index to be cut off
--Parameters trim off one characteristics 
--Return My function should show the table with one less than off characteristics
--Example big, smelly; big;
--Concerns not knowing the method or there are no characteristics for the monster
--Explain, Selecting to show the table by id name and characterics from the monsters and order the table by the id. 
-- To trim off one characteristics, i can use split 