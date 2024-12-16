/*
// 4
[
 "()()()()",
 "(()()())",
 "((()()))", "(()())()", "()(()())",
 "(((())))", "((()))()", "()((()))",
 "((())())", "(())()()", "()(())()",
 "(()(()))",           , "()()(())",
 "(())(())" // ???
*/

/*
    idea with this attempt is to find a pattern in building up individual paren combos with mirror
    lmao no that wont work, not mirroring at least. I would be matching all possible permutations though
    no can't say viable + viable because 4 deep would fail, this would fail ((())())
    could make permutations of # facing left and # facing right. That would make mirror pairs.
    for pairs, edge pieces can never point out so it would really be permutations on n - 1
    mirrors will count so can optimize there perhaps
*/
/*
    4
    ()()
    (()(
    ((()
    ((((
    ((()
    (()(
    (())
    (()(
    ((()
    (())
    ()((
    ()((
    ()((
    ()()

    (((( - 1 4L -> 4R  mirror 1 in total
    ()() - 2 0L -> 0R  mirror and a balance
    (()) - 2 0L -> 0R  the 0Ls are pointing to own and opposite 0Rs so 4 in total
    (()( - 3 2L 2R
    ((() - 3 2L 2R
    ()(( - 3 2L 2R all three are point to all 3, so 9 in total
*/
/*
    3
    ()()()
    (()())
    ((()))
    (())()
    ()(())

    ((( 1 3L -> 3R
    (() 2 1L -> 1R (2)
    ()( 2 1L -> 1R (2)

    ((n - 1) ** 2) + 1 <- fails for 4
*/
/*
    2
    (( 1 2L 2R
    () 1 0L 0R
*/
/*
    1
    ( -> 1L -> 1R (mirror)
*/

/*
    so to code this, is it build up the string with weights?
    is it to build the string flipping each?
    go wide, then go in reverse and flip?
    ((( -> (() -> ()(
    ((( -   (()
     |
    L child
    ()(

    (((( -> ((() -> (()) & (()( -> ()() & ()((
    so that deflates the simple end flip, I need to make a tree essentially
    ((((    -   ((()
     |            |
    L child     L child
    (()(          (())
     |              |
invert middle? invert middle?
    ()((            ()()
*/

function balancedParens(n) {
    if (n === 0) return ['']
    console.log({ n })
    return loop(n);
}

function loop(n) {
    let left = '(', right = ')'
    let lvlLeft = (lvl) => `${lvl}L`
    let lvlRight = (lvl) => `${lvl}R`
    let hold = {}
    hold[lvlLeft(n)] = [left.repeat(n)]
    hold[lvlRight(n)] = [right.repeat(n)]

    // always start with inward facing paren
    for (let i = n - 2; i >= 0; i -= 2) {
        let temp = left;



        let leftI = lvlLeft(i)
        hold[leftI] = []
        // temp +=
        // hold[leftI].push()
    }

    let returnArr = []
    for (let i = n; i >= 0; i--) {
        for (const l of hold[lvlLeft(i)]) {
            for (const r of hold[lvlRight(i)]) {
                returnArr.push(l + r)
            }
        }
    }

    return
}
