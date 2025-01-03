const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.length;
let [root, ans] = [input[0], ""];

const tree = {};
tree[root] = [];

const insertNode = (curRoot, node) => {
  while (true) {
    if (node < curRoot) {
      if (!tree[curRoot][0]) {
        tree[curRoot][0] = node;
        tree[node] = [];
        break;
      } else {
        curRoot = tree[curRoot][0];
      }
    } else {
      if (!tree[curRoot][1]) {
        tree[curRoot][1] = node;
        tree[node] = [];
        break;
      } else {
        curRoot = tree[curRoot][1];
      }
    }
  }
};

const dfs = (node) => {
  if (!node) return;
  dfs(tree[node][0]);
  dfs(tree[node][1]);
  ans += node + "\n";
};

for (let i = 1; i < N; i++) {
  insertNode(root, input[i]);
}

dfs(input[0]);
console.log(ans);
