//QUESTÃO 8. Imagine que você tem um conjunto de pratos empilhados. No entanto, por questões de organização, 
//cada pilha só pode conter um número máximo capacidade de pratos. Se uma pilha atingir essa capacidade, uma nova pilha é criada.

//Implemente uma estrutura de dados PilhaDePratos que suporte as operações:
//empilha(int x): Adiciona um prato à última pilha disponível ou cria uma nova pilha, se necessário.
//desempilha(): Remove um prato da última pilha disponível e retorna seu valor. Se todas as pilhas estiverem vazias, retorne None.

import PilhaDePratos from "../src/PilhaDePratos.js";

let pratos;

beforeEach(() => {
    pratos = new PilhaDePratos(3);
});

test("Empilha corretamente e cria nova pilha quando necessário", () => {
    pratos.push(5);
    pratos.push(10);
    pratos.push(15);
    pratos.push(20); 

    expect(pratos.pop()).toBe(20); 
    expect(pratos.pop()).toBe(15); 
});

test("Retorna null ao desempilhar uma pilha vazia", () => {
    expect(pratos.pop()).toBe(null);
});