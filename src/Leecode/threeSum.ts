/**
 * 15. 三数之和
 *
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 */

function threeSum(nums: number[]): number[][] {
  const result: number[][] = []
  const len:number = nums.length

  if(nums === null || len < 3) return []


  const numbers: number[] = nums.sort((a, b) => a-b)

  for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] > 0) break
    if(index > 0 && numbers[index] === numbers[index-1]) continue
    let L = index + 1;
    let R = len - 1;
    while (L < R) {
      const sum = numbers[index] + numbers[L] + numbers[R];
      if(sum === 0) {
        result.push([numbers[index], numbers[L], numbers[R]])
        while (L < R && numbers[L] === numbers[L+1]) {
          L++
        }

        while (L < R && numbers[R] === numbers[R-1]) {
          R--
        }
        L++
        R--
      } else if(sum > 0) {
        R--
      } else if(sum < 0) {
        L++
      }
    }
  }

  return result
};