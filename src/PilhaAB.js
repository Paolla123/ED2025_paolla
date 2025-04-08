class PilhaAB{
    constructor(size = 8) {
        this.vetorAB = new Array(size);
        this.size = size;
        this.topoA = -1;
        this.topoB = size;
    }

    pushA() {
        if (this.topoA + 1 === this.topoB) {
            throw new Error("Stack OverFlow Pilha A");
        }
        this.topoA++;
        this.vetorAB[this.topoA] = this.topoA + 1; 
    }

    pushB() {
        if (this.topoB - 1 === this.topoA) {
            throw new Error("Stack OverFlow Pilha B");
        }
        this.topoB--;
        this.vetorAB[this.topoB] = this.topoB + 1; 
    }

    popA() {
        if (this.isEmptyA()) {
            throw new Error("Stack underflow Pilha A");
        }
        this.topoA--;
    }

    popB() {
        if (this.isEmptyB()) {
            throw new Error("Stack underflow Pilha B");
        }
        this.topoB++;
    }

    isEmptyA() {
        return this.topoA === -1;
    }

    isEmptyB() {
        return this.topoB === this.size;
    }
}
export default PilhaAB;