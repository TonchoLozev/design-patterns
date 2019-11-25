class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(node, key) {
    if (node === null) {
      return null
    } else if (key < node.data) {
      return this.remove(node.left, key);
    } else if (key > node.data) {
      return this.remove(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return null;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      } else {
        const aux = this.findMinNode(node.right);
        node.data = aux.data;

        node.right = this.remove(node.right, aux.data);
        return node;
      }
    }
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  getRootNode() {
    return this.root;
  }
}

const BST = new BinarySearchTree();
BST.insert(10);
BST.insert(11);
BST.insert(9);
BST.insert(12);
BST.insert(13);
BST.insert(8);
BST.insert(7);
BST.insert(7);
BST.insert(11);
BST.insert(9);
const root = BST.getRootNode();

function treeIteration(tree) {
  const left = tree.left || 'null';
  const right = tree.right || 'null';
  for (const node of [left, right]) {
    if(node !== 'null') {
      console.log(node);
      treeIteration(node);
    }
  }
}

console.log(BST.search(root, 7));