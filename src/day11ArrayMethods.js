// push - the push not return the updated array it return the length of updated array. Push method add the elements in the end of an array
var fruits = ["guava", "Mango", "Kiwi", "Orange", "PineApple"];
var updatedData = fruits.push("Apple");
console.log(updatedData);
console.log(fruits);
// remove elements an array
// pop - remove the last elemet of an array and also return the which data it can be deleted
var removedFruits = fruits.pop();
console.log(removedFruits);
// shift - remove the array first element and also return the first element that deleted.
var firstItem = fruits.shift();
console.log(firstItem);
// unshift - It add element in the start of an array at index 0 and it return the length of an array
var addFirst = fruits.unshift("lime");
console.log(addFirst);
var removeData = fruits.splice(0, 2); // it first argument is start index and last arguments is how many data that i want to delete
console.log(removeData);
var addData = fruits.splice(0, 0, "kiwi", "sugarcane", "guava", "iceApple");
console.log(addData);
var indexIs = fruits.indexOf("sugarcane");
console.log("The index of", indexIs);
var lastIndex = fruits.lastIndexOf("guava");
console.log("The last index of", lastIndex);
var isExist = fruits.includes("apple");
console.log("is exist", isExist);
var findIt = fruits.find(function (curr) { return curr.length > 4; });
console.log("find", findIt);
var findIndexSearch = fruits.findIndex(function (curr) { return curr.includes("sugarcane"); });
console.log("index of findIndex that exist", findIndexSearch);
