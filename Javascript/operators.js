//To perform operation on operands or values

//Arithmetic Operators - perform mathematical operations
// console.log( 10 + 20 );
// console.log( 20-10 );
// console.log( 10*2  );
// console.log( 13/5 ); //Quotient
// console.log( 13%5 ); //Remainder
// console.log( 5**3 ); //Exponential


// let a = 10;

// a= a+1 ;

// console.log( a );

//Increment ( ++ )

// let a1 = 12; // 14 // 15 // 16
// ++a1; //Pre Increment // a1 = a1 + 1 // 12 + 1 // a1 = 13
// a1++; //Post Increment  // a1 = a1 + 1 // 13 + 1

//Pre-Increment - 1.Increment 2.Substitute 3.Mathemaical Opertion

// let b1 = ++a1 + ++a1

// b1 = 15 + 16
// b1 = 31
//a1 = 16

// console.log( a1, b1 );


//Post Increment - 1.Substitute 2.Mathematical Operation 3.Memory Increment


// let c1 = 20; //21 // 22

// let d1 = c1++ + c1++

// d1 = 20 + 21 = 41

// console.log( c1, d1 );

//Decrement( -- )

let a2 = 23; //22 // 21

// let b2 = a2-- + --a2

// b2 = 23 + 21 = 22

// console.log(  a2,b2 );


//Assignment Operators -- Used to perform opertion for same variable

// let age = 25;

// age = age + 5

// age+=10 // 35
// age-=10 //25


// console.log( age );

//Comparision Operator


let u1Age = 40;
let u2Age = 30;

// console.log(  u1Age < u2Age  );
// console.log(  u1Age <= u2Age  );
// console.log(  u1Age > u2Age );
// console.log(  u1Age >= u2Age );


// let idProof = "Adhaar"
// console.log( idProof == "Adhaar"  );

// let num = "10"
// console.log( num == 10  ); 
// console.log( num === 10  ); //Strict Equal or Identical to
// let num = 10;
// console.log( num != 10  );
// console.log( num !== 10  );
// console.log( "-----------------------" );
// let num1 = "10";
// console.log( num1 != 10  );
// console.log( num1 !== 10  ); //Strict Not Equal or Not Identical to

//Logical Operator

//Logical AND(&&)

// cond1  cond2 Result
// true   true   true
// true   false  false
// false  true   false
// false  false  false

let age = undefined

// console.log(  age>=18 && age<=30   ); 
// console.log(  age>=18 && age<=30   );
// console.log(  age>=18 && age<=30   );

//Logical OR( || )

// cond1  cond2  Result
// true   true   true
// true   false  true
// false  true   true
// false  false  false

//LOgical Not ( ! )

// console.log(  !(10<=10 && 10>9)  );