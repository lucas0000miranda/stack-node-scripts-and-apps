// importa o module express
// retorna uma funcao que cria o express
// uso de const (constante) ao invez de var pela razao de esquecer e sobrescreve-la
const exepress = require('express');
// instancia o express
const app = exepress();

// Esse erro -> Cannot GET / , acontece pq nao ha nehuma rota na aplicacao
// Criando a rota
// Como SERVIDOR req eh oque vce recebe, e send eh o que voce envia devolta para o cliente
// O CLIENT eh que quem esta no NAVEGADOR

app.get('/', function (req, res) {
    res.send('Welcome, This is your stack Express application!');
});

app.get('/about', function (req, res) {
    res.send('About page');
});

app.get('/myblog', function (req, res) {
    res.send('My Blog Page');
});

//ROTAS COM PARAMETROS.
//pode fazer /hello?:name (porem name ha eh o valor, nao name=Lucas, ele eh Lucas)
app.get('/hello/:name', function (req, res) {
    res.send('Hello');
});

app.get('/hello/:name/:lastname', function (req, res) {
    res.send('Hello');
});

var test = [
    'augusto',
    'marcos',
    'milena',
    'joelma'
];

var elementw = test[0];

//pra pegar os dados do get
app.get('/employee/:name/:lastname', function (req, res) {
    res.send(req.params);
    console.log(test[0]);
});

//desenvolvendo MAIS sobre os paramentros e oq ta sendo requisitado, vc pode manipular
// de forma simples assim
//inclusive vc pode colocar tags HTML
app.get('/user/:name/:lastname/:function', function (req, res) {
    res.send('<h1>Welcome User'+' '+ req.params.name +' '+ req.params.lastname+'</h1>'+
        '<h2>Your Fucntion in this company is: '+' '+ req.params.function+'</h2>');
});

//OBS: Agora com o nodemon, voce nao reprecisa ficar desconectando e conectando
//novamente seu server, basta apenas executar o nodemon nome_do_app e pronto
// para instalar globalment: npm install nodemon -g

// EXIBINDO HTML (de um arquivo html)
//Ao invez de ser send, sera sendFile
// OBS: ESSA NAO E MANEIRA IDEAL PARA RENDERIZAR HTML, O CERTO EH IR POR UMA
// TEMPLATE ENGINE!
app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/templates/index.html');
});

app.get('/contact', function (req, res) {
   res.sendFile(__dirname+ "/templates/contact.html");
});

//criando um servidor com express
//Porem essa tera que ser a ultima linha do seu codigo, tera que codificar tudo acima, antes dela
// FUNCAO CALLBACK -> Sempre ocorre qnd um event eh disparado
// Para pegar o resultado dessa funcao, (no caso do liste) apenas fazer isso"
//app.listen(8081, function() {}); // obviamente voce tem q bolar a resposta
app.listen(8081, function() {
    console.log('Servidor rodando na url http://localhost:8081!');
});

