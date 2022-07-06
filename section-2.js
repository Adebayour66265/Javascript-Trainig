
let hasDriver = false;
const passTest = true;


//  It can only when both of them are true
// console.log(hasDriver && passTest);

//  It can only when One of them are true
// console.log(hasDriver || passTest);

//  It can only when one of them   true
// console.log(!hasDriver);

// if (hasDriver && passTest) {
//     console.log('Let him drive');
// } else {
//     console.log('Some one else should Drive');
// }

// const isTired = true;
// console.log(hasDriver && passTest && isTired);

// if (passTest) hasDriver = true;
// if (hasDriver) console.log('i can drive :D');



// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins in the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreDolphins >= 100) {
//     console.log('Koalas in the trophy');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('Both win the trophy');
// } else {
//     console.log('No one win the trophy');
// }



//  SWITCH STATEMENT

const day = 'Tuesday';

// switch (day) {
//     case 'Monday': // day === 'Monday'
//         console.log('Plan course structure');
//         console.log('Going to Coding challenge');
//         break;
//     case 'Tuesday': // day === 'Monday'
//         console.log('Waching All video of coding');
//         break;
//     case 'Wednesday': // day === 'Monday'
//         console.log('Read All the PDF file');
//         break;
//     case 'Thursday': // day === 'Monday'
//         console.log('Write Code');
//         break;
//     case 'Friday': // day === 'Monday'
//         console.log('Going to Mousque');
//         break;
//     case 'Saturday': // day === 'Monday'
//         console.log('Having A rest');
//         break;
//     case 'Sunday': // day === 'Monday'
//         console.log('Washing All my cloth');
//         break;
//     default:
//         console.log('Not A valid Date');
//         break;
// }


// if (day === 'Monday') {
//     console.log('Today is Monday');
// }else if (day == 'Tuesday') {
//     console.log('Today is tuesday Have a great day');
// }else if (day === 'Wednesday') {
//     console.log('Ok today is wednesday');
// }  else{
//     console.log('Not A valid Date');
// }



//  Statement And Expression

// 3 + 4;
// 1991
// true && false && !false

// if (23 > 10) {
//     // Statement
//     const str = '23 is bigger';
// }
// const me = 'Nurudeen';
// // Expression
// console.log(`I'm ${2022 - 1996} years old ${me}`);

const age = 23;
//  Tenary operator
// >= condition,      ? is if statement ,,      : this is else istatement
const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);


// let drink2;
// if (age >= 18 ) {
//     drink2 = 'Wine'
// }else{
//     drink2 = "Water"
// }
// console.log(drink2);
// // Expression
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);





const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

