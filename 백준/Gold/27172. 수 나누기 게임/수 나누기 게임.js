const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const N = +input[0];
const cards = input[1].split(' ').map(Number);
const score = {};

for (let number of cards) {
  score[number] = 0;
}

for (let number of cards) {
  for (let i = number*2; i < 1000001; i+=number) {
    if (!isNaN(score[i])) {
      score[i]--;
      score[number]++;
    }
  }
}

let ans = '';
for (let number of cards) {
  ans += score[number] + ' ';
}
console.log(ans);