// Run by Node.js
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
	const arr = 'aeiou';
	
	let result = '';
	for (let i = 1; i <= n; i++) {
		let word = '';
		for (let j of input[i]) {
			if (arr.includes(j.toLowerCase())) word += j;
		}
		result += word === '' ? '???\n' : word + '\n';
	}	

	console.log(result);
});