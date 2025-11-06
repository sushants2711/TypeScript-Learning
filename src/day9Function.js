// default function
var getAgeCheck = function (num) {
    if (num === void 0) { num = 10; }
    var result = num > 18 ? true : false;
    return result;
};
console.log(getAgeCheck(22));
console.log(getAgeCheck());
// optional parameters
var createSentence = function (name, age) {
    if (age)
        return "Hello ".concat(name, " and your age is ").concat(age, ".");
    return "Hello, ".concat(name);
};
console.log(createSentence("sushant", 22));
console.log(createSentence("sushant"));
