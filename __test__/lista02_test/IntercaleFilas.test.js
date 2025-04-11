import IntercaleFilas from "../../src/lista02_src/IntercaleFilas";

let filaA = new IntercaleFilas;
let filaB = new IntercaleFilas;
let filaC = new IntercaleFilas;

it("É esperado que todas a filas inicialmente estejam vazias", () =>{
    expect(filaA.isEmptyA()).toBe(true);
    expect(filaB.isEmptyB()).toBe(true);
    expect(filaC.isEmpty()).toBe(true);
})

it("É esperado que seja adicionado elementos as primeiras filas", () =>{
    filaA.enqueueA(1);
    filaA.enqueueA(3);
    filaB.enqueueB(2);
    filaB.enqueueB(4);
})

it("É esperado que função adicione os elementos de forma intercalada, a 3ª fila", () =>{
    intercalandoFilas(filaA,filaB);
})

function intercalandoFilas(obj1, obj2){
    filaC.funcao(obj1, obj2);
}