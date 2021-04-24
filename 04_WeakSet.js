//=====================================WEAK MAP

// values of the WeakMap are only Objects, so if object = null, the object is removed from the WeakMap

//=====================================HOW TO USE WeakSets???

const users = [{ name: "Elena" }, { name: "Alex" }, { name: "Irina" }];

const visits = new WeakSet();

visits.add(users[0].add(users[1]));

console.log(visits.has(users[0])); //true
console.log(visits.has(users[1])); //true

// if you reove one of of the objects inside the WeakSet:

users.splice(1, 1);

// then:

console.log(visits.has(users[1])); //false
