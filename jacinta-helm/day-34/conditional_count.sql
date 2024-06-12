select
extract(MONTH from payment_date) as month,
count(payment_id) as total_count,
sum(amount) as total_amount,
count(CASE WHEN staff_id = 1 THEN 1 END) as mike_count,
SUM(CASE WHEN staff_id = 1 THEN amount ELSE 0 END) as mike_amount,
count(CASE WHEN staff_id = 2 THEN 1 END) as jon_count,
SUM(CASE WHEN staff_id = 2 THEN amount ELSE 0 END) as jon_amount
from payment
GROUP BY month
ORDER BY month;

/*
    Ember's Feedback:
    - Great work! This was a hard one :D
*/

-- Alternative Solution
SELECT
  EXTRACT(MONTH FROM payment_date)        AS month,
  COUNT(*)                                AS total_count,
  SUM(amount)                             AS total_amount,
  COUNT(*)    FILTER (WHERE staff_id = 1) AS mike_count,
  SUM(amount) FILTER (WHERE staff_id = 1) AS mike_amount,
  COUNT(*)    FILTER (WHERE staff_id = 2) AS jon_count,
  SUM(amount) FILTER (WHERE staff_id = 2) AS jon_amount
FROM payment
GROUP BY month
ORDER BY month;
