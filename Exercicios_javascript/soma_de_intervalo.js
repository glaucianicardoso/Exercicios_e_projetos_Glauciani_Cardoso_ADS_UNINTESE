let limite = 20; // criei uma variavel para guardar o número final do intervalo
let soma = 0; // criei outra variável que acumula o resultado

for (let i = 1; i <= limite; i++) {
    // loop de 1 até o valor de limite

    soma = soma + i; // adiciona o valor atual de i à soma acumulada
}

console.log(soma); // mostra o resultado final