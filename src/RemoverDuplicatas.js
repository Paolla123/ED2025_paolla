class RemoverDuplicatas {
    constructor() {
        this.pilhaOriginal = [];
        this.resultado = [];
    }

    push(elemento) {
        this.pilhaOriginal.push(elemento);
    }

    removerDuplicatas() {
        const vistos = new Set();
        const novaPilha = [];

        for (let i = this.pilhaOriginal.length - 1; i >= 0; i--) {
            const atual = this.pilhaOriginal[i];
            if (!vistos.has(atual)) {
                novaPilha.push(atual);
                vistos.add(atual);
            }
        }

        while (novaPilha.length > 0) {
            this.resultado.push(novaPilha.pop());
        }

        return this.resultado; 
    }

}

export default RemoverDuplicatas;
