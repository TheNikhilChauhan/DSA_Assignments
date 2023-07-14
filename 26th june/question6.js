function searchTarget(nums, target){
    let start = 0;
    let end = nums.length-1;

    while(start<=end){
        const index = Math.floor((start + end) / 2) ;
        if(nums[index]=== target){
            return index;
            
        }else if(nums[index] < target){
            start++;
        }else{
            end--;
        }
    }
}

const nums = [-1,0,3,5,9,12];
const target = 9;
console.log(searchTarget(nums, target));
