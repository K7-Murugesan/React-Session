//Looping Statement

//for loop
//while loop
//do-while loop

//for loop

/*

    for( initialization; condition; counter){
        statement;
    }

*/


// for( let i = 0; i<=100; i+=5 ){  // i = i + 3 = 0 + 3 = 3
//     console.log( i );
// }

// let tableNum = 5;

// for( let i=1; i<=20; i++ ){
//     console.log( `${tableNum}*${i}=${tableNum*i}`  );
// }

// for (let i = 10; i>=1; i--) {
//     console.log( i );
// }


//While Loop

/* 
    initialization;
    while(condition){
        Statement...
        counter++;
    }
*/

// let val = 10;

// while( val>=1 ){
//     console.log( val );
//     val--;
// }

//-------------------------------------------------
// let num = 4352;
// let sum = 0;
// // 4 + 3 + 5 + 2 = 14

// // console.log( num%10  );

// let last = num%10; // 2
// num = parseInt (num/10) // 435
// sum = sum + last // 0 + 2 = 2

// console.log( num, sum );

// last = num%10 // 5
// num = parseInt( num/10 ) //43
// sum = sum + last // 2 + 5 = 7

//--------------------------------------------------


// let num = 234; 
// let sum = 0 //22
// let revVal = 0;  //7
// while( num>0 ){
//     let last = num%10; //4
//     num = parseInt( num/10 ) //0
//     revVal = revVal*10 + last
//     sum += last // sum = 18 + 4 = 22
// }

// console.log( sum );
// console.log( revVal );

// let newNum = 40
// do{
//     console.log( newNum );
//     newNum++;
// }
// while( newNum<30 )


// for (let index = 1; index <= 10; index++) {
//     // if( index == 6 ){
//     //     break;
//     // }
//     if( index == 6 ){
//         continue;
//     }
//     console.log( index ); 
// }


for( i=1; i<=10; i++ ){
    if( i%2 == 0 ){
        console.log( i );
    }
}
for( i=1; i<=10; i++ ){
    if( i%2 == 1 || i%2 !=0 ){
        console.log( i );
    }
}

