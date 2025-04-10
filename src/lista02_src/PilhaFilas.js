class PilhaFilas {
    constructor(size = 8) {
        //------- Pilha ------------    
        this.vPilha = new Array(size);
        this.size = size;
        this.topo = -1;
        //------Filas---------------
        this.tam = 4;
        this.vFila1 = new Array(this.tam);
        this.vFila2 = new Array(this.tam);
        //--------------------------    
        this.inicio1 = -1;
        this.fim1 = 0;
        this.inicio2 = -1;
        this.fim2 = 0;
        this.aux = 5;
    }

    enqueueFilas() {
        if (this.fim1 === this.tam) throw new Error("Queue1 overflow");

        this.vFila1[this.fim1] = this.fim1 + 1;
        this.fim1++;

        if (this.fim2 === this.tam) throw new Error("Queue2 overflow");

        this.vFila2[this.fim2] = this.aux;
        this.fim2++;
        this.aux += 1;
    }

    implementandoPilha() {
        if (!this.isEmpty()) throw new Error("Stack Overflow");

        for (let i = 0; i < this.fim1; i++) {
            this.topo++;
            this.vPilha[this.topo] = this.vFila1[i];
            this.dequeue1();
        }

        for (let i = 0; i < this.fim2; i++) {
            this.topo++;
            this.vPilha[this.topo] = this.vFila2[i];
            this.dequeue2();
        }
    }

    dequeue1() {
        if (this.isEmpty()) throw new Error("Queue underflow para Fila1");

        if (this.inicio1 === this.tam) {
            this.inicio1 = 0;
        } else {
            this.inicio1++;
        }
    }

    dequeue2() {
        if (this.isEmpty()) throw new Error("Queue underflow para Fila2");

        if (this.inicio2 === this.tam) {
            this.inicio2 = 0;
        } else {
            this.inicio2++;
        }
    }

    isEmptyFila1() {
        return this.inicio1 === -1;
    }

    isEmptyFila2() {
        return this.inicio2 === -1;
    }

    isEmpty() {
        return this.topo === -1;
    }
}
export default PilhaFilas;