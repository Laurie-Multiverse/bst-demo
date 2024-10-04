const BST = require('./BST');

// const N =      1_000;
// const N =  1_000_000;
// const N = 10_000_000;
const N = 100_000_000;
let start, end;
const timeBST = () => {
  console.log(`setting up an Array and a Tree of size N=${N}...`);
  // create an array size N
  const array = [];
  for (let i = 0; i < N; i++) {
    array.push(Math.floor(Math.random() * N * 2));
  }

  // create a tree size N
  const tree = new BST(N / 2);
  for (let i = 0; i < N; i++) {
    tree.insert(array[i]);
  }

  // try to find an average-ish number in the tree
  const target = Math.floor(N / 2) + 7;

  // To time an operation:
  //   take a note of the start time
  //   search for the target in the tree
  //   take a note of the end time
  //   log how long it took
  console.log("Timing both operations...")

  start = performance.now();
  const resultArray = array.find(value => value == target) ? true : false;
  console.log(`${target}? ${resultArray}`);
  end = performance.now();
  console.log( `array find took ${(end - start).toFixed(2)} ms`);

  start = performance.now();
  const resultTree = tree.find(target);
  console.log(`${target}? ${resultTree}`);
  end = performance.now();
  console.log( `tree find took ${(end - start).toFixed(2)} ms`);


}

timeBST();