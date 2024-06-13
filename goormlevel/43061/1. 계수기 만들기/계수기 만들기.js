// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];
rl.on("line", function(line) {
	input.push(line);
}).on("close", function() {
	const [n, k] = [Number(input[0]), Number(input[3])];
	const max = input[1].split(' ').map(Number);
	let value = input[2].split(' ').map(Number);
	
	value[n-1] += k;
	for (let i = n-1; i >= 0 ; i--) {
		if (i > 0) value[i-1] += Math.floor(value[i]/(max[i]+1));
		value[i] %= max[i]+1;
	}
	
	console.log(value.join(''));
	process.exit();
});