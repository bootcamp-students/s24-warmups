-- Type your query here
-- SELECT * FROM students

-- CREATE TABLE Students_New (
--     id INTEGER, 
--     FirstName TEXT,
--     LastName TEXT,
--     IsActive BOOLEAN
-- );

-- INSERT INTO 
--   Students_New (FirstName, LastName, IsActive)
-- SELECT 
--   FirstName, LastName, IsActive
-- FROM
--   Students;

-- ALTER TABLE Students
-- ADD COLUMN IsActive BOOLEAN DEFAULT TRUE;
  
  SELECT * FROM 
    students 
  WHERE 
    IsActive = 1