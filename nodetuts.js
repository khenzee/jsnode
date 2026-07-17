/*
import readline from "readline"

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask a question and handle the response
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);

  // Ask follow-up question
  rl.question('How old are you? ', (age) => {
    console.log(`In 5 years, you'll be ${parseInt(age) + 5} years old.`);

    // Close the interface when done
    rl.close();
  });
});

// Handle application exit
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});
*/

import fs from "fs" // fs: file system

// Blocking code Example
// console.log("start of blocking code");
// const data = fs.readFileSync("node-concept.md", "utf-8")
// console.log(data)
// console.log("blocking operation completed")

// Non-blocking code Example

// console.log("start of non-blocking code");
// fs.readFile("node-concept.md", "utf-8", (err, data) =>{
//   console.log(data)
// })
// console.log("non-blocking operation completed")



// fs.writeFileSync("node-concept.md", "hello world", {flag: "a"})

//ASYNC / AWAIT

const data = fs.readFileSync("data.json", "utf-8")

const res = JSON.parse(data)

console.log(res)

console.log(res[0].name)