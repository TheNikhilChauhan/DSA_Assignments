function validMountainArray(arr) {
  if (arr.length < 3) {
    return false;
  }

  let i = 0;
  while (i < arr.length - 1 && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i === 0 || i === arr.length - 1) {
    return false;
  }

  while (i < arr.length - 1 && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === arr.length - 1;
}

const arr = [0, 2, 3, 4, 5, 2, 1, 0];
console.log(validMountainArray(arr));
