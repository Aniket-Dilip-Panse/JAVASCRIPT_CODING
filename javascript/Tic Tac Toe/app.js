let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = 'O';
            turnO = false;

        } else {
            box.innerHTML = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner(); //this function will check as soon as we click on any box
    });
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        // from all winPattern we are finding the acurate pattern
        // console.log(pattern)
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("winner");
            }
        }
    }
}