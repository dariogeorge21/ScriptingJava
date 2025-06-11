let myData = {
    name: "Dario",
    age: 18,
    isStudent: true,
    subjects: ["Math", "Computer Science", "Physics"],
    address: {
        street: "A-121, East Street",
        city: "New Delhi",
        country: "India"
    }
};
console.log(myData.name); // Accessing a property
console.log(myData);

delete myData.age; // Deleting a property
console.log(myData);

myData.age = 19; // Adding a new property
console.log(myData);

myData.isStudent = false; // Modifying an existing property
console.log(myData);

// hasOwn Property

console.log(myData.hasOwnProperty("name")); // true
console.log(myData.hasOwnProperty("age")); // false 

// For storing large amounts of data, we can use an array of objects
let students = [
    {
        name: "Alice",
        age: 20,
        isStudent: true
    },
    {
        name: "Bob",
        age: 22,
        isStudent: true
    },
    {
        name: "Charlie",
        age: 21,
        isStudent: false
    }
];