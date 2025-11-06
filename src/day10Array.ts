const value1: number[] = [1, 2, 3, 4, 5];

if (Array.isArray(value1)) {
    console.log(true)
} else {
    console.log(false);
};

const value2: string = "Hello, world!";

const result = Array.isArray(value2) ? true : false;
console.log(result);


const value3: { name: string, age: number } = {
    name: "John",
    age: 30
};

if (Array.isArray(value3)) {
    console.log(true);
} else {
    console.log(false);
};

const value4: boolean[] = [true, false, true];

const ans = Array.isArray(value4) ? true : false;
console.log(ans);


const value5: number = 42;
const ans2 = Array.isArray(value5) ? true : false;
console.log(ans2);