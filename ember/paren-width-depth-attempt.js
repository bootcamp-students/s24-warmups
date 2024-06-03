/*
    the premise of this solution attempt is that when you get to 5
    '((()))(())', '((()))()()', is expected and '((()))()()', is what I would do
    so I think I need to re-conceptualize the problem back to permutations of ints
    5 can be:
    3 deep and 2 deep
    3 deep and 2 wide

    how to account for nesting?
    levels of wrap?

    for 3
    0 wrap
    0 deep
    3 wide
    "()()()"

    1 wrap
    0 deep
    2 wide
    "(()())"

    0 wrap
    2 deep
    1 wide?
    "(())()"


*/
/*
balancedParens(0) => [""]
balancedParens(1) => ["()"] // 1
balancedParens(2) => ["()()","(())"] // 2
balancedParens(3) => ["()()()", "(()())", "(())()","()(())","((()))"] // 5
balancedParens(4) => ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"] // 14
*/

function balancedParens(n) {
    if (n === 0) return ['']
    console.log({ n })
    return loop(n);
}

function loop(n) {
    let output = [wide(n)]

    if (n > 1) {
        let recur = loop(n - 1);
        console.log({ recur });

        let wrapPrevWide = wrap(recur[0]);
        output.push(wrapPrevWide);

        recur.slice(1).forEach(x => {
            output.push(wrap(x));
            output.push(addRight(x));
            output.push(addLeft(x));
        })

        if (n % 2 === 0) {
            let parenDeep = deep(n / 2);
            output.push(parenDeep + parenDeep)
        }

        output = [...new Set(output)]
        console.log({ output, length: output.length })
    }

    return output;
}
