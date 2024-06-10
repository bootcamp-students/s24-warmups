select count(people) as people_count,
    age
from people
group by (age)

/*
    Ember's Feedback:
    - Group by is super powerful and you will see that group by pattern in
    code bases and ORMs as you continue with your career. Highly recommend getting a good
    understanding of it.
*/
