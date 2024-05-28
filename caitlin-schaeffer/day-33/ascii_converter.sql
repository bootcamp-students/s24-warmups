-- Instructions: return a table where name and race are replaced with ASCII
/* Table name: demographics; columns: ID, NAME, BIRTHDAY, RACE */
-- Example: e.g. Verlie = 86 Warren = 87 Horace = 72 Tracy = 84
-- Params: given table with id, name, birthday, race
-- Return: return the same table where all text fields (name & race) are changed to the ascii code of their first byte

-- Solution: use the ASCII method and select specific column values to apply it to

Select
    Demographics.id AS id,
    ASCII(Demographics.name) AS name,
    Demographics.birthday AS birthday,
    ASCII(Demographics.race) AS race
FROM
    Demographics

/*
    Ember's Feedback:
    - Great work!
*/
