
//console.log(obj.name)
//console.log(obj['name'])
//obj.gender = 'male';
//console.log(obj.gender)
//console.log(obj)

//const mysym = Symbol('kar')
const obj = {
    name : 'karam',
    age : 20,
    //[mysym]: 'hell',
    greeting : function()
    {
        console.log(`Hello ${this.name}`)
    }
};
console.log(obj.greeting)
console.log(obj.greeting())
//console.log(obj[mysym])
//Object.freeze(obj)
//obj.name = 'karamjit'
//console.log(obj['name'])

