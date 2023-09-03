function plus(){
    let firstNumber, secondNumber, sum;

    firstNumber = parseFloat(document.getElementById("f-num").value);
    secondNumber = parseFloat(document.getElementById("s-num").value);

    sum = firstNumber + secondNumber;

    document.getElementById("show").value = sum;
}

function minus(){
    let firstNumber, secondNumber, difference;

    firstNumber = parseFloat(document.getElementById("f-num").value);
    secondNumber = parseFloat(document.getElementById("s-num").value);

    difference = firstNumber - secondNumber;

    document.getElementById("show").value =  difference;
}

function multiply(){
    let firstNumber, secondNumber, product;

    firstNumber = parseFloat(document.getElementById("f-num").value);
    secondNumber = parseFloat(document.getElementById("s-num").value);

    product = firstNumber * secondNumber;

    document.getElementById("show").value = product;
}

function divide(){
    let firstNumber, secondNumber, quotient;

    firstNumber = parseFloat(document.getElementById("f-num").value);
    secondNumber = parseFloat(document.getElementById("s-num").value);

    quotient = firstNumber / secondNumber;

    document.getElementById("show").value = quotient;
}

function clearInput(){
    var firstNum = document.getElementById("f-num");
    var secondNum = document.getElementById("s-num");
    var res= document.getElementById("show");
    if (firstNum.value||secondNum.value||res.value!="") {
        firstNum.value ="";
        secondNum.value ="";
        res.value ="";
    }
}
