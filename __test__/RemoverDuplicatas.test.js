//QUESTÃO 7. Dada uma pilha contendo números inteiros, implemente uma função que remova todos os elementos duplicados, 
// mantendo apenas a primeira ocorrência de cada número (mais próxima do topo). 
// A solução deve preservar a ordem relativa dos elementos originais.

import RemoverDuplicatas from "../src/RemoverDuplicatas.js";

function removerDuplicatas(pilhaOriginal) {
    const pilha = new RemoverDuplicatas(pilhaOriginal);
    return pilha.removerDuplicatas();
}

it("Remove duplicatas mantendo a primeira ocorrência", () => {
    expect(removerDuplicatas([3, 7, 3, 2, 7, 1, 4, 2]));
});

it("Remove duplicatas mantendo a ordem relativa", () => {
    expect(removerDuplicatas([5, 2, 5, 3, 2, 1]));
});

it("Retorna a mesma pilha quando não há duplicatas", () => {
    expect(removerDuplicatas([8, 6, 4, 2]));
})