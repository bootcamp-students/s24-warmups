SELECT EXTRACT(
        MONTH
        FROM payment_date
    ) AS month,
    COUNT(*) AS total_count,
    SUM(amount) AS total_amount,
    COUNT(
        CASE
            WHEN(staff_id = 1) THEN amount
            ELSE null
        END
    ) AS mike_count,
    SUM(
        CASE
            WHEN(staff_id = 1) THEN amount
        END
    ) AS mike_amount,
    COUNT(
        CASE
            WHEN(staff_id = 2) THEN amount
            ELSE null
        END
    ) AS jon_count,
    SUM(
        CASE
            WHEN(staff_id = 2) THEN amount
            ELSE 0
        END
    ) AS jon_amount
FROM payment
GROUP BY month
ORDER BY month

/*
    Ember's Feedback:
    - snake case file name
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
