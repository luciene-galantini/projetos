const fs = require('fs');

// Função para ler os dados do arquivo JSON
function lerDadosJSON(caminho) {
    const dados = fs.readFileSync(caminho);
    return JSON.parse(dados);
}

// Função para calcular o faturamento
function calcularFaturamento(dados) {
    const faturamentos = dados.map(item => item.valor).filter(valor => valor > 0); // Ignorar faturamentos zero

    if (faturamentos.length === 0) {
        console.log("Não há dados de faturamento disponíveis.");
        return;
    }

    const menorFaturamento = Math.min(...faturamentos);
    const maiorFaturamento = Math.max(...faturamentos);
    const mediaFaturamento = faturamentos.reduce((acc, valor) => acc + valor, 0) / faturamentos.length;

    const diasAcimaDaMedia = faturamentos.filter(valor => valor > mediaFaturamento).length;

    console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);
}

// Caminho do arquivo JSON
const caminhoArquivo = './dados.json'; 

// Ler os dados e calcular o faturamento
const dadosFaturamento = lerDadosJSON(caminhoArquivo);
calcularFaturamento(dadosFaturamento);
