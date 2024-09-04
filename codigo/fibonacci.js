const readline = require('readline');

// Criação da interface readline para capturar a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pertenceFibonacci(numero) {
    let a = 0, b = 1;
    while (b <= numero) {
        if (b === numero) {
            return true;
        }
        [a, b] = [b, a + b]; // Desestruturação para atualizar a e b
    }
    return false;
}

// Função para capturar a entrada do usuário
rl.question('Informe um número: ', (input) => {
    const numero = parseInt(input, 10);
    if (pertenceFibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
    }
    rl.close(); // Fecha a interface readline
});
