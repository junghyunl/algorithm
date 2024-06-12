let dict = {};
let numbers = '';

for (let i = 1; i < 10000; i++) {
    dict[i + i.toString().split('').map(Number).reduce((a,b) => a+b,0)] = 1;
}

for (let i = 1; i <= 10000; i++) {
    if (dict[i]) continue;
    numbers += i + '\n';
}

console.log(numbers);