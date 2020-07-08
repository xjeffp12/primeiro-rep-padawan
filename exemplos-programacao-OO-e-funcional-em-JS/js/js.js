function sejaBemVindo(){
    console.log("Seja bem vindo a Formação JavaScript");
}

console.log("chamando a função seja bem vindo sejaBemVindo()");
sejaBemVindo();

//POO
var objAluno = {
    nome: "Jefersson Pereira",
    curso: "T.I",
    mistraAula: function(){
        console.log("Ministrando aula de JavaScript");
    }
};

console.log("acessano propriedade do objeto objAluno.nome");
console.log(objAluno.nome);
console.log(objAluno.curso);
console.log(objAluno.mistraAula);