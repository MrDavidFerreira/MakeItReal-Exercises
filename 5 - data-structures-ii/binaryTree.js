class TreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {

    constructor() {
        this.root = null;   //start node
        this.depth = 0;     //tree depth
    }

    add(value) {
        let newNode = new TreeNode(value, null, null);
        if (this.root) {
            this.addRecursive(newNode, this.root, 2);
        } else { //if root is null (tree is empty)
            this.root = newNode;
            this.depth = 1;
        }
    }

    /**
     * 
     * @param {TreeNode} newNode 
     * @param {TreeNode} node 
     * @param {Number} depth
     */
    addRecursive(newNode, node, depth) {
        //comprobar si el value es menor a root insertar a derecha o izquierda
        if (newNode.value < node.value) {
            if (!node.left) { //if left null
                node.left = newNode
                if (depth > this.depth) {
                    this.depth++;
                }
            } else {
                this.addRecursive(newNode, node.left, depth + 1);
            }
        } else if (newNode.value > node.value) {
            if (!node.right) { //if right null
                node.right = newNode
                if (depth > this.depth) {
                    this.depth++;
                }
            } else {
                this.addRecursive(newNode, node.right, depth + 1);
            }
        }
    }

    /**
     * Traverses the all tree using Depth First Search.
     */
    traverseDFS(action) {
        this.traverseDFSRecursive(this.root, action);
    }

    /**
     * Traverses the tree using Depth First Search from a specific node.
     * @param {TreeNode} node 
     */
    traverseDFSRecursive(node, action) {
        console.log(node.value)
        // action(node.value); //print current node

        if (node.left) { //print left node
            this.traverseDFSRecursive(node.left, action);
        }
        if (node.right) { //print right node
            this.traverseDFSRecursive(node.right, action);
        }
    }

    /**
     * Traverses the tree using Breadth First Search.
     */
    traverseBFS(action) {
        for (let depth = 1; depth <= this.depth; depth++) {
            // console.log(`Printing level ${depth}...`);
            this.traverseBFSRecursive(this.root, action, 1, depth);
        }
    }

    /**
     * Traverses inversely the tree using Breadth First Search.
     * @param {*} action Action to execute.
     */
    traverseInverseBFS(action) {
        for (let depth = this.depth; depth > 0; depth--) {
            // console.log(`Printing level ${depth}...`);
            this.traverseBFSRecursive(this.root, action, 1, depth);
        }
    }

    /**
     * 
     * @param {*} node Node by which the traverse begins.
     * @param {*} action The action to execute.
     * @param {*} level Specifies at which level of the tree the node corresponds.
     * @param {*} depth Depth at wich should be executed the action.
     */
    traverseBFSRecursive(node, action, level, depth) {
        if (level > depth) {//prevents unnecesary recursive method calls when receiving wrong arguments
            return;
        }

        if (level == depth) {
            action(node.value);
        } else {
            if (node.left) {
                this.traverseBFSRecursive(node.left, action, level + 1, depth);
            }
            if (node.right) {
                this.traverseBFSRecursive(node.right, action, level + 1, depth);
            }
        }
    }

    reverse() {
        this._reverseHelper(this.root, 1, this.depth);
    }

    _reverseHelper(node) {

        if (node.left) {
            this._reverseHelper(node.left);
        }
        if (node.right) {
            this._reverseHelper(node.right);
        }
        //swap childs
        let aux = node.left;
        node.left = node.right;
        node.right = aux;

    }

    search(value) {
        if(this.root) {
            return this._searchHelper(value, this.root);
        } else {
            return false;
        }
    }

    _searchHelper(value, node) {
        if(value == node.value) {
            return true;
        } else {
            if(node.left && value < node.value) {
                return this._searchHelper(value, node.left);
            } else if(node.right && value > node.value) {
                return this._searchHelper(value, node.right);
            } else {
                return false;
            }
        }
    }
}
let tree = new BinaryTree();
tree.add(4);
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(3);
tree.add(5);
// console.log("Tree Depth", tree.depth);

// tree.traverseDFS(e => console.log(e));
// // 4
// // 2
// // 1
// // 3
// // 7
// // 5
// console.log();
tree.traverseBFS(e => console.log(e));
// 4
// 2
// 7
// 1
// 3
// 5
// console.log();
// tree.traverseInverseBFS(e => console.log(e));
// // 1
// // 3
// // 5
// // 2
// // 7
// // 4

// console.log();
// tree.reverse();
// tree.traverseDFS(e => console.log(e));
console.log(tree.search(7))
