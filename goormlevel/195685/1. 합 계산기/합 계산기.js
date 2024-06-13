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
	
	let res = 0;
	for (let i = 0; i < n; i++) {
		const calcul = input[i+1].split(' ');
		if (calcul[1] === '+') {
			res += +calcul[0] + +calcul[2];
		}
		else if (calcul[1] === '-') {
			res += +calcul[0] - +calcul[2];
		}
		else if (calcul[1] === '*') {
			res += +calcul[0] * +calcul[2];
		}
		else if (calcul[1] === '/') {
			res += Math.floor(+calcul[0]/+calcul[2]);
		}
	}
	console.log(res);
})