
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

const str = 'test';

console.log(str.toUpperCase());

const fruit = "Some fruit";

console.log(fruit.indexOf('q'));

const logg = "some people tell me, that i very good programist";

console.log (logg.substring(6,11));

console.log (logg.substr(6,5));



const num = 12.2;

console.log(Math.round(num));


const test = '12.2px';

// console.log(parseInt(test));
console.log(parseFloat(test));


function learnJS(lang, callback, callback2) {
    console.log(`I learn: ${lang}`);
    callback();
    callback2();
} 



function done() {
    console.log('I go this lesson');
}

let a = function() {
    console.log('wwww');
}

learnJS('javaScript', done, a);