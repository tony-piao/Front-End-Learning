/**
 * 17: 电话号码组合
 *  https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
 * @param {*} digits eg: '23'
 */
var letterCombinations = function(digits = '') {
  if(!digits || !digits.length) return []

  const dict = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const res = []
  const nowStr = []
  const arr = digits.split('')

  const backTrace = (arr,index) => {
    if(nowStr.length === arr.length) {
      res.push(nowStr.join(''))
      return
    }

    const arr2 = dict[arr[i]]
    for (let i = 0; i < arr2.length; i++) {
      nowStr.push(arr2[i]);
      backTrace(arr, index + 1);
      nowStr.pop();
    }
  }

  backTrace(arr, 0)

  return res
}