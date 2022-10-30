/**
 * 力扣20题
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 */
function isValid(s: string): boolean {
  if(s.length === 1) {
    return false
  }

  const arr: string[] = s.split('')
  const stack: string[] = []
  const dict: {[key: string]: string} = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  for (let index = 0; index < arr.length - 1; index++){
    if(index === 0) {
      stack.push(arr[index])
    } else {
      const item: string = stack[index-1]
      if(arr[index] === dict[item]) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
};