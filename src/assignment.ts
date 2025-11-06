let longText: string = "sushsantkumarsingh text ook not then i can copy it 4-5 times yahooo...";
let extract = longText.substring(0, 10);
let shortText = extract.split("").sort().join("");
console.log("After sorting the split text: ", shortText);

console.log("---- ---- ----");

let str1: string = "sushant";
let str2: string = "sushant";

let isEqualStrings: boolean = str1 === str2;
console.log(isEqualStrings);


console.log("---- ---- ----");

let product: string = "Apple";
let price: number = 230;

console.log(`The Price of ${product} is now $${price} per kg.`)

console.log("---- ---- ----");

console.log("DAY 5 HW");

const isDivisibleBy4And8 = (num: number) => {
    if (num % 4 === 0 && num % 8 === 0) {
        return true;
    } else {
        return false;
    };
};

console.log(isDivisibleBy4And8(64));
console.log(isDivisibleBy4And8(20));