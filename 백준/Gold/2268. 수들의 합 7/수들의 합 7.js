const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const tree = Array(N * 4).fill(0);
const numbers = Array(N).fill(0);

const sum = (node, start, end, left, right) => {
  if (start > right || end < left) return 0;
  if (start >= left && end <= right) return tree[node];
  const mid = Math.floor((start + end) / 2);
  return (
    sum(node * 2, start, mid, left, right) +
    sum(node * 2 + 1, mid + 1, end, left, right)
  );
};

const update = (node, start, end, index, value) => {
  if (start > index || end < index) return;
  tree[node] += value;
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  update(node * 2, start, mid, index, value);
  update(node * 2 + 1, mid + 1, end, index, value);
};

let ans = "";
for (let i = 0; i < M; i++) {
  let [op, j, k] = input[i + 1].split(" ").map(Number);
  if (op === 0) {
    if (j > k) [j, k] = [k, j];
    ans += sum(1, 0, N - 1, j - 1, k - 1) + "\n";
  } else if (op === 1) {
    update(1, 0, N - 1, j - 1, k - numbers[j - 1]);
    numbers[j - 1] = k;
  }
}
console.log(ans);
