function multiplyMat(matrix1, matrix2) {
  const m = matrix1.length; // Number of rows in mat1
  const col1 = matrix1[0].length; // Number of columns in mat1
  const col2 = matrix2[0].length; // Number of columns in mat2

  // Initialize the result matrix with zeros
  const result = new Array(m);
  for (let i = 0; i < m; i++) {
    result[i] = new Array(col1);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < col1; j++) {
      let sum = 0;
      for (let index = 0; index < col2; index++) {
        const a = matrix1[i][index];
        if (a !== 0) {
          const b = matrix2[index][j];
          sum += a * b;
        }
      }
      result[i][j] = sum;
    }
  }

  return result;
}

const matrix1 = [
  [1, 0, 0],
  [-1, 0, 3],
];
const matrix2 = [
  [7, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];

const result = multiplyMat(matrix1, matrix2);
console.log(result);
