//qndo o module for do proprio node na ha necessidade de
// colocar o caminho do diretorio, so o nome do module mesmo
var http = require('http');

//lembrando que o javaScript chama functions com " . "
//Create Server apenas cria mensagem sem reposta
// para obter resposta, chamar funcao de CALLBACK do create server
http.createServer(function (req, res) {
    res.end('Welcome');
}).listen(8081);

console.log('O Servidor rodando!');
