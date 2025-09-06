// const email = 'karam@gmail.com'
// if(email)
//     console.log('hai')
// else
//     console.log('ni hai')


let obj = {}
obj.name = 'karam'
obj.age = 21
obj.loggedin = false

// for(let i of Object.keys(obj))
//     console.log(i)
// for(let i of Object.values(obj))
//     console.log(i)

let val1;
val1 = null ?? 10
console.log(val1)
val1 = 5 ?? 10
console.log(val1)
val1 = null ?? 10 ?? 20
console.log(val1)