class Fila {
    constructor(size = 10) {
        this.size = size;
        this.fila = [];
    }

    enqueue(value) {
        if (this.fila.length >= this.size) {
            throw new Error("Fila cheia.");
        }
        this.fila.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Fila vazia.");
        }
        return this.fila.shift();
    }

    front() {
        if (this.isEmpty()) {
            throw new Error("Fila vazia.");
        }
        return this.fila[0];
    }

    isEmpty() {
        return this.fila.length === 0;
    }

    reverseQueueRecursively(queue) {
        if (queue.isEmpty()) {
            return;
        }
        const element = queue.dequeue();
        this.reverseQueueRecursively(queue);
        queue.enqueue(element);
    }

    listarFila() {
        return [...this.fila];
    }
}

export default Fila;