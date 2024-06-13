// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input;
	
	for await (const line of rl) {
		input = line;
		rl.close();
	}
	
	let result = '';
	for (let i = 1; i <= Number(input)**2; i++) {
		result += i.toString();
		if (i%Number(input) === 0) {
			result += '\n';
			continue;
		}
		result += ' ';
	}
	console.log(result);
	
	process.exit();
})();
