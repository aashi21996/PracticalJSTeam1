const userRoles = new Map();
const adminObj = { id: 1 };
userRoles.set(adminObj, 'SuperAdmin');
console.log(userRoles.get(adminObj)); // 'SuperAdmin'

//Example2
const userAges = new Map();
// Setting key-value pairs (Strings as keys)
userAges.set("Alice", 25);
userAges.set("Bob", 30);
// Getting values
console.log(userAges.get("Alice")); // Output: 25

//Using Non-String Keys
const advancedMap = new Map();
const myObj = { id: 1 };
advancedMap.set(1, "Number one key");
advancedMap.set(true, "Boolean key");
advancedMap.set(myObj, "Object key");
console.log(advancedMap.get(1));       // Output: "Number one key"
console.log(advancedMap.get(true));     // Output: "Boolean key"
console.log(advancedMap.get(myObj));    // Output: "Object key"

//Checking and Removing Elements (has(), delete(), size)
const inventory = new Map();
inventory.set("apples", 10);
inventory.set("bananas", 5);
console.log(inventory.has("bananas")); // Output: true
console.log(inventory.size);           // Output: 2
inventory.delete("apples");
console.log(inventory.has("apples"));  // Output: false

//Iterating Over a Map (for...of)
const countries = new Map([
    ["US", "United States"],
    ["FR", "France"],
    ["IN", "India"]
]);

// Iterating over entries (key and value)
for (let [code, name] of countries) {
    console.log(`${code}: ${name}`);
}

// Iterating over keys only
for (let code of countries.keys()) {
    console.log(code);
}

// Iterating over values only
for (let name of countries.values()) {
    console.log(name);
}