function solution(data, col, row_begin, row_end) {
    data.sort((a,b) => a[col-1] === b[col-1] ? b[0]-a[0] : a[col-1]-b[col-1]);
    
    let s = data[row_begin-1].map(a => a%row_begin).reduce((a,b) => a+b);
    for (let i = row_begin; i < row_end; i++) {
        s ^= (data[i].map(a => a%(i+1)).reduce((a,b) => a+b));
    }
    return s;
}