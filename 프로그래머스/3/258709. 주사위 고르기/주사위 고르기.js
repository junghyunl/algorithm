function solution(dice) {
    
    const N = dice.length;
    
    let maxCnt = 0, ansFlag = 0, input = [], ans = [];
    
    const makeSumArr = (inputArr) => {
        let arr = dice[inputArr[0]];
        
        for (let i = 1; i < N/2; i++) {
            const curDice = dice[inputArr[i]];
            const totalDiceValue = [];
            
            arr.forEach((item) => {
                curDice.forEach((dice) => {
                    totalDiceValue.push(item+dice);
                })
            })
            
            arr = totalDiceValue.slice();
        }
        
        return arr;
    }
    
    const makeAnotherArr = (arr) => {
        const anotherArr = [];
        
        for (let i = 0; i < N; i++) {
            if (!arr.includes(i)) anotherArr.push(i);
        }
        
        return anotherArr;
    }
    
    const combi = (depth, start) => {
        if (depth === N/2) {
            let cnt = 0;
            
            const Aarr = makeSumArr(input);
            const Barr = makeSumArr(makeAnotherArr(input));
            
            Aarr.sort((a,b) => a-b);
            Barr.sort((a,b) => a-b);
            
            const M = Aarr.length;
            
            let right = 0;
            
            for (let i = 0; i < M; i++) {
                while (Barr[right] < Aarr[i] && right < M) {
                    right++;
                }
                cnt += right;
            }
            
            if (cnt > maxCnt) {
                maxCnt = cnt;
                ans = input.slice();
            }
            return;
        }
        for (let i = start; i < N; i++) {
            input[depth] = i;
            combi(depth+1, i+1);
        }
    }
    
    combi(0,0);
    
    return ans.map(a => a+1);
}