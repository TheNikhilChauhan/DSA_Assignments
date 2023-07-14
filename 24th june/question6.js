function isRepeating(nums) {
    const newSet = new Set();//set doesn't allow duplicate element
  
    for (let num of nums) {
      if (newSet.has(num)) {
        return true;
      }else{
      newSet.add(num);
      }
    }
  
    return false;
  }
  
  const nums = [1, 2, 3, 1];
  const result = isRepeating(nums);
  console.log(result); 
  