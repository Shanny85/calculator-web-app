//some code has been referenced from stackoverflow as well as other media sources.
// function for getting the history
function getHistory(){
    return document.getElementById("history-value").innerText;
}

// function for printing the history
function printHistory(num){
    document.getElementById("history-value").innerText = num;
}

// function for getting the output
function getOutput(){
    return document.getElementById("output-value").innerText;
}

// function to print the output
function printOutput(num){
    if(num===""){
        document.getElementById("output-value").innerText = num;
    }
    else{
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}


function getFormattedNumber(num){
    if(num === "-"){
        return ""
    }

    const n = Number(num);
    return n.toLocaleString("en");
}



function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

const operator = document.getElementsByClassName("operator");
let i;
for(i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){
        let output;
        if(this.id === "clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id === "back"){
            output = reverseNumberFormat(getOutput()).toString();
            if(output.length > 0){
                //if output has a value.
                output = output.substring(0, output.length-1);
                printOutput(output);
            }
        }
        else{
            output = getOutput();
            let history = getHistory();
            if(output === "" &&history!==  ""){
                if(isNaN(history[history.length-1])){
                    history = history.substring(0, history.length-1);
                }
            }
            if(output !== ""){
                output = reverseNumberFormat(output);
                history = history+output;
                if(this.id === "="){
                    const result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

const number = document.getElementsByClassName("number");
for(i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        let output = reverseNumberFormat(getOutput());
        if(!isNaN(output)) {
            //if output is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}