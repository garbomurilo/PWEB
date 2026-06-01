const fs = require('fs'); // carregando módulo filesystem
const data = fs.readFileSync('textCityfileExe3.txt');
//a exec é bloqueada aqui até o arquivo ser lido
console.log(data.toString());
