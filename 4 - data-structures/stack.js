class Node {

    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class Stack {

    constructor() {
        this.firstNode = null;
        this.lastNode = null;
        this.size = 0;
    }

    pop() {
        if (this.size == 0) {
            return null;
        } else {
            let node = this.firstNode; //starts from first node
            let next = node.next;
    
            for (let i = 0; i < this.size - 1; i++) {
                node = node.next; //a
                next = node.next;
            }
    
            node.next = null;
            this.lastNode = node;
    
            this.size--;
            return node.value;
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

export default Stack;

const stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');

// console.log(stack.size); // 3
console.log(stack.pop()); // "a"
// console.log(stack.size); // 2
console.log(stack.pop()); // "b"
// console.log(stack.size); // 1
console.log(stack.pop()); // "c"
// console.log(stack.size); // 0
console.log(stack.pop()); // null