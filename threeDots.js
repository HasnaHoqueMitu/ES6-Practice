const age =[10, 12, 13, 9, 18];
const age2 = [19, 40, 33, 20, 30];
const age3 = [50, 55, 59];
// const allAges = age.concat(age2).concat(89).concat(age3);
// console.log(allAges);

// the smareter way;

const allAges2 = [...age,...age2, 5,...age3];
console.log(allAges2);

const max = Math.max(...allAges2);
console.log(max);