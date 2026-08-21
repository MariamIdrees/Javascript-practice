// let a= "bola"
// console.log (a)
// let b = 22;
// console.log (b)
// let age = 30;
// console.log (age)
// let beautiful = false;
// console.log (beautiful)
// let disability = null;
// console.log (disability)
// let maritalStatus;
// console.log (maritalStatus)

// let info = { name: "Bola", age: "20", phoneNumber: "0815738589454", }
// console.log (info)
// console.log(info.age)

// const fruits = ["apple", "banana", "pineapple",  "kiwi", "orange"  ]
// console.log (fruits)
// console.log (fruits.kiwi)

// let statement = "This is my javascript practice"
// console.log (statement)

// console.log (statement.toUpperCase())

// let gmail = "MariamIdreeS@gmail.com"
// console.log (gmail)
// // console.log (gmail.toLowerCase())

// let own = "    this is my computer        "
// console.log (own)
// console.log (own.trim())
// console.log (statement.length)
// console.log (statement.charAt(19))
// console.log (statement.indexOf("j"))
// console.log(statement.includes("practice"))
// console.log (own.slice(4))


// let phoneNumber = 40
// console.log (phoneNumber)
// console.log (phoneNumber.toString()+10 )
// console.log(phoneNumber.toFixed(2))
// console.log(phoneNumber.toExponential(3))
// console.log(parseInt(phoneNumber)+50)
// console.log(parseFloat(phoneNumber)+20)

// let score = 83
// console.log(Math.PI)
// console.log(Math.SQRT1_2)
// console.log(Math.ceil(346.3))
// console.log(Math.min (23, 12, 5, 21, 85, 4))
// console.log(Math.max (34, 16, 89, 75, 90, 92, 64))
// console.log(Math.round (33.5))
// console.log (Math.random())

// let d = 53
// let e = 38

// console.log (d+e)
// console.log (d-e)
// console.log (d/e)
// console.log (d*e)
// console.log (d%e)

// console.log (d===e)
// console.log (d==e)
// console.log (d>e)
// console.log(d<e)
// console.log  (d>=e)
// console.log (d<=e)
// console.log (d!=e)

// let sandal = true
// let textbook = false
// let uniform = true

// console.log (uniform && textbook)
// console.log (uniform && textbook || sandal)
// console.log ( (!uniform))
// console.log ((!sandal))

// let i = 43
// let j = 24

// console.log (i++)
// console.log (i++)
// console.log (i++)
// console.log (i++)
// console.log (i++)
// console.log (i++)

// console.log (++i)

// console.log (--j)
// console.log (j--)
// console.log (j--)
// console.log (j--)
// console.log (j--)

// let age = 12
// let vote = (age >=18 ? "you can vote" : "you cannot vote")
// console.log (vote);

//  let k = parseInt(prompt ("Enter your first number"))
//  let l = parseInt(prompt("Enter your second number"))
// alert(k+l)

// alert ("Hello Everyone")
// let newAge = prompt("Enter your age")
// let newVote = newAge >=18 ? "you can vote" : "you cannot vote"

// alert(newVote)
// console.log (typeof newAge)
// console.log (newAge)

// let sCore = 45
// console.log ("this is the user ${sCore}")

// for (let m = 1; m <= 20; m++) {
// if (m %2 ===1){
//     console.log (m)
// }
// }

// for (let n = 1; n <= 20; n++) {
// console.log (n)
// }

// for (o=1; o<=20; o++){
//     if (o%2===0){
//         console.log (o)
//     }
// }

// for (let p = 1; p <= 20; p++) {
// if (p *2){
//     console.log (p)
// }
// }
// for (q = 1; q <= 20; q++){
//     for (r = 1; r <=12; r++){
//         let s = `${q} * ${r} = ${q*r}`;
//     console.log (s);

// }
// }

// const myFruits = ["apple", "banana", "kiwi", "watermelon", "orange", "pineapple", "coconut", "pear" 
    

// ]

// console.log (myFruits)
// console.log (myFruits[5])
//  myFruits.push("grapes")
// console.log (myFruits)
// myFruits.pop ()
// console.log(myFruits)
// myFruits.unshift("pawpaw")
// console.log (myFruits)
// myFruits.shift()
// console.log (myFruits)
// myFruits.splice(2, 3)
// console.log (myFruits)
 
// let num =  (1,3,6,4)


// console.log (myFruits.concat(num))

// let va = "samuel is a boy"
// console.log (va )

// console.log(myFruits.join("-"))

// console.log(myFruits.indexOf("coconut"))
// console.log(myFruits.includes("banana"))
// console.log(myFruits.sort())
// console.log(myFruits.reverse())

const myStudents = [
    {name: "bola", age: 22 , ms: "single" },
    {name: "irene", age: 25 , ms: "complicated" },
    {name: "grace", age: 32 , ms: "married" },
    {name: "mariam", age: 21 , ms: "married" },
    {name: "victory", age: 27 , ms: "25" },
    {name: "love", age: 29 , ms: ",married" },
    {name: "esther", age: 23 , ms: "single" },
    {name: "bushra", age: 19 , ms: "single" },
    {name: "edwin", age: 24 , ms: "single" },
    {name: "kachi", age: 28 , ms: "complicated" },
    {name: "favour", age: 20 , ms: "single" },
    {name: "tife", age: 21 , ms: "single" },
    {name: "karimot", age: 26 , ms: "complicated" },
]

// console.log (myStudents[5])
// myStudents.forEach((stdName, index)=>{
//     console.log(stdName.name)
    
// })

// myStudents.forEach(({name, age, ms}, index)=>{
//   console.log (name)
// })


// const names = myStudents.map((allData, index ) => {
//    return allData.name
// })
// console.log(names)

const olderStudents = myStudents.filter((students)=> {
       return students.age <  23
})
console.log (olderStudents);


// const students = myStudents.find 
 