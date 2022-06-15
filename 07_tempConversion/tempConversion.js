const ftoc = (f) => {
  let c = (f - 32) * 5 / 9;
  c = Math.round(c * 10) /10;
  return c;

};

const ctof = (c) => {
  let f = c * 9 / 5 + 32;
  f = Math.round(f * 10) /10;
  return f;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
