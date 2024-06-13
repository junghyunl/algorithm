// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({ 
	input: process.stdin,
	output: process.stdout
});
let input;
rl.on('line', (line) => {
	input = line;
}).on('close', () => {
	const [n, m] = input.split(' ').map(Number);
	
	let result = '';
	let snake = '#' + '.'.repeat(m-1);
	for (let i = 0; i < n; i++) {
		if (i%2 === 0) {
			result += '#'.repeat(m) + '\n';
			snake = snake.split('').reverse().join('');
			continue;
		}
		result += snake + '\n';
	}
	
	console.log(result);
});
