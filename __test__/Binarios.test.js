//QUESTÃO 4. Implemente um conversor de números decimais para binários utilizando uma pilha

import Binarios from "../src/Binarios.js";

let num_binarios = new Binarios; 

it("É esperado que inicialmente a pilha esteja vazia", () =>{
    expect(num_binarios.isEmpty()).toBe(true);
})

it("Convertendo numeros decimais para binarios", () =>{
    expect(conversor('13')).toBe('1101'); 
})

function conversor(dado){
    num_binarios.push(dado);
    return num_binarios.exibirBinario();
}
