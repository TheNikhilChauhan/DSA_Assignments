function minProductSum(nums1, nums2) {
  let temp = 0;
  let left = 0;
  let right = nums1.length - 1;
  let minProductSum = 0;

  temp = nums1[0];
  nums1[0] = nums1[1];
  nums1[1] = temp;
  while (left <= right) {
    minProductSum += nums1[left] * nums2[left];
    left++;
  }

  return minProductSum;
}

const nums1 = [5, 3, 4, 2];
const nums2 = [4, 2, 2, 5];

console.log(minProductSum(nums1, nums2));
