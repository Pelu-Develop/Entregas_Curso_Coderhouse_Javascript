/* Niveis de desconto */
const descontoNivel1 = 0.05;
const descontoNivel2 = 0.10;
const descontoNivel3 = 0.15;
const descontoNivel4 = 0.25;
const descontoNivel5 = 0.40;

/* Desconto aplicado caso o usuario possua uma assinatura */
const descontoAssinatura = 0.05;

/* Usuario digita se possui uma assinatura ou não */
let assinante = prompt("Voce é assinante?Digite sim ou não");

/* Validando se o usuario digitou corretamente */
if(assinante != "sim" && assinante != "não") {
    alert("Por favor, ensira um valor valido, digite sim ou não");
} else {

/* Usuario digita o valor total das suas compras */
let valorTotal = prompt("Qual foi o valor da soma de todos os itens?");

/* Caso o usuario digitar um valor menor que 0, o sistema irar gerar um alert com o erro
Pergunta: quando eu coloquei esse if la embaixo como else, o programa não me retornou com esse erro */
if (valorTotal < 0) {
    alert("O valor total que foi adicionado invalido, digite um numero valido");
/* O if verifica se o valor é maior ou menor que 0 e menor que 150 e se o usuario é assinante ou não, caso sim, ele vai execultar a formula abaixo */
} else if( valorTotal >= 0, valorTotal < 150 && assinante == "sim") {
    valorDescontado = valorTotal - (valorTotal * (descontoNivel1 + descontoAssinatura));
    alert("O valor descontado é" + " " + valorDescontado);

} else if (valorTotal >= 0, valorTotal < 150 && assinante == "não") {
    valorDescontado = valorTotal - (valorTotal * descontoNivel1);
    alert("O valor descontado é" + " " + valorDescontado);

} else if (valorTotal >= 150, valorTotal < 300 && assinante == "sim") {
    valorDescontado = valorTotal - (valorTotal * (descontoNivel2 + descontoAssinatura));
    alert("O valor descontado é" + " " + valorDescontado);

} else if (valorTotal >= 150, valorTotal < 300 && assinante == "não") {
    valorDescontado = valorTotal - (valorTotal * descontoNivel2);
    alert("O valor descontado é" + " " + valorDescontado);

} else if (valorTotal >= 300, valorTotal < 600 && assinante == "sim") {
    valorDescontado = valorTotal - (valorTotal * (descontoNivel3 + descontoAssinatura));
    alert("O valor descontado é" + " " + valorDescontado);

} else if (valorTotal >= 300, valorTotal < 600 && assinante == "não") {
    valorDescontado = valorTotal - (valorTotal * descontoNivel3);
    alert("O valor descontado é" + " " + valorDescontado);

} else if (valorTotal >= 600, valorTotal < 1500 && assinante == "sim") {
    valorDescontado = valorTotal - (valorTotal * (descontoNivel4 + descontoAssinatura));
    alert("O valor descontado é" + " " + valorDescontado);

} else if (valorTotal >= 600, valorTotal < 1500 && assinante == "não") {
    valorDescontado = valorTotal - (valorTotal * descontoNivel4);
    alert("O valor descontado é" + " " + valorDescontado);

} else if (valorTotal >= 1500 && assinante == "sim") {
    valorDescontado = valorTotal - (valorTotal * (descontoNivel5 + descontoAssinatura));
    alert("O valor descontado é" + " " + valorDescontado);

} else if (valorTotal >= 1500 && assinante == "não") {
    valorDescontado = valorTotal - (valorTotal * descontoNivel5);
    alert("O valor descontado é" + " " + valorDescontado);
} 
}