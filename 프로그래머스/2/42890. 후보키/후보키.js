function solution(relation) {
    var answer = [];
    const row = relation.length;
    
    function checkKey(arr) {
        let dict = {};
        for (let i = 0; i < row; i++) {
            let candidate = '';
            for (let j = 0; j < arr.length; j++) {
                candidate += '.'.repeat(arr[j]) + relation[i][arr[j]];
            }
            if (dict[candidate] === 1) return false;
            dict[candidate] = 1;
        }
        for (let i of answer) {
            if (i.every(a => arr.includes(a))) return false;
        }
        return true;
    }
    
    function bt(path, option) {
        if (checkKey(path)) {
            answer.push(path);
            return;
        }
        for (let i = 0; i < option.length; i++) {
            let newPath = path.concat(option[i]);
            let newOption = option.slice(i+1);
            bt(newPath, newOption);
        }
    }
    
    let column = [];
    for (let i = 0; i < relation[0].length; i++) column.push(i);
    bt([], column);
    
    answer.sort((a,b) => a.length - b.length);
    for (let i = answer.length-1; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
            if (answer[j].every(a => answer[i].includes(a))) {
                answer.splice(i,1);
                break;
            }
        }
    }
    
    return answer.length;
}
