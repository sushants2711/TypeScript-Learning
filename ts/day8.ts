const greet = (name: string): void => {
    console.log(`Hey ${name}, Welcome to our Company`)
};

greet("sushant");

const sumOfNum = (a: number, b: number): number => {
    const result = a + b;
    return result;
};

console.log(sumOfNum(4, 5));


// Palindrome of number
const isPalindrome = (str: string): boolean => {
    const reversedStr = str.split("").reverse().join("");
    return reversedStr === str;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("Hello"))

// average of an array
const avg = (num: number[]): number => {
    const result = num.reduce((acc, curr) => acc + curr, 0);
    const length = num.length;
    const avgIs = result / length;
    return avgIs;
}

console.log(avg([1, 2, 3, 4, 55, 5]));

// max value from an array
const maxValue = (num: number[]): number => {
    const result = Math.max(...num);
    return result;
};

console.log(maxValue([12, 34, 56, 12, 11, 1, 67, 34, 23, 21]));
