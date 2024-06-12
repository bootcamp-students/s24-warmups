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

/*
      Ember's Feedback:
      - Great work! This was a hard one
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
