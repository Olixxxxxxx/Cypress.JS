
const PlusTwoNumbers = function(){
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
PlusTwoNumbers()