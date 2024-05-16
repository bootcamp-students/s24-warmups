/*-include all fields order descending limit to 5 results-*/
select name, author, copies_sold
from books
order by copies_sold desc
limit 5;