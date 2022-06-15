//fibonacci is a0 , a1 = (a-1 + a0), a2 = (a0 + a1), a++;
const fibonacci = (num) => {
  num = Number(num);
  let array = [];
//starting point 
  let nextNum = 0;
  if (num < 0) {
    return 'OOPS';
  } else {
//if 1 is the first value next value is going to be 1 + value preceding 1 which is null/ 0 return 0 + 1 = 1;
//nextNUm = current index + previous index
    for (let i = 0; i < num; i++) {
      if ( array.length <= 1) {
        nextNum = 1;
        array.push(nextNum);
    }   else {
        nextNum = Number(array[array.length - 2]) + Number(array[array.length - 1])
        array.push(nextNum);
    } 
    } return array[array.length - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
