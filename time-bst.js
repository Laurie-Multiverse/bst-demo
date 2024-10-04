const BST = require('./BST');

// const N =      1_000;
// const N =  1_000_000;
// const N = 10_000_000;
const N = 10_000_000;
let start, end;
const timeBST = () => {
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

  const target = Math.floor(N / 2);

  start = performance.now();
  console.log(`${target}? ${array.find(value => value == target)}`);
  end = performance.now();
  console.log( `array find took ${(end - start).toFixed(2)} ms`);

  start = performance.now();
  console.log(`${target}? ${tree.find(target)}`);
  end = performance.now();
  console.log( `tree find took ${(end - start).toFixed(2)} ms`);

  // take a note of the start time
  // find something in the tree
  // take a note of the end time
  // log how long it took
}

timeBST();