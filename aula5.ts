let teclado = require (`prompt-sync`)();

let fahrenheit: number = parseInt(teclado(`Digite a temperatura em Fahrenheit:`));
let celsius: number = (fahrenheit - 32) / (9/5);

console.log(`A temperatura de ${fahrenheit}°F para Graus Celsius é ${celsius}°C`);