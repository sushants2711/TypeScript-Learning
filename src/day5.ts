const isEven = (num: number) => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isEven(10));
console.log(isEven(101));


// BigInt is come after ES2020

// let bigNumber: bigint = 200n;
// console.log(typeof bigNumber);

// let num: bigint = BigInt(12345566);
// console.log(typeof num)