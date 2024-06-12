// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let lines = [];
	for await (const line of rl) {
		lines = line.split(' ');
		rl.close();
	}
	
	console.log('1' + '00'.repeat(lines.length));
	
	process.exit();
})();
