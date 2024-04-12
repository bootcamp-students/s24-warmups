/*precept
parameters- split chocolate bar given dimensions n*m into small squares.
return- return minimum number of breaks needed. if invalid return 0.
example- (1, 1) return 0
concerns- i think the wording is slightly confusing but im sure i can figure it out. 
explain- check if dimensions are invalid, if so return 0. n * m -1
positive self talk- There is no try
translate- see comments
*/


function breakChocolate(n, m) {
    // Check if either dimension is invalid (less than or equal to 0)
    if (n <= 0 || m <= 0) {
        // If so, return 0 as no breaks are needed
        return 0;
    }
    // Calculate the total number of squares in the chocolate bar
    // and subtract 1 from it, as each break creates one additional square
    return n * m - 1;
}