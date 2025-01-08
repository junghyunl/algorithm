const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

class Node {
  constructor() {
    this.child = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(words) {
    let node = this.root;

    for (const word of words) {
      if (!node.child[word]) {
        node.child[word] = new Node();
      }
      node = node.child[word];
    }
  }

  dfs(node = this.root, depth = 0) {
    const keys = Object.keys(node.child).sort();
    for (const key of keys) {
      console.log("--".repeat(depth) + key);
      this.dfs(node.child[key], depth + 1);
    }
  }
}

const N = +input[0];
const trie = new Trie();

for (let i = 0; i < N; i++) {
  trie.insert(input[i + 1].split(" ").slice(1));
}

trie.dfs();
