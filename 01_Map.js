//=====================================MAP

// typical object

const obj = {
  name: "Vladilen",
  age: 26,
  job: "Fullstack",
};

// another way how we can create object

const entries = [
  ["name", "Vladilen"],
  ["age", 26],
  ["job", "Fullstack"],
];

// now we transform OBJECT to ARRAY

Object.entries(obj);

// now we transform ARRAY to OBJECT

Object.fromEntries(entries);

// MAP is very similar to a typical Object in JS

const map = new Map(entries);

// What we can do with MAP?
// 1) GET KEYS/VALUES

map.get("job");

// we can ASSIGN ANY data type as a keys, for example:

map.set("newField", 42); // STRING as a key
map.set(obj, "Value of object"); // OBJECT is a key
map.set(NaN, "NaN ???"); // NaN is a key

// we can DELETE KEY

map.delete("job"); // returns boolean true/false if the delettion is successfull or not

// is the KEY EXISTS?

map.has("job");

// LENGTH of MAP

map.size;

// DELETE ALL KEYS

map.clear;

//=====================================ITERATION over the MAP

// ITERATION over the MAP (both KEYS and VALUES)

for (let entry of map.entries()) {
  // returns ARRAYS
  console.log(entry);
}

// or

for (let [key, value] of map()) {
  // returns keys and values
  console.log(key, value);
}

// returns only VALUES

for (let values of map.values()) {
  // returns only VALUES
  console.log(values);
}

// returns only KEYS

for (let key of map.keys()) {
  // returns only KEYS
  console.log(key);
}

// using FOREACH

map.forEach((val, key, m) => {
  // val - values, key - keys, m - the map
  console.log(val, key);
});

//=====================================TRANSFORM MAP TO AN ARRAY

const array = [...map]; // use SPREAD OPERATOR

const array = Array.from(map); // USE Array.from() method

//=====================================TRANSFORM MAP TO AN OBJECT

const mapObj = Object.fromEntries(map.entries()); // Attention! There is no objects as a key in object

//=====================================HOW TO USE MAPS???

const users = [{ name: "elena" }, { name: "Alex" }, { name: "Irina" }];

const visits = new Map();

visits
  .set(users[0], new Date())
  .set(users[1], new Date(newDate().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime + 5000 * 60));

function lastVisit(user) {
  return visits.get(user);
}

// now we can see the time for users

console.log(lastVisit(users[2]));
