class Deque {
    constructor(size = 8) {
        this.size = size;
        this.deque = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    insertFront(value) {
        if (this.isFull()) throw new Error("Deque overflow");

        if (this.front === -1) {
            this.front = 0;
            this.rear = 0;
        } else if (this.front === 0) {
            this.front = this.size - 1;
        } else {
            this.front--;
        }

        this.deque[this.front] = value;
    }

    insertRear(value) {
        if (this.isFull()) throw new Error("Deque overflow");

        if (this.front === -1) {
            this.front = 0;
            this.rear = 0;
        } else if (this.rear === this.size - 1) {
            this.rear = 0;
        } else {
            this.rear++;
        }

        this.deque[this.rear] = value;
    }

    deleteFront() {
        if (this.isEmpty()) throw new Error("Deque underflow");

        let value = this.deque[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else if (this.front === this.size - 1) {
            this.front = 0;
        } else {
            this.front++;
        }

        return value;
    }

    deleteRear() {
        if (this.isEmpty()) throw new Error("Deque underflow");

        let value = this.deque[this.rear];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else if (this.rear === 0) {
            this.rear = this.size - 1;
        } else {
            this.rear--;
        }

        return value;
    }

    getFront() {
        if (this.isEmpty()) throw new Error("Deque is empty");

        return this.deque[this.front];
    }

    getRear() {
        if (this.isEmpty()) throw new Error("Deque is empty");

        return this.deque[this.rear];
    }

    isEmpty() {
        return this.front === -1 && this.rear === -1;
    }

    isFull() {
        return (this.front === 0 && this.rear === this.size - 1) || (this.front === this.rear + 1);
    }
}

export default Deque;