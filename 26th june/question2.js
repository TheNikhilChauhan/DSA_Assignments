function eachType(nums){
    const newSet = new Set();

    for(i=0;i<nums.length;i++){
        newSet.add(nums[i]);
    }
    return newSet.size;
}

const candyType = [1,1,2,2,3,3]
console.log(eachType(candyType));