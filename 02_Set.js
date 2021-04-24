//=====================================SET

const set = new Set([1, 2, 3, 3, 4, 5, 6, 6, 6, 4, 4, 7]); // any data type is assignable, only ITERABLE

console.log(set); // set consists ONLY of UNIQUE values, returns OBJECT

//=====================================SET METHODS

// ADD values
set.add(10).add(20).add(30).add(20); // 20 will be added only once

// HAS values

set.has(30); // true
set.has(42); // false

// LENGTH of the set

set.size(); // 9 elements

// DELETE element

set.delete(1); // returns true/false

// DELETE all values

set.clear();

//=====================================GET VALUES of the SET
// values and keys are the same!!!
set.values(); // returns all the values
set.keys(); // returns all the values

set.entries(); // returns both keys and values (there are the same in set!!! There's no sense to do it)

//=====================================ITERATION over the SET

for (let key of set) {
  console.log(key);
}

//=====================================HOW TO USE SETS???

// for example we have to get unique values of the array
function uniqueValues(array) {
  console.log(uniqueValues([1, 2, 3, 4, 4, 4, 4, 5, 2, 2, 2]));
}

// the best way to implement this functions is to use new Set()

function uniqueValues(array) {
  return [...new Set(array)]; // use spread to return an array, because Set is an object
}

// or

function uniqueValues(array) {
  return Array.from(new Set(array)); // use Array.from() to return an array, because Set is an object
}
