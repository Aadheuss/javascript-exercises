const sumAll = (a, b) => {
  let total = 0;
  console.log(typeof(b));
  if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') {
    return 'ERROR';
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
    total += i;
    } 
  } else {
    for ( let i = b; i <= a; i++) {
      total += i;
    } 
  } return total;

  }

// Do not edit below this line
module.exports = sumAll;
