/*precept
parameters- take an array containing names of people who like an item and return the display text.
return-display text as shown
example-[] "no one likes this"
concerns- this one seems easier than the last one. Well get there
explain-switch cases make sense to me. really glad it was useable on this one. give case for each
number of names and replace names with string interpolation. last one replaces names then adds
the length of the array minus the names already shown.
positive self talk- If i could get the last one i can get this one.
translate-
*/

function likes(names) {
    const length = names.length; // get number of names in array
    switch (length) {
        case 0: // handle 0 names
            return "no one likes this";
        case 1: // replace names with string interpolation.
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default: // 2 names then the length of names in the names array minus the 2 names shown.
            return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
    }
}
