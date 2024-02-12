const rock = 1
const paper = 2
const sciror = 3
uinput = Number.parseInt(prompt("value must be natural number till 3"));
computer_number = Math.ceil(Math.random() * 3);
console.log("computer generated number is " + computer_number)
console.log("you choose "+uinput)
if(rock==uinput){
    if(uinput==computer_number){
        alert(console.log("you choose same as that computer choose"));    
    }else if(uinput==rock && computer_number==sciror){
        alert(console.log("you won as you choose rock and computer choose sciror"));        
    }else{
        alert(console.log("you lose as you choose rock and computer choose paper "));   
    }
}else if(paper==uinput){
        if(uinput==computer_number){
        alert(console.log("you choose same as that computer choose"));
    }else if(uinput==paper && computer_number==rock){
        alert(console.log("you won as you choose paper and computer choose rock"));        
    }else{
        alert(console.log("you lose as you choose paper and computer choose sciror "));       
    }
}else if(sciror==uinput){
        if(uinput==computer_number){
        alert(console.log("you choose same as that computer choose"));
    }else if(uinput==sciror && computer_number==paper){
        alert(console.log("you won as you choose sciror and computer choose paper"));     
    }else{
        alert(console.log("you lose as you choose sciror and computer choose rock "));
    }
}
