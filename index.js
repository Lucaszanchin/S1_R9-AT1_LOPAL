const prompt = require('prompt-sync')();
const fs = require('fs');

let nomes = [];
let enderecos = [];
let tipos = [];
let custos = [];
let continuar = true;
let i = 0; 
let historico;

console.log('\n=== Resumo Final ===');
console.log('Total de entregas:', totalEntregas);
console.log('Custo total: R$ ' + custoTotal.toFixed(2));
console.log('Média por entrega: R$ ' + media.toFixed(2));

historico = 'Histórico de Entregas:\n';
for (let j = 0; j < totalEntregas; j++) {
    historico += `Cliente: ${nomes[j]}, Endereço: ${enderecos[j]}, Tipo: ${tipos[j]}, Custo: R$ ${custos[j].toFixed(2)}\n`;
}
historico += `\nTotal de entregas: ${totalEntregas}\nCusto total: R$ ${custoTotal.toFixed(2)}\nMédia: R$ ${media.toFixed(2)}\n`;

fs.writeFileSync('historico_entregas.txt', historico);
console.log('\nHistórico salvo no arquivo historico_entregas.txt');




