const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input[0]; i++) {
    let arr = input[i+1].split(' ');
    for (let j = 0; j < arr.length; j++) {
        arr[j] = arr[j].split('').reverse().join('');
    }
    console.log(arr.join(' '));
}