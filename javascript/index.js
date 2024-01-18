function show() {
    let username = document.getElementById("mytext").value;
    document.getElementById("myh1").innerHTML = `Namaskar ${username}`;
}

function show2(){
    let username = document.getElementById("mytext").value;
    document.getElementById("myp").textContent = `Hello ${username}`;
}

function areaCircle() {
    let radius = document.getElementById("radius_value").value;
    const PI = 3.142
    document.getElementById("secondh1").textContent = `Area of circle: ${Math.round(PI * radius * radius)}`
}

let value = 0; 
function decrementValue() {
    let decrement = value--;
    document.getElementById("thirdh1").textContent = decrement;
}

function incrementValue() {
    let increment = value++;
    document.getElementById("thirdh1").textContent = increment;
}

function resetValue() {
    let value = 0
    document.getElementById("thirdh1").textContent = value;
}