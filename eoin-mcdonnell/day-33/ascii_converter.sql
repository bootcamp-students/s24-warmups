<<<<<<< HEAD
/*  SQL  */
SELECT id, ASCII(left(name,1)) AS name, birthday, ASCII(left(race, 1)) as race
FROM demographics;
=======
SELECT id,
    ASCII(left(name, 1)) AS name,
    birthday,
    ASCII(left(race, 1)) as race
FROM demographics;

/*
    Ember's Feedback:
    - ASCII actually takes the first character if you give it a string,
        so you can get away with just doing ASCII(name)
    - Great job :D
*/
>>>>>>> 4b178708d77906f208d5f903f6748cf4f7eb0eca
