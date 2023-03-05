 /* Nesse caso, o contrutor recebe as variavies */
 
 function pessoa (nome,idade,rua) {
    this.nome = nome,
    this.idade = idade,
    this.rua = rua
 }

 let pessoa1 = new pessoa ("Pedro", 26, "Rua passargda, 584, casa 07");
 let pessoa2 = new pessoa ("Gabrielle", 24, "Rua maria do reis silva, 648, casa 1");

 console.log(pessoa1);
 console.log(pessoa2);

 /* Abaixo agora, vai ser um construtor que vai receber as informações de um objeto */

 function costrutorDePessoa (qualquerCoisa) {
   this.nome = qualquerCoisa.nome,
   this.idade = qualquerCoisa.idade,
   this.rua = qualquerCoisa.rua
   this.printNome = function() {console.log("O nome dele é: " + qualquerCoisa.nome)}
}

let pessoa3 = new costrutorDePessoa ({nome: "Jozairton",idade: 55,rua: "Rua passargda, 584, casa 07"});
let pessoa4 = new costrutorDePessoa ({nome: "Melane",idade: 55,rua: "Rua passargda, 584, casa 07"});

console.log(pessoa3);
console.log(pessoa4);

pessoa3.printNome();
pessoa4.printNome();

/* A constante p vai passar por todas as propriedades do construtor */
for(const p in pessoa4) {
   console.log(p);
}

let nome = "Pedro";
let senha = "123"

 /* Class é o melhor maneira que criar objetos, pois é mais organizada */
class user {
   constructor(nome,senha){
      this.username = nome
      this.password = senha
   }
   printUsername() {
      console.log(this.username)
      console.log(this.password)
   }
}

const user1 = new user(nome,senha);
console.log(user1);
user1.printUsername();