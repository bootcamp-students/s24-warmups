function century(year) {
    let centuryNum = 0
    if (Number.isInteger(year / 100)) {
        centuryNum = (year / 100);
    } else (
        centuryNum = Math.ceil(year / 100)
    )

    return centuryNum;
}

// year divided by century 10 1785  1700 +1 except 1800 / 10
// if year / 1000 isInteger return centuryNum (century Num is year /100)

// else  Math.ceil(year /100)
// so if the number is an integer if /1000 then we're good, if not round up

/*
    Ember's Feedback:
    Same thing here where your pseudocode kind of breaks down. Lets chat about how to do it better.
    If the year is cleaning divided by 100, the ceiling will not roll it to the next century.
        i.e. 1601 / 100 will result in 16.01. Math.ceil turns that into 17, which is correct. 1600 though -
            when when divided by 100 returns 16. Math.ceil on 16 is still just 16, which is the correct century.
    All that is to say, the isInteger call is unnecessary. You can just give year / 100 to Math.ceil
*/

function century(year) {
    return Math.ceil(year / 100)
}
