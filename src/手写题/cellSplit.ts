/**
 * 细胞分裂 有一个细胞 每一个小时分裂一次，一次分裂一个子细胞，第三个小时后会死亡。那么n个小时候有多少细胞？
 */
function cellSplit(n: number) {

  function dieCell(n: number): number {
    if(n < 4) return 0;
    // 那么 这个小时(n)死去的细胞 + 上个小时(n-1)死去的细胞 + 前两个小时(n-2)死去的细胞 = 前三个小时(n-3)活着的细胞
    return liveCell(n-3) - dieCell(n-1) - dieCell(n-2);
  }

  function liveCell(n: number): number {
    if(n === 0) return 0;
    if(n < 4) {
      return Math.pow(2, n-1)
    } else {

      return liveCell(n-1) * 2 - dieCell(n);
    }
  }

  return liveCell(n);
}

console.log(cellSplit(6));
