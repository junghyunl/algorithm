class MinHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    poll() {
        if (this.size() === 1) {
            return this.heap.pop();
        }
        
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }
    
    bubbleUp() {
        let index = this.size() - 1;
        let parentIdx = Math.floor((index-1)/2);
        
        while (this.heap[parentIdx] && this.compare(this.heap[index], this.heap[parentIdx])<0) {
            this.swap(index, parentIdx);
            index = parentIdx;
            parentIdx = Math.floor((index-1)/2);
        }
    }
    
    bubbleDown() {
        let index = 0;
        let leftIdx = index*2+1;
        let rightIdx = index*2+2;
        
        while ((this.heap[leftIdx] && this.compare(this.heap[leftIdx], this.heap[index])<0) || (
               (this.heap[rightIdx] && this.compare(this.heap[rightIdx], this.heap[index])<0))) {
            let smallerIdx = leftIdx;
            if (this.heap[rightIdx] && this.compare(this.heap[rightIdx], this.heap[smallerIdx])<0) {
                smallerIdx = rightIdx;
            }
            
            this.swap(index, smallerIdx);
            index = smallerIdx;
            leftIdx = index*2+1;
            rightIdx = index*2+2;
        }
    }
}

function solution(jobs) {
    
    const heap = new MinHeap((a,b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
        return a[2] - b[2];
    })
    
    const N = jobs.length;
    jobs.sort((a,b) => {
        return a[0] === b[0] ? a[1]-b[1] : a[0]-b[0];
    });
    
    let ans = 0;
    let time = jobs[0][0];
    jobs.push([1000001, 0]);
    for (let i = 0; i < N; i++) {
        heap.add([jobs[i][1], jobs[i][0], i]);
        while (heap.size() && time < jobs[i+1][0]) {
            const task = heap.poll();
            time = Math.max(time, task[1]) + task[0];
            ans += time-task[1];
        }
    }
    
    return Math.floor(ans/N);
}