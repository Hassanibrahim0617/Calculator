let btn = document.querySelectorAll(".num-btn");
let allBtn = document.querySelectorAll(".button");
let resultBtn = document.querySelector("#result-box");
let clearBtn = document.querySelector("#clear");
let total = document.querySelector("#total");

let btnSpread = [...btn];
let allBtnSpread = [...allBtn];

// for number inputs

btnSpread.forEach((button, i) => {
    button.addEventListener("click",()=> {
// inner values
if (resultBtn.innerHTML== '0'){
    resultBtn.innerHTML ="";
}
let value = btn[i].innerHTML;
resultBtn.innerHTML += value;
    });
});

// evaluate function

function evaluate (fn){
    return new Function("return" + fn)()
}

// to calculate all function

total.addEventListener ("click", () => {
    let allInputs = resultBtn.innerHTML;
    resultBtn.innerHTML = evaluate(allInputs);
    console.log(evaluate(allInputs));
});

// clear inputs
clearBtn.addEventListener("click", () => {
    resultBtn.innerHTML = "0"
});