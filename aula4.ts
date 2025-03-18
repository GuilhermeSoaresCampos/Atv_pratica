let teclado = require (`prompt-sync`)();

let celsius: number = parseInt(teclado(`Insira a temperatura em Graus Celsius`));
let fahrenheit: number = (celsius * 9/5) + 32;

console.log(`A temperatura de ${celsius}°C para Fahrenheit é ${fahrenheit} °F`);
