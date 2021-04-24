//=====================================WEAK MAP

// WeakMap allows to escape of data breach / data leaks

let obj = { name: "weakmap" };

obj = null;

// if you type obj = null, we got Null

console.log(obj); // returns Null

// In is case JS CLEAR the value due to GRABAGE COLLECTION

const arr = [obj];

// but if we do as following

let obj = { name: "weakmap" };
const arr = [obj];
console.log(arr[0]); // returns { name: "weakmap" }? because it`s assigned to an ARRAY
console.log(obj); // returns NULL

// So, keys in MAP could be OBJECTS. If we delete the link for the object, we will got data vanish.

// To prevent it we could use WEACKMAPS!

// for example:

let obj = { name: "weakmap" }; // KEYA are ONLY OBJECTS in WeakMaps!!!
const map = new WeakMap([obj, "obj data"]);
// We can use only: GET, SET, DELETE, HAS methods

map.has(obj); // returns true/false
map.get(obj); // returns object data

// if we input:

obj = null;

// console.log(obj) will return udefined. Because garbag collector moved away null object

console.log(obj); // undefined
map.has(obj); // false

// SO we can optimize the memory and workflow of the data structure

//=====================================HOW TO USE SETS???

const cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.user(user, Date.now());
    return cache.get(user);
  }
}

let lena = { name: "Elena" };
let alex = { name: "Alex" };

cacheUser(lena);
cacheUser(alex);

console.log(chache.has(lena)); // true, user is in the cache
console.log(chache.has(alex)); // true, user is in the cache

//Fo example we got a lot of users 10 000. How to optimize data structure.

// solution: if we assign

lena = null;

console.log(chache.has(lena)); // false, user moved out of the cache