function verificacaoDeDados (a,b,c,d) {
    
    if (a <= 0 || b <= 0 || c <= 0 || d <= 0) {
        return(a);
    } else if  (a > 10 || b > 10 || c > 10 || d > 10) {
        return(a);
    } else if ( a === "string" || b === "string" || c === "string"  || d === "string" ) {
        alert("Por favor, só digite numeros, não textos");
    }
}

function matematicaERedacaoPeso (a) {
    b = a * 3;
    return (b)
}

function portuguesECienciasPeso(c) {
    d = c * 2
    return(d)
}

function notaTotalPeso(a,b,c,d) {
    f = (a + b + c + d)/10
    return(f)
}

function resultado(a) {
    
    if(a => 7) {
        alert("Passou, a sua nota foi " + a);
    } else {
        alert("Não Passou, a sua nota foi " + a);
        b = 7 - a;
        alert("Faltou exatamente " + b + " para passar");
    }
}

let matematica = prompt("Digite aqui a sua nota em matematica");
let portugues = prompt("Digite aqui a sua nota em Portugues");
let ciencia = prompt("Digite aqui a sua nota em Ciencia");
let redacao = prompt("Digite aqui a sua nota em Redação");

let resultadoDaVerificacao = verificacaoDeDados (matematica,portugues,ciencia,redacao);

if(resultadoDaVerificacao == matematica) {
    alert("Por favor, digite numeros maior que 0 e menor ou igual a 10");
} else {

let matematicaComPeso = matematicaERedacaoPeso (matematica);
let redacaoComPeso = matematicaERedacaoPeso (redacao);
let portuguesComPeso = portuguesECienciasPeso (portugues);
let cienciaComPeso = portuguesECienciasPeso (ciencia);

let notaTotal = notaTotalPeso (matematicaComPeso,portuguesComPeso,redacaoComPeso,cienciaComPeso);

resultado (notaTotal);

}
