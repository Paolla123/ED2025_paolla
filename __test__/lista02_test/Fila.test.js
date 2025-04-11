//QUESTÃO 6. Implemente uma função que dada uma fila, seja retornada a versão reversa dessa fila. A função deve ser recursiva.

import Fila from "../../src/lista02_src/Fila";

it("É esperado que a fila esteja inicialmente vazia", () => {
    const fila = new Fila(10);
    expect(fila.isEmpty()).toBe(true);
});

it("É esperado que a função execute as operações corretamente na fila", () => {
    const fila = new Fila(10);
    const resultado = testarFilaOperacoes(fila);

    expect(resultado.lista).toEqual([20, 10]);

    expect(resultado.primeiro).toBe(20);

    expect(resultado.removido).toBe(30);

    expect(resultado.vazia).toBe(false);
});

function testarFilaOperacoes(filaInstance) {

    filaInstance.enqueue(10);
    filaInstance.enqueue(20);
    filaInstance.enqueue(30);

    filaInstance.reverseQueueRecursively(filaInstance);

    const removido = filaInstance.dequeue();

    return {
        lista: filaInstance.listarFila(),
        primeiro: filaInstance.front(),
        removido,
        vazia: filaInstance.isEmpty(),
    };
}