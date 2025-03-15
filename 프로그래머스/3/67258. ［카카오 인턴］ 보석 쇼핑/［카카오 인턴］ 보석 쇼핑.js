function solution(gems) {
    
    const jewelry = new Set();
    const jewelryCnt = {};
    
    gems.forEach(item => jewelry.add(item));
    
    const N = gems.length, M = jewelry.size;
    
    jewelry.forEach(item => jewelryCnt[item] = 0)
    
    let left = 0, right = 0;
    const ans = [0, N-1];
    
    let cnt = 0;
    while (right < N && cnt < M) {
        if (!jewelryCnt[gems[right]]) cnt++;
        jewelryCnt[gems[right++]]++;
    }
    
    while (left < N && right < N) {
        while (left < right && jewelryCnt[gems[left]] > 1) {
            jewelryCnt[gems[left++]]--;
        }
        if (right - left-1 < ans[1]-ans[0]) {
            [ans[0], ans[1]] = [left, right-1]
        }
        jewelryCnt[gems[right++]]++;
    }
    while (left < right && jewelryCnt[gems[left]] > 1) {
        jewelryCnt[gems[left++]]--;
    }
    if (right - left-1 < ans[1]-ans[0]) {
        [ans[0], ans[1]] = [left, right-1]
    }
    
    return ans.map(a => a+1);
}