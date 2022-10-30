class Stack {
  constructor() {
    this.dataSource = [];
    this.top = 0;
  }

  push() {
    this.dataSource[this.top++] = element;
  }

  peek() {
    return this.dataSource[this.top - 1];
  }

  pop() {
    return this.dataSource[--this.top]
  }

  clear() {
    this.top = 0;
  }

  length() {
    return this.top
  }
}