select
id,
name
from departments
where exists
(select price from sales where department_id=departments.id and price > 98)