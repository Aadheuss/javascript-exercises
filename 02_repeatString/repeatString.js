const repeatString = function(string, num) {
  let newString = '';
  let i = 0;
  do {
    if (num < 0) {
    return 'ERROR';
    }else if (num === 0 || string == null)  {
      return newString;
    }else if (num === 1) {
      return string;
    }else {
      newString += string;
    }
  i++ 
  } 

  while (i < num);
  return newString;
}
//string, num
//repeatString = string times number 

// Do not edit below this line
module.exports = repeatString;




