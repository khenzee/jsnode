/*
 variable
 data types
 operations
 conditionals
 functions
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

// console.log(developers[2].hobby[1])


// Arithemetic Operation, Comparison Operator, logical Operation.

//ARITHEMETIC OPERATOR
const add = 2 + 2 // 4 addition
const subtract = 2 - 2 // 0 subtraction
const multiply = 2 * 2 // 4 multiplication
const divide = 2 / 2 // 1 division
const expo = 2 ** 2 // 4 exponential
const mod = 3 % 2 // 1 modulus: means remainder

// COMPERISON OPERATOR

const gt = 2 > 6 // false greater then
const lt = 2 < 6 // true lesser than
const  gte = 2 >= 6 // false greater than or equal to
const lte = 6 <= 6 // true less than or equal to
const de = "daniel" == "daniel" // Double equal sign: compares the value [true/false]
const te = "tj" === "tj"  //Triple equal sign: compares the value and data type [true/false]


// console.log(te)

// LOGICAL OPERATOR: AND, OR, NOT

//AND &&: both sides must be true for the result to be "TRUE"

// console.log(lt && gte)

//OR ||: As long as one side is true, then the result will be "TRUE"
// console.log(false || gte)

//NOT !: means opposite
// console.log(!gt)

// CONDITIONALS
// if(condition){
//     action
// }
// else if(condition){
//     action
// }
// else{
//     run-this-instead
// }

if (2 > 6){
    console.log("awesome")
}
else if(2 < 1){
    console.log("working")
}
else{
 console.log("not awesome")
}


//example 2

let valued = false
let word = "valuable"

 if (valued){
    console.log(valued)
 }
 else if(word === "valuabl"){
  
    console.log("works")
 }
else if(word ===! "valuable"){
    console.log("does not work")
 }
 else{
    word = "invaluable"
    console.log(word)
 }

 // SWITCH

let day = "sunday"

 switch (day) {
    case "monday":
        console.log("go to class")
        break;
    case "tuesday":
        console.log("go have fun")
        break;
    default:
        console.log("enjoy")
        break;
 }