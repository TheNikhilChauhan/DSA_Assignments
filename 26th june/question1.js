function sumOfPairs(nums) {
    let sum = 0;
    // const n = nums.length / 2;
    const sortNums = nums.sort((a,b)=> a-b);

    for (let i = 0; i < sortNums.length; i+=2) {
        
        const minVal = Math.min(sortNums[i], sortNums[i + 1]);
        console.log(minVal);
        sum = sum + minVal;
        
    }
    console.log(`The sum is:${sum}`);
    
}

const nums = [1, 4, 3, 2];
sumOfPairs(nums); 

