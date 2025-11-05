var isEven = function (num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isEven(10));
console.log(isEven(101));
var bigNumber = 200n;
console.log(typeof bigNumber);
var num = BigInt(12345566);
console.log(typeof num);
