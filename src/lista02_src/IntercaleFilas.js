class IntercaleFilas {
    constructor(size = 4) {
        //----Fila A-----
        this.FilaA = new Array(2);
        this.inicioA = -1;
        this.fimA = 0;
        //----Fila B-----
        this.FilaB = new Array(2);
        this.inicioB = -1;
        this.fimB = 0;
        //----Fila C-----
        this.FilaC = new Array(4);
        this.inicio = -1;
        this.fim = 0;
        this.size = size;
    }

    enqueueA(elemento) {
        if (this.fimA === 2) throw new Error("Queue A overflow");
        if (this.inicioA === -1) this.inicioA = 0;
        this.FilaA[this.fimA] = elemento;
        this.fimA++;
    }

    enqueueB(dado) {
        if (this.fimB === 2) throw new Error("Queue B overflow");
        if (this.inicioB === -1) this.inicioB = 0;
        this.FilaB[this.fimB] = dado;
        this.fimB++;
    }

    funcao(fila1, fila2) {
        this.inicio = 0;

        while (!fila1.isEmptyA() || !fila2.isEmptyB()) {
            if (!fila1.isEmptyA()) {
                let valorA = fila1.dequeueA();
                this.FilaC[this.fim] = valorA;
                this.fim++;
            }

            if (!fila2.isEmptyB()) {
                let valorB = fila2.dequeueB();
                this.FilaC[this.fim] = valorB;
                this.fim++;
            }
        }
    }

    dequeueA() {
        if (this.isEmptyA()) throw new Error("Queue A underflow");

        const elemento = this.FilaA[this.inicioA];
        this.inicioA++;
        if (this.inicioA === this.fimA) {
            this.inicioA = -1;
            this.fimA = 0;
        }
        return elemento;
    }

    dequeueB() {
        if (this.isEmptyB()) throw new Error("Queue B underflow");

        const elemento = this.FilaB[this.inicioB];
        this.inicioB++;
        if (this.inicioB === this.fimB) {
            this.inicioB = -1;
            this.fimB = 0;
        }
        return elemento;
    }

    isEmptyA() {
        return this.inicioA === -1;
    }

    isEmptyB() {
        return this.inicioB === -1;
    }

    isEmpty() {
        return this.inicio === -1;
    }
}

export default IntercaleFilas;