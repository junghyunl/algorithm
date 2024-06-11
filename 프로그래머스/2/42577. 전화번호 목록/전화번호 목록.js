function solution(phone_book) {
    phone_book.sort((a, b) => a.localeCompare(b));
    let dict = {};
    
    for (let i of phone_book) {
        for (let j = 1; j <= i.length; j++) {
            if (dict[i.slice(0,j)]) return false;
        }
        dict[i] = 1;
    }
    return true;
}