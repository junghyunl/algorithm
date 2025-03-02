class Heap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    isEmpty() {
        return !this.size();
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    removeFirst() {
        if (this.isEmpty()) return null;
        if (this.size() === 1) {
            return this.heap.pop();
        }
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }
    
    removeLast() {
        if (this.isEmpty()) return null;
        return this.heap.pop();
    }
    
    bubbleUp() {
        let index = this.size()-1;
        let parentIdx = Math.floor((index-1)/2);
        
        while (parentIdx >= 0 && this.heap[index] < this.heap[parentIdx]) {
            this.swap(index, parentIdx);
            index = parentIdx;
            parentIdx = Math.floor((index-1)/2);
        }
    }
    
    bubbleDown() {
        let index = 0;
        let leftIdx = index*2+1;
        let rightIdx = index*2+2;
        const n = this.size();
        
        while ((leftIdx < n && this.heap[leftIdx] < this.heap[index]) || (rightIdx < n && this.heap[rightIdx] < this.heap[index])) {
            let smallerIdx = leftIdx;
            
            if (rightIdx < n && this.heap[rightIdx] < this.heap[smallerIdx]) {
                smallerIdx = rightIdx;
            }
            
            this.swap(index, smallerIdx);
            index = smallerIdx;
            leftIdx = index*2+1;
            rightIdx = index*2+2;
        }
    }
}

function solution(operations) {
    
    const N = operations.length;
    const heap = new Heap();
    
    let ansans = ''
    
    for (let i = 0; i < N; i++) {
        const [op, num] = operations[i].split(' ');
        if (op === 'I') {
            heap.add(Number(num));
        } else {
            if (num === '1') {
                heap.heap.sort((a,b) => a-b);
                heap.removeLast();
            } else {
                heap.removeFirst();
            }
        }
    }
    
    let ans = [];
    heap.heap.sort((a,b) => a-b);
    ans.push(heap.removeLast());
    ans.push(heap.removeFirst());
    if (ans[0] === null) return [0, 0];
    else if (ans[1] === null) return [ans[0], ans[0]];
    return ans;
}