
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            // LEFT
            if (this.left == null) {
                this.left = new BST( value );
            } else {
                this.left.insert(value);
            }
        } else if (value > this.value) {
            // RIGHT 
            if (this.right == null) {
                this.right = new BST( value );
            } else {
                this.right.insert(value);
            }
        }

    }

    find(value) {
        if (this.value == value) {
            return true;
        } else if (value < this.value) {
            if (this.left == null) {
                return false;
            }
            return this.left.find(value);
        } else if (value > this.value) {
            if (this.right == null) {
                return false;
            }
            return this.right.find(value);
        }

    }

    preorderTraverse(depth = 0) {
        // node, left, right
        // display node value
        console.log(`${" ".repeat(depth)}${this.value}`);

        // traverse left subtree
        depth += 2;
        if (this.left) {
            this.left.preorderTraverse(depth);
        } else {
            console.log(`${" ".repeat(depth)}null`);
        }

        // traverse right subtree
        if (this.right) {
            this.right.preorderTraverse(depth);
        } else {
            console.log(`${" ".repeat(depth)}null`);
        }
    }
}

module.exports = BST;