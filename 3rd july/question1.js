function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const newS = new Map();
  const newT = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (
      (newS.has(charS) && newS.get(charS) !== charT) ||
      (newT.has(charT) && newT.get(charT) !== charS)
    ) {
      return false;
    }

    newS.set(charS, charT);
    newT.set(charT, charS);
  }

  return true;
}

const s = "egg";
const t = "add";
console.log(isIsomorphic(s, t));
