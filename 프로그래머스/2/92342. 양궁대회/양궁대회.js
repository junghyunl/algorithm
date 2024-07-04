function solution(n, info) {
    var answer = [];
    
    function compareScore(arr1, arr2) {
        let compare = [0, 0];
        for (let i = 0; i < 11; i++) {
            if (arr1[i] > arr2[i]) {
                compare[0] += 10-i;
                continue;
            }
            else if (arr2[i] > 0) compare[1] += 10-i;
        }
        return compare[0] < compare[1] ? compare[1] - compare[0] : -1;
    }
    
    let rArr = new Array(11);
    for (let i = 0; i < 11; i++) rArr[i] = info[i]+1;
    
    function arrowCount(arr) {
        let total = 0;
        for (let i of arr) {
            total += rArr[i];
        }
        return total;
    }
    
    function makeArrows(arr) {
        let arrows = new Array(11).fill(0);
        for (let i of arr) {
            arrows[i] = rArr[i];
        }
        if (arrows.reduce((a,b) => a+b) < n) {
            arrows[arrows.length-1] += n - arrows.reduce((a,b) => a+b);
        }
        return arrows;
    }
    
    let maxGap = 0;
    function bt(path, option) {
        if (arrowCount(path) >= n) {
            if (arrowCount(path) > n) path.pop();
            if (compareScore(info, makeArrows(path)) > maxGap) {
                maxGap = compareScore(info, makeArrows(path));
                answer = [path];
            }
            else if (compareScore(info, makeArrows(path)) === maxGap) {
                answer.push(path);
            }
            return;
        }
        for (let i = 0; i < option.length; i++) {
            bt(path.concat(option[i]), option.slice(i+1), option[i]);
        }
    }
    bt([], [0,1,2,3,4,5,6,7,8,9,10]);
    
    answer.sort((a,b) => Math.max(...b) - Math.max(...a));
    return answer.length === 0 ? [-1] : makeArrows(answer[0]);
}