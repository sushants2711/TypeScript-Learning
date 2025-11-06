type Student = {
    name: string,
    age: number,
    section?: string
    greet: (country: string) => string
};

const student1: Student = {
    name: "Sushant",
    age: 22,
    section: "D",
    greet: (country) => `Welcome ${student1.name} and the country is ${country}`
};

console.log(student1.greet("India"));


// normal function with type define is called as also call signatures
const greetUser = (name: string): string => {
    return `${name}`
}