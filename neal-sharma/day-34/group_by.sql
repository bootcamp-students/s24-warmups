select count(people) as people_count, age
from people
group by (age)