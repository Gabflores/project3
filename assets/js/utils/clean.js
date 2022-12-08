export const cleanNode = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

export default cleanNode;
