SELECT age,
    COUNT(name) AS people_count
FROM people
GROUP BY age;
-- i don't think the directions are explicit enough.
-- I need to use GROUP BY, found out i need to use an alias (not clear)
-- need 2 columns so select age and name, i need to count name and rename it
-- from the people table and group by the age

/*
    Ember's Feedback:
    - Great work :D
    COUNT (*) would also work
*/
