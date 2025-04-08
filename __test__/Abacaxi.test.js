//QUESTÃO 1: (ENADE 2014, Adaptada) Uma estrutura de dados do tipo pilha pode ser usada em um algoritmo 
// que permite imprimir uma palavra de forma invertida. Por exemplo, ABACAXI deve ser impresso IXACABA. 
// Utilizando uma pilha e suas operações base, desenvolva a função inverte que recebe uma String e, utilizando as funções push e pop da pilha,
// retorne a palavra de forma invertida.

import Abacaxi from "../src/Abacaxi.js";

test("Invertendo a String", () =>{
    function inverterString(abcx){

        let A = new Abacaxi();

        for(let i = 0; i<abcx.length; i++){
            A.push(abcx[i]);
        }

        let invertida = '';

        while(!A.isEmpty()){
            invertida += A.pop();
        }
        return invertida;
    }

    expect(inverterString('ABACAXI')).toBe('IXACABA');

})