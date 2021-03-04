"use strict"

let btnDo = document.querySelector('#btnDo');
let btnPlus = document.querySelector('#btnPlus');
let btnMinus = document.querySelector('#btnMinus');
let btnMul = document.querySelector('#btnMul');
let btnDev = document.querySelector('#btnDev');

function onBtnTransNumberClick() {
    console.info('onBtnTransNumber');

    let num1 = document.querySelector('#number1');
    let numSys = document.querySelector('#numsys');

    let val1 = parseInt(num1.value);
    let sys = parseInt(numSys.value);
 
    let result = val1.toString(sys);
 
    window.alert(result);
}

function onBtnPlusClick() {
    console.info('onBtnPlusClick');
 
    let num1 = document.querySelector('#number1');
    let num2 = document.querySelector('#number2');
    let numSys = document.querySelector('#numsys');

    let val1 = parseInt(num1.value);
    let val2 =parseInt(num2.value);
    let sys = parseInt(numSys.value);
 
    let result = (val1 + val2).toString(sys);
 
    window.alert(result);
 }
 function onBtnMinusClick() {
    console.info('onBtnMinusClick');
 
    let num1 = document.querySelector('#number1');
    let num2 = document.querySelector('#number2');
    let numSys = document.querySelector('#numsys');

    let val1 = parseInt(num1.value);
    let val2 =parseInt(num2.value);
    let sys = parseInt(numSys.value);
 
    let result = (val1 - val2).toString(sys);
 
    window.alert(result);
 }
 
 function onBtnMulClick() {
    console.info('onBtnMulClick');
 
    let num1 = document.querySelector('#number1');
    let num2 = document.querySelector('#number2');
    let numSys = document.querySelector('#numsys');

    let val1 = parseInt(num1.value);
    let val2 =parseInt(num2.value);
    let sys = parseInt(numSys.value);
 
    let result = (val1 * val2).toString(sys);
 
    window.alert(result);
 }
 
 function onBtnDevClick() {
    console.info('onBtnDevClick');
 
    let num1 = document.querySelector('#number1');
    let num2 = document.querySelector('#number2');
    let numSys = document.querySelector('#numsys');

    let val1 = parseInt(num1.value);
    let val2 =parseInt(num2.value);
    let sys = parseInt(numSys.value);
 
    let result = (val1 / val2).toString(sys);
 
    window.alert(result);
 }

btnDo.addEventListener('click', onBtnTransNumberClick);
btnPlus.addEventListener('click', onBtnPlusClick);
btnMinus.addEventListener('click', onBtnMinusClick);
btnMul.addEventListener('click', onBtnMulClick);
btnDev.addEventListener('click', onBtnDevClick);


// let num1 = +prompt('Введите число: ');
// let numSysSecond = +prompt('Введите систему счисления в которую надо перевести: ');


// function numberTrans(num, numSys) {
//     return num.toString(numSys);
// }
// function sumNumber(num, numSys) {
//     let num2 = +prompt('Введите число с которым сложить: ');

//     return (num + num2).toString(numSys);
// }
// function  minNumber(num, numSys) {
//     let num2 = +prompt('Введите число от которого отнять: ');

//     return (num - num2).toString(numSys);
// }
// function  mulNumber(num, numSys) {
//     let num2 = +prompt('Введите число на которое умножить: ');

//     return (num * num2).toString(numSys);
// }
// function  devNumber(num, numSys) {
//     let num2 = +prompt('Введите число на которое делить: ');

//     return (num / num2).toString(numSys);
// }

// alert(numberTrans(num1, numSysSecond));
// alert(sumNumber(num1, numSysSecond));
// alert(minNumber(num1, numSysSecond));
// alert(mulNumber(num1, numSysSecond));
// alert(devNumber(num1, numSysSecond));