function solution(progresses, speeds) {
    var answer = [];
    
    for (let i = 0; i < progresses.length; i++) {
        progresses[i] = Math.ceil((100-progresses[i])/speeds[i]);
    }
    let max = progresses[0], cnt = 0;
    for (let i = 0; i < progresses.length; i++) {
        if (progresses[i] <= max) {
            cnt++;
            continue;
        }
        max = progresses[i];
        answer.push(cnt);
        cnt = 1;
    }
    answer.push(cnt);
    return answer;
}