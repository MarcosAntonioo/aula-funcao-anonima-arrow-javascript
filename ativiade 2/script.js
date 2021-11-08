// Questão 1 

var multiplos = (valor) => {
    if((valor % 3) ==0 && (valor % 5) == 0){
        console.log("JAVASCRIPT");
    }else if((valor % 5 == 0)){
        console.log("Dale");
    }else if((valor % 3) == 0){
        console.log("Bora");
  }
}
multiplos(60);
// Questão 2

var signo = (dia,mes)=>{
    if((dia >= 20) && (mes =="janeiro") || (dia <= 18) && (mes =="fevereiro")){
        console.log("Aquário");
    }else if((dia >= 19) && (mes =="fevereiro") || (dia <= 20) && (mes =="março")){
        console.log("Peixes");
    }else if((dia >= 21) && (mes =="março") || (dia <= 20) && (mes =="abril")){
        console.log("Áries");
    }else if((dia >= 21) && (mes =="abril") || (dia <= 20) && (mes =="maio")){
        console.log("Touro");
    }else if((dia >= 21) && (mes =="maio") || (dia <= 21) && (mes =="junho")){
        console.log("Gêmeos");
    }else if((dia >= 21) && (mes =="junho") || (dia <= 22) && (mes =="julho")){
        console.log("Câncer");
    }else if((dia >= 23) && (mes =="julho") || (dia <= 22) && (mes =="agosto")){
        console.log("Leão");
    }else if((dia >= 23) && (mes =="agosto") || (dia <= 22) && (mes =="setembro")){
        console.log("Virgem");
    }else if((dia >= 23) && (mes =="setembro") || (dia <= 22) && (mes =="outubro")){
        console.log("Libra");
    }else if((dia >= 23) && (mes =="outubro") || (dia <= 21) && (mes =="novembro")){
        console.log("Escorpião");
    }else if((dia >= 22) && (mes =="novembro") || (dia <= 21) && (mes =="dezembro")){
        console.log("Sagitário");
    }else if((dia >= 22) && (mes =="dezembro") || (dia <= 19) && (mes =="janeiro")){
        console.log("Capricórnio");
    }
}
signo(22,"maio"); 
