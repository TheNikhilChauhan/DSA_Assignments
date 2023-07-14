function merge(nums1, m, nums2, n) {
    // Pointers 
    let p1 = m - 1; 
    let p2 = n - 1; 
    let index = m + n - 1; 
  
    // Merge elements from the end
    while (p1 >= 0 && p2 >= 0) {
      if (nums1[p1] >= nums2[p2]) {
        nums1[index] = nums1[p1];
        p1--;
      } else {
        nums1[index] = nums2[p2];
        p2--;
      }
      index--;
    }
  
    while (p2 >= 0) {
      nums1[index] = nums2[p2];
      p2--;
      index--;
    }
  }
  
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  
  merge(nums1, m, nums2, n);
  console.log(nums1); 
  