class Queue {
  constructor() {
    this.dataStore = [];
  }

  enqueue(element) {
    this.dataStore.push(element)
  }

  dequeue() {
    return this.dataStore.shift()
  }

  front() {
    return this.dataStore[0]
  }

  back() {
    return this.dataStore[this.dataStore.length - 1]
  }

  toString() {
    let str = '';
    for (let index = 0; index < this.dataStore.length; index++) {
      str = str + this.dataStore[index] + '\n';
    }
    return str;
  }

  empty() {
    if (this.dataStore.length === 0) {
      return true
    }
    return false
  }
}