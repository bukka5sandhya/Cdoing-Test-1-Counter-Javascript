let counterValueEle = document.getElementById("counterValue");
let decreaseBtnEle = document.getElementById("decreseBtn");
let resetBtnEle = document.getElementById("resetBtn");
let increaseBtnEle = document.getElementById("increaseBtn");
let count= 0;


function onDecrement(){
    if(count % 2 === 0){
        count -= 2;
        counterValueEle.textContent = count;

    }else if(count % 2 !== 0){
        count -= 1;
        counterValueEle.textContent = count; 
    }

}
function onReset(){
    count = 0;
    counterValueEle.textContent = count;
}
function onIncrement(){
    if(count % 2 === 0){
        count += 5;
        counterValueEle.textContent = count;
    }else if(count % 2 !== 0){
        count += 10;
        counterValueEle.textContent = count;
    }

    
}