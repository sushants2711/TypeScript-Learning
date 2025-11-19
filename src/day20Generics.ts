// type Script not support arrow function in method overloading it only support normal function in method overloading

const add = <T extends number | string,>(a: T, b: T): T => {
    console.log(a);
    console.log(b);

    return (a as any) + (b as any);
}

console.log(add(4, 6));
console.log(add("sushant", "singh"));


// In generics we also pass multiple value like number, string, boolean etc

// example

const sum = <T, U>(a: T, b: U): void => {
    console.log(a);
    console.log(b);
}

sum(3, 6);
sum(3, "sushant");
sum("sushant", 3);
sum("sushant", "sushant")