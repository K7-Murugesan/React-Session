let str = "ECMA"
let str1 = "Script"

let newStr = "ECMA International Changes Javascript to" +" "+ 
str + " " + 
str1 

let num = 5;

let tables = num + " * " + 3 + " = " + (num*3)
let table5 = `${num} * ${3} = ${num*3}`
console.log( tables );
console.log( table5 );
console.log( newStr );

//Template String 
//String Interpolation
let str2 = `ECMA International Changes Javascript to 
${str} 
${str1}`

console.log(  str2 );