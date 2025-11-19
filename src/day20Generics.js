// type Script not support arrow function in method overloading it only support normal function in method overloading
var add = function (a, b) {
    console.log(a);
    console.log(b);
    return a + b;
};
console.log(add(4, 6));
console.log(add("sushant", "singh"));
// In generics we also pass multiple value like number, string, boolean etc
// example
var sum = function (a, b) {
    console.log(a);
    console.log(b);
};
sum(3, 6);
sum(3, "sushant");
sum("sushant", 3);
sum("sushant", "sushant");
