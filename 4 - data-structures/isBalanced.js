/**
 * Write a function called isBalanced that receives a string and returns true
 * if the parenthesis are balanced, or false otherwise.
 */

// import Stack from './stack.js'
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
/**
 * 
 * @param {string} parenthesis  
 */
function isBalanced(parenthesis) {
    let stack = new Stack();

    for (const p of parenthesis) {
        if(p == "(") {
            stack.push(p)
        } else if (p == ")") {
            if(stack.size <= 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }

    if(stack.size > 0) {
        return false
    }

    return true;
}

console.log(isBalanced("(((())))")); // true
console.log(isBalanced("(((()))")); // false
console.log(isBalanced("())(()")); // false
console.log(isBalanced("")); // true
console.log(isBalanced("((((")); // false
console.log(isBalanced(")")); // false
