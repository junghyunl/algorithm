function solution(str1, str2) {
    let str1Set = [];
    let str2Set = [];
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let AnB = 0;
    
    for (let i = 0; i < str1.length-1; i++) {
        if (str1.slice(i,i+2).replace(/[^a-z]/g, '').length === 2) str1Set.push(str1.slice(i,i+2));
    }
    for (let i = 0; i < str2.length-1; i++) {
        if (str2.slice(i,i+2).replace(/[^a-z]/g, '').length === 2) str2Set.push(str2.slice(i,i+2));
    }
    if (str1Set.length === 0 && str2Set.length === 0) return 65536;
    
    for (let i of Array.from(new Set(str1Set))) {
        AnB += Math.min(str1Set.filter(a => a === i).length, str2Set.filter(a => a === i).length)
    }
    return str1Set.length + str2Set.length - AnB === 0 ? 65536 : Math.floor(AnB/(str1Set.length + str2Set.length - AnB)*65536);
}