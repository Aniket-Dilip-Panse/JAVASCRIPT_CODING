function add() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let sum = num1 + num2;
    document.getElementById("answer").innerHTML = sum;
}

function sub() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let sub = num1 - num2;
    document.getElementById("answer").innerHTML = sub;
}

function mul() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let mul = num1 * num2;
    document.getElementById("answer").innerHTML = mul;
}

function div() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let div = num1 / num2;
    document.getElementById("answer").innerHTML = div;
}

function output() {
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);
    let operation = document.getElementById("select_tag").value
    switch (operation) {
        case "+":
            var num3 = num1 + num2;
            document.getElementById("result").innerHTML = num3;
            break;
        case "-":
            var num3 = num1 - num2;
            document.getElementById("result").innerHTML = num3;
            break;
        case "*":
            var num3 = num1 * num2;
            document.getElementById("result").innerHTML = num3;
            break;
        case "/":
            if (num2 == 0) {
                document.getElementById("result").innerHTML = 'NA';
            }
            var num3 = num1 / num2;
            document.getElementById("result").innerHTML = num3;
            break;
        default:
            console.log("not valid");
    }
}