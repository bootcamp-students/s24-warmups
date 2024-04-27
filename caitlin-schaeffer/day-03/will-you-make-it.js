/* You were camping with your friends far away from home, but when it's time to go back,
you realize that your fuel is running out and the nearest pump is 50 miles away!
You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
Considering these factors, write a function that tells you if it is possible to get to the pump or not.
Function should return true if it is possible and false if not.

Params: Write a function that tells you if it is possible to get to the pump.
Return: true or false
Ideas: Most likely this should be an if/else? As in, if gas station is 50 miles away then true, else false
Explain solution: below
*/

/* I want to say: if true (return fuelLeft == distanceToPump/mpg), if false (fuelLeft != distanceToPump/mpg) */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft >= distanceToPump / mpg
}

/* fuelLeft has to be equal or greater to distanceToPump/mpg) */

/* Ember's Feedback:
    Great job!
    I hope the order of operations with these expressions makes sense. If you want to know -
    more about why it works this way then let me know.
*/
