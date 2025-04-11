//QUESTÃO 2: Implemente uma fila usando a implementação duas pilhas básicas.

import FilaPilhas from "../../src/lista02_src/FilaPilhas";

let filapilhas = new FilaPilhas;

it("É esperado que inicialmente as pilhas estejam vazias",() =>{
    expect(filapilhas.isEmpty1()).toBe(true);
    expect(filapilhas.isEmpty2()).toBe(true);
})

it("É esperado que inicialmente as filas também esteja vazia", () =>{
    expect(filapilhas.isEmpty()).toBe(true);
})

it("É esperado que a fila esteja sendo implementada, através das pilhas", () =>{
    implementando();
})

function implementando(){
    filapilhas.pushPilhas();
    filapilhas.enqueueFila(); 
}

