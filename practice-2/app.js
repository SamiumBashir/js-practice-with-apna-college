// let color = 'yellow';

// if (color === 'red'){
//     console.log('Stop. Light color is Red');
// };

// if(color === 'yellow'){
//     console.log('Slow Down. Light color is Yellow');
// };

// if(color === 'green'){
//     console.log('Go. Light color is Green');
// };

// if(color === 'red'){
//     console.log('Stop. Light Color is Red');
// } else if( color === 'yellow'){
//     console.log('Slow Down. Light Color is Yellow');
// } else if(color === 'green'){
//     console.log('Go. Light Color is Green');
// }

// let numb = 287152;
// let copyNum = numb;
// let count = 0;

// while(copyNum > 0 ){
//     digit = copyNum % 10;
//     count = count + digit;
//     copyNum = Math.floor(copyNum/10);
// }
// console.log(count);

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// let fact = 5;

// let factorial = 1;
 
// for( let i = 1; i <= fact; i++){
//     factorial = factorial * i;
// }

// console.log(factorial)

let largestNumber = [2,5,10,-14,2,7,1,9];

// let larN = 0;

// for ( let i = 0; i < largestNumber.length; i++){
//     if(largestNumber[i] > larN){
//         larN = largestNumber[i];
//     }
// }
// console.log(larN);

// pro tip 

// let larN = largestNumber[0];

// for(let i = 1; i < largestNumber.length; i++){
//     if(largestNumber[i] > larN){
//         larN = largestNumber[i];
//     }
// }
// console.log(larN);

// let num = Math.random();
// num = num +1; 
// let total = Math.floor(num * 100)
// console.log(total);

const max = prompt('Enter The Max Number');
const random = Math.floor(Math.random * 100) + 1;
let guess = prompt('Guess The Number');


while(true){
    if(guess === 'quite'){
        console.log('User Quite');
        break;
    }
    if(guess === 'random'){
        alert('Congratulations, You Have Guess The Correct Number')
    } else {
        guess = prompt ('Wrong Guess, Please Try Again');
    }
}