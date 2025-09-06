const user = {
    name : `karam`,
    price : 999,
    welcome : function()
    {
        console.log(`${user.name}`)
        console.log(this)
    }
}
// user.welcome()
// user.name = 'Karamjit'
// user.welcome()

// const newUser = { name: "Aman", welcome: user.welcome };

// newUser.welcome(); // "Aman" (this now points to newUser)

// const func = user.welcome;
// func(); // undefined (in strict mode) or global object’s name (in non-strict)

// console.log(this)
// const name = ()=>console.log(this)


// const name2 = (num,num2)=>num+num2
// const name3 = (num,num2)=>(num+num2)
// console.log(name2(3,4))
// console.log(name3(3,4))

const name = () => ({user:'karam'})
console.log(name())