function solution(files) {
    let fileName = [];
    for (let i = 0; i < files.length; i++) {
        fileName.push({
            head: files[i].split(/[0-9]/)[0], 
            number: +files[i].split(/[^0-9]/).filter(Boolean)[0].slice(0,5),
            index : i,
            name: files[i]
        })
    }
    fileName.sort((a,b) => {
        if(a['head'].toLowerCase() === b['head'].toLowerCase()) {
            if (a['number'] === b['number']) return a['index'] - b['index'];
            return a['number'] - b['number'];
        }
        return a['head'].toLowerCase().localeCompare(b['head'].toLowerCase());
    })
    return fileName.map((a => a['name']));
}