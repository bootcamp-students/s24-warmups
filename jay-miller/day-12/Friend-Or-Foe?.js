function friend(friends){
//Use .filter to get names
//if name.length === 4: Passed
//if name.length doesnt === 4: Failed
return friends.filter(function (item) { return item.length === 4 });  
}
