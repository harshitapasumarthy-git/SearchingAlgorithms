export const RedBlackTree = (array, target) => {

  /* Functions for RedBlackTree
   * createANode - creates new Node
   * checkIsRed- Checks and return boolean value, if the particular node is red ---> return true, else false
   * left rotation - checks if tree imbalance is at right, it rotates the tree inorder to balance nodes(Helper Function to balance node)
   * right rotation - checks if tree imbalnce is at left, rotates tree to balance node(Helper Function to balance node)
   * balance node- Based on several conditions, it make sure that tree is balances after inserting each node 
   * insert node - it creates a new node
   * insert - Inserts the node to the tree and calls up balance node function
   * search - searches the RBT and returns if the value is present or not
   * searchValue - calls search function to return true or false.
   */
  let rootNode = null;

  /**
   Function to create a new node
   @param rootValue
   @param color
   @param left
   @param right
   @param parent
   @returns {Object}
   */
  const createANode = (rootValue, color = 'RED', left = null, right = null, parent = null) => ({
      rootValue,
      color: color || 'RED',
      left: left || null,
      right: right || null,
      parent: parent || null
  });

  /**
   Function to check if inserted node is RED
   @param insertedNode
   @returns {Object}
   */
  const checkIsRED = (insertedNode) => { return insertedNode && insertedNode.color === 'RED' };

  /**
   Function responsible to perform left rotation
   @param currentNode
   @returns void
   */
  const leftRotation = (currentNode) => {
      if (currentNode !== null && currentNode.right !== null) {
          let newNode = currentNode.right;
          currentNode.right = newNode.left;
          if (newNode.left !== null) newNode.left.parent = currentNode;
          newNode.parent = currentNode.parent;
          /*
              If parent node is null, insert as new node
              else If parent node exists and has left node, insert input node as left node to the parent
              else parent node exists and has right node, insert input node as right node to the parent
               */
          currentNode.parent === null ? rootNode = newNode : currentNode === currentNode.parent.left ? currentNode.parent.left = newNode : currentNode.parent.right = newNode;
          newNode.left = currentNode;
          currentNode.parent = newNode;
      }
  };

  /**
   Function responsible to perform right rotation
   @param currentNode
   @returns void
   */
  const rightRotation = (currentNode) => {
      if (currentNode !== null && currentNode.left !== null) {
          let newNode = currentNode.left;
          currentNode.left = newNode.right;
          if (newNode.right !== null) newNode.right.parent = currentNode;
          newNode.parent = currentNode.parent;
          /*
              If parent node is null, insert as new node
              else If parent node exists and has right node, insert input node as right node to the parent
              else parent node exists and has left node, insert input node as left node to the parent
               */
          currentNode.parent === null ? rootNode = newNode : currentNode === currentNode.parent.right ? currentNode.parent.right = newNode : currentNode.parent.left = newNode;
          newNode.right = currentNode;
          currentNode.parent = newNode;
      }
  };

  /**
   Function responsible to balance nodes of the red black tree
   @param currentNode
   @returns void
   * 
   */
  const balanceNodes = (currentNode) => {
      let uncleNode;
      //If current node or left node of current is null -return, else continue
      if (currentNode === null || currentNode.left === null) return;
      while (checkIsRED(currentNode)) {
          if (currentNode === currentNode.parent.left) {
              uncleNode = currentNode.parent.right;
              // Case: parent's sibling node(uncle node) color is red
              if (uncleNode !== null && checkIsRED(uncleNode)) {
                  uncleNode.color = 'BLACK';
                  currentNode.parent.color = 'RED';
                  leftRotation(currentNode.parent);
                  uncleNode = currentNode.parent.right;
              }
              // Case: parent's sibling node is null and parent's sibling node of leftNode or right Node is not red, make parent's sibling node to red color
              if (uncleNode === null || (!checkIsRED(uncleNode.left) && !checkIsRED(uncleNode.right))) {
                  uncleNode.color = 'RED';
                  currentNode = currentNode.parent;
              } else {
                // case: check if parent's sibling right node is not red
                  if (uncleNode.right !== null &&  !checkIsRED(uncleNode.right)) 
                  {
                      uncleNode.left.color = 'BLACK';
                      uncleNode.color = 'RED';
                      rightRotation(uncleNode);
                      uncleNode = currentNode.parent.right;
                  }

                  uncleNode.color = currentNode.parent.color;
                  currentNode.parent.color = 'BLACK';
                  uncleNode.right.color = 'BLACK';
                  leftRotation(currentNode.parent);
                  currentNode = rootNode;
              }
          } else {
              uncleNode = currentNode.parent.left;
// case : cjeck if parent's sibling node is red
              if (uncleNode !== null && checkIsRED(uncleNode)) {
                  uncleNode.color = 'BLACK';
                  currentNode.parent.color = 'RED';
                  rightRotation(currentNode.parent);
                  uncleNode = currentNode.parent.left;
              }

              if (
                  uncleNode === null||
                  (!checkIsRED(uncleNode.left) && !checkIsRED(uncleNode.right))
              ) {
                  uncleNode.color = 'RED';
                  currentNode = currentNode.parent;
              } else {
                  if (
                      uncleNode.left !== null &&
                      !checkIsRED(uncleNode.left)
                  ) {
                      uncleNode.right.color = 'BLACK';
                      uncleNode.color = 'RED';
                      leftRotation(uncleNode);
                      uncleNode = currentNode.parent.left;
                  }
                  uncleNode.color = currentNode.parent.color;
                  currentNode.parent.color = 'BLACK';
                  uncleNode.left.color = 'BLACK';
                  rightRotation(currentNode.parent);
                  currentNode = rootNode;
              }
          }
      }
      currentNode.color = 'BLACK';
  };

  /**
   Function responsible to insert the provided node
   1. If null inserts a new node
   2. Else considers the existing node and inserts its left and right
   @param node
   @param newNode
   @returns {Object}
   */
  const insertNode = (node, newNode) => {
      if (node === null) return newNode;
      if( newNode.value < node.value)
      {
       node.left = insertNode(node.left, newNode)
       node.left.parent = node 
      }
      else{
        node.right = insertNode(node.right, newNode)}
       node.right.parent = node
       
      return node;
  };

  /**
   Function responsible to insert node
   @param value
   @returns void
   */
  const insert = (value) => {
      //Create a node with the provided value.
      const newNode = createANode(value, 'RED');
      // Insert the created node.
      rootNode = insertNode(rootNode, newNode);
      // Balance the nodes
      balanceNodes(newNode);
  };

  //Iterate through the array and form the red black tree
array.forEach(eachValue => { insert(eachValue) } );

  /**
   Function responsible to search node
   *@param node
   *@param value
   *@returns {Object}
   */
  const search = (node, value) => {
//if provided value is less than rote
      if (node === null || value === node.value) return node;
      if (value < node.value) return search(node.left, value);
      return search(node.right, value);
  };


  /**
   Function responsible to search for target value
   @param value
   @returns Boolean
   */
  const searchValue = (value) => { return search(rootNode, value)  };

  console.log( searchValue(target) !== null)
  return searchValue(target) !== null;
};
