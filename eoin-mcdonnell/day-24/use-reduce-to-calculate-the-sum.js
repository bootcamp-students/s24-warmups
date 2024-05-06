//sum function in the passed array

function sum(array) {
    const initialValue = 0;
    const sumWithInitial = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    return sumWithInitial
      // Use array.reduce() to calculate and return the
      // sum of the values in array.
    }
    