console.log('Trabalhando com listas');


// O trecho de código abaixo não é uma boa prática, pois fazemos muitas linhas desnecessárias e alocamos espaços para várias variáveis desnecessárias. Tronamos trabalhoso um processo simples.

const salvador = 'Salvador';
const saoPaulo = 'São Paulo'; 
const rioDeJaneiro = 'Rio de Janeiro';

console.log('Destinos possíveis: ', salvador, saoPaulo, rioDeJaneiro)


// O trecho de código abaixo mostra a maneira correta e simples de fazer o mesmo que fizemos acima. 

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

console.log("Destinos possíveis (array): ", listaDeDestinos);

// Comando para adicionar itens dentro do meu array 

listaDeDestinos.push('Curitiba');
console.log("Destinos possíveis (array): ", listaDeDestinos);

// Comando para retirar itens do meu array 

listaDeDestinos.splice(1, 1) //Estou apagando o item na posição 1 (Arrays começam na posição 0) e quero apagar só 1 item.
console.log("Destinos possíveis (array): ", listaDeDestinos);

//Comando para exibir apenas um item da lista / Dois itens

console.log("Meu destino: ", listaDeDestinos[1])
console.log("Meu destino: ", listaDeDestinos[1], listaDeDestinos[0])
