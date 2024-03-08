let a;
window.onload = function() {
    a = document.getElementById("display");

}

function addToDisplay(b){
    a.value += b;
    calcPerformed = false;
}

function calculate(){
    try {
        cal = eval(a.value)
        if (cal == undefined){
            a.value = `${a.value}`;
        }
        else{
            a.value = cal;
        }
    } catch (error) {
        a.value = "Syntax Error";
    }

    calcPerformed = true;
}

function backspace(){
    if(calcPerformed) return 0;
    a.value = a.value.slice(0,-1)
}

function allClear(){
    a.value = ""
    calcPerformed = false;
}