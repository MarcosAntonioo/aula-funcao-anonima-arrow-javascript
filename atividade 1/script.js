// Questão 1

var anonima = function() {
    var capitais = ["Maceió", "Salvador", "Fortaleza", "Recife", "Natal"];
    console.log (capitais.join().toLocaleUpperCase());
  }
  anonima();
// Questão 2

var numero = function() {
  for (var i = 100; i < 450; i++){
    if(i%2 == 0);
    console.log(i +" Par");
    i = i + 1
  }
}
numero();
// Questão 3

const strings= function(str, str2, str3, str4){
  let total = str + " " + str2 + " " + str3 + " " + str4
  console.log(total);
}
strings("É","hora","do","show"); 