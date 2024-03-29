function onclickbtn() {
    document.getElementById("btn").style.backgroundColor = "red"
}

function doubleclick() {
    document.getElementById("btn").style.backgroundColor = "blue"
}

function onmouseout() {
    document.getElementById("btn").style.backgroundColor = "green"
}

function onmousemove() {
    document.getElementById("btn").style.backgroundColor = "yellow"
}

function onmouseover() {
    document.getElementById("btn").style.backgroundColor = "purple"
}
alert("welcome to DOM Manipulation");

btn.removeEventListener("mousedown", handleMouseDown, false);