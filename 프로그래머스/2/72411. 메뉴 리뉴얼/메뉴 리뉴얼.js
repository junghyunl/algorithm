function solution(orders, course) {
    var answer = [];
    
    let dict = {};
    function bt (path, order, n) {
        if (path.length === n) {
            dict[path] = (dict[path] || 0) + 1;
            return;
        }
        for (let i = 0; i < order.length; i++) {
            let newPath = path + order[i];
            let newOrder = order.slice(i+1);
            bt(newPath, newOrder, n);
        }
    }
    
    for (let i = 0; i < orders.length; i++) {
        orders[i] = orders[i].split('').sort().join('');
        for (let j = 2; j <= orders[i].length; j++) {
            if (!course.includes(j)) continue;
            bt('', orders[i], j);
        }
    }
    
    for (let i of course) {
        let arr = Object.entries(dict).filter(([a,b]) => a.length === i);
        let maxValue = Math.max(...arr.map(([a,b]) => b));
        if (maxValue > 1) answer = answer.concat(arr.filter(([a,b]) => b === maxValue).map(([a,b]) => a));
    }
    
    answer = answer.sort();
    return answer;
}