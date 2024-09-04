const readline = require('readline');

// Criação da interface readline para capturar a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para inverter a string
function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

// Função para capturar a entrada do usuário
rl.question('Informe uma string: ', (input) => {
    const stringInvertida = inverterString(input);
    console.log(`A string invertida é: ${stringInvertida}`);
    rl.close(); // Fecha a interface readline
});
