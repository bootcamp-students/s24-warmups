-- Replace with your SQL Query
-- SELECT * FROM payment


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

