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
	
	let result = 0;
	for (let i = 1; i <= n; i++) {
		const [c, v] = input[i].split(' ');
		if (c === 'in') result += +v;
		else if (c === 'out') result -= +v;
		if (result < 0) break;
	}
	
	console.log(result < 0 ? 'fail' : 'success');
});