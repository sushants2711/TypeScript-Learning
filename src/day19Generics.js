// generics -  generics are a way to create a reusable flexible components and type-safety components like function, classes, interfaces that work with any data type without loosing type safety.
// It works like a placeholder for types like variable for types that get replaced with actual value when the code is used.
var logAndReturn = function (value) {
    console.log(typeof value);
    return value;
};
var result1 = logAndReturn("Hello");
var result2 = logAndReturn(100);
var result3 = logAndReturn(true);
