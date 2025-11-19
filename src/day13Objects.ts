// object - In JavaScript and TypeScript, an object is a collection of key-value pairs, where each key (property) is a string or symbol, and the value can be of any data type, including numbers, strings, arrays, functions, or even other objects. Objects are used to represent real-world entities and organize data in a structured way.

// Keys(Properties) are always strings(or symbols).

// Values can be any type: number, string, boolean, array, function, or even another object.

// Objects do not have order like arrays.

// Objects are very useful for representing real - world entities with properties.

// There are 3 ways to define object 
// type Annotation - imp
// Using Type Alias - imp
// Using Interface - imp
// Object with Optional Properties

// 1. Object with Type Annotation
const person: { name: string, age: number, isStudent: boolean, college: string, address: { state: string, city: string, pinCode: number } } = {
    name: "Sushant",
    age: 22,
    isStudent: true,
    college: "Chandigarh University",
    address: {
        state: "Jharkhand",
        city: "Dhanbad",
        pinCode: 826001
    }
};

console.log(person)

console.log(person.name);
console.log(person.age);
console.log(person.college);

console.log(person["isStudent"]);

console.log(person.address.state);
console.log(person.address.city);

console.log(person.address["pinCode"]);



const product: { name: string, price: number, quantity: number } = {
    name: "Laptop",
    price: 400000,
    quantity: 10
};

console.log(`Product name is ${product.name} and the price is $${product.price} and the quantity is ${product.quantity}`)

// Define an object named company with the following properties and assign appropriate types to it:
// name(string)
// location(object) with properties:
// city(string)
// state(string)
// zipCode(number)
// employees(array of objects) with properties:
// name(string)
// id(number)
// isFullTime(boolean)
// establishedYear(number)
// isPublic(boolean)
// additionalInfo(null)

const company: {
    name: string;
    location: { city: string; state: string; zipCode: number };
    employees: {
        name: string;
        id: number;
        isFullTime: boolean;
    }[];
    establishedYear: number;
    isPublic: boolean;
    additionalInfo: null;
} = {
    name: "Accenture",
    location: {
        city: "Bangalore",
        state: "Karnatka",
        zipCode: 560066,
    },
    employees: [
        { name: "Alice", id: 101, isFullTime: true },
        { name: "Bob", id: 102, isFullTime: false },
    ],
    establishedYear: 2001,
    isPublic: true,
    additionalInfo: null,
};