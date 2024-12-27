const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, M] = [+input[0], +input[2]];
const numbers = input[1].split(" ").map(Number);
const tree = Array(N * 4).fill(0);
const lazy = Array(N * 4).fill(0);

const init = (node, start, end) => {
  if (start === end) return (tree[node] = numbers[start]);
  const mid = Math.floor((start + end) / 2);
  return (tree[node] =
    init(node * 2, start, mid) + init(node * 2 + 1, mid + 1, end));
};

const sum = (node, start, end, index) => {
  updateLazy(node, start, end);
  if (start > index || end < index) return 0;
  if (start === end) return tree[node];
  const mid = Math.floor((start + end) / 2);
  return (
    sum(node * 2, start, mid, index) + sum(node * 2 + 1, mid + 1, end, index)
  );
};

const update = (node, start, end, left, right, value) => {
  updateLazy(node, start, end);
  if (start > right || end < left) return;

  if (start >= left && end <= right) {
    tree[node] += (end - start + 1) * value;
    if (start !== end) {
      lazy[node * 2] += value;
      lazy[node * 2 + 1] += value;
    }
    return;
  }

  const mid = Math.floor((start + end) / 2);
  update(node * 2, start, mid, left, right, value);
  update(node * 2 + 1, mid + 1, end, left, right, value);
  tree[node] = tree[node * 2] + tree[node * 2 + 1];
};

const updateLazy = (node, start, end) => {
  if (lazy[node] !== 0) {
    tree[node] += (end - start + 1) * lazy[node];

    if (start !== end) {
      lazy[node * 2] += lazy[node];
      lazy[node * 2 + 1] += lazy[node];
    }
    lazy[node] = 0;
  }
};

let ans = "";
init(1, 0, N - 1);
for (let i = 0; i < M; i++) {
  const query = input[3 + i].split(" ").map(Number);
  if (query[0] === 1) {
    update(1, 0, N - 1, query[1] - 1, query[2] - 1, query[3]);
  } else if (query[0] === 2) {
    ans += sum(1, 0, N - 1, query[1] - 1) + "\n";
  }
}
console.log(ans);
