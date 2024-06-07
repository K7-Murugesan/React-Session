//Type Conversion

//Implicit - Automatic

// let num = 24;

//String + anything = String
//Anything + String = String

// let newVal = "Twenty" + num

// newVal = "Twenty" + true
// newVal = "Twenty" + undefined
// newVal = "Twen-ty" + [1,2]
// // newVal = "Twenty" + {}

// console.log( newVal  );
// console.log( typeof newVal  );
// console.log( 100 + "10"  );
// console.log( 100 - "10A"  );
// console.log( typeof (100 - "10")  );

// Number

// console.log( 100 + false  );
// true - 1, false - 0
// console.log( 100 + undefined  ); // NaN - Not A Number
// 100 + NaN - NaN
// console.log( 100 + null  );

// console.log( 100 + [1]  );
// console.log( typeof(100 + [])  ); // String

// console.log( 100 + {} ); // String

// Boolean

// console.log( true + 10  );
// console.log( true + "123"  );
// console.log( true + undefined  );
// console.log( true + null  );
// console.log( true + [1]  );
// console.log( true + {}  );

//Explicit - Manual

// console.log(  Number( "12M" ) + 10  );
// console.log(  Number( "" )  );
// console.log(  Number( false )  );
// console.log(  Number( undefined )  );
// console.log(  Number( null )  );
// console.log(  Number( [1,2] )  ); // "1,2"
// console.log(  Number( {} )  ); // "[object Objecct]"

console.log(  Boolean( 10 ) );
console.log(  Boolean( -10 ) );
console.log(  Boolean( Infinity ) );
console.log(  Boolean( -Infinity ) );
console.log(  Boolean( 0.05 ) );
console.log(  Boolean( 0) ); //false
console.log(  Boolean( "") );
console.log(  Boolean( "abc") );
console.log(  Boolean( []) );
console.log(  Boolean( {}) );
console.log(  Boolean( undefined) );
console.log(  Boolean( null) );
console.log(  Boolean( NaN) );

console.log( String( -Infinity ) );

