const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const numbers = input[0].split(" ").map(Number);
const N = numbers.length;
const INF = Infinity;

const dp = Array.from({ length: N }, () =>
  Array.from({ length: 5 }, () => Array(5).fill(INF))
);
dp[0][0][0] = 0;

const move = (prev, next) => {
  if (prev === 0) return 2;
  if (prev === next) return 1;
  if (Math.abs(prev - next) === 2) return 4;
  return 3;
};

for (let i = 1; i < N; i++) {
  const num = numbers[i - 1];

  for (let j = 0; j < 5; j++) {
    for (let k = 0; k < 5; k++) {
      if (dp[i - 1][j][k] === INF) continue;

      dp[i][num][k] = Math.min(dp[i][num][k], dp[i - 1][j][k] + move(j, num));
      dp[i][j][num] = Math.min(dp[i][j][num], dp[i - 1][j][k] + move(k, num));
    }
  }
}

let ans = INF;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    ans = Math.min(ans, dp[N - 1][i][j]);
  }
}

console.log(ans);
