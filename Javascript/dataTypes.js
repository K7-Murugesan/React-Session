//Primitive Datatypes - Predefined 
var age = 28; // Number

var course = "Front End" //String
var course = 'Front End'
var course = `Front End`

var condition = true //Boolean

var noValue = undefined ; //undefined
var emptyVal = null ; //null

//Non-Primitive Datatypes - Reference - Complex - Composite - UserDefined

//Object
let vehicle = {
    vType : "four-wheeler",
    vName : "car",
    fuelType : "Petrol",
    price : 20000
}

console.log( vehicle );
console.log( vehicle.price );
console.log( vehicle.vType );

//Array

let color = [ "red", "green", "blue", 20, false, { id:1 }, [200,300,400]  ]
// index starts from 0 - ends at lenght-1

console.log( color );
console.log( color[0] );
console.log( color.length-1 );
console.log( color[  color.length-1 ] );