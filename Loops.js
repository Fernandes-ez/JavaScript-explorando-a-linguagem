const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);
const idadeDoComprador = 15;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = 'Curitiba';

console.log('\nDestinos possíveis: \n'+listaDeDestinos);
const podeComprar = idadeDoComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;
while(contador <listaDeDestinos.length){
    if(listaDeDestinos[contador] == destino){
        console.log('Destino selecionado: '+listaDeDestinos[contador])
        destinoExiste = true
        break;
    }
    contador++;
}

if(podeComprar == true && destinoExiste == true){
    console.log('Boa viagem!')
}else{
    console.log('Desculpe, tivemos um problema.')
}