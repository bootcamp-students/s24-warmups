SELECT id,
    name,
    split_part(characteristics, ',', 1) as characteristic
FROM monsters
ORDER BY id;

/*
    Ember's Feedback:
    - snake case this file name
    - Good work!
*/
