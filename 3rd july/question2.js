function isStrobogrammatic(num) {
  const mapping = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };

  let rotatedNum = "";

  for (let i = num.length - 1; i >= 0; i--) {
    const digit = num[i];

    if (!mapping.hasOwnProperty(digit)) {
      return false;
    }

    rotatedNum += mapping[digit];
  }

  return num === rotatedNum;
}

const num = "69";
const result = isStrobogrammatic(num);
console.log(result);
