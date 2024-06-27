// Function - to define reusable block of codes for multiple input

// let uOne = "Kesavan"

// uOne = "Hari"

// console.log( "Hello " + uOne  );

// let greeting1 = "Hello World"
// console.log( greeting1 + " keSAVANM" );

//Function  Declaration

//Parameterised Function
// function greeting( userName, pNumber, email  ){
//     console.log( "Hi Good Morning " + userName );
//     console.log( "Hi Good Morning " + pNumber );
//     console.log( "Hi Good Morning " + email );
// }
// //Function call or Function Invoke

// greeting( "abc", 12345, "abc@gmail.com" );
// greeting( "XYZ", 345612, "XYZ@gmail.com" );

// function function_name( userName ){
//     console.log( "Hello" );
//     if(true){
//         console.log( "Vanakam " + userName );
//     }
//     for (let index = 0; index <= 1; index++) {
//         console.log( index );
//     }
// }
// // function_name("Hari")
// function_name()

//Default Parameter

// function add( country=" india", a=150, b=100){
//     console.log( a+b+ country );
// }
// // add( 10 )
// // add( 10, 20 )
// // add( 30, 20 )
// add(undefined,undefined,200)
// add(" Pakistan", 10, 20)

//Return type

// function arrOfObj(arr) {
//     console.log( "Hii" );
// }
// // let newVal = arrOfObj([1,2,3,4])
// // newVal = [1,2,3,4]

// console.log( arrOfObj([1,2,3,4]));

// function newObj(arr){
//     return { "val" : arr[0] }
// }
// let newVal = newObj( [1,2] )
// console.log( newVal );

//Function Types

//Named Function

//Ananomous Function or Function Expression

// let findMinVal = function (arr){
//     console.log( arr[1] );
// }
// findMinVal( [10,20,30] )

// //Arrow Function or Fat Arrow or Lamda Expression

// let findMaxVal = (arr) => {
//     console.log( arr[ arr.length-1 ] );
//     // arr [ 4-1 ]
//     // arr [3]
// }
// //            1  2  3 4
// findMaxVal( [10,20,30,40] )
// //            0  1  2  3

/*Hoisting - moving all the variable declaration and 
            function declaration to the top of the scope 
            before code Execution
*/

//let willNotHoist;

// hoistedOrNot()
// console.log( willNotHoist );
// willNotHoist()

// console.log( a );
// console.log( newAge  );
// var a = 10
// const newAge = 100; //Temporal Dead Zone

// console.log( newAge );

// function hoistedOrNot(){
//     console.log( "Hii" );
// }

// let willNotHoist = function(){
//     console.log( "Not Hoist" );
// }
// willNotHoist()

// var num = 10;
// var num = 20;

// let num1 = 10;
// num1 =40;

//var - function scope or global scope
//let - block scope
//const - block scope
// function outerFunction(){
//     // let vehicle;
//     if(  true ){
//         let vehicle = "TN 01 1234"
//         if( true ){
//             var newVal = "Higher Order Function"
//             console.log( vehicle );
//         }
//     }
//     console.log( newVal );
//     console.log(  vehicle );
// }
// outerFunction()
// var newVal1 = "Global Variable 1";
// let newVal = "Global Variable";
// const newVal2 = "Global Variable 2";

function blockScope() {
    // var newVal1 = "Local Variable 1 ";
    // let newVal = "Local Variable 2";
    // const newVal2 = "Local Variable 3";
    if (true) {

        if (true) {
            // var newVal1 = "Global Variable 1";
            // let newVal = "Global Variable";
            // const newVal2 = "Global Variable 2";
            console.log(newVal, newVal1, newVal2);
        }
    }
}
blockScope();

console.log(newVal, newVal1, newVal2);
