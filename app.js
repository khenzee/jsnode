/*
 variable
 data types
 operatons
 conditionals
 loops
 array
 ES6
 asyncronous javascript
 error handling
 modules
*/ 

//Variables: LET, CONST, VAR.


// LET variable is block scoped but can be mutated
// let age = 30
// age = 50

// console.log(age)

// function val(){
//     let age = 70
//     ageOf =50
//     console.log(ageOf)
// }

// val()


//CONST variable is block scoped but can't be mutated
// const name = "daniel"

// console.log(name)

// function val1(){
//     const name = "tj"
//    console.log(name)
// }

// val1()

//VAR is outdated and should not be used
// var password = "123pass"
// password = "pass123"
// var password = "pass"

// console.log(password)

// DATA TYPE: Number, String, Boolean, undefine,Array, Object, function

let num = 25 // Number
let name = "demola" // String
let isPresent = true //Boolean : TRUE or FALSE
let students = ["Demola", "TJ", "Daniel", 30, true] // Array: use to store a list of data
// console.log(students)
// console.log(students[0])

let value // Undefine: Variable was declared but not assigned any data
// console.log(typeof value)

let player = {
    name: "ronaldo",
    country: "portugal",
    age: 41,
    active: true,
    club: "Al Nassr"
}   // Object: use to store list of properties

// console.log(player.country)

let developers = [
    {
        name: "TJ",
        course: "backend",
        pc: "mac",
        hobby: ["gaming", "movie"],
        game: {
            name: "COD",
            level: "legendary"
        }
    },
    {
        name: "Demola",
        course: "Full Stack",
        pc: "HP",
        hobby: ["gaming", "music"],
        game: {
            name: "FC25",
            level: "pro"
        }
    },
    {
        name: "Daniel",
        course: "SWE",
        pc: "mac",
        hobby: ["chopping life", "puff"],
        game: {
            name: "FC25",
            level: "pro"
        }
    }
]
console.log(developers[2].hobby[1])