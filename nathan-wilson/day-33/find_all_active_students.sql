SELECT id,
    FirstName,
    LastName,
    IsActive
FROM students
WHERE IsActive = 1

/*
    Ember's Feedback:
    - Because PostgreSQL store TRUE as 1 and FALSE as 0, you can just write WHERE IsActive
*/
