/*-repeat 3 times, name-*/
/*-reverse characteristics-*/

SELECT
  REPEAT(name, 3) AS name,
  REVERSE(characteristics) AS characteristics
FROM monsters;

/*
  Ember's Feedback:
  - Great job! :D lots of fun tools in PostreSQL
*/
