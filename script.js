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


function replaceTheme() {
   let elem = document.querySelector('#btn-theme');

   elem.addEventListener("click", function () { ChangeTheme(); });

   function ChangeTheme() {

   let themeLight = '<img src="img/icons8-sun-48.png" alt="sun">';
   let themeDark = '<img src="img/icons8-moon-phase-48.png" alt="moon">';

   let h1 = document.querySelector('#h1');
   let h2 = document.querySelector('#h2');
   let containerFluid = document.querySelector('.container-fluid');
   let hint = document.querySelector('.hint');
   let container = document.querySelector('.container');
   let btn1 = document.querySelector('.btn1');
   let btn2 = document.querySelector('.btn2');
   let btn3 = document.querySelector('.btn3');
   let btn4 = document.querySelector('.btn4');
   

   if (elem.innerHTML == themeLight) {
      elem.innerHTML = themeDark;

      h1.style.color = '#eb5e0b';
      h2.style.color = '#eb5e0b';

      containerFluid.style.backgroundColor = '#a3d2ca'; 
      containerFluid.style.color = '#5eaaa8';

      hint.style.color = '#5eaaa8';

      container.style.backgroundColor = '#f8f1f1';

      btn1.style.backgroundColor = '#5eaaa8';
      btn2.style.backgroundColor = '#5eaaa8';
      btn3.style.backgroundColor = '#5eaaa8';
      btn4.style.backgroundColor = '#5eaaa8';

   } else if (elem.innerHTML == themeDark) {
      elem.innerHTML = themeLight;

      h1.style.color = '#fff600';
      h2.style.color = '#fff600';

      containerFluid.style.backgroundColor = '#26001b';
      containerFluid.style.color = '#ff005c';

      hint.style.color = '#fff600';

      container.style.backgroundColor = '#810034';

      btn1.style.backgroundColor = '#ff005c';
      btn2.style.backgroundColor = '#ff005c';
      btn3.style.backgroundColor = '#ff005c';
      btn4.style.backgroundColor = '#ff005c';

   } else {
      elem.innerHTML = themeDark;

      h1.style.color = '#eb5e0b';
      h2.style.color = '#eb5e0b';

      containerFluid.style.backgroundColor = '#a3d2ca'; 
      containerFluid.style.color = '#5eaaa8';

      hint.style.color = '#5eaaa8';

      container.style.backgroundColor = '#f8f1f1'; 

      btn1.style.backgroundColor = '#5eaaa8'; 
      btn2.style.backgroundColor = '#5eaaa8';
      btn3.style.backgroundColor = '#5eaaa8';
      btn4.style.backgroundColor = '#5eaaa8';

   }
}

}

replaceTheme();