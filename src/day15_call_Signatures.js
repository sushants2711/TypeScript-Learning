var student1 = {
    name: "Sushant",
    age: 22,
    section: "D",
    greet: function (country) { return "Welcome ".concat(student1.name, " and the country is ").concat(country); }
};
console.log(student1.greet("India"));
// normal function with type define is called as also call signatures
var greetUser = function (name) {
    return "".concat(name);
};
