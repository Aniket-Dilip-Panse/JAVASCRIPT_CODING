//conditional statement in javascript
//if else
//switch case
//ternary operator


const age = 18
if(age>18){
    console.log('eligible for voting')
}else{
    console.log('not eligible for voting')
}

switch(age){
    case 18:
        console.log('eligible for voting')
        break
    default:
        console.log('not eligible for voting')
}


// ternary operator
console.log(age>18 ? 'eligible for voting' : 'not eligible for voting')