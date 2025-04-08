//QUESTÃO 3. Implemente uma função que troca de lugar o elemento que está no topo da pilha 
//com o elemento que está na base da pilha. Usar apenas uma pilha como auxiliar.


import Troca_element from "../src/Troca_element";

let pilhaP = new Troca_element;
let pilhaA = new Troca_element;

it("É esperado que inicialmente as duas pilhas, estejam vazias", () =>{
    expect(pilhaP.isEmptyP()).toBe(true);
    expect(pilhaA.isEmptyA()).toBe(true);
})

it("É esperado que a função de trocar elementos de uma pilha esteja funcionando", () => {
    TrocaDeElementos();
});

function TrocaDeElementos(){
    pilhaP.pushP();//teoricamente está chamando o metodo e ele esta incrementando o objeto pilhaP
    pilhaA.pushA();//teoricamente a pilha auxiliar esta recebendo todos os valores da pilha Principal(pilhaP) de forma inversa 
    
    pilhaP.pushP2();//Aqui está sendo feito todo o algoritimo de devolver os valores para a pilha Principal só que de forma organizada e com os valores corretos

}

//tive que escrever alguns comentarios nessa questão pq meu raciocinio tava saindo meio complexo, em vez de simplicar 