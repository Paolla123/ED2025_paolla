//QUESTÃO 5. É possível analisar se uma sequência parêntesis e colchetes está bem-formada, ou seja, 
// parênteses e colchetes são fechados na ordem inversa àquela em que foram abertos utilizando uma pilha. 
// Por exemplo, a sequência [ ( ) [ ( ) ] ] ( ) está bem-formada, enquanto ( ( ) ] está malformada. 
// Implemente um programa que recebe um texto e analisa se ele está bem formado em termos de ordem de parêntesis e colchetes.

import Programa_caracteres from "../src/Programa_caracteres.js";

it("Expressão [()] deve estar bem formada", () => {
    expect(Programa("[()]")).toBe(true);
});

it("Expressão ()[] deve estar bem formada", () => {
    expect(Programa("()[]")).toBe(true);
});

it("Expressão ([)] deve estar mal formada", () => {
    expect(Programa("([)]")).toBe(false);
});

function Programa(expressao) {
    const pilha = new Programa_caracteres();

    for (let i = 0; i < expressao.length; i++) {
        const caractere = expressao[i];

        if (caractere === '(' || caractere === '[') {
            pilha.push(caractere);
        } else if (caractere === ')') {
            if (pilha.isEmpty() || pilha.pop() !== '(') {
                return false;
            }
        } else if (caractere === ']') {
            if (pilha.isEmpty() || pilha.pop() !== '[') {
                return false;
            }
        }
    }

    return pilha.isEmpty();
}