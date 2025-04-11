class EmpresaConcreto {
    constructor(maxCarregamentos = 10) {
        this.maxCarregamentos = maxCarregamentos;
        this.fila = [];
        this.carregamentosRealizados = 0;
    }

    enqueue(nome) {
        if (this.fila.length >= this.maxCarregamentos) {
            throw new Error("Número máximo de carregamentos atingido.");
        }
        this.fila.push(nome);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Nenhum caminhoneiro na fila.");
        }
        this.carregamentosRealizados++;
        return this.fila.shift();
    }

    front() {
        if (this.isEmpty()) {
            throw new Error("Nenhum caminhoneiro na fila.");
        }
        return this.fila[0];
    }

    isEmpty() {
        return this.fila.length === 0;
    }

    listarCaminhoneiros() {
        return [...this.fila];
    }

    verificarLimiteCarregamentos() {
        return this.carregamentosRealizados >= this.maxCarregamentos;
    }
}

export default EmpresaConcreto;