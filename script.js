const display = document.getElementById("display");

var formula = '';


function appendToDisplay(input){
    display.value += input
}
function setToDisplay(input){
    display.value = input
}
function BS(){
    var text = String(display.value);
    
    if(String(display.value).length <= 0){
        display.value =0;
    }
    display.value = text.slice(0,text.length-1)
}
function clearDisplay(){
    display.value ='';
    formula = 0;
}

function operation(){
    formula = display.value;
    
    try{
    setToDisplay(eval(formula))
    }catch(e){setToDisplay(e)}
    console.log(formula);
}
