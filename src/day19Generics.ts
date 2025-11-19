// generics -  generics are a way to create a reusable flexible components and type-safety components like function, classes, interfaces that work with any data type without loosing type safety.
// It works like a placeholder for types like variable for types that get replaced with actual value when the code is used.

const logAndReturn = <T,>(value: T): T => {
    console.log(typeof value);
    return value;
};

const result1 = logAndReturn<string>("Hello");
const result2 = logAndReturn<number>(100);
const result3 = logAndReturn<boolean>(true);
