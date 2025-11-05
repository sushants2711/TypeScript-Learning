console.log("Hello, today i am start to learn TypeScript");

let num: number = 5;
num = 10;
console.log(num);

// create a sum of 2 numbers
const sumofTwoNumber = (a: number, b: number): number => {
    return a + b;
};

// @ts-ignore
// const sumofTwoNumber = (a: number, b: number): number => {
//     return a + b;
// };

console.log(sumofTwoNumber(10, 40));

let username: string = "Sushant";

let isActive: boolean = true;

let numbers: number[] = [1, 2, 3,]; // shorthand property

let age: number[] = [1, 2, 3, 4, 4, 3];
console.log(age.length)

let ageVar: string[] = ["Sushant", "Keshav", "ABhi"];

let fruits: Array<String> = ["Mango", "Banana", "Orange", "PineApples"];  // generic property

let numbers2: Array<number> = [1, 2, 3];

let tupleNum: [number, number, number, number, number, number] = [1, 2, 3, 4, 45, 5] // how many values enter define also how many types in tuples

let a: string = "hello"
let ans: number = a.length;
console.log("The length is: ", ans)
