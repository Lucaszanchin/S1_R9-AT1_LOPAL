const promptSync = require('prompt-sync')();
const fs = require('fs');

let nomes = [];
let enderecos = [];
let tipos = [];
let custos = [];
let continuar = true;
let i = 0;
let totalEntregas; 
let custoTotal;
let media; 


   // ======= PARTE 3 - Processamento dos Resultados =======

totalEntregas = i; 
custoTotal = 0;

for (let j = 0; j < totalEntregas; j++) {
    custoTotal += custos[j];
}

media = custoTotal / totalEntregas;
    
