function SummaryRanges(nums) {
  let result = [];
  let i = 0;

  while (i < nums.length) {
    let start = nums[i];
    while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) {
      i++;
    }
    if (start !== nums[i]) {
      result.push(start + "->" + nums[i]);
    } else {
      result.push(start.toString());
    }
    i++;
  }

  return result;
}

let nums = [0, 1, 2, 4, 5, 7];
let ans = SummaryRanges(nums);

console.log(ans);
