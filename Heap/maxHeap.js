class MaxHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(index) {
        return Math.floor(index - 1 / 2)
    }
    getLeftChildIndex(index) {
        return (index * 2) + 1
    }
    getRightChildIndex(index) {
        return (index * 2) + 2
    }
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    size() {
        return this.heap.length
    }
    peak() {
        return this.heap.length === 0 ? null : this.heap.at(0)
    }
    push(value) {
        this.heap.push(value)
        this.heapifyUp()
    }
    pop() {
        if (this.size() === 0) return null
        if (this.size() === 1) return this.heap.pop()
        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return max
    }
    heapifyUp() {
        let parentIndex = this.getParentIndex(this.size() - 1)
        let currentIndex = this.size() - 1
        while (this.heap[parentIndex] < this.heap[currentIndex] && currentIndex > 0) {
            this.swap(parentIndex, currentIndex)
            currentIndex = parentIndex
            parentIndex = this.getParentIndex(parentIndex)
        }
    }
    heapifyDown() {
        let currentIndex = 0
        const size = this.size()

        while (this.getLeftChildIndex(currentIndex) < size) {

            let greaterChildIndex = this.getLeftChildIndex(currentIndex)
            const rightChildIndex = this.getRightChildIndex(currentIndex)

            // choose larger child FIRST
            if (
                rightChildIndex < size &&
                this.heap[rightChildIndex] > this.heap[greaterChildIndex]
            ) {
                greaterChildIndex = rightChildIndex
            }

            // then compare with parent
            if (this.heap[currentIndex] >= this.heap[greaterChildIndex]) break

            this.swap(currentIndex, greaterChildIndex)
            currentIndex = greaterChildIndex
        }
    }
}

    // const mxHeap = new MaxHeap()

    // const array = [16,5,10,19,20]

    // array.forEach((val) => mxHeap.push(val))
    // while (mxHeap.size()) {
    //     console.log(mxHeap.pop())
    // }

    const mxHeap = new MaxHeap()

        ;[100, 40, 90, 10, 20, 95].forEach(v => mxHeap.push(v))

console.log(mxHeap.heap)
console.log(mxHeap.pop())
console.log(mxHeap.heap)