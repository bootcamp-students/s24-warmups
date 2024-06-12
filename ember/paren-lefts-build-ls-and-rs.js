/*
    1
    (

    1 (1 + 0x0)
*/
/*
    2
    ((
(
    () add c to r

    2 (1 + 0x0 + 1x1)
*/
/*
    3
    (((
()
    ()( add o to r ()

    (() add o to l ()

    5 (1 + 2x2)
*/
/*
    4
    ((((
()(
    ()() add c to r

    (()( add o to l
    ()(( add o to r
(()
    (()) add c to r

    ((() add o to l
    o to r is duplicate (()(

    14 (1 + 2x2 + 3x3)
*/
/*
    5
    '((((()))))'

    '(((()())))'
    '(((())()))'
    '(((()))())'
    '(((())))()'

    '((()(())))'
    '((()()()))'
    '((()())())'
    '((()()))()'

    '((())(()))'
    '((())()())'
    '((())())()'
    '((()))(())'
    '((()))()()'

    '(()((())))'
    '(()(()()))'
    '(()(())())'
    '(()(()))()'

    '(()()(()))'
    '(()()()())'
    '(()()())()'
    '(()())(())'
    '(()())()()'

    '(())((()))'
    '(())(()())'
    '(())(())()'
    '(())()(())'
    '(())()()()'

    '()(((())))'
    '()((()()))'
    '()((())())'
    '()((()))()'

    '()(()(()))'
    '()(()()())'
    '()(()())()'
    '()(())(())'
    '()(())()()'

    '()()((()))'
    '()()(()())'
    '()()(())()'
    '()()()(())'
    '()()()()()'

    (((((  x 1
    (((()  x 4
    ((()(  x 4
    ((())  x 5
    (()((  x 4
    (()()  x 5
    (())(  x 5
    ()(((  x 4
    ()(()  x 5
    ()()(  x 5

()() - 0 L
    ()()(  add o to r - 1 o
    (()()  add o to l - 1 o
(()( - 2 L
    (()((  add o to r - 3 o
    ((()(  add o to l - 3 o
    (()()  add c to r - 1 o
()(( - 2 L
    ()(((  add o to r - 3 o
    (()((  add o to l - 3 o
    ()(()  add c to r - 1 o
(()) - 0 L
    (())(  add o to r - 1 o
    ((())  add o to l - 1 o
((() - 2 L
    ((()(  add o to r - 3 o
    (((()  add o to l - 3 o
    ((())  add c to r - 1 o

    so if the element from recur is balanced, do 2
    if element is unbalanced, do 3?

    42 (1 + 4x4 + 5x5)
*/


function balancedParens(n) {
    if (n === 0) return ['']
    return balance(loop(n));
}

function loop(n) {
    let o = '(', c = ')'
    let output = [o.repeat(n)]

    if (n > 1) {
        let recur = loop(n - 1);

        if (n === 2) output.push('()')

        for (let i = recur.length - 1; i > 0; i--) {

            let paren = o
            output.push(recur[i] + paren)

            let where = 'l'

            // if balanced, do 2 operations
            // if unbalanced, do 3 operations
            let numLeftParen = recur[i].match(/\(/g).length
            let numRightParen = recur[i].match(/\)/g).length
            let isBalancedRecur = numLeftParen === numRightParen

            // we already did one operation so - 1
            let numOps = isBalancedRecur ? 1 : 2

            for (let j = 1; j <= numOps; j++) {

                paren = j % 2 === 0 ? c : o

                let add = recur[i]

                if (where === 'l') {
                    add = paren + add
                    where = 'r'

                } else {
                    add += paren
                    where = 'l'
                }

                output.push(add)
            }
        }

        output = [...new Set(output)]
    }

    return output;
}

function balance(arr) {
    let returnArr = []
    let perms = {}

    arr.forEach(x => {
        const regex = /\(/g;
        let numLeftParen = x.match(regex).length
        perms[numLeftParen] = (perms[numLeftParen] || []).concat([x])
    })

    for (let arr of Object.values(perms)) {
        for (let el of arr) {

            for (let nest of arr) {
                returnArr.push(el + mirror(nest))
            }
        }
    }

    return returnArr;
}

function mirror(str) {
    let returnStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        returnStr += str[i] === '(' ? ')' : '('
    }
    return returnStr
}
