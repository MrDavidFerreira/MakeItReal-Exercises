class Node {

    constructor(value, link) {
        this.value = value;
        this.link = link;
    }
}

class LinkedList {

    constructor() {
        this.firstNode = null;
        this.lastNode = null;
        this.size = 0;
    }

    add(element) {
        let newNode = new Node(element, null);
        if (!this.lastNode) { //or firstNode
            this.firstNode = newNode;
        } else {
            this.lastNode.link = newNode;

        }
        this.lastNode = newNode; //update the lastNode reference
        this.size++;
    };

    addAt(pos, value) {
        if (pos === 0) {
            let aux = this.firstNode;
            this.firstNode = new Node(value, aux);
            this.size++;
        } else if (pos < this.size) {
            let node = this.firstNode; //starts from first node

            for (let i = 0; i < pos - 1; i++) {
                node = node.link; //nodo anterior a 
            }

            let next = node.link; //save temporary next node (posicion)

            node.link = new Node(value, next);  //reasign the node to the new node with saved next node

            // //update the lastNode reference
            // while (node.link != null) {
            //     node = node.link;
            //     this.lastNode = node;
            // }
            this.size++;
        } else {
            this.add(value);
        }
    };

    valueAt(pos) {
        if (pos >= 0 || pos < this.size) {
            let node = this.firstNode; //starts from first node

            for (let i = 0; i < pos; i++) {
                node = node.link;
            }

            return node.value;
        } else {
            return undefined;
        }
    };

    removeAt(pos) {
        if (pos == 0) {
            this.firstNode = this.firstNode.link;
            this.size--;
        } else if (pos > 0 && pos < this.size) {
            let node = this.firstNode; //starts from first node
            let next = node.link;

            for (let i = 0; i < pos - 1; i++) {
                node = node.link;
                next = node.link;
            }

            node.link = next.link;
            this.size--;
        }
    };

    forEach(action) {
        let node = this.firstNode;

        for (let i = 0; i < this.size; i++) {
            action(node.value, i);
            node = node.link;
        }
    };

    reverse() {

        let reverseHelper = function (node) {
            if (node.link == null) {
                return node;
            } else {
                let nodeTemp = reverseHelper(node.link);
                nodeTemp.link = node;
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
            this.lastNode.link = null;
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
list.addAt(4, 'f');

console.log(list.lastNode)
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