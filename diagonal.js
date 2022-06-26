//it is not sequare matrix because it has not the same row and cols
// const input = [ [3], [11, 2, 4], [4, 5, 6], [10, 8, -12]];

//if the total row and col is equal thats when it is called square matrix
const input = [ [11, 2, 4], [4, 5, 6], [10, 8, -12]];

const dimensional = (arr) => {
  let n = arr.length;
  let d1 = 0;
  let d2 = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //left top to right bottom diagonal sum
      if (i === j) {
        d1 += arr[i][j];
      }
      console.log(d1);

      //right top to bottom left diagonal sum
      if (i + j == n - 1) {
        d2 += arr[i][j];
      }
    }
  }
  console.log(d1);
  console.log(d2);
  return Math.abs(d1 - d2);
};

console.log(dimensional(input));
/*
    lr = 11
    rl = 19

    the array length must be the same

    must be math abs because result must be positive


 */
