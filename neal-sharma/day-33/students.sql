select id,
    FirstName,
    LastName,
    IsActive
from students
where IsActive = 1

/*
    Ember's Feedback:
    - You can get away with writing it as "WHERE IsActive;" because
    PostgreSQL stores TRUE as 1 and FALSE as 0
*/
