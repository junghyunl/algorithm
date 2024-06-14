function solution(fees, records) {
    var answer = [];
    let dict = {};
    
    function clock(s) {
        const [hour, minute] = s.split(':').map(Number);
        return hour*60 + minute;
    }
    
    for (let i = 0; i < records.length; i++) {
        const time = records[i].split(' ');
        if (!dict[time[1]]) dict[time[1]] = [];
        dict[time[1]].push(time[0]);
    }
    
    let carNumber = Object.keys(dict).sort();
    for(let i = 0; i < carNumber.length; i++) {
        let fee = 0;
        for (let j = 0; j < dict[carNumber[i]].length; j++) { 
            fee += clock(dict[carNumber[i]][j+1] || '23:59') - clock(dict[carNumber[i]][j]);
            j++;
        }
        carNumber[i] = fees[1] + ((fee - fees[0] > 0) ? Math.ceil((fee - fees[0])/fees[2])*fees[3] : 0);
    }
    
    
    return carNumber;
}