function move(nums) {
    // both pointers start from the same position
    let left = 0;
    let right = 0;
  
    while (right < nums.length) {
      if (nums[right] !== 0) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++; //if left is swaped then only it will be incremented.
      }
      right++; //if right is zero or non-zero we'll always increment it.
    }
  
    //ensuring that all the elements after left are zero
    for (let i = left; i < nums.length; i++) {
      nums[i] = 0;
    }
  }
  
  const nums = [0, 1, 0, 3, 12];
  move(nums);
  console.log(nums); 
  