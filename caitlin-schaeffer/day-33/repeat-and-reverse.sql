/*
Instructions: given table return shortened table
Table Schema: Monsters
-ID
-Name
-Legs
-Arms
-Characteristics
Params: given original table
Return: table with only name and characteristics, where name is the original string * 3, and characteristic is only one
Solution: repeat, reverse
*/

SELECT
    Repeat(Name, 3) As Name,
    Reverse(Characteristics) As Characteristics
From
  Monsters;

/*
  Ember's Feedback:
  - Great job!
*/
