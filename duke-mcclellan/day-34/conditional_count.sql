WITH store_payments AS (
    SELECT
        s.store_id,
        s.first_name,
        p.payment_date,
        p.amount
    FROM
        payment p
    JOIN staff s ON p.staff_id = s.staff_id
    WHERE
        s.first_name IN ('Mike', 'Jon')
),
monthly_payments AS (
    SELECT
        EXTRACT(YEAR FROM payment_date) AS year,
        EXTRACT(MONTH FROM payment_date) AS month,
        first_name,
        COUNT(*) AS payment_count,
        SUM(amount) AS total_amount
    FROM
        store_payments
    GROUP BY
        EXTRACT(YEAR FROM payment_date),
        EXTRACT(MONTH FROM payment_date),
        first_name
),
total_monthly_payments AS (
    SELECT
        EXTRACT(YEAR FROM payment_date) AS year,
        EXTRACT(MONTH FROM payment_date) AS month,
        COUNT(*) AS total_count,
        SUM(amount) AS total_amount
    FROM
        payment
    GROUP BY
        EXTRACT(YEAR FROM payment_date),
        EXTRACT(MONTH FROM payment_date)
)
SELECT
    tm.month::float,
    COALESCE(tm.total_count, 0) AS total_count,
    COALESCE(tm.total_amount, 0.0) AS total_amount,
    COALESCE(mike.payment_count, 0) AS mike_count,
    COALESCE(mike.total_amount, 0.0) AS mike_amount,
    COALESCE(jon.payment_count, 0) AS jon_count,
    COALESCE(jon.total_amount, 0.0) AS jon_amount
FROM
    total_monthly_payments tm
LEFT JOIN
    monthly_payments mike ON tm.year = mike.year AND tm.month = mike.month AND mike.first_name = 'Mike'
LEFT JOIN
    monthly_payments jon ON tm.year = jon.year AND tm.month = jon.month AND jon.first_name = 'Jon'
ORDER BY
    tm.year, tm.month;
