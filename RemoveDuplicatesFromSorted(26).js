var removeDuplicates = function (nums) {
  let left = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[left] = nums[i];
      left = left + 1;
    }
  }

  return left;
};

let a = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5, 5]);
console.log(a);
