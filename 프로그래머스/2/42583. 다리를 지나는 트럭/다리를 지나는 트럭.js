function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const queue = [];
    let total = 0;
    
    while (truck_weights.length > 0) {
        answer++;
        if (queue.length === bridge_length) total -= queue.shift();
        if (total + truck_weights[0] > weight) queue.push(0);
        else {
            total += truck_weights[0];
            queue.push(truck_weights.shift());
        }
    }
    answer += bridge_length;
    return answer;
}