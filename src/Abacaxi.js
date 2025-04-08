class Abacaxi{
    constructor(size = 10){
        this.str = [];
        this.size = size;
        this.topo = 0;
    }

    push(elemento){
        if(this.isFull()){
            throw new Error("Stack OverFlow");
        }

        this.str[this.topo] = elemento;
        this.topo++;

    }
    pop(){
        if(this.isEmpty()){
            throw new Error("Stack underflow");
        }

        this.topo--;
        return this.str[this.topo];
    }
    top(){
        if(!this.isEmpty()){
            return this.str[this.topo - 1];
        }
    }
    length(){
        return this.topo;
    }

    isEmpty(){
        return this.length() === 0;
    }

    isFull(){
        return this.length() === this.size;
    }


}
export default Abacaxi;