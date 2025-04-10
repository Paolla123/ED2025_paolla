// QUESTÃO 1: Implemente uma pilha usando a implementação de duas filas básicas.

import PilhaFilas from "../../src/lista02_src/PilhaFilas";

let pilhafilas = new PilhaFilas;

it("É esperado que inicialmente as filas estejam vazias",() =>{
    expect(pilhafilas.isEmptyFila1()).toBe(true);
    expect(pilhafilas.isEmptyFila2()).toBe(true);
})

it("É esperado que inicialmente a pilha também esteja vazia", () =>{
    expect(pilhafilas.isEmpty()).toBe(true);
})

it("É esperado que a pilha esteja sendo implementada, através das filas", () =>{
    implementando();
})

function implementando(){
    pilhafilas.enqueueFilas();//aqui está sendo criado e implementado primeiro as filas
    pilhafilas.implementandoPilha(); //aqui está sendo feita toda a implementação da pilha, através das filas
}