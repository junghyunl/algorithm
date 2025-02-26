function solution(numbers) {
    let ans = '';
    numbers = numbers.map(String).sort((a,b) => (b+a).localeCompare(a+b));
    ans = numbers.join('');
    return ans[0] === '0' ? '0' : ans;
}