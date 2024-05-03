
function cal(){
    let operand1 = Number(document.getElementById("op1").value);
let operator = document.getElementById("operator").value;
let operand2 = Number(document.getElementById("op2").value);
let result;
    switch(operator){
        case '+':
            result = operand1 + operand2;
            break;
            case '-':
                result = operand1 - operand2;
                break;
                case '*':
            result = operand1 * operand2;
            break;
            case '/':
            result = operand1 / operand2;
            break;
            default:
                result = "Enter + or - or * or /";
    }
    let resultdiv= document.createElement('div');
    resultdiv.id='resu';
    resultdiv.style.color ="white"; // manipulate 
    document.getElementById('contain').appendChild(resultdiv); // important step 
    document.getElementById('resu').innerHTML = `${operand1} ${operator} ${operand2} is equal `+result;
}
