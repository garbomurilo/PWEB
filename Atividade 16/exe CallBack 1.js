const prompt = require('prompt-sync')();
function saudacao(nome){
    console.log('OI '+ nome);
}
function entradaNome(callback){
    let nome = prompt(' Digite seu nome ');
    callback(nome); // chamando func callback(saudacao)
}
entradaNome(saudacao);
//obtem nome de usuario e em seguida roda a func callback entradaNome
