let a= "bola"
console.log (a)
let b = 22;
console.log (b)
// let age = 30;
// console.log (age)
let beautiful = false;
console.log (beautiful)
let disability = null;
console.log (disability)
let maritalStatus;
console.log (maritalStatus)

let info = { name: "Bola", age: "20", phoneNumber: "0815738589454", }
console.log (info)
console.log(info.age)

const fruits = ["apple", "banana", "pineapple",  "kiwi", "orange"  ]
console.log (fruits)
console.log (fruits.kiwi)

let statement = "This is my javascript practice"
console.log (statement)

console.log (statement.toUpperCase())

let gmail = "MariamIdreeS@gmail.com"
console.log (gmail)
console.log (gmail.toLowerCase())

let own = "    this is my computer        "
console.log (own)
console.log (own.trim())
console.log (statement.length)
console.log (statement.charAt(19))
console.log (statement.indexOf("j"))
console.log(statement.includes("practice"))
console.log (own.slice(4))


let phoneNumber = 40
console.log (phoneNumber)
console.log (phoneNumber.toString()+10 )
console.log(phoneNumber.toFixed(2))
console.log(phoneNumber.toExponential(3))
console.log(parseInt(phoneNumber)+50)
console.log(parseFloat(phoneNumber)+20)

let score = 83
console.log(Math.PI)
console.log(Math.SQRT1_2)
console.log(Math.ceil(346.3))
console.log(Math.min (23, 12, 5, 21, 85, 4))
console.log(Math.max (34, 16, 89, 75, 90, 92, 64))
console.log(Math.round (33.5))
console.log (Math.random())

let d = 53
let e = 38

console.log (d+e)
console.log (d-e)
console.log (d/e)
console.log (d*e)
console.log (d%e)

console.log (d===e)
console.log (d==e)
console.log (d>e)
console.log(d<e)
console.log  (d>=e)
console.log (d<=e)
console.log (d!=e)

let sandal = true
let textbook = false
let uniform = true

console.log (uniform && textbook)
console.log (uniform && textbook || sandal)
console.log ( (!uniform))
console.log ((!sandal))

let i = 43
let j = 24

// console.log (i++)
// console.log (i++)
// console.log (i++)
// console.log (i++)
// console.log (i++)
// console.log (i++)

console.log (++i)

console.log (--j)
// console.log (j--)
// console.log (j--)
// console.log (j--)
// console.log (j--)

let age = 12
let vote = (age >=18 ? "you can vote" : "you cannot vote")
console.log (vote);