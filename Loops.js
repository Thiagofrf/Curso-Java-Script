console.log('Trabalhando com condicionais');

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);
const idadeComprador = 15; // Declarando variável para trabalhar com ela nos condicionais depois
const estaAcompanhada = true;
let passagemComprada = false;
const destino = "São Paulo";
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false;

while(contador < 3){
    console.log(listaDeDestinos[contador]);
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    } else {
        console.log("Destino náo existe")
        destinoExiste = false;
    }
    contador += 1;
}

console.log("Destino existe? ", destinoExiste)

    



 