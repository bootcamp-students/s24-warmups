/*precept
parameters- filter a list of strings that are names
return- filter and return names that have a length of 4
example- friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
concerns- we did something very similar in class yesterday so it was much easier to get this one.
Thanks Ember and Jason.
explain- filters names in friends array by their length. return the names that are equal to 4
positive self talk- "Today, I choose to speak to myself as I would to my dearest friend,
with kindness, encouragement, and unwavering belief in my potential."
translate- comments
*/

function friend(friends){
    let friend = friends.filter(name => name.length === 4)// using filter filter out names that 
    //dont equal four and return names equal to four. 
    return friend;
}