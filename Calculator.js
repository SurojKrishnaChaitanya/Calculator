const button = document.querySelectorAll("button");
let displayBar = document.querySelector("#display-section");
const digitBtns = document.querySelector("#digit-section");
const btn1 = document.querySelector("#b1");
const btn2 = document.querySelector("#b2");
const btn3 = document.querySelector("#b3");
const btn4 = document.querySelector("#b4");
const btn5 = document.querySelector("#b5");
const btn6 = document.querySelector("#b6");
const btn7 = document.querySelector("#b7");
const btn8 = document.querySelector("#b8");
const btn9 = document.querySelector("#b9");
const btn0 = document.querySelector("#b0");
const btnPi = document.querySelector("#bPi");
const btnE = document.querySelector("#bE");
const operateBtns = document.querySelector("#operator-section");
const btnPlus = document.querySelector("#add-btn");
const btnMInus = document.querySelector("#subtract-btn");
const btnMultiply = document.querySelector("#multiply-btn");
const btnDivide = document.querySelector("#divide-btn");
const btnExponent = document.querySelector("#exponentialize-btn");
const btnClear = document.querySelector("#clear-btn");
const equateBtn = document.querySelector("#equate-btn");

btn0.addEventListener("click" , () => {
    displayBar.append(btn0.innerText)
})
btn1.addEventListener("click" , () => {
    displayBar.append(btn1.innerText);
})
btn2.addEventListener("click" , () => {
    displayBar.append(btn2.innerText);
})
btn3.addEventListener("click" , () => {
    displayBar.append(btn3.innerText);
})
btn4.addEventListener("click" , () => {
    displayBar.append(btn4.innerText);
})
btn5.addEventListener("click" , () => {
    displayBar.append(btn5.innerText);
})
btn6.addEventListener("click" , () => {
    displayBar.append(btn6.innerText);
})
btn7.addEventListener("click" , () => {
    displayBar.append(btn7.innerText);
})
btn8.addEventListener("click" , () => {
    displayBar.append(btn8.innerText);
})
btn9.addEventListener("click" , () => {
    displayBar.append(btn9.innerText);
})
btnPi.addEventListener("click",() => {
    displayBar.append(Math.PI);
})
btnE.addEventListener("click", () => {
    displayBar.append(Math.E);
})
btnClear.addEventListener("click",() => {
    displayBar.innerText = " ";
})
btnPlus.addEventListener("click",() => {
    displayBar.append(btnPlus.innerText);
})
btnMInus.addEventListener("click",() => {
    displayBar.append(btnMInus.innerText);
})
btnMultiply.addEventListener("click",() => {
    displayBar.append("*");
})
btnDivide.addEventListener("click",() => {
    displayBar.append(btnDivide.innerText);
})
btnExponent.addEventListener("click",() => {
    displayBar.append("**");
})

equateBtn.addEventListener("click" , () => {
    displayBar.innerText = eval(displayBar.innerText);
})