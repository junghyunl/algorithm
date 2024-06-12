// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let lines = [];
	
	for await (const line of rl) {
		lines.push(line);
		
		if (lines.length === 3) rl.close();
	}
	
	solution(Number(lines[0]), lines[1].split(' ').map(Number), lines[2].split(' ').map(Number));
	
	process.exit();
})();

function solution(n, A, B) {
	let dictA = {};
	let dictB = {};
	
	for (let i = 0; i < n; i++) {
		dictA[A[i]] = (dictA[A[i]] || 0) + 1;
		dictB[B[i]] = (dictB[B[i]] || 0) + 1;
	}
	
	let [numA, maxA, numB, maxB] = [-1, -1, -1, -1];
	
	for (let i = -1; i < 99999; i++) {
		let cntA = (dictA[i-2] || 0) + (dictA[i-1] || 0) + (dictA[i] || 0) + (dictA[i+1] || 0) + (dictA[i+2] || 0);
		let cntB = (dictB[i-2] || 0) + (dictB[i-1] || 0) + (dictB[i] || 0) + (dictB[i+1] || 0) + (dictB[i+2] || 0);
		if (cntA > maxA) {
			maxA = cntA;
			numA = i;
		}
		if (cntB > maxB) {
			maxB = cntB;
			numB = i;
		}
	}
	
	console.log(numA + ' ' + numB);
	console.log(numA > numB ? 'good' : 'bad');
}