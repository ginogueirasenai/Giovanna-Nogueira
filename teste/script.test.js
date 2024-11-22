// //Função para somar dois números
// function adicionar(a,b) {
//     return a+b;
// }

// //Função para calcular o dobro do número
// function calcularDobro(valor){
//     return valor*2;
// }

// //TESTE DE INTEGRAÇÃO
// describe("Teste de integração", function(){
//     it("Deve somar dois números e calcular o dobro", function(){
//         const resultadoSoma = adicionar(2,3);
//         const resultadoDobro = calcularDobro(resultadoSoma);
//         //Verifica se o dobro está correto
//         expect(resultadoDobro).toBe(10)
//     });

//     it("Deve calcular o dobro mesmo com números negativos", function(){
//         const resultadoSoma = adicionar(-2, -3);
//         const resultadoDobro = calcularDobro(resultadoSoma);
//         expect(resultadoDobro).toBe(-10);
//     });
// })

// //Função para concatenar duas partes de texto
// function concatenarTexto(parte1, parte2){
//     return parte1 + ' ' +parte2;
// }

// //Função para deixar os textos maisculos
// function converter(texto){
//     return texto.toUpperCase();
// }

// //TESTE
// describe("Segundo teste de integração", function(){
//     it("Deve juntar dois textos e deixar maiusculo", function(){
//         const texto = concatenarTexto("tudo", "bem");
//         const textoMaiusculo = converter(texto);
//         //Verifica se deu certo
//         expect(textoMaiusculo).toBe("TUDO BEM");
//     });
//     it("Deve lidar com string vazia", function(){
//         const texto = concatenarTexto("", "teste");
//         const textoMaiusculo = converter(texto);
//         expect(textoMaiusculo).toBe(" TESTE");
//     });
// });

//ATIVIDADES
// Exercício 1: Cálculo de Média
//Função para somar quatro notas
function somarNotas(nota1, nota2, nota3, nota4) {
    return nota1 + nota2 + nota3 + nota4;
}

// Função para calcular a média e determinar aprovação
function calcularMedia(somaDasNotas, quantidadeDeNotas) {
    const media = somaDasNotas / quantidadeDeNotas;
    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

//Teste de integração
describe("Teste de integração para Cálculo de Média", function() {
    it("Deve verificar se a soma de quatro notas está correta", function() {
        const soma = somarNotas(5, 7, 6, 8);
        expect(soma).toBe(26);
    });

    it("Deve calcular a média corretamente e aprovar o aluno", function() {
        const soma = somarNotas(7, 7, 7, 7);
        const resultado = calcularMedia(soma, 4);
        expect(resultado).toBe("Aprovado");
    });

    it("Deve calcular a média corretamente e reprovar o aluno", function() {
        const soma = somarNotas(4, 5, 6, 5);
        const resultado = calcularMedia(soma, 4);
        expect(resultado).toBe("Reprovado");
    });
});

// Exercício 2: Triplo do Número
// Função para multiplicar dois números
 function multiplicar(a, b) {
    return a * b;
}

// Função para calcular o triplo de um número
function calcularTriplo(valor) {
    return valor * 3;
}

//Teste de integração
describe("Teste de integração para Triplo do Número", function() {
    it("Deve multiplicar dois números positivos e calcular o triplo", function() {
        const produto = multiplicar(3, 4);
        const triplo = calcularTriplo(produto);
        expect(triplo).toBe(36);
    });

    it("Deve multiplicar dois números negativos e calcular o triplo", function() {
        const produto = multiplicar(-2, -3);
        const triplo = calcularTriplo(produto);
        expect(triplo).toBe(18);
    });

    it("Deve multiplicar um número positivo e um negativo e calcular o triplo", function() {
        const produto = multiplicar(3, -2);
        const triplo = calcularTriplo(produto);
        expect(triplo).toBe(-18);
    });
});

// Exercício 3: Cálculo de Desconto
// Função para calcular o desconto baseado no valor total
function calcularDesconto(valorTotal) {
    if (valorTotal <= 100) {
        return valorTotal * 0.05;
    } else if (valorTotal <= 500) {
        return valorTotal * 0.10;
    } else {
        return valorTotal * 0.15;
    }
}

// Função para aplicar o desconto ao valor total
function aplicarDesconto(valorTotal, desconto) {
    return valorTotal - desconto;
}

//Teste de integração
describe("Teste de integração para Cálculo de Desconto", function() {
    it("Deve aplicar corretamente o desconto de 5% para compras até R$ 100", function() {
        const desconto = calcularDesconto(100);
        const valorFinal = aplicarDesconto(100, desconto);
        expect(valorFinal).toBe(95);
    });

    it("Deve aplicar corretamente o desconto de 10% para compras entre R$ 101 e R$ 500", function() {
        const desconto = calcularDesconto(200);
        const valorFinal = aplicarDesconto(200, desconto);
        expect(valorFinal).toBe(180);
    });

    it("Deve aplicar corretamente o desconto de 15% para compras acima de R$ 500", function() {
        const desconto = calcularDesconto(600);
        const valorFinal = aplicarDesconto(600, desconto);
        expect(valorFinal).toBe(510);
    });
});





