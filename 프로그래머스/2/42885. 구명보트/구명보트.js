function solution(people, limit) {
    var answer = 0;
    let i = 0, j = people.length-1;
    people.sort((a,b) => {
        return a-b;
    })
    while (i <= j) {
        if (people[i] + people[j] > limit) {
            j--;
            answer++;
            continue;
        }
        if (people[i] + people[j] <= limit) {
            i++;
            j--;
            answer++;
            continue;
        }
    }
    
    return answer;
}