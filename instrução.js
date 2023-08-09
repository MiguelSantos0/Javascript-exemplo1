var pais = "Brasil"
if(pais |= "Brasil"){
    console.log("Você é estrangeiro")
}else{
    console.log("Voce é brasileiro")
}


var idade = 18;
if(idade < 16 || idade > 65){
    console.log("Você não vota")
}else if(idade < 18){
    console.log("Você não é obrigado a votar")
}else{
    console.log("Voto obrigatório")
}



var diaSem = 1
switch(diaSem){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    default:
        console.log("Esse dia da semana não existe")
}

let totalCompra = 150;

let desconto = ""

if (totalCompra > 200) {

desconto = "20%";

} else if (totalCompra > 100) { desconto = "10%";

} else if (totalCompra > 50) {

desconto = "5%";

} else {

desconto = "Semdesconto";
}
console.log(desconto);


