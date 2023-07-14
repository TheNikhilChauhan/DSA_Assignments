function addOne(digits) {
    const num = digits.length;
  
    // Starting from the rightmost digit
    for (let i = num - 1; i >= 0; i--) {
      digits[i]++;
  
      if (digits[i] < 10) {
        return digits;
      }
      digits[i] = 0;
    }
  
    digits.unshift(1);
  
    return digits;
  }
  
  
  const digits = [1, 2, 3];
  const result = addOne(digits);
  console.log(result); 
  