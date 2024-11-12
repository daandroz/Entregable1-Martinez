let randomNumber = (Math.random()*100);
console.log(randomNumber)
let roundRandomNumber = Math.floor(randomNumber)
console.log(roundRandomNumber)

let user= prompt("ingresa un numero")
console.log(user)

//en este caso se puede usar el rango de 0 a 100
//rango para piedra 0 a 33 (non inclusive)
//rango para papel 33 (inclusive) a 66 (non inclusive)
//rango para tijera 66 (inclusive) a 100 (inclusive)