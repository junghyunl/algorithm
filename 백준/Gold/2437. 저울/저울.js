const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let ans = 1;

for (let num of numbers) {
  if (num > ans) break;
  ans += num;
}

console.log(ans);
