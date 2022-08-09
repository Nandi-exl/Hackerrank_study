const arr = [1, 3, 5, 7, 9];

const minMaxSum = (n) => {
  let test = n.sort()
  console.log(test);
  let min = 0;
  let max = 0;

  for (let i = 0, j = n.length - 1; i < n.length - 1; i++, j--) {
    min = min + n[i];
    max = max + n[j];
  }
  console.log(min, max);
};

console.log(minMaxSum(arr));
