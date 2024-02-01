export const BinarySearchTree = (inputArray, valueToSearch) => {
  let root = null;
  /**
   Function to create a new node
   @param value
   @param leftNode
   @returns rightNode
   @returns {Object}
   */
  const createANode=(value, leftNode = null, rightNode = null) => { return {value: value, leftNode: leftNode, rightNode: rightNode}; }
  /**
  Function to insert a value into the BST
  @param root
   @param value
   @returns {{leftNode: null, rightNode: null, value}}
   */
  const insertionBST = (rootNode, valueToBeInserted) => {
      /*
      creates root with input value if it does not exist
      if root exists, checks if root value is greater than input value-if yes inserts the input value as right node, else inserts the input value as left node
       */
      if (rootNode === null) return createANode(valueToBeInserted);
      valueToBeInserted < rootNode.value ? rootNode.leftNode = insertionBST(rootNode.leftNode, valueToBeInserted): rootNode.rightNode = insertionBST(rootNode.rightNode, valueToBeInserted);
      return rootNode;
  };

  /**
   Main function responsible to search for provided input value in the binary search tree
   @param root
   @param value
   @returns Boolean
   */
  const searchBST = (root, valueToBeSearched) => {
      // Searching left and right subtree recursively and return either false or true based on the result.
      if (root === null) return false;
      if (root.value === valueToBeSearched) return true;
      if (valueToBeSearched < root.value) return searchBST(root.leftNode, valueToBeSearched);
      return searchBST(root.rightNode, valueToBeSearched);
  };
  //calls insertionBST to insert each value to the array
  inputArray.map((eachValueToBeInserted) => root = insertionBST(root, eachValueToBeInserted));
  return searchBST(root, valueToSearch);
}