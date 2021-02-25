console.log('Trabalhando com condicionais');

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);
console.log("Destinos possíveis (array): ", listaDeDestinos);


const idadeComprador = 15; // Declarando variável para trabalhar com ela nos condicionais depois

if(idadeComprador >= 18){ //Se o comprador tiver a idade maior ou igual a 18, ele poderá retirar um item da lista
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1, 1) //Estou apagando o item na posição 1 (Arrays começam na posição 0) e quero apagar só 1 item.
    console.log("Destinos possíveis (array): ", listaDeDestinos);
} else { // Aqui eu digo que caso a condição acima ( >= 18 ) não seja verdadeira, o sistema deve retornar a seguinte mensagem.
    console.log("Comprador menor de idade, portanto náo pode retirar um item da lista")
}

// No bloco de código abaixo, veremos qual o retorno dos operadores lógicos, os booleans true or false

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);


// Ifs encadeados

const estaAcompanhada = true;

// Maneira menos aconselhavel ->

// if(idadeComprador >= 18){ //Se o comprador tiver a idade maior ou igual a 18, ele poderá retirar um item da lista
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1) //Estou apagando o item na posição 1 (Arrays começam na posição 0) e quero apagar só 1 item.
//     console.log("Destinos possíveis (array): ", listaDeDestinos);
// } else { // Aqui eu digo que caso a condição acima ( >= 18 ) não seja verdadeira, o sistema deve retornar a seguinte mensagem.
//     if(estaAcompanhada){
//         console.log('O comprador esta acompanhado, entao pode retirar o item')
//     } else {
//         console.log("Comprador menor de idade e nao esta acompanhado, portanto náo pode retirar um item da lista ")
//     }
    
// }

//Maneira aconselhavel -> 

if(idadeComprador >= 18){ //Se o comprador tiver a idade maior ou igual a 18, ele poderá retirar um item da lista
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1, 1) //Estou apagando o item na posição 1 (Arrays começam na posição 0) e quero apagar só 1 item.
    console.log("Destinos possíveis (array): ", listaDeDestinos);
} else if (estaAcompanhada){
        console.log('O comprador esta acompanhado, entao pode retirar o item')
} else {
    console.log("Comprador menor de idade e nao esta acompanhado, portanto náo pode retirar um item da lista ")
}
    



