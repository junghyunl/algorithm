const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = +input[0];
const tree = Array.from({ length: N + 1 }, () => Array(2));
const level = Array.from({ length: N + 1 }, () => Array(2));
const checkRoot = Array(N + 1).fill(false);

for (let i = 0; i < N; i++) {
  const nodeInfo = input[1 + i].split(" ").map(Number);
  tree[nodeInfo[0]][0] = nodeInfo[1];
  tree[nodeInfo[0]][1] = nodeInfo[2];
  checkRoot[nodeInfo[1]] = checkRoot[nodeInfo[2]] = true;
}

let root = 0;
let index = 1;

const dfs = (node, depth) => {
  if (tree[node][0] > 0) dfs(tree[node][0], depth + 1);

  if (!level[depth][0]) level[depth][0] = index++;
  else level[depth][1] = index++;

  if (tree[node][1] > 0) dfs(tree[node][1], depth + 1);
  return;
};

for (let i = 1; i < N + 1; i++) {
  if (!checkRoot[i]) {
    root = i;
    break;
  }
}

dfs(root, 1);
const ans = Array(2).fill(1);
for (let i = 1; i < N + 1; i++) {
  if (!level[i][0]) break;
  else if (!level[i][1]) continue;
  else if (level[i][1] - level[i][0] + 1 > ans[1]) {
    ans[0] = i;
    ans[1] = level[i][1] - level[i][0] + 1;
  }
}
console.log(ans.join(" "));
