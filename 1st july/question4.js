function maxLength(num) {
  let len = 0;
  let count = 0;
  const newArray = new Map();

  for (let i = 0; i < num.length; i++) {
    count += num[i] === 0 ? -1 : 1;

    if (newArray.has(count)) {
      len = Math.max(len, i - newArray.get(count));
    } else {
      newArray.set(count, i);
    }
  }
  return len;
}

const num = [0, 1];
console.log(maxLength(num));
