class Binarios {
    constructor() {
        this.pilha = [];
        this.topo = 0;
    }

    push(elemento) {
        let resto;
        while (elemento > 0) {
            resto = elemento % 2;
            this.pilha[this.topo] = resto; 
            this.topo++;
            elemento = Math.floor(elemento / 2);
        }
    }

    exibirBinario() {
        let binario = '';
        for (let i = this.topo - 1; i >= 0; i--) {
            binario += this.pilha[i];
        }
        return binario;
    }

    isEmpty() {
        return this.topo === 0;
    }
}
export default Binarios;