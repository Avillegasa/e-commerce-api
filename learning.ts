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



//Array methods(pending)
//has
//sum
//filter
//map
//find


