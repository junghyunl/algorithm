function solution(numbers, target) {
    let result = 0;
    const n = numbers.length;
    
    function bt(path, option) {
        if (path.length === n) {
            if (path.reduce((a,b) => a+b) === target) result++;
            return;
        }
        let newOption = option.slice(1);
        bt(path.concat(option[0]), newOption);
        bt(path.concat(-option[0]), newOption);
    }
    bt([], numbers);
    
    return result;
}