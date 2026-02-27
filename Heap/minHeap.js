class MinHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(i) {
        return Math.floor((i-1) / 2)
    }
    getLeftChildIndex(i) {
        return 2*i+1
    }
    getRightChildIndex(i) {
        return this.getLeftChildIndex(i)+1
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    insert(number) {
        this.heap.push(number)
        this.heapifyUp()
    }
    erase() {
        if (!this.heap.length) return Infinity
        if (this.heap.length === 1) return this.heap.pop()
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return min        
    }
    heapifyUp() {
        let index = this.heap.length - 1
        while (index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(index, this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }
    heapifyDown() {
        let index = 0
        let length = this.heap.length
        while (this.getLeftChildIndex(index) < length) {
            let rightChildIndex = this.getRightChildIndex(index)
            let smallerChildIndex = this.getLeftChildIndex(index)
            if (rightChildIndex < length && this.heap[smallerChildIndex] > this.heap[rightChildIndex]) {
                smallerChildIndex = rightChildIndex
            }
            if (this.heap[index] <= this.heap[smallerChildIndex]) break
            this.swap(index, smallerChildIndex)
            index = smallerChildIndex
        }
    }
    peak() {
        return this.heap.length === 0 ? null : this.heap[0]
    }
    size() {
        return this.heap.length
    }
}


const heap = new MinHeap()

const arr = [10,11,13,3,12,7,6]

arr.forEach(val => heap.insert(val))
while (heap.size()) {
    console.log(heap.erase())
}