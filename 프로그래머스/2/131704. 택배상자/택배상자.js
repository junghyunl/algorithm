function solution(order) {
    var answer = 0;
    const n = order.length;
    const container = [];
    
    let box = 1;
    for (let i = 0; i < n; i++) {
        while (box < order[i]) {
            container.push(box);
            box++;
        }
        if (box === order[i]) {
            answer++;
            box++;
        } else if (order[i] < box) {
            if (container.pop() === order[i]) answer++;
            else break;
        }
    }
    return answer;
}