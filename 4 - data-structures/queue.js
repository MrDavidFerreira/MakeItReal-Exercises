class Node {

    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class Queue {

    constructor() {
        this.firstNode = null;
        this.lastNode = null;
        this.size = 0;
    }

    get() {
        if (this.size == 0) {
            return null;
        } else {
            let value = this.firstNode.value;
            this.firstNode = this.firstNode.next;
            this.size--;
            return value;
        }
    };

    push(element) {
        if (this.size == 0) {
            this.firstNode = this.lastNode = new Node(element, null);
        } else {
            let newNode = new Node(element, null);
            if (this.size == 1) {
                this.firstNode.next = this.lastNode = newNode;
            } else {
                this.lastNode.next = newNode;
            }
            this.lastNode = newNode;  //update the lastNode
        }
        this.size++;
    };

}

const queue = new Queue();
queue.push('a');
queue.push('b');
queue.push('c');

console.log(queue.get()); // "a"
console.log(queue.get()); // "b"
console.log(queue.get()); // "c"