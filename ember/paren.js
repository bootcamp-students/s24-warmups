let getParenPermutationList = (parenNumber) => {

    let parenPermuatationList = [];

    for (let left = 0; left <= parenNumber; left++) {
        let right = parenNumber - left;
        console.log(left, right)
        parenPermuatationList.push(makeParenStrings(left, right))
    }

    function makeParenStrings(left, right) {
        const openParen = '(', closeParen = ')';
        if(right === 0) return '()'.repeat(left)
        return openParen.repeat(left) + closeParen.repeat(left) + openParen.repeat(right) + closeParen.repeat(right)
    }

    return parenPermuatationList;
  }
  console.log(getParenPermutationList(5))

  function balancedParens(n) {
    // get start and end
    // then start doing recursion stepping down in terms of depth
    // let start = '()'.repeat(n);
    // let end = '('.repeat(n) + ')'.repeat(n)
    let returnArr = []
    for (let depth = 0; depth < n; depth++) {
        let breaks = n - depth;
        console.log(depth, breaks)
        returnArr.push(str)
    }


    while (depth <= n) {
        let str = ''
        if (depth === 0) {
            str = '()'.repeat(n - depth)
        }
        `(${str})`
        returnArr.push(str)
        depth++
    }

    function nestParen(repeat, depth) {
        '()'.repeat(repeat - depth)
    }
    return returnArr;
    // return [start, ...balancedParens(n, depth + ), end];
  }

/*
  not quite gaussian sum but you can def make a tree of permutations, there is just overlap so you must remove the non-unique permutations

    ok so that isn't even the actual hard problem, the actual hard problem is this https://www.codewars.com/kata/5426d7a2c2c7784365000783
    balancedParens(0) => [""]
    balancedParens(1) => ["()"] // 1
    balancedParens(2) => ["()()","(())"] // 2
    balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"] // 5
    balancedParens(4) => ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"] // 14
*/


  /*
    factorial is product of a range 5! == 120

    Gaussian summation is the sum of a range  5 gs = 15
    // 5
    5 + 0

    4 + 1
    1 + 4

    2 + 2 + 1
    1 + 1 + 2 + 1
    2 + 1 + 1 + 1

    2 + 1 + 2
    1 + 1 + 1 + 2

    1 + 2 + 2
    1 + 2 + 1 + 1

    3 + 2
    3 + 1 + 1

    2 + 3
    1 + 1 + 3

    1 + 1 + 1 + 1 + 1
    // 15 perms

    // 4
    4 + 0
    3 + 1
    1 + 3
    1 + 2 + 1
    2 + 1 + 1
    1 + 1 + 2
    1 + 1 + 1 + 1
    // 7 perms

    // 3
    3 + 0
    1 + 2
    2 + 1
    1 + 1 + 1
    // 4 perms

    // 2
    2 + 0
    1 + 1
    // 2 perm

    // 1
    1
    // 1 perm

    // can ignore + 0 or include it

    ((((()))))
    ((((())))()
    ((()))(())
    ((()))()()
    (())(())()
    ()()()()
  */

function balancedParens(n) {
  let returnArr = []
  if(n === 0) return ['']
  for (let depth = 0; depth < n; depth++) {
    let breaks = n - depth;
    let str = '()'.repeat(breaks)
    str = '('.repeat(depth) + str + ')'.repeat(depth)
    returnArr.push(str)
    console.log(returnArr)
    returnArr.concat(getNest(depth, breaks))
    console.log(getNest(depth, breaks))
    console.log(returnArr)
    console.log({n, depth, breaks})
  }
  return returnArr;
}

function getNest(depth, breaks) {
  let left = '()'.repeat(depth)
  let right = '('.repeat(breaks) + left + ')'.repeat(breaks)
  return [left + right, right + left]
}

function balancedParens(n) {
  let returnArr = []
  if(n === 0) return ['']
  for(let depth = n; depth > 1; depth--) {
    console.log({n})
    returnArr = returnArr.concat(loop(n))
  }
  return returnArr;
}

function loop(n) {
  let output = ['()'.repeat(n)]

  for(let depth = n; depth > 1; depth--) {
    // go wide for current level
    // wrap output of current level - 1 in parens
    // recursively do that and you get the solution
    output = [...output, ...loop(depth - 1).map(x => `(${x})`)]
  }
  console.log('looped', {n, output})
  return output;
}

function goWide(width) {
  return '()'.repeat(width)
}

function getNest(depth, breaks) {
  breaks--
  let left = '()'.repeat(depth)
  let right = '('.repeat(breaks) + left + ')'.repeat(breaks)
  return [left + right, right + left]
}

function goDeeper(depth, breaks) {

}
