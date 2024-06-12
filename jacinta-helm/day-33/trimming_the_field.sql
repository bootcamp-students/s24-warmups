SELECT
  id,
  name,
  split_part(characteristics, ',', 1 ) AS characteristic
FROM
    monsters
ORDER BY id;


--split_part?? what is that It allows the last index to be cut off
--Parameters trim off one characteristics
--Return My function should show the table with one less than off characteristics
--Example big, smelly; big;
--Concerns not knowing the method or there are no characteristics for the monster
--Explain, Selecting to show the table by id name and characteristics from the monsters and order the table by the id.
-- To trim off one characteristics, i can use split

/*
  Ember's Feedback:
  - Great work!! and awesome find of the split_part function :D
  - split_part kind of works like .split() in JS. You give it a delimiter pattern and it makes
    a list of the pieces around the split. Because we want the first characteristic in the -
    comma separated lists of characteristics, the 1 allows you to do that :D
    If there is only one characteristic, this works for that as well.
    Elegant solution!
*/

-- Alternative Solution
select id,
  name,
  case
    when POSITION(',' IN characteristics) = 0 then characteristics
    else left(
      characteristics,
      POSITION(',' IN characteristics) - 1
    )
  end as characteristic
FROM monsters
order by id
