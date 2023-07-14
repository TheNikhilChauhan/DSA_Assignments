function singleNumber(nums) {
  let result = 0;

  for (let num of nums) {
    result ^= num; //XOR is used : Xor two equal nums results in 0
  }

  return result;
}

const nums = [2, 2, 1];
const result = singleNumber(nums);
console.log(result);
