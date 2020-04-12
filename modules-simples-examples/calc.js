//obrigatoriamente para voce chamar o module, eh necessario
// voce chamar o recurso/funcao do node require()


//variavel vira uma funcao
var sumFunc = require('./sum');
var subFunc = require('./sub');
var multFunc = require('./mult');

console.log(sumFunc(1, 2));
console.log(subFunc(10, 5));
console.log(multFunc(100, 10));

//Recurso otimo para refatorar/dividir e carregar bibliotecas
