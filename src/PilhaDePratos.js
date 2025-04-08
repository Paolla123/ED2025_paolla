class PilhaDePratos {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.pilhas = [[]]; 
    }

    isEmpty() {
        return this.pilhas.length === 1 && this.pilhas[0].length === 0;
    }

    push(valor) {
        let ultimaPilha = this.pilhas[this.pilhas.length - 1];

        if (ultimaPilha.length >= this.capacidade) {
            this.pilhas.push([]);
            ultimaPilha = this.pilhas[this.pilhas.length - 1];
        }

        ultimaPilha.push(valor);
    }

    pop() {
        if (this.isEmpty()) return null;

        let ultimaPilha = this.pilhas[this.pilhas.length - 1];
        const valorRemovido = ultimaPilha.pop();

        if (ultimaPilha.length === 0 && this.pilhas.length > 1) {
            this.pilhas.pop();
        }

        return valorRemovido;
    }
}

export default PilhaDePratos;