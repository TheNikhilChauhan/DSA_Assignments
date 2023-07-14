function maxProduct(nums){
    
    let num1=0;
    let num2=0;
    let num3=0;

    for (let num of nums) {
        if (num > num1) {
          num3 = num2;
          num2 = num1;
          num1 = num;
        } else if (num > num2 && num !== num1) {
          num3 = num2;
          num2 = num;
        } else if (num > num3 && num !== num1 && num !== num2) {
          num3 = num;
        }
      }
    
      return num1 * num2 * num3;
    }

const nums = [1,2,3,4]
console.log(maxProduct(nums));