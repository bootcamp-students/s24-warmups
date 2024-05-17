/*
Instructions: Given a payment table, which is a part of DVD Rental Sample Database, produce a result set for the report 
that shows a side-by-side comparison of the number and total amounts of payments made in Mike's and Jon's stores 
broken down by months.
Params: Given big table
Return: A table ordered by month using natural order (Jan, Feb, Mar, etc.).
Concerns: it's a lot of data
Solution: 
*/

--need to grab manager_staff_id FROM store
--in the selet you have to use extract, count, sum, count, sum, count, cum, and using cases
SELECT
-- the first three you did are completely right woohoo
    EXTRACT(month FROM payment.payment_date) as month,
    COUNT(payment_id) as total_count,
    SUM(amount) as total_amount,
    COUNT(case when(staff_id = 1)THEN amount ELSE NULL END) AS mike_count,
    SUM(case when(staff_id = 1) THEN amount ELSE 0 END) AS mike_amount,
    COUNT(case when(staff_id = 2)THEN amount ELSE NULL END) AS jon_count,
    SUM(case when(staff_id = 2) THEN amount ELSE 0 END) AS jon_amount
--everything below this is fine 
FROM    
    Payment
GROUP BY
    month
ORDER BY 
    month