function setFlower(nums, n){
    let count = 0;

    for(i=0;i<nums.length;i++){
        if(nums[i] === 0){
            if((i === 0 ||nums[i-1]=== 0) && (i === nums.length - 1 || nums[i+1] === 0)){
            nums[i]= 1;
            count++;
           }
        }
    }
    return count >= n
}


const flowerbed= [1,0,0,0,1];
const n =1;
console.log(setFlower(flowerbed, n));