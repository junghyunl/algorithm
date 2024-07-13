function solution(numbers) {
    var answer = [];
    
    function findNum(number) {
        const bitArr = number.toString(2).split('');
        const n = bitArr.length - (bitArr.lastIndexOf('0')+1);
        
        return n >= 1 ? number + 2**n - 2**(n-1) : number + 2**n;
    }
    
    for (let i of numbers) answer.push(findNum(i));
    
    return answer;
}