/* Calculo do Fibonacci */

const num = prompt("Digite um numero inteiro para calcular o fibonacci")

let somaFibonacci = 0;
let anteriorFibonacci = 0;
let proximoFibonacci = 1;

for (let i = 0; i < num; i++) {

    if (i == 5) {
        continue
    }

    if (i == 10) {
        break
    }

    somaFibonacci = anteriorFibonacci + proximoFibonacci;
    anteriorFibonacci = proximoFibonacci;
    proximoFibonacci = somaFibonacci;
    console.log("Fibonacci de " + i + ":" + anteriorFibonacci);

}

let numeroInicial = 0;
let numeroSomatoria = 0;
let numeroProximo = 1;

while (numeroInicial < 50) {
    numeroSomatoria = numeroInicial + numeroProximo;
    numeroInicial = numeroProximo;
    numeroProximo = numeroSomatoria;
    console.log("O fibonacci é " + numeroInicial);
}