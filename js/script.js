
// let chooseBtn = document.getElementById('choose'),
//     receiveBtn = document.getElementById('receive'),
//     heading = document.getElementsByTagName('h2')[0],
//     nameInput = document.getElementsByClassName('contactform_name')[0],
//     phoneInput = document.querySelector('.contactform_phone'),
//     mailInput = document.querySelectorAll('.contactform_mail')[0],
//     modal = document.querySelector('.modal');
//     closeModal = document.querySelector('.close'),
//     textMessage = document.getElementsByName('message')[0];
    

// function hover() {
//     heading.textContent = "Realy all!";
// }

// chooseBtn.addEventListener('mouseenter', hover);

// chooseBtn.addEventListener('mouseleave', () => {
//     heading.textContent = "Все включено!";
// });


// receiveBtn.addEventListener('click', function(){
//     modal.style.display = 'block';
// });

// closeModal.addEventListener('click', () =>{
//     modal.style.display = 'none';
// });

// nameInput.addEventListener('input', () => {
//     textMessage.value = nameInput.value;
// });


// function isPolindrom(number) {
//   let result = "";
//     // number = Number(number);
//     for(i = number.length-1; i >= 0; i--) {
//         result += number[i];        
//     }
//     // console.log(result);
//     if(result == number) {
//         return true;
//     } else return false;

//     // console.log(typeof(number));
//     // console.log(typeof(result));
//     // console.log(result);
// }

// console.log(isPolindrom("12345"));
// console.log(isPolindrom("10001"));
// console.log(isPolindrom("11122111"));
// console.log(isPolindrom("125678"));


// const categoty = 'toys';

// console.log(`https://someurl.com/${categoty}` );

// const user = 'Ivan';

// console.log(`hello, ${user}`);

// let arr = {
//     name: 'Alex',
//     age: 18,
//     location: 'Ukraine',
// };

// const str = 'test';

// console.log(str.toUpperCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf('q'));

// const logg = "some people tell me, that i very good programist";

// console.log (logg.substring(6,11));

// console.log (logg.substr(6,5));



// const num = 12.2;

// console.log(Math.round(num));


// const test = '12.2px';

// // console.log(parseInt(test));
// console.log(parseFloat(test));


// function learnJS(lang, callback, callback2) {
//     console.log(`I learn: ${lang}`);
//     callback();
//     callback2();
// } 



// function done() {
//     console.log('I go this lesson');
// }

// let a = function() {
//     console.log('wwww');
// }

// learnJS('javaScript', done, a);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//         },

//     makeTest : function() {
//         console.log('test');
//     },

// };

// const {border, bg} = options.colors;

// console.log(bg);


// options.makeTest();


// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// for(let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Options ${i} have ${options[key][i]}`);
//         }
//     } else {
//     console.log(`Options ${key} have ${options[key]}`);
//     }
// }

// const arr = [1, 2, 3, 4, 5, 6];

// arr.pop();

// console.log(arr);

// arr.push(12);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, index, arr) {
//     console.log(`${index}: ${item} inside array ${arr}`);

// });

// const items = 'first, second, three, four, five';
// const arrItems = items.split(', ');
// console.log(arrItems[2]);

// const test = arrItems.join(" __ ");
// console.log(test);

// console.log(arrItems.slice(0,4));


// const arr = [22, 45, 21, 12, 6];

// function compareNumb(a, b) {
//     return a - b;
// }

// arr.sort(compareNumb);

// console.log(arr);



// function copy(mainObj) {
//     let objCopy = {};
    
//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key]; 
//     }
//     return objCopy;
// }


// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);

// console.log(numbers);

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     }
// };

// const add = {
//     d: 18,
//     i: 20,
// };

// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArray = ['a' , 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[2]="2222";
// console.log(newArray);

// console.log(oldArray);

// const video = ['youtube' , 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournaj', 'blogger'],
//       internet = [...video , ...blogs, 'vk'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a, b, c);
// }

// const num = [2, 5, 7];
// log(...num);

// const array = ['a', 'b'];

// const newArray = [...array];

// const q = {
//     one: 1,
//     two: 2,
//     thee: {
//         th: 3,
//         ee: 3.5,
//     },
// };

// const newObj = {...q};
// newObj.thee = {...q.thee};
       

// newObj.thee.ee = 6.8;

// console.log(q, newObj);


// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));

// console.log(strObj);

// const soldier = {
//     health: 400,
//     armor: 100,
// };

// const john = Object.create(soldier);

// console.log(john.armor);


// const jonh = {
//     health: 100,
// };

// Object.setPrototypeOf(john, soldier);









