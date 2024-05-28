/*
Instructions: Create a simple SELECT query to display student information of all ACTIVE students.
Table Schema: Students
-ID (integer)
-FirstName(text)
-LastName(text)
-IsActive(boolean)

Note: IsActive (true = 1 or false = 0)

Params: given table
Return: return table of active students
Solution: just a select from where query
*/


SELECT
    *
FROM
    Students
WHERE
    IsActive = 1

/*
    Ember's Feedback:
    - Great work!
    - you can actually get away with writing WHERE IsActive; because 1 is true and 0 is false
*/
