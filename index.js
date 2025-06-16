const promptSync = require('prompt-sync')();
const fs = require('fs');

let nomes = [];
let enderecos = [];
let tipos = [];
let custos = [];
let continuar = true;
let i = 0; 
let nome;
let endereco;

while (continuar) {
    nome = prompt('Nome do cliente: ');
    endereco = prompt('Endereço do cliente: ');
   
    // Inserindo nos vetores
    nomes[i] = nome;
    enderecos[i] = endereco;
  
    console.log('\n--- Resumo da Entrega ---');
    console.log('Cliente:', nome);
    console.log('Endereço:', endereco);
}

    i++; // Avança o índice
