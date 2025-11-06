// default function

const getAgeCheck = (num: number = 10): boolean => {
    const result = num > 18 ? true : false;
    return result;
};

console.log(getAgeCheck(22));
console.log(getAgeCheck());


// optional parameters

const createSentence = (name: string, age?: number): string => {
    if (age) return `Hello ${name} and your age is ${age}.`
    return `Hello, ${name}`;
}

console.log(createSentence("sushant", 22));
console.log(createSentence("sushant"));