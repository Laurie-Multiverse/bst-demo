const BST = require('./BST')

const tree = new BST(10); [10]
tree.insert(4); // [10, L:[4]]
tree.insert(8); //[10, L:[4, R:[8]]
tree.insert(21);
tree.insert(1);
tree.insert(13);
tree.insert(25);
tree.insert(2);

// console.log(JSON.stringify(tree, null, 2))
console.log(`21? ${tree.find(21)}`);
console.log(`7? ${tree.find(7)}`)

tree.preorderTraverse();