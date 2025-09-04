//const num = Symbol("123")
//const num2 = Symbol("123")
//console.log(num === num2);


//const mufun = function()
//{
//   console.log("hello")
//}
//mufun();


let obj = {
    name : "Karam",
    age : 20
};

console.log(typeof mufun)

//let address = "Karam ka ghar"
//let add2 = address
//console.log(add2);
//add2 = "Mera ghar"
//console.log(add2);

const obj1 = {
    name : "Karam",
    age : 20
};
const obj2 = {
    name : "Karam",
    age : 20
};
//console.log(obj1 === obj2)

const ob1 = {
    name : "Karam",
    age: 21
};
const ob2 = ob1
//console.log(ob1 === ob2)
ob2.age = 25
console.log(ob1.age)