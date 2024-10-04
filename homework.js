/*const states = new Array("Srbija", "Hrvatska", "Crna Gora", ["Arizona", "New York", "California"])
for(i = 0; i < states.length;i++){
    if (Array.isArray(states[i])){
        states[i].forEach((state) => {
        console.log(state)})
    }
}*/

// let state = 'Italy'
// let StateCode
// switch (state){
//     case 'Great Britain':
//         StateCode = 'UK'
//         break
//     case 'Italy':
//         StateCode = 'IT'
//         break
//     case 'Austria':
//         StateCode = 'AT'
//         break
//     case 'Germany':
//         StateCode = 'DE' 
//         break   
//     case 'Denmark':
//         StateCode = 'DK'
//         break
//     default:
//         StateCode = 'Not Found'
// }
// console.log(StateCode)


// const autopark = [
//     {name: 'car1.1', age: 7},
//     {name: 'car2.2', age: 9},
//     {name: 'car3.3', age: 15},
//     function(){
//     let TotalAge = 0
//     for(i = 0; i < autopark.length - 1; i++) {
//         TotalAge += autopark[i].age
//         }
//         return (TotalAge/(autopark.length - 1)).toFixed(1)
//     }
// ]
//  console.log(`Autopark AVG Age = ${autopark[3]()}`)

//  const Airplanes = [
//     {name : 'airplane1', age: 10},
//     {name : 'airplane2', age: 15},
//     {name : 'airplane3', age: 20},
//     {name : 'airplane4', age: 25},
//     function(){
//         let Totalage = 0
//         for(i = 0; i < Airplanes.length - 1; i++){
//         Totalage += Airplanes[i].age
//         }
//         return ((Totalage / (Airplanes.length - 1 ))).toFixed(1)
//     }
//  ]
//  console.log(`Airplane AVG Age = ${Airplanes[4]()}`)

// const Person = {
//     name : 'Nikolas',
//     age : 35,
//     gender : 'male',
//     MyData : function(){
//         return "My name is " + this.name + " I'm " + this.age  + " years old"
//     }
// }

// const Student = {
//     MainData : Person,
//     grade : 5,
//     school : 'NY High School'
// }

// const Worker = {
//     MainData : Person,
//     company : 'Epam',
//     salary : 3000,
//     experience : 7,
//     education : Student.school,
//     MyData : function(){
//         return "My name is " + this.MainData.name + " my working experiense in " + this.company + " is " + this.experience + " years"
//     }
// }

// const Sportsman = {
//     name : Person.name,
//     age : Person.age,
//     gender : Person.gender,
//     height : 1.84,
//     weight : 97,
//     sport : 'box',
//     workingPlace : Worker.company,
//     education : Student.school,
//     IMG : function(){
//      return (this.weight / (this.height**2)).toFixed(2)
//     }
// }
// console.log(Worker.MyData())
//let cars = new Array()
// const autopark = {
//     cars : [{name: 'car1.1', age: 7},{name: 'car2.2', age: 9},{name: 'car3.3', age: 15}],
//     buses : [{name: 'bus1.1', age: 6},{name: 'bus2.2', age: 8},{name: 'bus3.3', age: 5}],
//     airplanes : [{name: 'airplane1.1', age: 3},{name: 'airplane2.2', age: 11},{name: 'airplane3.3', age: 3}],
//     avgAge(type){
//             let TotalAge = 0
//             for(i = 0; i < type.length - 1; i++) {
//                 TotalAge += type[i].age
//                 }
//                 return (TotalAge/(type.length - 1)).toFixed(1)
//             }
//     }

//  console.log(autopark.avgAge(autopark.airplanes))
//Homework Objects Constructors
function Books2015(name, author, genre){
    this.name = name
    this.author = author
    this.year = 2015
    this.genre = genre
}
const newBook = new Books2015("River","J.Jackson","triller")
newBook.language = "English"
newBook.age = function(){
    let currentyear = new Date().getFullYear()
    return `This book is ${currentyear - this.year} years old`
}
console.log(newBook.age())
//console.log(newBook)