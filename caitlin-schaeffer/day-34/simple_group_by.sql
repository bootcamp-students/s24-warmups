/*
Instructions: For this challenge you need to create a simple GROUP BY statement, you want to group all the people by 
their age and count the people who have the same age.
Params: given table:
people table schema
id
name
age
Return: return table:
select table schema
age [group by]
people_count (people count)
Concerns: creating a row called people count?
Solution: use count method on age and select that produced value, and also select age, then group by age
*/

SELECT COUNT(age) AS people_count, age
FROM
    People
GROUP BY
    age