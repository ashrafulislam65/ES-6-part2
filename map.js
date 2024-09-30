const numbers = [2,4,6,8,10];
const double2 = n => n*2;
function doubleIt(num){
    // console.log('num now',num)
    return num*2;
}
const result = numbers.map(doubleIt);
// console.log(result)
const result2 = numbers.map(double2);
console.log(result2);
// another approach
const number = [12,20,9];
const doubled3 = number.map(num1 =>num1*2);
console.log(doubled3)
