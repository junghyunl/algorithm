const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Math.floor(+input[0] / 2);
const expression = input[1].split("").map((it) => (!isNaN(it) ? +it : it));
let ans = -Infinity;

const cal = (num1, num2, op) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
  }
};

const calExpression = (exp, flag) => {
  const stack = [exp[0]];
  for (let i = 0; i < N; i++) {
    if ((flag & (1 << i)) > 0) {
      stack.push(cal(stack.pop(), exp[i * 2 + 2], exp[i * 2 + 1]));
    } else {
      stack.push(exp[i * 2 + 1]);
      stack.push(exp[i * 2 + 2]);
    }
  }

  const newStack = [];
  for (let i = 0, len = stack.length; i < len; i++) {
    if (stack[i] === "*") {
      newStack.push(cal(newStack.pop(), stack[i + 1], "*"));
      i++;
    } else {
      newStack.push(stack[i]);
    }
  }

  let total = newStack[0];
  const len = Math.floor(newStack.length / 2);
  for (let i = 0; i < len; i++) {
    total = cal(total, newStack[i * 2 + 2], newStack[i * 2 + 1]);
  }
  return total;
};

const subset = (depth, flag) => {
  if (depth === N) {
    ans = Math.max(ans, calExpression(expression, flag));
    return;
  }

  subset(depth + 1, flag);
  if ((flag & (1 << (depth - 1))) === 0) subset(depth + 1, flag | (1 << depth));
};

subset(0, 0);
console.log(ans);
