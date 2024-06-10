SELECT Id,
    FirstName,
    LastName,
    IsActive
FROM students
WHERE IsActive = 1;

/*
    Ember's Feedback:
    - You can actually write it like WHERE IsActive; because TRUE is 1 in PostgreSQL
    - Great job :D
*/
