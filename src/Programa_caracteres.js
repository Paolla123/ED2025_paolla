class Programa_caracteres{
    constructor() {
        this.pilha = [];
    }

    push(caractere) {
        this.pilha.push(caractere);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.pilha.pop();
        }
        return null;
    }

    top() {
        return this.pilha[this.pilha.length - 1];
    }

    isEmpty() {
        return this.pilha.length === 0;
    }

    limpar() {
        this.pilha = [];
    }

}
export default Programa_caracteres; 