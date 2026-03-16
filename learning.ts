// Types
const array1:number[] = [1,2,3];

let obj: any = {x:0};
let panc: string = "Alice";

// Explicitly typing
function pancake(params:string){
    params.charAt
}
//Different from 
function pancaa(params){
    params
}
//For default it displays an any type 

//Functions

function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("Denis")


// Anonymous functions
//Normally functions look like this
function saludar (s:string) {}
//An Anonymous one looks like this
function(sas){}
//Using an arrow one
(sasa:any) => {}

//Object Types
//This referes to any JavaScript value with properties, which is basically almost all of them
function printCoord(pt: {x:number ; y:number}){
    console.log("The coordinate's x value is "+ pt.x);
    console.log("The coordinate's y value is "+ pt.y);
}
printCoord({x:3, y:2});

// Object Properties
// "?" indicates that the parameter will be optional.
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

//Union Types
//They are used when a value can be more than a single type
function printIds(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printIds(101);
// OK
printIds("202");
// Error
printIds({ myID: 22342 });
// OUTPUT: Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
// Typescript will only allow operations that matches both types. 
// (eg. if we have number and string types, we cannot use .toUpperCase(), because it's only for string types, not for number whatsoever) 

// A solution to it is using narrowing it with coding. Like the example: (typeof is not neccesary on else clause)
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
// Type Aliases (Reserved keyword used: type)
// This allows defining types with a custom name (aka. Alias)
type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoords(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoords({ x: 100, y: 100 });

// Another Example
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year:CarYear
    type:CarType
    model:CarModel
}

const carYear:CarYear = 2002
const carType:CarType = "Mazda"
const carModel:CarModel = "CX5"

const car:Car = {
    year:carYear,
    type:carType,
    model:carType
};
// The key distintion between Type Aliases and Interfaces is that a type cannot be re-opened to add new properties 
// Vs An interface which is always extendable

//Type Assertions
//When you do know the type, but typescript don't, use `as`
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// It doesn't do a real conversion, however it says the compiler how to treat it
 
// Literal Types
// You can type exactly values, not only general types
let x: "hello"= "hello"; // it can be just "hello", nothing more

// let -> Ts says it can change
// const -> Ts says it can't change


//His real utility comes to

//eg. It accepts only these 3 values
function printText(s: string, alignment: "left" | "right" | "center") {}

//eg. It just returns only -1, 0 or 1
function compare(a: string, b: string): -1 | 0 | 1 {return 0}



// Array methods
// includes()
// This method determines whether an array includes certain value returning either true or false

const array = [1,2,3]
console.log(array.includes(2)) //Expected output: true

const pets = ["cat", "elephant", "pig"]
console.log(pets.includes("cat")) //Expected output: true

// reduce()
// This method iterates over an array and accumulates a result into a single value 
// IMPORTANT: Always return the accumulator 

const prices = [10, 30, 20]
const total = prices.reduce((acc, price) => acc + price, 0)
console.log(total) // Expected output: 60

// The accumulator can also be an object — useful for grouping data
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] ?? 0) + 1
  return acc
}, {} as Record<string, number>)
console.log(count) // Expected output: { apple: 3, banana: 2, orange: 1 }


// filter
// Creates a new array with only the elements who acomplish the given condition (as a callback)
// Returning a shallow copy - it means a new array, but nested objects still share the same memory reference
// It means it doesn't modify the original copy 

const words = ["spray", "elite", "exuberant", "destruction", "present"]
const result = words.filter((word) => word.length > 6)
console.log(result) // Expected output: ["exuberant", "destruction", "present"]

// Practical example — filter active users
const users = [
  { name: "Andres", active: true },
  { name: "Carlos", active: false },
  { name: "Maria",  active: true },
]
const activeUsers = users.filter((user) => user.active)
console.log(activeUsers) // Expected output: [{ name: "Andres" }, { name: "Maria" }]

// map
// Map method contains key-value pairs, also remembers the order of the original inserted values. 
// Both primitive values and objects can be used as keys or values
const map = new Map()

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a")); // Expected output: 1

//.map() method iterates through an array and transforms each element, returning a new array with transformed elements
// e.g. if i have ⬇️
const mapita = [{ nombre: "León", tipo: "mamifero" }, { nombre: "Tortuga", tipo: "reptil" }]

// .map() could give me : ["León", "Tortuga"]
// It works like filter and find, you give him a callback which receives each element. Key difference is you don't get true/false as a result.
// Instead you receive the new array

// find
// Returns the first element in the array provided if it satisfies the provided testing function
// The index is taken on importance when using this method

const dicksizes = [5, 33, 45, 125, 1];

const found = dicksizes.find((element)=>element>12)

console.log(found) // Expected output = 33

// some
// If it contains any value that satisfies the provided testing function the result is true or false
const founds = dicksizes.some((element)=>element>12)

console.log(founds) // Expected output = true
// every
// If all values satisfies the provided testing function the result is true or false
const foundd = dicksizes.every((element)=>element>12)

console.log(found) // Expected output = false

// spread
// same logic with arrays, nor objects...
const user = {name: "gayson", email: "gayson@gmail.com"}
const user2 = {...user, pilin: 20}

user.name = "andrew"
console.log(user)
console.log(user2)

// desestruct
// Makes it possible to unpack variables from arrays or properties from objects into distincts variables. 

const usergay = {namel: "gayson", email: "gayson@gmail.com"}
const {namel, email} = usergay

console.log (namel, email)




