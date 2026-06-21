let numero = 11; // variavel que guarda o número que será testado
let divisores = 0; // variavel contadora de divisores

for (let i = 1; i <= numero; i++) {
    // percorre de 1 até o próprio número

    if (numero % i === 0) {
        // verifica se i é divisor do número

        divisores++; // conta mais um divisor
    }
}

if (divisores === 2) {
    // se tiver só 2 divisores (1 e ele mesmo)

    console.log("É primo");
} else {
    console.log("Não é primo");
}