// object - In JavaScript and TypeScript, an object is a collection of key-value pairs, where each key (property) is a string or symbol, and the value can be of any data type, including numbers, strings, arrays, functions, or even other objects. Objects are used to represent real-world entities and organize data in a structured way.
// Keys(Properties) are always strings(or symbols).
// Values can be any type: number, string, boolean, array, function, or even another object.
// Objects do not have order like arrays.
// Objects are very useful for representing real - world entities with properties.
// 2. Object with Type Annotation
var person = {
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
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.college);
console.log(person["isStudent"]);
console.log(person.address.state);
console.log(person.address.city);
console.log(person.address["pinCode"]);
