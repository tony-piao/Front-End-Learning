/**
 * 34题 【中等难度】
 * https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/?favorite=2cktkvj
 *
 */
var searchRange = function (nums, target) {
  let ans = [-1, -1]
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;

  console.log('left', leftIdx)
  console.log('right', rightIdx)

  if(leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
    ans = [leftIdx, rightIdx]
  }

  return ans
};


const binarySearch = (nums, target, lower) => {
  let left = 0;
  let right = nums.length - 1;
  let ans = nums.length

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if(nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1
      ans = mid
    } else {
      left = mid + 1
    }
  }

  return ans
}

const result = searchRange([5, 7, 7, 8, 8, 10], 8);
console.log('result', result)