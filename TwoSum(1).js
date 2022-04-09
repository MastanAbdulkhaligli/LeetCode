let nums = [2, 7, 11, 15];

let target = 13;

const twoSum = (array, target) => {
  const hashtable = {};
  for (let i = 0; i < array.length; i++) {
    hashtable[nums[i]] = i;
  }
  console.log(hashtable);
  for (let j = 0; j < array.length; j++) {
    let complement = target - array[j];
    // The second condition checks for cases like twoSum([7,7], 14) where the indices of similar elements MUST be different
    if (hashtable.hasOwnProperty(complement) && hashtable[complement] !== j) {
      return [hashtable[complement], j];
    }
  }
  return null;
};

let res = twoSum(nums, target);
console.log(res);
