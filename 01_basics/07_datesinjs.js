//Dates

let myday = new Date()
//console.log(myday)
//console.log(myday.toString())
//console.log(myday.toDateString())

//let createddate = new Date(2025,0,5)
//console.log(createddate)

//let createddate2 = new Date(2025,0,5,3,4)
//console.log(createddate2.toLocaleString())


let day = new Date(`1-12-2025`)
//console.log(day.toLocaleString())

//console.log(Date.now())

//console.log(day.getTime())

let days = new Date()
//console.log(days.getMonth()+1)
//console.log(days.getDay())


days.toLocaleString('default',{
    weekday:"long",  
});
