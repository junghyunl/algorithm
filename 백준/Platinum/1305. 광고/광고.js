const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, str] = [+input[0], input[1].replace("\r", "")];

const getPi = (pattern) => {
  const pi = Array(N).fill(0);
  let j = 0;

  for (let i = 1; i < N; i++) {
    while (j > 0 && pattern[i] !== pattern[j]) {
      j = pi[j - 1];
    }
    if (pattern[i] === pattern[j]) {
      pi[i] = ++j;
    }
  }
  return pi;
};

console.log(N - getPi(str)[N - 1]);
