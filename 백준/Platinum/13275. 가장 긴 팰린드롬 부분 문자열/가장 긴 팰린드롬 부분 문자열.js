const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim();

input = "#" + input.split("").join("#") + "#";
const N = input.length;
const A = Array(N).fill(0);

const manacher = (str) => {
  let [r, p] = [0, 0];
  for (let i = 0; i < N; i++) {
    if (i <= r) {
      A[i] = Math.min(A[p * 2 - i], r - i);
    } else {
      A[i] = 0;
    }

    while (
      i - A[i] - 1 >= 0 &&
      i + A[i] + 1 < N &&
      str[i - A[i] - 1] === str[i + A[i] + 1]
    ) {
      A[i]++;
    }

    if (r < i + A[i]) {
      r = i + A[i];
      p = i;
    }
  }
};

manacher(input);
console.log(Math.max(...A));