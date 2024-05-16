-- very complex, needs to "show a side-by-side comparison of the number and total amounts of payments made in Mike's and Jon's stores broken down by months"
-- given a DVD rental database

SELECT EXTRACT(month from payment_date) AS month,
COUNT(payment_id) AS total_count,
SUM(amount) AS total_amount,
COUNT(payment_id) FILTER(WHERE staff_id = 1) AS mike_count,
SUM(amount) FILTER(WHERE staff_id = 1) AS mike_amount,
COUNT(payment_id) FILTER(WHERE staff_id = 2) AS jon_count,
SUM(amount) FILTER(WHERE staff_id = 2) AS jon_amount
FROM payment
GROUP BY month
ORDER BY month

-- this kata fucking sucks
