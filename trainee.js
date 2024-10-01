
/*const PlusTwoNumbers = function(){
  let x = "2"
  let y = 10
  let z = x + y
  if (typeof(z) == "string"){
console.log(z)
} else {
    z = z + 2
    console.log(z)
  }
}
PlusTwoNumbers()*/

//const { ObjectUnsubscribedError } = require("rxjs");

//const students = ["John", "Marko", "Anton", "Milica", "Marchin"];
//const cars = ['Mercedes','Mitsubishi', 'Lanos']

//console.log(students)

//console.log(students[1])

//console.log(students.toString())

//console.log(students.lastIndexOf("Marko"))

//students.push("Steve")
//console.log(students.toString())
//console.log(students.length)

//students[6] = "Steve2"
//console.log(students.toString())
//console.log(students.length)

//console.log(students.length)
//students[12] = "Steve3"
// students[6] = "Steve2"
//console.log(students.toString())
//students.shift()
//students.unshift('Vasia')
//students.splice(4,1,'Roberto', 'Santiago')
//console.log(concat[students , cars])
//console.log(students.length)
//console.log(students[11])
// for(let i = 0; i < students.length; i++){
//     console.log(students[i])
//     expect(students[i]).to.be.a('Man')
// }

//students.forEach((student) => {
    //console.log(student)
//})


//const animals = new Array();

//console.log(animals)

//const devices = [];



//console.log(typeof students)

//const isArray =Array.isArray("students")

//console.log(isArray)

//const states = new Array("Srbija", "Hrvatska", "Crna Gora", ["Arizona", "New York", "California"]);

//console.log(states.length)



//console.log(students.length)
//console.log(students)
//delete students[2]

//console.log(students.length)
//console.log(students)

//console.log(students.pop())


//LESSON 4 (13.09.24)
// const students = ["John", "Marko", "Anton", "Milica", "Marko"];

// console.log("---------------------")

// for(let i = 0; i < students.length; i++){
//   console.log(students[i])
// }

// console.log("---------------------")

// students.forEach((student) => {
//   console.log(student)
// })

// console.log("---------------------")

// for(const student of students){
//   console.log(student)
// }

/*const fruitsPrices1 = [["apples", 500],["bananas", 300],["oranges", 200]]


console.log(fruitsPrices1 instanceof Array)

console.log(fruitsPrices1[0])  
console.log(fruitsPrices1[0][0]) 
console.log(fruitsPrices1[0][1])*/



// Create a Map
/*const fruitsPrices = new Map([
    ["apples", fruitsPrices1],
    ["bananas", 300],
    ["oranges", 200],
    ["oranges", 300],
    [1, "malina"]
  ]);
  console.log(fruitsPrices.get("kkkk"))  
  

console.log(typeof fruitsPrices)
console.log(fruitsPrices instanceof Map)

  fruitsPrices.set("arbuz", 444);
  console.log(fruitsPrices.get("apples"))
  console.log(fruitsPrices.get(1))


let message
let age = 44

if (age < 18) {
    message = "Not allowed";
    console.log(message)
}

if (age < 18) {
    message = "Not allowed";
    console.log(message)
}else{
    message = "Hello";
}

if (age < 18) {
    message = "Not allowed";
    console.log(message)
}else{
    message = "More than 18";
    console.log(message)
}

if (age < 18) {
    message = "Not allowed";
    console.log(message)
}else if (age >= 18 && age < 30) {
    message = "More  18 less  30";
    console.log(message)
}else {
    message = "More than 30";
    console.log(message)
}

let num = 9
let day
switch (age) {
    case age < 18:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default:
        day = "Ne nasel"
  }
  console.log(day)

switch(true) {
    case age < 18:
      console.log("<18")
      break;
    case age >= 18 && age < 30:
        console.log("hdello")
      break;
    default:
        console.log("> 30")
  }

  let state = "Italy"
IT, CA, ES

  //Homework use string in swicth block*/


 //**************************************************** OBJECTS *******************************************************
//  const car = {
//   type:"BMW", 
//   model:"525", 
//   color:"white",
//   doors: 5,
//   fuel: "petrol",
// };

// console.log(car)

// console.log(car.type)
// console.log(car.engine)

// car.engine = "V8"
// console.log(car.engine)
// console.log(car)

// console.log(car)

// const car2 = {
// type:"mercedes", 

// }

// //car = car2

// const dog = {}
// console.log(dog)
// dog.name = "Rex"
// dog.gender = "male"

// const dog2 = new Object()
// dog2.name = "Rex"
// dog2.gender = "male"
// console.log(dog2['name'])
// console.log(dog2.name)

// console.log(dog.name)
// console.log(dog["name"])

// let engine = 34

// const car3 = {
// type:"BMW", 
// model:"525", 
// color:"white",
// doors: 5,
// fuel: "petrol",
// engine: "V8",
// enginePower: "300 kw",

// engineData : function() {
// return this.engine + " " + this.enginePower + " " + this.fuel;
// }

// };

// console.log(car3.engineData())

// car3.onstock = true
// console.log(car3)

// const car4 = {
// basicCar : car3,
// salon: "leather"
// }

// console.log(car4)

// const car5= {
// basicCar : car3,
// salon: "velur"
// }

// const car6= {
// basicCar : car3,
// salon: "alkantra"
// }

// const car7= {
// basicCar : car3,
// salon: "tkan"
// }

// console.log(car5)

// console.log(car5.salon)

// console.log(car5.basicCar.color)

// console.log(car5.basicCar.engineData())

// const newCar = car5
// console.log(newCar.basicCar.color)

// car5.basicCar.color = "blue"
// console.log(newCar.basicCar.color)

// /*
// -----------  IMPORTANT -----------
// Objects are addressed by reference, not by value.
// Object newCar is not a copy of car5. The object newCar is car5.
// */

// newCar.basicCar.color = "red"
// console.log(newCar.basicCar.color)
// console.log(car5.basicCar.color)

// /*
// -----------  HOMEWORK -----------
// Person has name, age, gender
// Student has name, age, gender, grade, school
// Worker has name, age, gender, salary, company
// Sportsman has name, age, gender, height, weight, sport
// one print function for person
// one print function for others
// */

// /*
// -----------  HOMEWORK -----------
// TransportCompany - cars, airplans, buses //Masivi
// age
// averageAge for ebery type of vehicles
// */

// //{return}, clear{}

//**********************************************CONSTRUCTORS****************************************************************************************
const car = {
  type:"BMW", 
  model:"525", 
  color:"white",
  doors: 5,
  fuel: "petrol",
};

// console.log(car)


// for (let x in car) { // Вывестии все свойства обьекта
//   console.log(car[x])
// };

// цикл for...in, который перебирает свойства (ключи) объекта.
// В каждой итерации переменной x присваивается имя одного из ключей объекта.
// Например, если в текущей итерации x равно "type", то car[x] эквивалентно car["type"], что вернёт значение "BMW".
// Таким образом, этот цикл выводит в консоль значения всех свойств объекта car
//console.log(typeof car)

// const keys = Object.keys(car)
// const values =Object.values(car)

// console.log("keys[1] = " +keys[1])
// console.log("keys = " +keys)
// console.log("values[1] = " +values[1])

// // for (let x in car) {
// //     console.log(car[x])
// // };

// for (let [key, value] of Object.entries(car)) {
//   console.log("key = " +key, "value = " +value)
// }
// Object.entries() — это метод, который возвращает массив пар [ключ, значение] для каждого свойства объекта. 
// То есть он преобразует объект в массив массивов, где каждый внутренний массив содержит 
// два элемента: ключ и его соответствующее значение.



// console.log(car)
// let myString = JSON.stringify(car);
// console.log(myString)
// console.log(typeof myString)

// //   console.log(typeof myString)
// console.log(myString.startsWith('{"type"'))



// console.log(car)

// delete car.fuel
// console.log(car)

// delete car["doors"]
// console.log(car)

// //Constructor
function Avtobus(type, model, color, doors) {
  this.type = type;
  this.model = model;
  this.color = color;
  this.doors = doors;
}

const myCar = new Avtobus("BMW", "525", "Black", 4);
// console.log(myCar)
// console.log(typeof myCar)

// const olgaCar = new Avtobus("Mercedes", "GLC", "White", 5);
// console.log(olgaCar)

// function Cat(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Dog(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let nikita = new Cat("Nikita", 5);
// let john = new Dog("John", 3);

// console.log(nikita)
// console.log(john)

function Car2(type, model, color, doors) {
  this.type = type;
  this.model = model;
  this.color = color;
  this.doors = doors;
  this.country = "USSR";
}

 const mySecondCar = new Car2("BMW", "525", "Black", 4);
 console.log(mySecondCar)

myCar.year = 1986
console.log(myCar);

//   console.log(olgaCar)

function Car3(type, model, color, doors) {
  this.type = type;
  this.model = model;
  this.color = color;
  this.doors = doors;

  this.openTheWindow = function(side) {
      console.log("The " + side + " window is opening")
  }
}

 const myThirdCar = new Car3("BMW", "525", "Black", 4);
 myThirdCar.openTheWindow("left")