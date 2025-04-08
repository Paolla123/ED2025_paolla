class Troca_element {
    constructor(size = 4) {
        this.vetP = new Array(size);
        this.vetA = new Array(size);
        this.size = size;
        this.topoP = -1;
        this.topoA = -1;
    }

    //Adiciona valores automaticamente na pilha principal
    pushP() {
        if (this.topoP >= this.size - 1) {
            throw new Error("Stack Overflow Principal");
        }
        this.topoP++;
        this.vetP[this.topoP] = this.topoP + 1; 
    }

    //Transfere elementos da pilha principal para a auxiliar (de forma inversa, para que assim a base e o topo seja invertido)
    pushA() {
        if (this.topoA >= this.size - 1) {
            throw new Error("Stack Overflow Auxiliar");
        }
        while (!this.isEmptyP()) {
            this.topoA++;
            this.vetA[this.topoA] = this.vetP[this.topoP]; 
            this.popP(); 
        }
    }

    //Transfere de volta para a pilha principal e troca os elementos do meio
    pushP2() {
        if (this.topoP >= this.size - 1) {
            throw new Error("Stack Overflow Principal");
        }
        let temp = [...this.vetA]; // manipulando os índices 1 e 2

        //Troca os elementos do meio (índice 1 e 2)
        let aux = temp[1];
        temp[1] = temp[2];
        temp[2] = aux;

        //Insere os valores na pilha principal
        for (let i = 0; i < temp.length; i++) {
            this.topoP++;
            this.vetP[this.topoP] = temp[i];
        }
    }

    popP() {
        if (this.isEmptyP()) {
            throw new Error("Stack Underflow Principal");
        }
        this.topoP--;
    }

    
    popA() {
        if (this.isEmptyA()) {
            throw new Error("Stack Underflow Auxiliar");
        }
        this.topoA--;
    }

    
    isEmptyP() {
        return this.topoP === -1;
    }

    isEmptyA() {
        return this.topoA === -1;
    }
}

export default Troca_element;