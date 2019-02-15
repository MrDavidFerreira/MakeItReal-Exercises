class Node {

    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.firstNode = null;
        this.lastNode = null;
        this.size = 0;
    }

    add(element) {
        if (this.lastNode == null) {
            this.firstNode = this.lastNode = new Node(element, null);
        } else {
            let newNode = new Node(element, null);
            if (this.size == 1) {
                this.firstNode.next = this.lastNode = newNode;
            } else {
                this.lastNode.next = newNode;
            }
            this.lastNode = newNode; //update the lastNode reference
        }
        this.size++;
    };

    addAt(pos, element) {
        if (pos < this.size) {
            let node = this.firstNode; //starts from first node

            for (let i = 0; i < pos - 1; i++) {
                node = node.next; //nodo anterior a 
            }

            let next = node.next; //save temporary next node (posicion)

            node.next = new Node(element, next);  //reasign the node to the new node with saved next node

            //update the lastNode reference
            while(node.next != null) {
                node = node.next;
                this.lastNode = node;
            }
            this.size++;
        } else {
            this.add(element);
        }
    };

    valueAt(pos) {
        if (pos >= 0 || pos < this.size) {
            let node = this.firstNode; //starts from first node

            for (let i = 0; i < pos; i++) {
                node = node.next;
            }

            return node.value;
        } else {
            return undefined;
        }
    };

    removeAt(pos) {
        if (pos == 0) {
            this.firstNode = this.firstNode.next;
            this.size--;
        } else if (pos > 0 && pos < this.size) {
            let node = this.firstNode; //starts from first node
            let next = node.next;

            for (let i = 0; i < pos - 1; i++) {
                node = node.next;
                next = node.next;
            }

            node.next = next.next;
            this.size--;
        }
    };

    forEach(action) {
        let node = this.firstNode;

        for (let i = 0; i < this.size; i++) {
            action(node.value, i);
            node = node.next;
        }
    };

    reverse() {

        let reverseHelper = function (node) {
            if (node.next == null) {
                return node;
            } else {
                let nodeTemp = reverseHelper(node.next);
                nodeTemp.next = node;
                return node;
            }
        }

        if (this.size > 1) {
            reverseHelper(this.firstNode);
            //swap... the first is now the last and vice versa
            let temp = this.firstNode;
            this.firstNode = this.lastNode;
            this.lastNode = temp;
            //lastNode's (formerly firstNode) next, must point to null
            this.lastNode.next = null;
        }
    }

    middle() {
        return valueAt(Math.floor(this.size / 2));
    }

}

const list = new LinkedList();
list.add('a');
list.add('b');
list.add('d');
list.addAt(2, 'c');
// list.addAt(4, 'f');
// console.log(list.valueAt(0)); // 'a'
list.forEach((val, i) => {
    console.log(`Value at position ${i}: ${val}`);
});
console.log();
// list.removeAt(0);
// console.log(list.size); // 4
// list.forEach((val, i) => {
//     console.log(`Value at position ${i}: ${val}`);
// });
list.reverse();

list.forEach((val, i) => {
    console.log(`Value at position ${i}: ${val}`);
});


console.log(Math.floor(2.4))


