// Immediately Invoked Function Expression (IIFE)

//(Function definition)(Execution parenthesis)

// const name = ((name2)=>console.log(name2))('Karam');
// (()=>console.log('Malik'))()

let x = 10
console.log(this.x)


let val1 = 10
let val2 = 5
function add(num1 , num2)
{
    let total = num1+num2
    return total
}
let result1 = add(val1,val2)
let result2 = add(10,2)