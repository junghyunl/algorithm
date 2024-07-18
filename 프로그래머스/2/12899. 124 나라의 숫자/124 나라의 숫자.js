function solution(n) {
    let total = n;
    let num = 2;
    
    let i = 1;
    while (total - 3**i > 0) {
        total -= 3**i;
        num += 3**i;
        i++;
    }
        
    return (n+num).toString(3).replace(/2/g,'4').replace(/1/g,'2').replace(/0/g,'1').slice(1);
}