SELECT 
  Extract(month FROM payment.payment_date) AS month,
  COUNT(payment_id) AS total_count,
  SUM(amount) AS total_amount,
  COUNT(CASE WHEN staff_id = 1 
        THEN payment_id
        ELSE null
        END) AS mike_count,
  SUM(CASE WHEN staff_id = 1 
        THEN amount
        END) AS mike_amount,
  COUNT(CASE WHEN staff_id = 2 
        THEN payment_id
        ELSE null
        END) AS jon_count,
  SUM(CASE WHEN staff_id = 2 
        THEN amount
        END) AS jon_amount
FROM payment
GROUP BY month
ORDER BY month