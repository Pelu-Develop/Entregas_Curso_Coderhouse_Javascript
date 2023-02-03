// Abre uma caixa de dialogo para o usuario digitar um dado, no caso o dado vai ser amarzenado na primeiro_nome
// prompt sempre vai devolver uma string
let primeiro_nome = prompt("Digie o seu primeiro nome: ");

let sobrenome = prompt("Agora digite o seu sobrenome: ");

//Como estamos trabalhando com 2 strings, iremos concatenar as duas nessa operação 
//Resultado da concatenação das variaveis vai ser a variavel nome_completo
let nome_completo = primeiro_nome + " " + sobrenome;

// Escreve no console o que estar no parentese/ no caso o variavel nome_completo
console.log("Ola, seja bem vindo(a)" + nome_completo);

//Cria uma aleta na pagina/no caso vai aparecer a variavel nome_completo
alert("Ola, seja bem vindo(a)" + nome_completo);

let idade = prompt("Digite agora a sua idade: ")

// Tranforma uma variavel em forma de string em numero mesmo
// No cas tranforma a variavel idade que é uma string para um numero normal para a variavel idade_transformada
// Tambem pode ser feito dessa maneira -> let idade = parseInt(prompt("Digite agora a sua idade: "))
let idade_transformada = parseInt(idade);

let dias_ano = 365;

// Neste caso, estamos fazendo uma multiplicação de numeros.
let dias_vividos = idade_transformada * dias_ano;

console.log("A quantidade de dias que vc viveu com base a sua idade é: " + "   " + dias_vividos);

alert("A quantidade de dias que vc viveu com base a sua idade é:" + "    " + dias_vividos);

//Variavel que não pode ser alterado/ No caso a variavel genero não pode ser mais alterada por outra função.
const genero = "Masculino";
console.log(genero);
alert(genero)

