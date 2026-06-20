let limite = 28; // criei uma variável para guardar o número final da contagem

for (let i = 1; i <= limite; i++) {
    // o loop se repete enquanto i for menor ou igual ao valor de limite

    if (i % 2 === 0) {
        // verifica se o número é par (resto da divisão por 2 é 0)

        console.log(i); // mostra apenas os números pares no console
    }
}