const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const n = +input[0];
	let score = [0, 0];
	for (let i = 0; i < n; i++) {
		if (input[i+1] === 'D') {
			score[0]++;
		}
		else if (input[i+1] === 'P') {
			score[1]++;
		}
		if (Math.abs(score[0]-score[1]) > 1) {
			break;
		}
	}
	console.log(score.join(':'))
});