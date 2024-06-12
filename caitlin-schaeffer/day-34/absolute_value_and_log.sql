/*
Instructions: Given a table, Return a table with two columns (abs, log) where the values in abs are the absolute values
of number1 and the values in log are values from number2 in logarithm to base 64.
Params: given table:
decimals table schema
id
number1
number2
Return: table with columns abs and log
Concerns: converting data into new column and rounding off decimals , need to use a function called log? log(2.0, 64.0)
log returns a numeric with 	logarithm to base b
Solution: using abs and log
*/

SELECT
    Abs(number1) AS abs,
    log(64, number2) AS log
FROM
    Decimals

/*
    Ember's Feedback:
    - Great work!
*/
