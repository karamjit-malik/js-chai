//const obj = {}
//obj.name = 'karam'
//obj.age = 20
//obj.isLoggedin = false
//console.log(obj)
//const ob2 ={}
//ob2.name2 = 'karamjit'
//ob2.age2 = 200
//ob2.isLoggedin2 = true
//const ob3 = Object.assign({},obj,ob2)
//console.log(ob3)

//const ob4 = {...obj , ...ob2}

const obj = {}
obj.name = 'karam'
obj.age = 20
obj.isLoggedin = false

//console.log(Object.keys(obj))
//for(let keys of Object.keys(obj))
    //console.log(keys)
//for(let keys of Object.values(obj))
    //console.log(keys)

//console.log(Object.entries(obj))

const {name : myname,age} = obj;
console.log(myname)
console.log(age)