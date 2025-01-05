const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, M] = [+input[0], +input[2]];
const weights = input[1].split(" ").map(Number);
const marbles = input[3].split(" ").map(Number);
const set = new Set();
const stack = [];

weights.forEach((item) => {
  set.forEach((weight) => {
    stack.push(Math.abs(weight - item));
    stack.push(weight + item);
  });
  stack.push(item);

  stack.forEach((weight) => {
    set.add(weight);
  });
});

let ans = "";
marbles.forEach((item) => (ans += set.has(item) ? "Y " : "N "));
console.log(ans);
