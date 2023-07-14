function sum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return []; // if we don't get any solution
  }
  
  
  const nums = [2, 7, 5,4, 11, 15];
  const target = 9;
  const result = sum(nums, target);
  console.log(result); // Output: [0, 1]
  


  