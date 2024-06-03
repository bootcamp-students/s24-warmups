-- very complex, needs to "show a side-by-side comparison of the number and total amounts of payments made in Mike's and Jon's stores broken down by months"
-- given a DVD rental database

SELECT
  EXTRACT(month FROM payment_date)              AS month,
  COUNT(payment_id)                             AS total_count,
  SUM(amount)                                   AS total_amount,
  COUNT(payment_id) FILTER (WHERE staff_id = 1) AS mike_count,
  SUM(amount)       FILTER (WHERE staff_id = 1) AS mike_amount,
  COUNT(payment_id) FILTER (WHERE staff_id = 2) AS jon_count,
  SUM(amount)       FILTER (WHERE staff_id = 2) AS jon_amount
FROM payment
GROUP BY month
ORDER BY month;

-- this kata fucking sucks

/*
    Ember's Feedback:
    - :P It sucks but you got it!
    - Now you know you can do fun stuff like filters and case statements :D
*/

-- Alternative Solution
SELECT
    EXTRACT(month FROM payment.payment_date) as month,
    COUNT(payment_id) as total_count,
    SUM(amount) as total_amount,
    COUNT(case when(staff_id = 1)THEN amount ELSE NULL END) AS mike_count,
    SUM(case when(staff_id = 1) THEN amount ELSE 0 END) AS mike_amount,
    COUNT(case when(staff_id = 2)THEN amount ELSE NULL END) AS jon_count,
    SUM(case when(staff_id = 2) THEN amount ELSE 0 END) AS jon_amount
FROM
    Payment
GROUP BY
    month
ORDER BY
    month
