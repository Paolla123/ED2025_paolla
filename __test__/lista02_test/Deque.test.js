//QUESTÃO 5: Uma fila duplamente terminada (abreviada como Deque, do inglês double ended queue) é um tipo de dado abstrato que generaliza 
// uma fila, para a qual os elementos podem ser adicionados ou removidos da frente (cabeça) ou de trás (cauda). 
// Sobre o Deque realize as seguintes implementações utilizando a linguagem de programação Javascript.

//i.Implemente a função para instanciar e inicializar um Deque. (0,5)
//ii. Implemente a função de inserir no início de um Deque. (0,5)
//iii. Implemente a função de remover do início de um Deque. (0,5)
import Deque from "../../src/lista02_src/Deque";

const deque = new Deque(8);

// Teste: Verificar se o deque está inicialmente vazio
it("É esperado que inicialmente o deque esteja vazio", () => {
    expect(deque.isEmpty()).toBe(true);
});

// Teste: Verificar se o deque não está cheio no início
it("É esperado que o deque não esteja cheio no início", () => {
    expect(deque.isFull()).toBe(false);
});

// Teste: Inserções na frente
it("É esperado que valores sejam inseridos corretamente na frente", () => {
    deque.insertFront(10);
    deque.insertFront(20);
    expect(deque.getFront()).toBe(20);
});

// Teste: Inserções no fim
it("É esperado que valores sejam inseridos corretamente no fim", () => {
    deque.insertRear(30);
    deque.insertRear(40);
    expect(deque.getRear()).toBe(40);
});

// Teste: Remoções na frente
it("É esperado que valores sejam removidos corretamente da frente", () => {
    deque.insertFront(10);
    deque.insertFront(20);
    expect(deque.deleteFront()).toBe(20);
});

// Teste: Remoções no fim
it("É esperado que valores sejam removidos corretamente do fim", () => {
    deque.insertRear(30);
    deque.insertRear(40);
    expect(deque.deleteRear()).toBe(40);
});

// Teste: Verificar se o deque está vazio após esvaziá-lo
it("É esperado que o deque esteja vazio após esvaziá-lo", () => {
    deque.insertFront(10);
    deque.insertRear(30);
    while (!deque.isEmpty()) {
        deque.deleteFront();
    }
    expect(deque.isEmpty()).toBe(true);
});