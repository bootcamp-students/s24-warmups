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
        console.log({ n })
        return balance(loop(n));
    }

    function loop(n) {
        let o = '(', c = ')'
        let output = [o.repeat(n)]

        //     let log = true
        let log = n === 4

        if (n > 1) {
            let recur = loop(n - 1);
            if(log) console.log({ recur, lvl: n - 1 });
    //         if(log) console.log(n)
            if(n === 2) output.push('()')

            for (let i = recur.length - 1; i > 0; i--) {

              // first operation is c or o, depending on if odd or even
              let paren = n % 2 === 0 ? c : o
              output.push(recur[i] + paren)

              if(log) console.log({i}, recur[i] + paren)

              paren = o

    //           console.log('0',output)
    //           console.log(recur[i])

              let where = 'l'

              // do n - 1 operations, but we already did the first operation so - 2
              for(let j = n - 2; j > 0; j--) {
                let add = recur[i]
                if(where === 'l') {
                    if(log) console.log('j', paren + add)
                    add = paren + add
                    where = 'r'
                } else {
                    if(log) console.log('j', add + paren)
                    add += paren
                    where = 'l'
                }
                output.push(add)
              }
            }

            if(log) console.log('1',{output})
            output = [...new Set(output)]
            if(log) console.log('2',{ output, length: output.length })
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
    //   console.log('balance', arr)
    //   console.log(perms)
      for(let [lvl, arr] of Object.entries(perms)) {
    //     console.log(lvl, arr)
        for(let el of arr) {
    //       console.log(el)
          for(let nest of arr) {
    //         console.log(nest)
    //         console.log(mirror(nest))
            returnArr.push(el + mirror(nest))
          }
        }
      }
      console.log('len', returnArr.length)
      return returnArr;
    }

    function mirror(str) {
        let returnStr = '';
        for(let i = str.length - 1; i >= 0; i--){
            returnStr += str[i] === '(' ? ')' : '('
        }
        return returnStr
    }
