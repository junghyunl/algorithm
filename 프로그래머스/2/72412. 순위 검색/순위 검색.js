function solution(info, query) {
    
    const language = ["cpp", "java", "python", "-"];
    const field = ["backend", "frontend", "-"];
    const experience = ["junior", "senior", "-"];
    const food = ["chicken", "pizza", "-"];
    const keys = [];
    
    const totalInfo = {};
    language.forEach(lanItem => {
        field.forEach(fieldItem => {
            experience.forEach(exItem => {
                food.forEach(foodItem => {
                    keys.push(lanItem+fieldItem+exItem+foodItem);
                })
            })
        })
    })
    
    keys.forEach(item => totalInfo[item] = {score:[]})
    
    const register = (infoArr) => {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                for (let k = 0; k < 2; k++) {
                    for (let l = 0; l < 2; l++) {
                        totalInfo[(i?infoArr[0]:"-") + (j?infoArr[1]:"-") + (k?infoArr[2]:"-") + (l?infoArr[3]:"-")].score.push(+infoArr[4]);
                    }
                }
            }
        }
    }
    
    info.forEach(item => register(item.split(' ')));
    
    keys.forEach(item => {
        totalInfo[item].score.sort((a,b) => a-b);
        totalInfo[item].size = totalInfo[item].score.length;
    })
    
    const binarySearch = (arr, start, end, value) => {
        
        let result = end+1;
        
        while (start <= end) {
            const mid = Math.floor((start+end)/2);
            if (arr[mid] < value) {
                start = mid+1;
            } else {
                result = mid;
                end = mid-1;
            }
        }        
        return result;
    }
    
    const ans = [];
    query.forEach(item => {
        const infoQuery = item.split(' ');
        const [key, score] = [infoQuery[0]+infoQuery[2]+infoQuery[4]+infoQuery[6], +infoQuery[7]];
        ans.push(totalInfo[key].size-binarySearch(totalInfo[key].score, 0, totalInfo[key].size-1, score));
    })
    
    return ans;
}