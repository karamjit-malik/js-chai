let arr = [1,2,3,4,5]
// console.log(arr.map((item)=>item+10))
// console.log(arr)

//chaining : applying multiple functions on array

console.log(arr.map((num)=>num*2).map((num)=>num+2).filter((num)=>num>5))