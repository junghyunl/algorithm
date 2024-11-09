const solution = (book_time) => {
    book_time = book_time.map(a => a.map(b => {
        const [hour, minute] = b.split(':').map(Number);
        return hour*60 + minute;
    })).sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    const room = [];
    
    book_time.forEach(time => {
        let index = room.length;
        let endTime = Infinity;
        room.forEach((curRes, i) => {
            if (curRes <= time[0] && curRes < endTime) {
                index = i;
                endTime = curRes;
            }
        })
        room[index] = time[1]+10;
    })
    
    return room.length;
}