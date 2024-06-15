// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = [];
	for await (const line of rl) {
		input.push(line);
	}
	const n = Number(input[0]);
	
	let price = [];
	for (let i = 0; i < n; i++) {
		const [v, w] = input[i+1].split(' ').map(Number);
		price.push([Math.floor(v*w*10)/10, i+1]);
	}
	price.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
	console.log(price.map(a => a[1]).join(' '));
	
})();

