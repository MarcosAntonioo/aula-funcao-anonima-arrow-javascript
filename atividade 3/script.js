// Questão 1

var idade = function(){
    let nota = [
        {candidato: "Renato Soares",nota: 7.8, idade: 29},
        {candidato: "Marcos Teixeira",nota: 7.8, idade: 26},
        {candidato: "Priscila Gomes",nota: 7.8, idade: 30},
        {candidato: "João Oliveira",nota: 7.8, idade: 27},
        {candidato: "Adriana Telles",nota: 7.8, idade: 28}
    ];

    for(let i = 0; i < nota.length; i++){
        if((nota[i].idade >=28) && (nota[i].idade <=30)){
            console.log(aprovados[i].candidato);
        }
    }   
}
idade(); 