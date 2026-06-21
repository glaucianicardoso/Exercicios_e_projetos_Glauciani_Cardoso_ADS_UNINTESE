let numero = 4; // número escolhido para calcular o fatorial
let fatorial = 1; // variável que acumula o resultado

for (let i = numero; i >= 1; i--) {
    // loop que começa no número e vai até 1

    fatorial = fatorial * i; // multiplica o valor atual pelo contador
}

console.log(fatorial); // mostra o resultado final