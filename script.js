"use strict"
let btnDo = document.querySelector('#btnDo'),
    btnPlus = document.querySelector('#btnPlus'),
    btnMinus = document.querySelector('#btnMinus'),
    btnMul = document.querySelector('#btnMul'),
    btnDev = document.querySelector('#btnDev')

let onBtnTransNumberClick = () => {
    console.info('onBtnTransNumber')
    let val1 = parseInt(document.querySelector('#number1').value),
        sys = parseInt(document.querySelector('#numsys').value)
    window.alert(val1.toString(sys))
}

let onBtnPlusClick = () => {
    console.info('onBtnPlusClick')
    let val1 = parseInt(document.querySelector('#number1').value),
        val2 = parseInt(document.querySelector('#number2').value),
        sys = parseInt(document.querySelector('#numsys').value);
    window.alert((val1 + val2).toString(sys))
}

let onBtnMinusClick = () => {
    console.info('onBtnMinusClick')
    let val1 = parseInt(document.querySelector('#number1').value),
        val2 = parseInt(document.querySelector('#number2').value),
        sys = parseInt(document.querySelector('#numsys').value);
    window.alert((val1 - val2).toString(sys))
}

let onBtnMulClick = () => {
    console.info('onBtnMulClick')
    let val1 = parseInt(document.querySelector('#number1').value),
        val2 = parseInt(document.querySelector('#number2').value),
        sys = parseInt(document.querySelector('#numsys').value);
    window.alert((val1 * val2).toString(sys))
}

let onBtnDevClick = () => {
    console.info('onBtnDevClick')
    let val1 = parseInt(document.querySelector('#number1').value),
        val2 = parseInt(document.querySelector('#number2').value),
        sys = parseInt(document.querySelector('#numsys').value);
    if (val2 === 0) {
        window.alert("На ноль делить нельзя! :)")
    } else {
        window.alert((val1 / val2).toString(sys))
    }
}

btnDo.addEventListener('click', onBtnTransNumberClick)
btnPlus.addEventListener('click', onBtnPlusClick)
btnMinus.addEventListener('click', onBtnMinusClick)
btnMul.addEventListener('click', onBtnMulClick)
btnDev.addEventListener('click', onBtnDevClick)

let replaceTheme = () => {
    document.querySelector('#btn-theme').addEventListener("click", () => {
        let themeLight = '<img src="img/icons8-sun-48.png" alt="sun">',
            themeDark = '<img src="img/icons8-moon-phase-48.png" alt="moon">',
            h1 = document.querySelector('#h1'),
            h2 = document.querySelector('#h2'),
            containerFluid = document.querySelector('.container-fluid'),
            hint = document.querySelector('.hint'),
            container = document.querySelector('.container'),
            btn1 = document.querySelector('.btn1'),
            btn2 = document.querySelector('.btn2'),
            btn3 = document.querySelector('.btn3'),
            btn4 = document.querySelector('.btn4')
        
        if (document.querySelector('#btn-theme').innerHTML == themeLight) {
            document.querySelector('#btn-theme').innerHTML = themeDark
            h1.style.color = '#eb5e0b'
            h2.style.color = '#eb5e0b'
            containerFluid.style.backgroundColor = '#a3d2ca'
            containerFluid.style.color = '#5eaaa8'
            hint.style.color = '#5eaaa8'
            container.style.backgroundColor = '#f8f1f1'
            btn1.style.backgroundColor = '#5eaaa8'
            btn2.style.backgroundColor = '#5eaaa8'
            btn3.style.backgroundColor = '#5eaaa8'
            btn4.style.backgroundColor = '#5eaaa8'
        } else if (elem.innerHTML == themeDark) {
            document.querySelector('#btn-theme').innerHTML = themeLight
            h1.style.color = '#fff600'
            h2.style.color = '#fff600'
            containerFluid.style.backgroundColor = '#26001b'
            containerFluid.style.color = '#ff005c'
            hint.style.color = '#fff600'
            container.style.backgroundColor = '#810034'
            btn1.style.backgroundColor = '#ff005c'
            btn2.style.backgroundColor = '#ff005c'
            btn3.style.backgroundColor = '#ff005c'
            btn4.style.backgroundColor = '#ff005c'
        } else {
            document.querySelector('#btn-theme').innerHTML = themeDark
            h1.style.color = '#eb5e0b'
            h2.style.color = '#eb5e0b'
            containerFluid.style.backgroundColor = '#a3d2ca'
            containerFluid.style.color = '#5eaaa8'
            hint.style.color = '#5eaaa8'
            container.style.backgroundColor = '#f8f1f1'
            btn1.style.backgroundColor = '#5eaaa8'
            btn2.style.backgroundColor = '#5eaaa8'
            btn3.style.backgroundColor = '#5eaaa8'
            btn4.style.backgroundColor = '#5eaaa8'
        }
    })
}
replaceTheme()
