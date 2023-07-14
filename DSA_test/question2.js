function unique(s) {
    const count = {};

    for (let i = 0; i < s.length; i++) {
      const letter = s[i];
      count[letter] = count[letter] + 1 || 1;
    }
  
    for (let i = 0; i < s.length; i++) {
      const letter = s[i];
      if (count[letter] === 1) {
        return i;
      }
    }
    return -1;
  }
  
  console.log(unique("leetcode"));       
  console.log(unique("loveleetcode"));   
  console.log(unique("aabb"));           
  