const leapYears = year => {
  if (year % 400 === 0) {
    return true;
  }else if(year % 4 === 0 && year % 100 !== 0) {
    return true;
  }else {
    return false;
  }

};
//if number is divisible by 4 it's a leap year
//unless it's divisable by 100
//but if it's divisable 

// Do not edit below this line
module.exports = leapYears;
