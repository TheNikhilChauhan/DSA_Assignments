function monotonic(nums){
    let count =0;
    for(i=1;i<nums.length;i++){
        if(nums[i]> nums[i-1]){
            count++;
        }
    }
    return count> 0 ? true: false;
}

const nums = [1,2,3];
console.log(monotonic(nums));


