
let allBtn = document.querySelectorAll(".button");
let resultBtn = document.querySelector("#result-box");
let operators = ['+', '-', '%', '/', '*', '=']
let allBtnSpread = [...allBtn];
let  result = '';

// for number inputs
allBtnSpread.forEach((button) => 
    button.addEventListener("click", (e) => evaluate(e.currentTarget.dataset.name))
);

// evaluate function
function evaluate(outputValues) {
   if(outputValues === '=' && result !==''){
    result = eval(result.replace('%', '/100'));
   }else if(outputValues === 'AC'){
    result = '';
   }else{
    if(result === '' && operators.includes(outputValues)) return;
    result += outputValues;
   };

   resultBtn.innerHTML = result;
};
