const promptSync = require('prompt-sync')();
const fs = require('fs');
const PromptSync = require('prompt-sync');

let nomes = [];
let enderecos = [];
let tipos = [];
let custos = [];
let continuar = true;
let i = 0; 
let distancia = 0;
let valorKm = 0; 
let custo = 0;
let tipo;

while (continuar) {

    distancia = parseFloat(PromptSync('Qual a distância em Quilômetros? '));
    valorKm = parseFloat(PromptSync('Qual o valor cobrado em Quilômetros? '));
    tipo = PromptSync('Qual o tipo de entrega (normal ou urgente)? ');

    custo = distancia * valorKm;

    if (tipo === 'urgente' || tipo === 'URGENTE' || tipo === 'Urgente') {
        custo *= 1.2;
    }

    tipos[i] = tipo;
    custos[i] = custo;

    console.log('\n--- Resumo da Entrega ---');
    console.log('Tipo:', tipo);
    console.log('Custo: R$ ' + custo.toFixed(2));

}
    i++; 
