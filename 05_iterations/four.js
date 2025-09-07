const obj = {}
obj.name = 'Karam'
obj.age = 21
obj.loggedin = true

for(const value in obj)
    console.log(value),
    console.log(obj[value])