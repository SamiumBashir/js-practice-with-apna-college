// let msg = '  help! ';

// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

// let name = 'ApnaCollege'

// console.log(name.slice(4,9))

// console.log(name.indexOf('na'))

// let months = ['january', 'july', 'march', 'august'];

// months.shift();
// months.shift();
// months.unshift('june');
// months.unshift('july');
// console.log(months);

// months.splice(0,2,'july', 'june');
// console.log(months);

// let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#'];
// let newlang = lang.push('sql');

// let postionOfLang = lang.reverse().indexOf('javascript');

// console.log(postionOfLang);

// let arr =[7, 9, 0, -2];
// let n = 3;

// let newArry = arr.slice(0, n);

// console.log(newArry);

// let arr = [7, 9, 0, -2];
// let n = 3;

// let newArry = arr.slice(arr.length-n);

// console.log(newArry);

// let str = prompt('Enter a str');

// if(str == 0){
//     console.log('str is empty');
// } else{
//     console.log('str is not empty');
// };

// let num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i = 0; i <= num.length; i = i+2){
//     if(num[i] % 2 === 0){
//         console.log(num[i]);
//     };
// };

// for(let i = 0; i<= 100; i= i+3){
//     console.log('baby ko base pasand hain')
// }

// let n = prompt('Enter Your Number');
// n = parseInt(n);

// for(let i = n; i <= n*10; i = i+n){
//     console.log(i);
// };

// for(let i = 1; i <= 5; i++){
//      for(let j = 1; j <= 4; j++){
//         console.log(j);
//     };
// };

// const favMovie = 'One Night Stand';
// let guess = prompt('Guess The Favorite Movie Name');

// while((guess != favMovie) &&(guess != 'quite')){
//     guess = prompt('Try again!');
// }

// if(guess === favMovie){
//     alert('Congratulations !!');
// } else{
//     alert('You are quite !');
// };


let student = [['aman', 90], ['samium', 88], ['safa', 99], ['akash', 100]];

for(let i = 0; i < student.length; i++){
    console.log(`Info of student number ${i}`)
    for(let j = 0; j < student[i].length; j++){
        console.log(student[i][j]);
    };
};