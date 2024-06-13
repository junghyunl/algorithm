const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line);
	
});

rl.on('close', () => {
	
	const [n, k] = input[0].split(' ').map(Number);
	let ground = [];
	let bomb = Array.from({length: n}, () => Array(n).fill(0));
	for (let i = 0; i < n; i++) {
		ground.push(input[1+i].split(' '));
	}

	const dx = [-1,1,0,0,0];
	const dy = [0,0,-1,1,0];

	for (let i = 0; i < k; i++) {
		const [x, y] = input[n+1+i].split(' ').map(Number);
		for (let j = 0; j < 5; j++) {
			const nx = (x-1) + dx[j];
			const ny = (y-1) + dy[j];

			if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
			if (ground[nx][ny] === '#') continue;
			if (ground[nx][ny] === '@') {
				bomb[nx][ny]+=2;
				continue
			}
			bomb[nx][ny]++;
		}
	}
	let maxValue = [];
	bomb.forEach( i => maxValue.push(Math.max(...i)));
	
	console.log(Math.max(...maxValue));
})