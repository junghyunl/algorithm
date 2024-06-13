function solution(msg) {
    var answer = [];
    let dict = {};
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     for (let i = 0; i < alphabet.length; i++) {
        dict[alphabet[i]] = i+1;
     }
    let word = '';
    let number = 27;
    for (let i = 0; i < msg.length; i++) {
        word += msg[i];
        if (dict[word] && !dict[word + msg[i+1]]) {
            answer.push(dict[word]);
            dict[word + msg[i+1]] = number;
            number++;
            word = '';
        }
        
    }
    
    return answer;
}