console.log("Hello, today i am start to learn TypeScript");
var num = 5;
num = 10;
console.log(num);
// create a sum of 2 numbers
var sumofTwoNumber = function (a, b) {
    return a + b;
};
// @ts-ignore
// const sumofTwoNumber = (a: number, b: number): number => {
//     return a + b;
// };
console.log(sumofTwoNumber(10, 40));
var username = "Sushant";
var isActive = true;
var numbers = [1, 2, 3,]; // shorthand property
var age = [1, 2, 3, 4, 4, 3];
var ageVar = ["Sushant", "Keshav", "ABhi"];
var fruits = ["Mango", "Banana", "Orange", "PineApples"]; // generic property
var numbers2 = [1, 2, 3];
var tupleNum = [1, 2, 3, 4, 45, 5]; // how many values enter define also how many types in tuples
var a = "hello";
var ans = a.length;
console.log("The length is: ", ans);
