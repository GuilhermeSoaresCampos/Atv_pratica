let teclado = require (`prompt-sync`)();

let idade: number = 0;
let salario: number = 0;
let tot_pess: number = 0;
let n_pess: number = 0;

do{

    idade = parseFloat(teclado(`Digite a idade do funcionario`))
    salario = parseFloat(teclado(`Digite o salário do funcionario`))
    if(idade<30 && salario>3000){

        tot_pess++;
        n_pess++;
    }
    else{
        n_pess++;
    }
}while(n_pess <= 50)
    console.log(`O total de pessoas é ${tot_pess}`);