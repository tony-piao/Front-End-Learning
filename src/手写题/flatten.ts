/**
 * flatten([1, 2, 3, [4, [5, 6,[7, [8, [9], [10]]]]]]);//[1,2,3,4,5,6,7,8,9,10]
 */
function flatten(arr: any[]) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

console.log(flatten([1, 2, 3, [4, [5, 6, [7, [8, [9], [10]]]]]]))
