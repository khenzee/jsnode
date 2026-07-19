# 🚀 Backend Capstone Projects

> These projects combine **everything** you've learned — variables, data types, operators, conditionals, functions, loops, arrays, objects, ES6 (arrow functions, destructuring, spread, template literals), modules (`import/export`), `async/await`, `try/catch`, the `fs` module (reading/writing files), `readline`, and JSON parsing — into real backend scenarios.

---

## Project 1: 📋 Student Records Management System

### Scenario

You are a junior backend developer at a school. The school stores all student data in a JSON file (like a mini database). Your job is to build a **command-line application** that lets an admin manage student records — view them, search for a student, add new students, and generate a performance report — all from the terminal.

This is exactly the kind of task you'll encounter in backend development: **read data from a file, process it, let the user interact with it, and write changes back.**

---

### Setup

Create a file called `students_db.json` with this starter data:

```json
[
  {
    "id": 1,
    "name": "Aisha Mohammed",
    "age": 19,
    "department": "Computer Science",
    "scores": [88, 72, 95, 80],
    "isActive": true,
    "enrolledDate": "2024-09-01"
  },
  {
    "id": 2,
    "name": "Chidi Okafor",
    "age": 21,
    "department": "Engineering",
    "scores": [65, 58, 70, 62],
    "isActive": true,
    "enrolledDate": "2023-09-01"
  },
  {
    "id": 3,
    "name": "Fatima Bello",
    "age": 20,
    "department": "Computer Science",
    "scores": [92, 96, 89, 94],
    "isActive": true,
    "enrolledDate": "2024-01-15"
  },
  {
    "id": 4,
    "name": "Tunde Adeyemi",
    "age": 22,
    "department": "Business Admin",
    "scores": [45, 52, 38, 50],
    "isActive": false,
    "enrolledDate": "2022-09-01"
  },
  {
    "id": 5,
    "name": "Grace Eze",
    "age": 18,
    "department": "Engineering",
    "scores": [78, 82, 75, 88],
    "isActive": true,
    "enrolledDate": "2025-01-10"
  }
]
```

Create your main file called `studentManager.js`.

---

### Requirements

#### Part A: Utility Functions (modules, functions, arrays, loops, conditionals, operators)

Create a separate file called `utils.js` with the following functions. **Export** them using named exports.

**1. `calculateAverage(scores)`**
- Takes an array of numbers.
- Uses a `for` loop to add them all up.
- Returns the average (total / number of scores).

**2. `assignGrade(average)`**
- Takes a number (the average score).
- Uses `if/else if/else` to return a grade:
  - 70 and above → `"First Class"`
  - 60–69 → `"Second Class Upper"`
  - 50–59 → `"Second Class Lower"`
  - 45–49 → `"Third Class"`
  - Below 45 → `"Fail"`

**3. `generateReport(students)`**
- Takes the full array of student objects.
- Loops through each student.
- For each student, call `calculateAverage` on their scores, then `assignGrade` on the result.
- Returns a **new array** of report objects like this:
```javascript
{ name: "Aisha Mohammed", average: 83.75, grade: "First Class", status: "Active" }
```
- The `status` should be `"Active"` if `isActive` is `true`, otherwise `"Inactive"`.

---

#### Part B: File Operations (fs module, JSON, async/await, try/catch)

In `studentManager.js`, import your utility functions and the `fs` module.

**4. `loadStudents()` — Read from JSON file**
- Use `fs.readFileSync` to read `students_db.json`.
- Use `JSON.parse()` to convert the string into a JavaScript array.
- Wrap it in a `try/catch` — if the file doesn't exist or the JSON is broken, log a clear error message and return an empty array.

**5. `saveStudents(students)` — Write to JSON file**
- Takes the updated students array.
- Use `JSON.stringify(students, null, 2)` to convert it back to a formatted JSON string.
- Use `fs.writeFileSync` to save it back to `students_db.json`.
- Wrap in `try/catch` for error handling.

---

#### Part C: Core Features (readline, conditionals, destructuring, template literals)

**6. Menu System using `readline`**

When the app starts, display this menu:

```
========================================
   STUDENT RECORDS MANAGEMENT SYSTEM
========================================
1. View All Students
2. Search Student by Name
3. Add New Student
4. View Performance Report
5. View Department Summary
6. Exit
========================================
Enter your choice:
```

Handle each option:

**Option 1 — View All Students:**
- Load students from the file.
- Loop through and display each one using template literals:
```
ID: 1 | Name: Aisha Mohammed | Dept: Computer Science | Active: Yes
```
- Only show active students. At the end, display the total count.

**Option 2 — Search Student by Name:**
- Ask the user to type a name using `rl.question`.
- Load students and loop through them.
- Check if any student's name **includes** what the user typed (case-insensitive search — convert both to lowercase before comparing).
- If found, display all their details including their average score and grade (use your utility functions).
- If not found, display `"No student found with that name."`

**Option 3 — Add New Student:**
- Use `rl.question` to ask for: name, age, department.
- Create a new student object:
  - Generate the `id` by finding the current highest id and adding 1.
  - Set `scores` to an empty array `[]`.
  - Set `isActive` to `true`.
  - Set `enrolledDate` to today's date (use `new Date().toISOString().split("T")[0]`).
- Use the **spread operator** to create a new array: `[...currentStudents, newStudent]`.
- Save the updated array to the JSON file.
- Display `"Student added successfully!"`

**Option 4 — View Performance Report:**
- Load students, pass them to `generateReport()`.
- Display each student's report in a clean format.
- At the bottom, show:
  - How many students have "First Class"
  - How many are "Fail"

**Option 5 — View Department Summary:**
- Load students.
- Loop through them and build an object that counts how many students are in each department. Example result:
```javascript
{ "Computer Science": 2, "Engineering": 2, "Business Admin": 1 }
```
- Display it cleanly.

**Option 6 — Exit:**
- Display `"Goodbye!"` and close readline.

---

### Concepts You'll Use

| Concept | Where It's Used |
|---|---|
| Variables (`let`, `const`) | Everywhere |
| Data Types (string, number, boolean, array, object) | Student data |
| Arithmetic Operators | Calculating averages |
| Comparison & Logical Operators | Grade conditions, search filters |
| Conditionals (`if/else`, `switch`) | Menu handling, grading |
| Functions & Arrow Functions | All utility and feature functions |
| Loops (`for`, `forEach`) | Processing student arrays |
| Array Methods (`.map`, `.push`) | Building reports, adding students |
| Objects & Destructuring | Student records, pulling out properties |
| Spread Operator (`...`) | Adding new students to array |
| Template Literals | All console output |
| Modules (`import/export`) | utils.js ↔ studentManager.js |
| `fs` Module (`readFileSync`, `writeFileSync`) | Loading/saving JSON data |
| JSON (`parse`, `stringify`) | Converting file data |
| `readline` | User input menu system |
| `try/catch` | Error handling for file operations |
| `async/await` | Wrapping async logic cleanly |

---

### Example Run

```
========================================
   STUDENT RECORDS MANAGEMENT SYSTEM
========================================
1. View All Students
2. Search Student by Name
3. Add New Student
4. View Performance Report
5. View Department Summary
6. Exit
========================================
Enter your choice: 2

Enter student name to search: aisha

--- Search Result ---
ID: 1
Name: Aisha Mohammed
Age: 19
Department: Computer Science
Scores: 88, 72, 95, 80
Average: 83.75
Grade: First Class
Status: Active
---------------------

Enter your choice: 4

--- Performance Report ---
1. Aisha Mohammed | Avg: 83.75 | Grade: First Class | Active
2. Chidi Okafor   | Avg: 63.75 | Grade: Second Class Upper | Active
3. Fatima Bello   | Avg: 92.75 | Grade: First Class | Active
4. Tunde Adeyemi  | Avg: 46.25 | Grade: Third Class | Inactive
5. Grace Eze      | Avg: 80.75 | Grade: First Class | Active

Summary: 3 First Class | 1 Fail
--------------------------
```

---
---

## Project 2: 📝 Task Deadline Tracker with Notifications

### Scenario

You work at a startup and need to build a **command-line task management tool** for the development team. Tasks are stored in a JSON file. The app should let users create tasks with deadlines, check which tasks are overdue, mark tasks as done, and automatically log activity to a separate file. It also uses **timers** (`setTimeout`) to simulate deadline alerts.

This mirrors real backend work: **CRUD operations on file-based data, date/time logic, automated logging, and scheduled events.**

---

### Setup

Create a file called `tasks_db.json` with this starter data:

```json
[
  {
    "id": 1,
    "title": "Setup project database",
    "assignedTo": "Demola",
    "priority": "high",
    "deadline": "2025-07-15",
    "status": "pending",
    "createdAt": "2025-07-01"
  },
  {
    "id": 2,
    "title": "Build login API endpoint",
    "assignedTo": "TJ",
    "priority": "high",
    "deadline": "2025-07-20",
    "status": "in-progress",
    "createdAt": "2025-07-05"
  },
  {
    "id": 3,
    "title": "Write unit tests",
    "assignedTo": "Daniel",
    "priority": "medium",
    "deadline": "2025-07-25",
    "status": "pending",
    "createdAt": "2025-07-10"
  },
  {
    "id": 4,
    "title": "Design landing page",
    "assignedTo": "Demola",
    "priority": "low",
    "deadline": "2025-08-01",
    "status": "done",
    "createdAt": "2025-07-02"
  },
  {
    "id": 5,
    "title": "Fix authentication bug",
    "assignedTo": "TJ",
    "priority": "high",
    "deadline": "2025-07-10",
    "status": "pending",
    "createdAt": "2025-07-08"
  }
]
```

Create your main file called `taskTracker.js` and a helper module called `taskHelpers.js`.

---

### Requirements

#### Part A: Helper Functions — `taskHelpers.js` (modules, functions, loops, conditionals, Date)

Export the following functions:

**1. `isOverdue(deadline)`**
- Takes a deadline string like `"2025-07-15"`.
- Creates a `new Date()` for today and a `new Date(deadline)` for the deadline.
- Uses a comparison operator (`<`) to check if the deadline has passed.
- Returns `true` or `false`.

**2. `getDaysRemaining(deadline)`**
- Takes a deadline string.
- Calculates the difference between the deadline date and today in **days**.
- Formula: `Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24))`
- If the number is negative, the task is overdue — return the number as is (negative means overdue).

**3. `filterByStatus(tasks, status)`**
- Takes the tasks array and a status string (`"pending"`, `"in-progress"`, or `"done"`).
- Uses a `for` loop to build and return a **new array** of tasks that match the status.

**4. `filterByPriority(tasks, priority)`**
- Same idea — filter tasks by their priority level (`"high"`, `"medium"`, `"low"`).

**5. `getTasksByPerson(tasks, name)`**
- Takes the tasks array and a person's name.
- Returns all tasks assigned to that person (case-insensitive comparison).

---

#### Part B: File Operations & Logger — `taskTracker.js` (fs, JSON, async/await, try/catch, writeFile with append)

**6. `loadTasks()`**
- Read `tasks_db.json` using `fs.readFileSync`.
- Parse and return the array. Use `try/catch`.

**7. `saveTasks(tasks)`**
- Stringify and write back to `tasks_db.json`. Use `try/catch`.

**8. `logActivity(message)`**
- This is your **activity logger**.
- Use `fs.writeFileSync` with the `{ flag: "a" }` option (append mode) to write to a file called `activity_log.txt`.
- Each log entry should look like:
```
[2025-07-19 14:30:00] Task "Setup project database" marked as done by Admin.
```
- Use `new Date().toLocaleString()` for the timestamp.

---

#### Part C: Core Features — `taskTracker.js` (readline, setTimeout, destructuring, spread, template literals)

**9. Menu System:**

```
========================================
      TASK DEADLINE TRACKER
========================================
1. View All Tasks
2. View Overdue Tasks
3. Add New Task
4. Mark Task as Done
5. View Tasks by Team Member
6. View Priority Dashboard
7. Check Deadline Alerts
8. Exit
========================================
Enter your choice:
```

**Option 1 — View All Tasks:**
- Load and loop through all tasks.
- For each task, use **destructuring** to pull out `title`, `assignedTo`, `priority`, `deadline`, `status`.
- Display using template literals:
```
[ID: 1] Setup project database
  → Assigned to: Demola | Priority: HIGH | Deadline: 2025-07-15 | Status: pending
  → Days Remaining: -4 (OVERDUE!)
```
- Use `getDaysRemaining()` — if the result is negative AND the task isn't `"done"`, show `(OVERDUE!)`.

**Option 2 — View Overdue Tasks:**
- Load tasks.
- Loop through and use `isOverdue()` to find tasks where the deadline has passed AND status is NOT `"done"`.
- Display them.
- Show a count at the bottom: `"⚠ Total overdue tasks: 2"`

**Option 3 — Add New Task:**
- Use `rl.question` to ask for: title, assignedTo, priority, deadline (YYYY-MM-DD format).
- Validate the priority — it must be `"high"`, `"medium"`, or `"low"`. If invalid, show an error and don't add.
- Create the task object:
  - Auto-generate `id` (highest current id + 1).
  - Set `status` to `"pending"`.
  - Set `createdAt` to today's date.
- Use **spread** to add: `const updated = [...currentTasks, newTask]`
- Save to file.
- Call `logActivity()` to record: `Task "{title}" created and assigned to {assignedTo}.`
- Display success message.

**Option 4 — Mark Task as Done:**
- Ask the user for the task ID.
- Load tasks and find the matching task using a loop.
- If not found, show `"Task not found."`.
- If already done, show `"Task is already completed."`.
- Otherwise:
  - Change its `status` to `"done"`.
  - Save the updated array.
  - Log the activity: `Task "{title}" marked as done.`
  - Display confirmation.

**Option 5 — View Tasks by Team Member:**
- Ask for a team member name.
- Use `getTasksByPerson()` from your helpers.
- Display all their tasks with status and deadline.
- Show summary: `"{name} has X pending, Y in-progress, Z completed tasks."`

**Option 6 — View Priority Dashboard:**
- Load tasks.
- Use `filterByPriority()` to group tasks.
- Display them grouped:
```
🔴 HIGH PRIORITY:
  - [ID: 1] Setup project database (OVERDUE!)
  - [ID: 2] Build login API endpoint (5 days left)

🟡 MEDIUM PRIORITY:
  - [ID: 3] Write unit tests (10 days left)

🟢 LOW PRIORITY:
  - [ID: 4] Design landing page (DONE ✓)
```

**Option 7 — Check Deadline Alerts (setTimeout — simulating scheduled notifications):**
- Load tasks.
- Find all tasks that are **pending or in-progress** and have **3 or fewer days remaining** (but are not overdue yet).
- For each one, use `setTimeout` to simulate a "notification alert" that fires after a few seconds:
```javascript
setTimeout(() => {
  console.log(`\n🔔 ALERT: Task "${title}" assigned to ${assignedTo} is due in ${daysLeft} day(s)!`);
}, index * 2000); // Stagger alerts 2 seconds apart
```
- Immediately display: `"⏰ Setting up {count} deadline alert(s)... watch your terminal!"`
- This demonstrates **non-blocking, asynchronous** behavior — the menu keeps running while the alerts fire in the background.

**Option 8 — Exit:**
- Display `"Goodbye! Check activity_log.txt for session history."`.
- Close readline.

---

### Concepts You'll Use

| Concept | Where It's Used |
|---|---|
| Variables (`let`, `const`) | Everywhere |
| Data Types | Task objects, arrays, booleans, dates |
| Arithmetic Operators | Date difference calculations |
| Comparison & Logical Operators | Overdue checks, filters, validation |
| Conditionals (`if/else`, `switch`) | Menu, priority validation, status checks |
| Functions & Arrow Functions | All helpers and features |
| Loops (`for`, `forEach`, `.map`) | Processing tasks |
| Objects & Destructuring | Task records, pulling properties |
| Spread Operator (`...`) | Adding new tasks to array |
| Template Literals | All formatted output |
| Modules (`import/export`) | taskHelpers.js ↔ taskTracker.js |
| `fs.readFileSync` | Loading tasks from JSON |
| `fs.writeFileSync` | Saving tasks, appending to log file |
| `fs.writeFileSync` with `{ flag: "a" }` | Activity log (append mode) |
| JSON (`parse`, `stringify`) | Converting file data |
| `readline` | User input menu system |
| `try/catch` | Error handling for file operations |
| `async/await` | Wrapping async operations |
| `setTimeout` | Simulating deadline notifications |
| `Date` object | Deadline and overdue calculations |

---

### Example Run

```
========================================
      TASK DEADLINE TRACKER
========================================
Enter your choice: 7

⏰ Setting up 1 deadline alert(s)... watch your terminal!

Enter your choice: 1

[ID: 1] Setup project database
  → Assigned to: Demola | Priority: HIGH | Deadline: 2025-07-15 | Status: pending
  → Days Remaining: -4 (OVERDUE!)

[ID: 2] Build login API endpoint
  → Assigned to: TJ | Priority: HIGH | Deadline: 2025-07-20 | Status: in-progress
  → Days Remaining: 1

🔔 ALERT: Task "Build login API endpoint" assigned to TJ is due in 1 day(s)!
```

### Example `activity_log.txt` output:

```
[7/19/2025, 2:30:00 PM] Task "Fix payment bug" created and assigned to Grace.
[7/19/2025, 2:32:15 PM] Task "Setup project database" marked as done.
[7/19/2025, 2:35:40 PM] Task "Build dashboard UI" created and assigned to Demola.
```

---

## 🎯 Submission Checklist

For **Project 1**, you should have:
- [ ] `students_db.json` — the data file
- [ ] `utils.js` — exported utility functions
- [ ] `studentManager.js` — main app with menu system

For **Project 2**, you should have:
- [ ] `tasks_db.json` — the data file
- [ ] `taskHelpers.js` — exported helper functions
- [ ] `taskTracker.js` — main app with menu system
- [ ] `activity_log.txt` — auto-generated log file after running the app

> **💡 Tip:** Build each function one at a time. Test it. Then move to the next. Don't try to build everything at once — that's how real backend developers work too.
