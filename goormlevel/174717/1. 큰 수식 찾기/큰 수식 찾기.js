// Run by Node.js
const readline = require('readline');

function solution(s) {
	let numbers = s.split(/[^0-9]/).map(Number);
	let math = s.split(/[0-9]/).filter(a => a !== '');
	
	while (math.includes('*')) {
		const n = math.indexOf('*');
		numbers[n] = numbers[n] * numbers[n+1];
		numbers.splice(n+1,1);
		math.splice(n,1);
	}
	
	for (let i = 0; i < math.length; i++) {
		if (math[i] === '+') {
			numbers.unshift(numbers.shift() + numbers.shift());
			continue;
		}
		if (math[i] === '-') {
			numbers.unshift(numbers.shift() - numbers.shift());
			continue;
		}
	}
	return numbers.pop();
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let A, B;
	for await (const line of rl) {
		[A, B] = line.trim().split(' ');
		rl.close();
	}
	
	const [a, b] = [solution(A), solution(B)];
	console.log(a > b ? a : b);
	
	process.exit();
})();
