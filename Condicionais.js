const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);
const idadeDoComprador = 15;
const estaAcompanhado = true;
const temPassagemComprada = true;

if (idadeDoComprador >= 18 || estaAcompanhado == true) {
    console.log('Pode realizar a compra');
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos)
} else{
    console.log('Não pode comprar por ser menor de idade')
    console.log(listaDeDestinos)
}

console.log('Embarque: \n \n')
if(idadeDoComprador >= 18 || estaAcompanhado == true && temPassagemComprada == true){
    console.log('Boa viagem!')
}else{
    console.log('Não pode embarcar!')
}
