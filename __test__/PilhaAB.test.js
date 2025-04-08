//Duas pilhas A e B podem ser implementas a partir do compartilhamento do mesmo vetor de tamanho determinado, como apresentado na figura 
//a seguir. Escreva as seguintes funções em Javascript.
// Declarações de constantes e procedimento de inicializar as pilhas (os valores de topoA e topoB).
//ii. As funções ÉVaziaA e ÉVaziaB.
//iii. As funções empilhaA, empilhaB, desempilhaA e desempilhaB. 
// Só deve ser emitida uma mensagem de pilha cheia se todas as posições do vetor estiverem ocupadas.

import PilhaAB from "../src/PilhaAB.js";

let pilha = new PilhaAB(); 

it("É esperado que inicialmente as pilhas estejam vazias", () => {
    expect(pilha.isEmptyA()).toBe(true);
    expect(pilha.isEmptyB()).toBe(true);
});

it("Empilhando as pilhas", () => {
    empilhaA();
    empilhaB();
    expect(pilha.isEmptyA()).toBe(false);
    expect(pilha.isEmptyB()).toBe(false);
});

it("Desempilhando as pilhas", () => {
    desempilhaA();
    desempilhaB();
    expect(pilha.isEmptyA()).toBe(false); 
    expect(pilha.isEmptyB()).toBe(false); 
});

function empilhaA() {
    for (let i = 0; i < 4; i++) {
        pilha.pushA();
    }
}

function empilhaB() {
    for (let i = 0; i < 4; i++) {
        pilha.pushB();
    }
}

function desempilhaA() {
    pilha.popA();
}

function desempilhaB() {
    pilha.popB();
}