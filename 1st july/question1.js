function findPermutation(s) {
  const n = s.length;
  const perm = [];

  let low = 0;
  let high = n;

  for (let i = 0; i < n; i++) {
    if (s[i] === "I") {
      perm[i] = low++;
    }
    if (s[i] === "D") {
      perm[i] = high--;
    }
  }

  return perm;
}

const s = "IDID";
const perm = findPermutation(s);
console.log(perm);
