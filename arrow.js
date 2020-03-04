// function doubleIt(num){
//     return num*2;
// }
const doubleIt = num => num*2;
const result1 = doubleIt(5);
console.log(result1);

const add = (x,y)=>x+y;
const result = add(5,6);
console.log(result);

const give5 = ()=> 5;
console.log(give5());

const doMath = (x,y)=>{
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}

console.log(doMath(7,5));