const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente', {
    nome: String,
    sobreNome: String
});

module.exports = Cliente;