let teclado = require (`prompt-sync`)();

let n1: number = parseInt(teclado(`Digite o primeiro número: `));
let n2: number = parseInt(teclado(`Digite o segundo número: `));
let n3: number = parseInt(teclado(`Digite o terceiro número: `));
let n4: number = parseInt(teclado(`Digite o quarto número: `));
let n5: number = parseInt(teclado(`Digite o quinto número: `));
let n6: number = parseInt(teclado(`Digite o sexto número: `));
let n7: number = parseInt(teclado(`Digite o setimo número: `));
let n8: number = parseInt(teclado(`Digite o oitavo número: `));
let n9: number = parseInt(teclado(`Digite o nono número: `));
let n10: number = parseInt(teclado(`Digite o décimo número: `));


let media: number = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) /10;


console.log(`A média dos números são ${media}`);