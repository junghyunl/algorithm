// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({ 
	input: process.stdin,
	output: process.stdout
});
let input = [];
rl.on('line', (line) => {
	input.push(line);
}).on ('close', () => {
	const n = +input[0];
	const friends = input[1].trim().split(' ');
	let dict = {};
	for (let i = 0; i < n; i++) {
		dict[friends[i]] = (dict[friends[i]] || 0) + 1;
	}
	
	
	console.log(dict[input[2].trim()] ? dict[input[2].trim()] : 0);
});
