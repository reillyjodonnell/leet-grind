function nodeFactory(value, next = null) {
  return {
    value,
    // This is what links to another node
    next,
  };
}

// now we can create multiple nodes using the factory function
const first = nodeFactory('a');
const second = nodeFactory('b', first);
const third = nodeFactory('c', second);
const fourth = nodeFactory('d', third);

// We will have to link the nodes

// Then we can print out the nodes
function printNodes(node) {
  let current = node;

  // recursively go through nodes until  no more
  while (current) {
    const value = current.value;
    console.log(value);

    current = current.next;
  }
}

printNodes(fourth);
