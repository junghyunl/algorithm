function solution(diffs, times, limit) {
    const solveTime = {};
    const N = diffs.length;
    limit -= times[0];
    for (let i = 1; i < N; i++) {
        const wrongTime = times[i-1] + times[i];
        solveTime[diffs[i]] = solveTime[diffs[i]] + wrongTime || wrongTime;
        limit -= times[i];
    }
    
    const sortedDiffs = Object.keys(solveTime).map(Number).sort((a,b) => b-a);
    const M = sortedDiffs.length;
    sortedDiffs.push(1);
    let ans = sortedDiffs[0], timePrev = 0;
    for (let i = 0; i < M; i++) {
        timePrev += solveTime[sortedDiffs[i]];
        if ((ans-sortedDiffs[i+1])*timePrev > limit) {
            ans -= Math.floor(limit/timePrev);
            break;
        } else {
            limit -= (ans-sortedDiffs[i+1])*timePrev;
            ans = sortedDiffs[i+1];
        }
    }
    return ans;
}