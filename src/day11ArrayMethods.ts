// push - the push not return the updated array it return the length of updated array. Push method add the elements in the end of an array

const fruits: string[] = ["guava", "Mango", "Kiwi", "Orange", "PineApple"];
const updatedData = fruits.push("Apple");
console.log(updatedData)
console.log(fruits)


// remove elements an array
// pop - remove the last elemet of an array and also return the which data it can be deleted

const removedFruits = fruits.pop();
console.log(removedFruits);

// shift - remove the array first element and also return the first element that deleted.
const firstItem = fruits.shift();
console.log(firstItem);

// unshift - It add element in the start of an array at index 0 and it return the length of an array
const addFirst = fruits.unshift("lime");
console.log(addFirst);

const removeData = fruits.splice(0, 2);  // it first argument is start index and last arguments is how many data that i want to delete
console.log(removeData);

const addData = fruits.splice(0, 0, "kiwi", "sugarcane", "guava", "iceApple");

console.log(addData);


const indexIs: number = fruits.indexOf("sugarcane");
console.log("The index of", indexIs);

const lastIndex: number = fruits.lastIndexOf("guava");
console.log("The last index of", lastIndex);

const isExist: boolean = fruits.includes("apple");
console.log("is exist", isExist);

const findIt: string | undefined = fruits.find((curr) => curr.length > 4);
console.log("find", findIt);

const findIndexSearch: number = fruits.findIndex((curr) => curr.includes("sugarcane"));

console.log("index of findIndex that exist", findIndexSearch);




