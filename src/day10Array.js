var value1 = [1, 2, 3, 4, 5];
if (Array.isArray(value1)) {
    console.log(true);
}
else {
    console.log(false);
}
;
var value2 = "Hello, world!";
var result = Array.isArray(value2) ? true : false;
console.log(result);
var value3 = {
    name: "John",
    age: 30
};
if (Array.isArray(value3)) {
    console.log(true);
}
else {
    console.log(false);
}
;
var value4 = [true, false, true];
var ans = Array.isArray(value4) ? true : false;
console.log(ans);
var value5 = 42;
var ans2 = Array.isArray(value5) ? true : false;
console.log(ans2);
