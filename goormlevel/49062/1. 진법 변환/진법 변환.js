// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let n, t;
	
	for await (const line of rl) {
		[n, t] = line.trim().split(' ');
		rl.close();
	}
	
	for (let i = 2; i <= 16; i++) {
		if (BigInt(n).toString(i).toUpperCase() === t.trim()) {
			console.log(i);
			break
		}
	}
	
	process.exit();
})();
