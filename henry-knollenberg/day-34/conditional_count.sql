SELECT EXTRACT (
        MONTH
        FROM payment_date
    ) AS month,
    COUNT (rental_id) AS total_count,
    SUM (amount) as total_amount,
    COUNT (rental_id) FILTER (
        WHERE staff_id = 1
    ) AS mike_count,
    SUM (amount) FILTER (
        WHERE staff_id = 1
    ) AS mike_amount,
    COUNT (rental_id) FILTER (
        WHERE staff_id = 2
    ) AS jon_count,
    SUM (amount) FILTER (
        WHERE staff_id = 2
    ) AS jon_amount
FROM payment
GROUP BY month
ORDER BY month

/*
    Ember's Feedback:
    - Great work!
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
