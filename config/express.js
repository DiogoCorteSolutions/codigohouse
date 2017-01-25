var app = require('express')();
app.set('view engine','ejs');

module.exports = function() {
    console.log("Teste modulo carregando");
    return app;
}