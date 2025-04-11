class FilaPilhas {
    constructor(size = 8) {
        //-----Pilhas------
        this.vPilha1 = new Array(4);
        this.vPilha2 = new Array(4);
        this.topo1 = 0;
        this.topo2 = 0;
        //-----Fila--------
        this.vFila = new Array(size);
        this.size = size;
        this.inicio = -1;
        this.fim = 0;
        //-----------------
        this.aux = 4;
        this.auxx = 8;
    }

    pushPilhas() {
        if (this.topo1 === 4) throw new Error("Stack 1 Overflow");

        this.vPilha1[this.topo1] = this.aux;
        this.topo1++;
        this.aux -= 1;

        if (this.topo2 === 4) throw new Error("Stack 2 Overflow");

        this.vPilha2[this.topo2] = this.auxx;
        this.topo2++;
        this.auxx -= 1;
    }

    enqueueFila() {
        if (!this.isEmpty()) throw new Error("Queue 1 underflow");

        this.inicio = 0; 

        for (let i = 0; i < this.topo1; i++) {
            this.vFila[this.fim] = this.vPilha1[i];
            this.fim++;
            this.pop1();
        }

        for (let i = 0; i < this.topo2; i++) {
            this.vFila[this.fim] = this.vPilha2[i];
            this.fim++;
            this.pop2();
        }
    }

    pop1() {
        if (this.isEmpty1()) throw new Error("Stack 1 Underflow");
        this.topo1--;
    }

    pop2() {
        if (this.isEmpty2()) throw new Error("Stack 2 Underflow");
        this.topo2--;
    }

    isEmpty1() {
        return this.topo1 === 0;
    }

    isEmpty2() {
        return this.topo2 === 0;
    }

    isEmpty() {
        return this.inicio === -1;
    }
}
export default FilaPilhas;
