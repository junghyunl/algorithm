const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const [n, c] = input[0].split(' ').map(Number);
	const keyboard = input[1].split(' ').map(Number);
	
	let result = 1;
	for (let i = 1; i < n; i++) {
		if (keyboard[i] - keyboard[i-1] > c) result = 0;
		result++;
	}
	
	console.log(result);
});