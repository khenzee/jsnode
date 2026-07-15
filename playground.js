import{assignGrades, greet} from "./grade.js";
import readline from "readline"

// const myStudents = [
//   { name: "Alice", score: 92 },
//   { name: "Bob", score: 75 },
//   { name: "Charlie", score: 68 }
// ]

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

rl.question("what is you name: ", (name)=>{
    let val = `hello ${name}`
    console.log(val);
 rl.close()
})
 // ask seccond question
    rl.question("what class: ", (res)=>{
        console.log(res)
        rl.close()
    })

rl.on("close",()=>{
    console.log("we are done!")
    process.exit
})

// console.log(assignGrades(myStudents));

