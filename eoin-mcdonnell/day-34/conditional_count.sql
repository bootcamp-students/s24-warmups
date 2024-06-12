/*-not mine just a good learning example-*/
/*-all items are orders so count any-*/
/*- filter staff id -*/
/*-count for count sum for amount-*/
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
<<<<<<< HEAD
ORDER BY month;
=======
ORDER BY month;

/*
  Ember's Feedback:
  - No worries, this one was a doozy lol will probably change this for
  the next cohort so that its more of an instructional time
*/

-- Alternative Solution
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
>>>>>>> 4b178708d77906f208d5f903f6748cf4f7eb0eca
