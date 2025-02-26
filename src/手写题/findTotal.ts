/**
  给一个无重复元素的数组arr，和一个目标值sum，找出所有和为sum的组合
  如arr为[2,3,4]，目标值sum为6，解为 [[2,2,2],[3,3],[2,4]]
  如arr为[2,3,6,7]，目标值sum为7，解为 [[7], [2,2,3]]
**/
function findTotal(arr: number[], sum: number) {
  const result: number[][] = [];
  const len = arr.length;

  const dfs = (index: number, target: number, path: number[]) => {
    if (target === 0) {
      result.push([...path]);
      return;
    }
    if (index === len || target < 0) {
      return;
    }
    for (let i = index; i < len; i++) {
      path.push(arr[i]);
      dfs(i, target - arr[i], path);
      path.pop();
    }
  };
  dfs(0, sum, []);
  return result;
}

const testResult = findTotal([2, 3, 4], 6);
console.log(JSON.stringify(testResult));


