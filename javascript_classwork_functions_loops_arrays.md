# JavaScript Classwork: Comprehensive Review
*(Covering Functions, Loops, Arrays, Objects, Conditionals, and Operators)*

## Part 1: Classwork (Let's do these together!)

### Exercise 1: Student Grade Generator
**Task:** Write a function called `assignGrades` that takes an array of student objects. Each object has a `name` and a `score`. The function should loop through the array and use conditionals to determine each student's grade (A, B, C, or F), then return a new array of objects that includes their grade.

**Requirements:**
- Use a function and a loop.
- Use conditionals (`if`/`else if`) and comparison operators (`>=`).
- Grading scale: 90+ is 'A', 80-89 is 'B', 70-79 is 'C', below 70 is 'F'.
- You will be working with arrays of objects.

```javascript
// Template
function assignGrades(students) {
  // Your code here
}

const myStudents = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 68 }
];

console.log(assignGrades(myStudents)); 
/* Expected output: 
[
  { name: 'Alice', score: 92, grade: 'A' },
  { name: 'Bob', score: 75, grade: 'C' },
  { name: 'Charlie', score: 68, grade: 'F' }
]
*/
```

### Exercise 2: Find Eligible Voters
**Task:** Write a function called `getEligibleVoters` that takes an array of people (objects). Each person has a `name`, `age`, and `isCitizen` boolean. The function should return a simple array of just the names of the people who are legally allowed to vote.

**Requirements:**
- Eligible to vote means: `age >= 18` AND `isCitizen` is `true`.
- Use a loop, conditionals, and logical operators (`&&`).

```javascript
// Template
function getEligibleVoters(people) {
  // Your code here
}

const citizens = [
  { name: "John", age: 17, isCitizen: true },
  { name: "Sarah", age: 22, isCitizen: false },
  { name: "Mike", age: 25, isCitizen: true }
];

console.log(getEligibleVoters(citizens)); // Expected output: ["Mike"]
```

---

## Part 2: Assignments (Try these on your own!)

### Assignment 1: Store Inventory Calculator
**Task:** Write a function called `calculateInventoryValue` that receives an array of product objects in a store. It should calculate and return the total dollar value of all items that are currently in stock.

**Requirements:**
- Value of an item is `price * quantity` (Arithmetic operator).
- You only count items where `inStock` is `true` AND `quantity > 0` (Logical operator `&&`).

```javascript
// Template
function calculateInventoryValue(products) {
  // Your code here
}

const storeInventory = [
  { item: "Laptop", price: 1000, quantity: 5, inStock: true },
  { item: "Mouse", price: 25, quantity: 0, inStock: false },
  { item: "Keyboard", price: 50, quantity: 10, inStock: true }
];

console.log(calculateInventoryValue(storeInventory)); // Expected output: 5500 
// (Laptop: 1000*5) + (Keyboard: 50*10)
```

### Assignment 2: Temperature Data Analyzer
**Task:** Write a function called `analyzeTemperatures` that takes an array of temperature readings (numbers) for a week. The function must categorize each temperature and return a **single object** that counts how many days fell into each category.

**Categories:**
- `freezing`: Less than 0
- `cold`: 0 to 20
- `warm`: 21 to 30
- `hot`: Greater than 30

**Requirements:**
- Start with an empty result object: `let result = { freezing: 0, cold: 0, warm: 0, hot: 0 };`
- Loop through the array, use conditionals (`if`/`else if`), and increment the correct property in the object (using the `++` or `+=` operator).

```javascript
// Template
function analyzeTemperatures(temps) {
  // Your code here
}

const weeklyTemps = [-5, 12, 15, 22, 35, 25, -2];
console.log(analyzeTemperatures(weeklyTemps)); 
/* Expected output: 
{
  freezing: 2,
  cold: 2,
  warm: 2,
  hot: 1
}
*/
```
